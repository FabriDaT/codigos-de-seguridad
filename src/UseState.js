import React, { useState } from 'react'

function UseState({name}) {

  const [error, setError] = useState(true)

  return (
    <div>

    <h2>Eliminar {name}</h2>

    <p>Por favor, escribe el codigo de seguridad.</p>

    { error &&   ( <p>Error : el codigo es incorrecto</p>) }

    <input  placeholder='Codigo de seguridad' />

    <button
      onClick={ ()=> setError(!error)}
    > Comprobar </button>
</div>
  )
}

export {UseState}
