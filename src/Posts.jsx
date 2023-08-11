import { VscBug } from 'react-icons/vsc'
export function Post () {
  return (
    <button onClick={() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())// aquí los convierto en un formato json
        .then(data => console.log(data)) // aquí los muestro por consola
        .catch(err => console.error(err))
    }}
    >
      <VscBug />
      Traer Datos
    </button>
  )
}

// Ejemplo de fetch
