import React, { useEffect, useState } from 'react'

function UseState({name}) {

  const [error, setError] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => { } , [ ])
  

  return (
    <div>

    <h2>Eliminar {name}</h2>

    <p>Por favor, escribe el codigo de seguridad.</p>

    { error &&   ( <p>Error : el codigo es incorrecto</p>) }
    
    { loading &&   ( <p>Loading...</p>) }

    <input  placeholder='Codigo de seguridad' />

    <button
      onClick={ ()=> setLoading(!loading)}
    > Comprobar </button>
</div>
  )
}

export {UseState}
