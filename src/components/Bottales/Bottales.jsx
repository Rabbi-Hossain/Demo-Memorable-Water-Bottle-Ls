import { useEffect } from "react";
import { useState } from "react";
import Bottale from "../Bottale/Bottale";
import './Bottales.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilites/localstorage";
import Cart from "../Cart/Cart";

const Bottales = () => {

    const [bottales, setBottales] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('Bottales.json')
            .then(res => res.json())
            .then(data => setBottales(data))
    }, [])

    // useEffect(() => {
    //     console.log('called the useeffect', bottales.length)
    //     if (bottales.length) {
    //         const storedCart = getStoredCart()
    //         console.log(storedCart, bottales)
    //     }
    // }, [bottales])


    useEffect(() => {
        console.log('called the useeffect', bottales.length)
        if (bottales.length) {
            const stordCart = getStoredCart()
            console.log(stordCart,bottales)
            const saveCart = []
            for(const id of stordCart){
                const bottle = bottales.find(bottal=>bottal.id  == id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log('this is savecart',bottales)
            setCart(saveCart)
        }
    }, [bottales])

    const handlePurches = (bottale) => {
        const newCart = [...cart, bottale]
        setCart(newCart)
        addToLS(bottale.id)
    }

    const removeFromHandler = (id) =>{
        const remaining = cart.filter(bottle =>bottle.id !== id)
        setCart(remaining)


        removeFromLS(id)
    }


    return (
        <div>
            <h3>Bottales:{bottales.length}</h3>
            <Cart cart={cart} removeFromHandler={removeFromHandler}></Cart>
            
            <div className="bottales-container">
                {
                    bottales.map(bottale => <Bottale
                        key={bottale.id}
                        handlePurches={handlePurches}
                        bottale={bottale}></Bottale>)
                }
            </div>
        </div>
    );
};

export default Bottales;