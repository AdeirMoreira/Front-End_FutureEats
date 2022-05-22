import { Button } from "@material-ui/core";
import React from "react";
import * as container from './style'

export const PopUpQuantity = ({ displawPopUp, handleQuantidade, quantidade, twoFunction, id, }) => {
    return (
        <>
            {displawPopUp &&
                <container.PopUp>
                    <container.SelectQuantidade>
                        <p><b>Selecione a quantidade desejada</b></p>
                        <select onChange={handleQuantidade} name='quantidade' id='quantidade' value={quantidade} required>
                            <option value='' disabled >0</option>
                            <option value={1} key={1}>1</option>
                            <option value={2} key={2}>2</option>
                            <option value={3} key={3}>3</option>
                            <option value={4} key={4}>4</option>
                            <option value={5} key={5}>5</option>
                            <option value={6} key={6}>6</option>
                            <option value={7} key={7}>7</option>
                            <option value={8} key={8}>8</option>
                            <option value={9} key={9}>9</option>
                            <option value={10} key={10}>10</option>
                        </select>
                        <Button variant="text" color="primary" onClick={() => twoFunction(id)} >Adicionar ao Carrinho</Button>
                    </container.SelectQuantidade>
                </container.PopUp>}</>
    )
}