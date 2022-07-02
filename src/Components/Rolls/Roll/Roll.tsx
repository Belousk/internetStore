import React from 'react';


type productType = {
    name: string,
    description: string,
    src: string,
    price: number,
    weight: number,
    type: string
};


const Roll = (props: any) => {
     let rolls = props.rolls
    return (
        <div className="items">
            {

                rolls.map((roll: productType) => {
                    return <div className="item">
                        <a href="#" className="popup_link"><img src={`${process.env.PUBLIC_URL}/assets${roll.src}`} alt=""/></a>
                        <h3>{roll.name}</h3>
                        <div className="description">
                            <p>{roll.description}</p>
                            <div className="price">
                                <div><span>{roll.weight}</span>гр. <br/> <span className="item_price"> {roll.price} </span>₽</div>
                                <a href="#" className="add_to_cart" data-id="PP6Chic9">в корзину</a>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Roll;
