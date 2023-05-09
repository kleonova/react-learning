import React, { useState, useContext } from "react";
import style from './style.module.css'; 

import { ThemeContext } from "../contexts/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";
import ResultScreen from "./components/ResultScreen";

export default function() { 
    /* dark mode */
    let { theme } = useContext(ThemeContext);
    let navbarClass = (theme === 'light') ? 'navbar-light bg-light' : 'navbar-dark bg-dark';

    /* simple routing */
    let [ page, setPage ] = useState('cart');
    let moveToCart = () => { setPage('cart') };
    let moveToOrderForm = () => { setPage('order') };
    let moveToResultScreen = () => { setPage('result') };

    /* data */
    let [ products, setProducts ] = useState(getProductList());
    let changeProducts = (newProducts) => {
        setProducts([...newProducts]);
    }

    let [ userData, setUserData ] = useState({
        name: '',
        email: '',
        phone: ''
    });
    let changeUserData = (newUserData) => {
        setUserData(newUserData);
    }

    return (
        <main className={ style.main } data-theme={theme}>
            <nav className={`navbar p-2 ` + navbarClass}> 
                <h3>Lesson #4</h3>
                
                <ThemeSwitcher />
            </nav>

            <div className="p-2">
                {
                    page === 'cart' &&
                    <Cart 
                        products={products}
                        onChange={changeProducts}
                        onNext={moveToOrderForm}
                    />
                }

                {
                    page === 'order' &&
                    <OrderForm 
                        userData={ userData }
                        onPrev={ moveToCart }
                        onNext={ moveToResultScreen }
                        onChange={ changeUserData }
                    />
                }

                {
                    page === 'result' &&
                    <ResultScreen 
                        userData = { userData }
                        cartData = { products }
                        onPrev = { moveToOrderForm }
                    />
                }
            </div>
        </main>
    );
};

function getProductList() {
    return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 50,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 200,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 300,
			cnt: 1
		}
	];
} 

