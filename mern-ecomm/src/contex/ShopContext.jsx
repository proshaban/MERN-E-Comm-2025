import { createContext , useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const deliveryCharge = 50;
    const [showSearch, setShowSearch] = useState(true);


    const value =
    {
        products , currency , deliveryCharge ,showSearch, setShowSearch
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;