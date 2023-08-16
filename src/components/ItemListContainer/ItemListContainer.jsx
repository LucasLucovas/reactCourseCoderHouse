import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = category
      ? query(collection(db, 'Products'), where('category', '==', category))
      : collection(db, 'Products');

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsAdapted);
        setError(null);
      })
      .catch(error => {
        setError('Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al cargar los productos:', error);
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div>
        <h2>{greeting}</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>{greeting}</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

