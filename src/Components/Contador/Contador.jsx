import React from 'react'

import './Contador.css'

export default function
    ({
        setCont,
        cont,
        setListNum,
        listNum
    }) {
       
    
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
    return (
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
    )
}
