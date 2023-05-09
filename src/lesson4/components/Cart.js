import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import MinMax from '../../components/MinMax';

function Cart({ products, onChange, onNext }) {
    let { theme } = useContext(ThemeContext);

    let setCnt = (newCnt, productId) => {
        onChange(products.map(pr => (pr.id != productId) ? pr : ({...pr, cnt: newCnt }) ));
    };

    let deleteProduct = (productsId) => {
        onChange(products.filter(({id}) => id != productsId));
    };

    return (
        <>
            <Table variant={theme}>
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
                                    <Button variant="danger" onClick={() => deleteProduct(productItem.id)}>x</Button>
                                </td>
                            </tr>
                        ))
                    }                
                </tbody>
            </Table>

            <Button variant="primary" onClick={ onNext }>Next step</Button>
        </>
    );
};

export default Cart;