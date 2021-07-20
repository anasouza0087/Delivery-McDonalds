import React, { useState } from 'react'
import list_products from '../listas_produtos/list_products'
import TotalPedido from './TotalPedido'
import '../styles.css/listOption.css'

const ListOption = () => {

    const [total, setTotal] = useState(0)
    const [quantidade, setQuantidade] = useState(0)

    function clearTotal(num) {
        setTotal(num)
        setQuantidade(num)
    }

    const lista_produtos = list_products.map((item) => {
        return (

            <div className="--container-grid">
                <div>{item.nm_product}</div>
                <div><span>R$ {item.price.toFixed(2).replace('.', ',')}</span></div>
                <div>
                    <button onClick={e => setQuantidade(quantidade + 1)}>+</button>
                    <span>{quantidade}</span>
                    <button onClick={e => setQuantidade(quantidade - 1)}>-</button>
                </div>
                <div>
                    <button onClick={e => {
                        //criar array p/ receber valores
                        //push p/ inserir valores no array
                        //método reduce p/ somar os valores no array                        
                        setTotal(item.price * quantidade)
                    }
                    }
                    >Adicionar</button>
                </div>
            </div >
        )

    })
    return (
        <>
            <div className="--container-pedido">
                <h3>Selecione seu pedido</h3>
                <div className="--list-pedido">
                    {lista_produtos}
                </div>
            </div>
            <div>
                <TotalPedido
                    total={total}
                    limpar={clearTotal}
                />
            </div>
        </>

    )
}

export default ListOption