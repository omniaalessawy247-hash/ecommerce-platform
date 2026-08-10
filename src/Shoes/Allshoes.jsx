import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Carousel } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedShoes({ addToWishlist, wishlist, setWishlist }) {
    const { addItem } = useCart();
    const [filter, setFilter] = useState('all');
 
    const featuredShoes =   [
        { id: 1, title: 'Sports Shoes', image: 'images/shoes/Sports Shoes.jpg', price: 1500, rating: 4.8 },
        { id: 2, title: 'Casual Sneakers', image: 'images/shoes/Casual Sneakers.jpg', price: 1200, rating: 4.5 },
        { id: 3, title: 'Formal Shoes', image: 'images/shoes/Formal Shoes.jpg', price: 2000, rating: 4.6 },
        { id: 4, title: 'Running Shoes', image: 'images/shoes/Running Shoes.jpg', price: 1800, rating: 4.9 },
        { id: 5, title: 'Flip Flops', image: 'images/shoes/Flip Flops.jpg', price: 700, rating: 4.3 },
        { id: 6, title: 'Hiking Shoes', image: 'images/shoes/Hiking Shoes.jpg', price: 2200, rating: 4.7 },
        { id: 7, title: 'Ankle Boots', image: 'images/shoes/Ankle Boots.jpg', price: 1600, rating: 4.5 },
        { id: 8, title: 'High Top Sneakers', image: 'images/shoes/High Top Sneakers.jpg', price: 1300, rating: 4.4 },
        { id: 9, title: 'Ballet Flats', image: 'images/shoes/Ballet Flats.jpg', price: 900, rating: 4.2 },
        { id: 10, title: 'Winter Boots', image: 'images/shoes/Winter Boots.jpg', price: 2500, rating: 4.8 },
        { id: 11, title: 'Casual Loafers', image: 'images/shoes/Casual Loafers.jpg', price: 1400, rating: 4.6 },
        { id: 12, title: 'Designer Sneakers', image: 'images/shoes/Designer Sneakers.jpg', price: 3000, rating: 4.9 },
        { id: 13, title: 'Trail Running Shoes', image: 'images/shoes/Trail Running Shoes.jpg', price: 1900, rating: 4.5 },
        { id: 14, title: 'Skate Shoes', image: 'images/shoes/Skate Shoes.jpg', price: 1200, rating: 4.4 },
        { id: 15, title: 'Work Boots', image: 'images/shoes/Work Boots.jpg', price: 2200, rating: 4.6 },
        { id: 16, title: 'Wedge Sandals', image: 'images/shoes/Wedge Sandals.jpg', price: 1100, rating: 4.3 },
        { id: 17, title: 'Fitness Shoes', image: 'images/shoes/Fitness Shoes.jpg', price: 1500, rating: 4.7 },
        { id: 18, title: 'Retro Sneakers', image: 'images/shoes/Retro Sneakers.jpg', price: 1300, rating: 4.6 },
        { id: 19, title: 'Flip Flopss', image: 'images/shoes/Flip Flopss.jpg', price: 600, rating: 4.2 },
        { id: 20, title: 'Slip-On Sneakers', image: 'images/shoes/Slip-On Sneakers.jpg', price: 1300, rating: 4.5 },
        { id: 21, title: 'Running Sandals', image: 'images/shoes/Running Sandals.jpg', price: 950, rating: 4.4 },
        { id: 22, title: 'Chukka Boots', image: 'images/shoes/Chukka Boots.jpg', price: 2100, rating: 4.6 },
        { id: 23, title: 'Ankle High Sneakers', image: 'images/shoes/Ankle High Sneakers.jpg', price: 1400, rating: 4.5 },
        { id: 24, title: 'Designer Loafers', image: 'images/shoes/Designer Loafers.jpg', price: 2500, rating: 4.8 },
        { id: 25, title: 'Luxury Sneakers', image: 'images/shoes/Luxury Sneakers.jpg', price: 3200, rating: 4.9 },
        { id: 26, title: 'Orthopedic Shoes', image: 'images/shoes/Orthopedic Shoes.jpg', price: 1700, rating: 4.7 },
        { id: 27, title: 'Sneaker Boots', image: 'images/shoes/Sneaker Boots.jpg', price: 1800, rating: 4.6 },
        { id: 28, title: 'Waterproof Hiking Shoes', image: 'images/shoes/Waterproof Hiking Shoes.jpg', price: 2100, rating: 4.8 },
        { id: 29, title: 'Safety Shoes', image: 'images/shoes/Safety Shoes.jpg', price: 1600, rating: 4.5 },
        { id: 30, title: 'Classic Dress Shoes', image: 'images/shoes/Classic Dress Shoes.jpg', price: 2000, rating: 4.6 },
      ];

    const filteredShoes = () => {
        if (filter === 'all') {
            return featuredShoes;
        } else if (filter === 'under1000') {
            return featuredShoes.filter(item => item.price < 1000);
        } else if (filter === 'under2000') {
            return featuredShoes.filter(item => item.price < 2000);
        } else if (filter === 'above2000') {
            return featuredShoes.filter(item => item.price >= 2000);
        }
        return featuredShoes;
    };

    return (
        <Container>
            <Row>
            <div style={{ textAlign: 'center', margin: '0px 0' }}>
    <h1 className="slideUpDown" style={{
        fontWeight: 'bold',
        fontSize: '2rem',
        color: 'transparent',
        background: 'linear-gradient(90deg, #6a5acd, #ff69b4)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
    }}>
         "Explore our amazing shoeses collection."
    </h1>
</div>

                <Form.Group controlId="filterShoes" style={{ marginBottom: '20px' }}>
                    <Form.Label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                    <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All Shoes</option>
                        <option value="under1000">Under $1000</option>
                        <option value="under2000">Under $2000</option>
                        <option value="above2000">Above $2000</option>
                    </Form.Control>
                </Form.Group>

                {filteredShoes().map((item) => (
                    <Col key={item.id} md={4} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <Card.Img
                                variant="top"
                                src={item.image}
                                alt={item.title}
                                style={{ height: '350px', objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Price: {item.price} $</Card.Text>
                                <Card.Text>Rating: {item.rating} ★</Card.Text>
                                <Button variant="primary" onClick={() => addItem(item)}>
                                    Add to cart
                                </Button>
                                <Button variant="warning" onClick={() => addToWishlist(item)}>
                                    Add to Wishlist
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

function Banner() {
    return (
        <Container fluid style={{ margin: '0', padding: '70' }}>
            <Row style={{ margin: '0', padding: '0' }}>
                <Col md={4} className="banner-animation mb-0" style={{ padding: '0' }}>
                    <img src=" images/shoes/1.jpg" alt="Banner 1" style={{ width: '100%', height: '90%' }} />
                </Col>
                <Col md={4} className="banner-animation mb-0" style={{ padding: '0' }}>
                    <img src=" images/shoes/2.jpg " alt="Banner 2" style={{ width: '100%', height: ' 90%' }} />
                </Col>
                <Col md={4} className="banner-animation mb-0" style={{ padding: '0' }}>
                    <img src=" images/shoes/1.jpg " alt="Banner 3" style={{ width: '100%', height: ' 90%' }} />
                </Col>
            </Row>
            
        </Container>
    );
}
function AllShoes() {
    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
        return storedWishlist ? storedWishlist : [];
    });

    const addToWishlist = (item) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, item];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    return (
        <CartProvider>
            <Allnavbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Banner/>
            <FeaturedShoes
                addToWishlist={addToWishlist}
                wishlist={wishlist}
                setWishlist={setWishlist}
            />
            <Allfooter />
        </CartProvider>
    );
}

export default AllShoes;
