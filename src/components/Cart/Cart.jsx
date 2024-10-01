import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({cart,removeFromHandler}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className="cart-container">
                {
                    cart.map(bottle=><div key={bottle.id}>
                        <img src={bottle.img}/>
                        <button onClick={()=>removeFromHandler(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart:PropTypes.array.isRequired,
    removeFromHandler:PropTypes.func.isRequired

}

export default Cart;