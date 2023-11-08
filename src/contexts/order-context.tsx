import { ReactNode, createContext, useState } from "react";
import { ProductModel } from "../models/product";


interface CartItem{
    product: ProductModel,
    quant: number,
    total: number;
}

interface Cart{
    items: CartItem[],
    total: number;
}

interface OrderContext{
    cart: Cart,
    addCartItem: (product: ProductModel ) => void,
    removeCarItem: (id: number) => void,
    updateQuant: (product: ProductModel, quant: number) => void,
    getCart: () => Cart,
}

interface OrderContextProps{
    children: ReactNode
}


export const orderContext = createContext<OrderContext>({} as OrderContext)


export function OrderContextProvider ({children}: OrderContextProps){

    const [cart, setCartState] = useState<Cart>({
        items: [],
        total: 0
    })

    function addCartItem(product: ProductModel ){
        setCartState(state => {
            return {
                items: [...state.items, { product : product, quant: 1, total: product.price}],
                total: state.items.reduce((acc, current) => acc + current.total, state.total)
            }
        })
    }

    function getCart(){
        return cart;
    }

    function updateQuant(product: ProductModel, quant: number){
        setCartState(state => {
            const cartItems = state.items.map((x) => {
                if(x.product.id == product.id){
                    x.quant = quant
                    x.total = quant * product.price
                }
                return x;
            })

            return {
                items: cartItems,
                total: state.items.reduce((acc, current) => acc + current.total, state.total)
            }
        })
    }

    function removeCarItem(id: number){
       setCartState((state) => {
        const cartItems = state.items.filter((x) => x.product.id != id);
        return {
            items: [...cartItems],
            total: state.items.reduce((acc, current) => acc + current.total, state.total)
        }
       })
    }

    return (
        
        <orderContext.Provider  value={ {getCart, addCartItem, removeCarItem, updateQuant, cart}}>
            {children}
        </orderContext.Provider>
    );
}