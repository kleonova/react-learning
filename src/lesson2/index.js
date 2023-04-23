import React, { useState } from "react";
import MinMax from "./MinMax";

export default function() {
    let [ products, setProducts ] = useState(getProductList());

    let setCnt = (newCnt, productId) => {
        // концепция иммутабельности данных!!!
        /*
        let newProductList = [...products];
        let productIndex = newProductList.findIndex(({id}) => id === productId );
        if (productIndex != -1) {
            let newProduct = { ...products[productIndex] };
            newProduct.cnt = newCnt;
            newProductList[productIndex] = newProduct;
            setProducts(newProductList);
        }
        */
        // сокращенная запись (map вернет новый массив:))
        setProducts(products.map(pr => (pr.id != productId) ? pr : ({...pr, cnt: newCnt }) ));
    };

    let deleteProduct = (productsId) => {
        setProducts(products.filter(({id}) => id != productsId));
    };

    let totalCard = () => products.reduce((sum, product) => sum + product.price * product.cnt, 0); 

    return (
    <>
        <h1>Lesson #2</h1>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Options</th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((productItem, i) => (
                        <tr key={i}>
                            <td>{ i + 1 }</td>
                            <td>{ productItem.title }</td>
                            <td>{ productItem.price }</td>
                            <td>
                                <MinMax value={productItem.cnt} max={productItem.rest} onChange={newCnt => setCnt(newCnt, productItem.id)} />    
                            </td>
                            <td>{ productItem.price * productItem.cnt }</td>
                            <td>
                                <button onClick={() => deleteProduct(productItem.id)}>x</button>
                            </td>
                        </tr>
                    ))
                }                
            </tbody>
        </table>

        <div>
            TOTAL: {totalCard()}
        </div>
    </>
    )
}

function getProductList () {
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
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
} 

