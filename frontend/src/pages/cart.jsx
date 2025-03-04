import { useNavigate } from 'react-router-dom';

import CartProduct from '../components/auth/CartProduct';
import NavBar from '../components/auth/Nav';
import { useState, useEffect } from 'react';

const Cart = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/api/v2/product/cartproducts?email=${'haryy@gmail.com'}")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data.cart.map(product => ({ quantity: product['quantity'], ...product['productId'] })));
                console.log("Products fetched:", data.cart);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }, []);

    console.log("Products:", products);
    const handlePlaceOrder = () =>{
        navigate('/selectaddress');
    }

    return (
        <div>
            <NavBar />
            {products.map((product, index) => (
                <CartProduct key={index} product={product} />
            ))}
        </div>
    );
};

onclick={handlePlaceOrder}
return (
    <div className='w-full h-screen'>
        <NavBar />
        <div className='w-full h-full justify-center items-center flex'>
            <div className='w-full md:w-4/5 lg:w-4/6 2xl:w-2/3 h-full border-l border-n border-neutral-300 flex flex-col'>
                <div className='w-full h-16 flex items-center justify-center'>
                    <h1 className='text-2xl font-semibold'>cart</h1>
                </div>
                <div className='w-full flex-grow overflow-auto px-3 py-2 gap-y-2'>
                    {
                        products.map(product => (
                            <CartProduct key={product._id} {...product} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
);

export default Cart;