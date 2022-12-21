import React from 'react'

export default function Listado(
    {listNum,
    setListNum}
) {

    const borrar = (id) => {
        setListNum(listNum.filter((numero) => {
            return numero.id !== id
        }))
    }

    return (
        <div>
            <h2>Listado de numeros guardados</h2>
            <br />
            {listNum.map((numero) =>
                <li key={numero.id}>
                    {numero.numero}
                    <dev className="boton">
                        <button type='button' className="btn btn-outline-danger" onClick={() => borrar(numero.id)}>
                            Borrar
                        </button>
                    </dev>
                </li>
            )}
        </div>
    )
}
