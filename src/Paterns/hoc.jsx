//patrones de disenio

//en React tenemos algunos patrones de disenio que nos permite reutilizar componentes

//1) High Order Components HOC
//2) Render props

//1) Es una funcion que toma como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional


export const mensajeConTitulo = (Mensaje) =>{
    return function() {
        return (
            <>
                <h1>Hello world</h1>
                <Mensaje/>
            </>
        )
    }

}


//Ejemplo aumento de precios

export const conAumento = (Producto) =>{
    return function({nombre, precio}){
        let nuevoPrecio = (precio * 1.10)
        return <Producto nombre={nombre} precio={nuevoPrecio}/>
    }
}