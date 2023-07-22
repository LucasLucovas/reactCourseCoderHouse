import React, { useContext, useState } from 'react'
import { db } from '../firebase/config'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc, writeBatch, doc, decrement, query, where, getDocs } from 'firebase/firestore'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const { cart, total, clearCart } = useContext(CartContext)

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true)

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      }

      const batch = writeBatch(db)

      // Step 1: Check if all products in the cart are in stock
      const ids = cart.map(prod => prod.id)
      const productsRef = collection(db, 'products')
      const querySnapshot = await getDocs(query(productsRef, where(doc.id(), 'in', ids)))

      // Check if all products in the cart are in stock and their quantities are sufficient.
      const outOfStock = cart.filter(product => {
        const productDoc = querySnapshot.docs.find(doc => doc.id === product.id)
        return !productDoc || productDoc.data().stock < product.quantity
      })

      if (outOfStock.length > 0) {
        // Handle the case where some products are out of stock or their quantity is not sufficient.
        console.log('Some products are out of stock or their quantity is not sufficient.')
        setLoading(false)
        return;
      }

      // Step 2: Add the order to the 'orders' collection
      const ordersRef = collection(db, 'orders')
      const newOrderRef = await addDoc(ordersRef, objOrder)

      // Step 3: Update stock quantity for each product in the batch
      cart.forEach((product) => {
        const { id, quantity } = product
        const productDocRef = doc(productsRef, id)

        // Decrease the stock quantity in the batch
        batch.update(productDocRef, {
          stock: decrement(quantity), // Assuming 'stock' is the field in the product document that stores the quantity in stock.
        })
      })

      // Step 4: Commit the batch to update stock quantities and create the order document.
      await batch.commit()

      // Step 5: Clear the cart after the order is successfully created and the stock is updated.
      clearCart()

      // Step 6: Set the orderId state to display the order confirmation to the user.
      setOrderId(newOrderRef.id)
    } catch (error) {
      console.error('Error creating order:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <h1>Generating order</h1>
  }

  if (orderId) {
    return <h1>The id of your order is: {orderId}</h1>
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}

export default Checkout
