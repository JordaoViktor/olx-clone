import React from 'react';
import { Link } from 'react-router-dom'
import { Item } from './styled';

export default (props) => {
    return (        
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt=""/>
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">{props.data.priceNegotiable ? 'Preço Negociavel' : `R$ ${props.data.price}`}</div>
            </Link>
        </Item>
    )
}