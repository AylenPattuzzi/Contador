import React from 'react'
import { useState } from 'react'
import './Contador.css'

export default function Contador() {
    const [cont, setCont] = useState(0)
    const [listNum, setListNum] = useState([])

    const sumar = () => {
        setCont(cont + 1)
    }
    const restar = () => {
        setCont(cont - 1)
    }
    const reset = () => {
        setCont(0)
    }
    const guardar = () => {

        setListNum([...listNum, {
            id: Math.random() * 100,
            numero: cont
        }])

    }
    const borrar = (id) => {

        setListNum(listNum.filter((numero) => {
            return numero.id !== id
        }))
    }

    console.log(listNum)
    return (
        <div>
            <div className="card ">
                <div className="card-contador">
                    <h1 htmlFor="" >{cont}</h1>
                </div>

                <br />
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-outline-success " onClick={sumar}>
                            +
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-danger" onClick={restar}>
                            -
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-primary" onClick={reset}>
                            Reset
                        </button>
                    </div>
                    <div className="col">
                        <button type='button' className="btn btn-outline-primary" onClick={guardar} >Guardar</button>
                    </div>
                </div>
            </div>
            <br />
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
