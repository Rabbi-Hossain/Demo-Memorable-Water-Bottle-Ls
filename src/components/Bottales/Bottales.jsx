import { useEffect } from "react";
import { useState } from "react";
import Bottale from "../Bottale/Bottale";
import './Bottales.css'
import Cart from "../Cart/Cart";
import { addToLS, getStoreCart, removeFromLS } from "../../utilites/localstorge";

const Bottales = () => {

    const [bottales, setBottales] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('Bottales.json')
            .then(res => res.json())
            .then(data => setBottales(data))
    }, [])


    useEffect(()=>{
        console.log('called the useeffect', bottales.length)
       if(bottales.length){
        const storCart = getStoreCart()
        console.log(storCart, bottales)
        const saveCart = []
        for(const id of storCart){
            console.log(id)
            const bottle = bottales.find(bottle=> bottle.id == id)
            if(bottle){
                saveCart.push(bottle)
            }
        }
        console.log('savecart', saveCart)
        setCart(saveCart)
       }
    },[bottales])
    

    const handlePurches = (bottale) => {
        const newCart = [...cart, bottale]
        setCart(newCart)
        addToLS(bottale.id)
    }

    const removeHandlerLs = id =>{
        const remaining = cart.filter(bottle=>bottle.id !== id)
        setCart(remaining)
        removeFromLS(id)
    }


    return (
        <div>
            <h3>Bottales:{bottales.length}</h3>
            <Cart cart={cart} removeHandlerLs={removeHandlerLs}></Cart>
            
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