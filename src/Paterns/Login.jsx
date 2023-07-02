// import { useState } from 'react'
// import InicioSesion from "./InicioSesion.jsx"
// import LoginButton from "./LoginButton.jsx"

// /* RENDER PROPS */
// //Es una técnica de composición de componentes que me permite enviar la interfaz a ser renderizada en una función aparte. 



// const Login = () => {
//     const [usuario, setUsuario] = useState(null);

//     const manejadorLogin = () => {
//         setUsuario("Samuel");
//     }

//   return (
//     <div>
//         {
//             usuario ? (<InicioSesion nombre={usuario}  />) : (<LoginButton loguear={manejadorLogin}  />)
//         }
//     </div>
//   )
// }

// export default Login