// TODO: create a component that displays a single bakery item
import React from 'react';

const BakeryItem = (props) => {
    const item = props.itemData;
    return (
        <div className='BakeryItem'>
            <h2>{item.name}</h2>
            <img src={item.image} alt='Bakery item image'></img>
            <div>{item.description}</div>
            {item.price}
            <form onSubmit={(e) => props.addCart(e, item)}>
                <button type='submit'>
                    Add to cart
                </button>
            </form>
        </div>
    );
};

export default BakeryItem;