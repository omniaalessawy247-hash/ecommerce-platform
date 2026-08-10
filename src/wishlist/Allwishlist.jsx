import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';
import { FaHeart } from 'react-icons/fa';
 

function Allwishlist() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
        if (storedWishlist) {
            setWishlist(storedWishlist); 
        }
    }, []);

    const removeFromWishlist = (itemToRemove) => {
        const updatedWishlist = wishlist.filter(item => item.id !== itemToRemove.id);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));  
    };

    return (
        <div>
            <Allnavbar />
            <Container fluid style={{ minHeight: '60vh', marginTop: '50px', padding: '100px', background: 'linear-gradient(135deg, #d78cb2, #d0a0c5, #2a94d9)' }}>
                <h2 style={{ 
                    fontFamily: 'cursive',  
                    fontSize: '29px', 
                    color: '#800080', 
                    textAlign: 'center', 
                    margin: '20px 0' 
                }}>
                    <FaHeart style={{ marginRight: '5px' }} /> Your Wishlist <FaHeart style={{ marginLeft: '5px' }} />
                </h2>

                {wishlist.length === 0 ? (
                    <p style={{ fontSize: '24px', color: '#FFFFFF', fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        No items in your wishlist.
                    </p>
                ) : (
                    <Row>
                        {wishlist.map((item) => (
                            <Col key={item.id} md={4} className="mb-4 animated-card">
                                <Card className="text-center" style={{ transition: 'transform 0.2s' }}>
                                    <Card.Img variant="top" src={item.image || 'path/to/placeholder-image.jpg'} alt={item.title} style={{ height: '400px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontWeight: 'bold', fontSize: '20px', color: '#800080', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Text>Price: {item.price} $</Card.Text>
                                        <Button 
                                            variant="danger" 
                                            className="remove-button"
                                            onClick={() => removeFromWishlist(item)}
                                        >
                                            Remove from Wishlist
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            <Allfooter />
        </div>
    );
}

export default Allwishlist;
