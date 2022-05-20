import React from "react"
import * as container from './style'

export const ProductsCard = (props) => {
    const { products, twoFunction, category, removeProduct } = props
    return (
        <>
            {products && products.map(e => {
                return (
                    <container.CardProduct key={e.id}>
                        <container.Photo>
                            <container.ProductImg src={e.photoUrl} />
                        </container.Photo>
                        <container.Name>
                            <p>{e.name}</p>
                        </container.Name>
                        <container.Quantity>
                            <p>0</p>
                        </container.Quantity>
                        <container.Description>
                            <p>{e.description}</p>
                        </container.Description>
                        <container.Price>
                            <p>R${e.price.toFixed(2)}</p>
                        </container.Price>
                        {!e.inCart ?
                            <container.ButtonDiv>
                                <container.ButtonVerde onClick={() => twoFunction(e, category)}> Adicionar </container.ButtonVerde>
                            </container.ButtonDiv>
                            :
                            <container.ButtonDiv>
                                <container.ButtonVermelho onClick={() => removeProduct(e, category)}>Remover</container.ButtonVermelho>
                            </container.ButtonDiv>
                        }
                    </container.CardProduct>
                )
            })}
        </>
    )
}