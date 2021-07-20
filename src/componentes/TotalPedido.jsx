import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import '../styles.css/totalPedido.css'

const TotalPedido = (props) => {

    return (
        <div className="--container-total">
            <ul>
                <li>R$ {props.total.toFixed(2).replace('.', ',')}</li>
                <li>Lista Pedidos</li>
                <li>
                    < DeleteIcon onClick={e => { props.limpar(0) }} />
                </li>
            </ul>
        </div>
    )
}

export default TotalPedido