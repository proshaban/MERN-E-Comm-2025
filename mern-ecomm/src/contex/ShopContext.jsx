import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryCharge = 50;
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();
    const addToCart = ({ itemId, size }) => {
        setCartItems(prevCart => {
            const newCart = { ...prevCart };
            
            if(!size)
            {
                toast.error('Select Product Size');
                return;
            }

            if (!newCart[itemId]) {
                newCart[itemId] = {}; // Initialize object for the item
            }
    
            if (!newCart[itemId][size]) {
                newCart[itemId][size] = 1; // Initialize with 1 if size doesn't exist
            } else {
                newCart[itemId][size] += 1; // Increment if size already exists
            }
    
            return newCart;
        });
    };

    const updateQuantity = async(itemId,size,quantity)=>
    {
        //console.log("updating", itemId, size, quantity);
        let cartData = structuredClone(cartItems);
        cartData[itemId][size]= quantity;

        setCartItems(cartData);
    }   

    const getCartCount = ()=>
    {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] >> 0) {
                        totalCount += cartItems[items][item]
                    }
                }
                catch (err) {
                    console.log("Cart Count error", err)
                }
            }
        }
        return totalCount;
    }

    const getCartAmount = ()=>
    {
        let totalAmont =0;
        for(const items in cartItems)
        {
            let iteminfo = products.find((product)=> product._id === items)
            for(const item in cartItems[items])
            {
                try{
                    if(cartItems[items][item]>0)
                    {
                        totalAmont+= iteminfo.price * cartItems[items][item]
                    }
                }
                catch(err)
                {
                    console.log("Faild to get total cart amount",err);
                }

            }
        }
        return totalAmont;
    }

    useEffect(() => {
       // console.log(cartItems)
    }, [cartItems]);

    const value = {
        products,
        currency,
        deliveryCharge,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;