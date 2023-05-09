import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

ResultScreen.propTypes = {
    cartData: PropTypes.array.isRequired,
    userData: PropTypes.object.isRequired,
    onPrev: PropTypes.func.isRequired
}

function ResultScreen({cartData, userData, onPrev}) {
    let { theme } = useContext(ThemeContext);
    let totalCard = cartData.reduce((sum, product) => sum + product.price * product.cnt, 0);

    return (
        <div>
            <h3>Confirm your order</h3>

            <div>
                <h4>Your personal data</h4>
                <p>Name: { userData.name }</p>
                <p>Email: { userData.email }</p>
                <p>Phone: { userData.phone }</p>
            </div>

            <div>
                <h4>Your order</h4>
                <Table variant={theme}>
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cartData.map((productItem, i) => (
                                <tr key={i}>
                                    <td>{ i + 1 }</td>
                                    <td>{ productItem.title }</td>
                                    <td>{ productItem.price }</td>
                                    <td>{ productItem.cnt }</td>
                                    <td>{ productItem.price * productItem.cnt }</td>
                                </tr>
                            ))
                        }                
                    </tbody>
                </Table>

                <div>Total: { totalCard }</div>
            </div>       
            
            <div className='d-flex'>
                <Button variant="secondary" className='me-2' onClick={ onPrev } >
                    Prev step
                </Button>

                <Button variant="primary" >
                    Confirm order
                </Button>
            </div>
        </div>
    );
};

export default ResultScreen;