import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';
import { FaTruck, FaSmile, FaLaugh } from 'react-icons/fa';
 

function Cart() {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } = useCart();
    const [discountCode, setDiscountCode] = useState('');
    const [shippingCost, setShippingCost] = useState(0);
    const [totalCost, setTotalCost] = useState(cartTotal);
    const [appliedDiscount, setAppliedDiscount] = useState(0);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [password, setPassword] = useState('');
   
    const [transferAmount, setTransferAmount] = useState(0);  

    useEffect(() => {
        const calculatedShippingCost = cartTotal * 0.1;  
        setShippingCost(calculatedShippingCost);
        setTotalCost(cartTotal + calculatedShippingCost);  
    }, [cartTotal]);

    const handleApplyDiscount = () => {
        if (discountCode === 'DISCOUNT15') { 
            setAppliedDiscount(15);  
        } else {
            alert('Invalid discount code');
            setAppliedDiscount(0); 
        }
    };

    const finalTotal = () => {
        const discountAmount = (totalCost * appliedDiscount) / 100;  
        return totalCost - discountAmount;  
    };

    if (isEmpty) return <h2 className='text-center'>Your cart is empty</h2>;

    return (
        <>
            <h1 className='text-center cart-title'>Cart ({totalUniqueItems}) 
                <button className='btn btn-danger' onClick={() => emptyCart()}>Delete All</button>
            </h1>
            <Container>
                <Row>
                    <Col md={10} className="m-auto">
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} style={{ height: '60px', width: '60px' }} alt={item.title}></img></td>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>{(item.price * item.quantity).toFixed(2)} $</td>
                                        <td>
                                            <button className='btn btn-warning' onClick={() => updateItemQuantity(item.id, Math.max(item.quantity - 1, 0))}>-</button>
                                            <button className='btn btn-success mx-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn btn-danger' onClick={() => removeItem(item.id)}>&times;</button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>
                                    <td>............</td>
                                    <td>{totalItems}</td>
                                    <td>{totalCost.toFixed(2)} $</td>
                                    <td>
                                        <a href="/home" className='btn btn-primary mr-2'>Continue Shopping</a>
                              
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                       
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="shipping-cost">Shipping Cost</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={shippingCost.toFixed(2)} 
                                        readOnly 
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="text-center">
                                <div className="shipping-info">
                                    <FaTruck style={{ fontSize: '30px', color: 'orange' }} />
                                    <span className="ml-2 estimated-delivery">Estimated Delivery: 3-5 days</span>
                                </div>
                            </Col>
                        </Row>

                    
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="discount-code">Discount Code</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={discountCode} 
                                        onChange={(e) => setDiscountCode(e.target.value)} 
                                        placeholder="Enter discount code"
                                    />
                                    <Button variant="primary" onClick={handleApplyDiscount}>
                                        Apply
                                    </Button>
                                   
                                    {appliedDiscount > 0 && (
                                        <div className="mt-3" style={{ padding: '20px', backgroundColor: '#e9ecef', borderRadius: '5px', fontSize: '18px' }}>
                                            Total Price after discount: {finalTotal().toFixed(2)} $
                                        </div>
                                    )}
                                </Form.Group>
                            </Col>
 
                            <Col md={6} className="text-center">
                                <div className="discount-message" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
                                    <h5>Dear customer, smile and enjoy our special discounts! <FaLaugh /></h5>
                                    <h2 style={{ color: 'blue', fontSize: '36px' }}> Discount Code :- DISCOUNT15</h2>  
                                </div>
                            </Col>
                        </Row>

                     
                        <Row className="mb-3">
                            <Col md={12}>
                                <h5 className="payment-options-title">Payment Options</h5>
                                <Row className="justify-content-center">
                                    <Col md={3} className="text-center mx-2">
                                        <Container className="p-3 payment-options">
                                            <img src="/images/banklogo.png" alt="Bank Payment" style={{ height: '100px', width: '100px' }} />
                                            <p>Bank</p>
                                            <Button variant="success" onClick={() => setShowPaymentForm(true)}>Pay</Button>
                                        </Container>
                                    </Col>
                                    <Col md={3} className="text-center mx-2">
                                        <Container className="p-3 payment-options">
                                            <img src="/images/vodafone-cash-1.webp" alt="Vodafone Cash" style={{ height: '100px', width: '100px' }} />
                                            <p>Vodafone Cash</p>
                                            <Button variant="success" onClick={() => setShowPaymentForm(true)}>Pay</Button>
                                        </Container>
                                    </Col>
                                    <Col md={3} className="text-center mx-2">
                                        <Container className="p-3 payment-options">
                                            <img src="/images/instapay.jpeg" alt="Instapay" style={{ height: '100px', width: '100px' }} />
                                            <p>Instapay</p>
                                            <Button variant="success" onClick={() => setShowPaymentForm(true)}>Pay</Button>
                                        </Container>
                                    </Col>
                                    <Col md={3} className="text-center mx-2">
                                        <Container className="p-3 payment-options">
                                            <div className="payment-option-circle" style={{ display: 'inline-block', borderRadius: '50%', backgroundColor: 'green', width: '50px', height: '50px', textAlign: 'center', lineHeight: '50px', color: 'white', cursor: 'pointer' }} 
                                                 onClick={() => setShowPaymentForm(true)}>
                                                ?
                                            </div>
                                            <span className="ml-2">Cash on Delivery</span>
                                            <Button variant="success" onClick={() => {
                                                alert('Cash on Delivery selected');
                                            }} className="ml-2">
                                                Send
                                            </Button>
                                        </Container>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
 
                        {showPaymentForm && (
                            <Row className="mb-3">
                                <Col md={12}>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Account Number</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={accountNumber} 
                                                onChange={(e) => setAccountNumber(e.target.value)} 
                                                placeholder="Enter account number" 
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                value={password} 
                                                onChange={(e) => setPassword(e.target.value)} 
                                                placeholder="Enter password" 
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Transfer Amount</Form.Label>
                                            <Form.Control 
                                                type="number" 
                                                value={transferAmount} 
                                                onChange={(e) => setTransferAmount(e.target.value)} 
                                                placeholder="Enter transfer amount" 
                                            />
                                        </Form.Group>
                                        <Button variant="success" onClick={() => {
                                            alert('Payment Successful');
                                            setShowPaymentForm(false);
                                        }}>Confirm Payment</Button>
                                        <Button variant="danger" onClick={() => setShowPaymentForm(false)}>Cancel</Button>
                                    </Form>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
            <Allfooter />
        </>
    );
}

export default function CartWrapper() {
    return (
        <CartProvider>
            <Allnavbar/>
            <Cart />
        </CartProvider>
    );
}
