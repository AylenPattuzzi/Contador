import React from 'react'
import { useState } from 'react'
import Contador from '../Contador/Contador'
import Listado from '../Listado/Listado'


export default function EjercicioContador() {
    const [cont, setCont] = useState(0)
    const [listNum, setListNum] = useState([])


    return (
        <div>
            <Contador
                listNum={listNum}
                setListNum={setListNum}
                cont={cont}
                setCont={setCont}
            />
            <br />
            <Listado
                listNum={listNum}
                setListNum={setListNum}
            />
        </div>

    )

}
