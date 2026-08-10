import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedBags({ addToWishlist, wishlist, setWishlist }) {
    const { addItem } = useCart();
    const [filter, setFilter] = useState('all');

    const featuredBags =  [
        { "id": "1", "title": "Chanel Classic Flap Bag", "price": "5000", "rating": "4.9", "image": "images/bags/Chanel Classic Flap Bag.jpg" },
        { "id": "2", "title": "Louis Vuitton Neverfull", "price": "1200", "rating": "4.8", "image": "images/bags/Louis Vuitton Neverfull.jpg" },
        { "id": "3", "title": "Gucci Dionysus", "price": "2800", "rating": "4.7", "image": "images/bags/Gucci Dionysus.jpg" },
        { "id": "4", "title": "Prada Saffiano Tote", "price": "2000", "rating": "4.6", "image": "images/bags/Prada Saffiano Tote.jpg" },
        { "id": "5", "title": "Hermès Birkin Bag", "price": "8000", "rating": "4.9", "image": "images/bags/Hermès Birkin Bag.jpg" },
        { "id": "6", "title": "Fendi Peekaboo", "price": "3500", "rating": "4.7", "image": "images/bags/Fendi Peekaboo.jpg" },
        { "id": "7", "title": "Dior Book Tote", "price": "2500", "rating": "4.8", "image": "images/bags/Dior Book Tote.jpg" },
        { "id": "8", "title": "Balenciaga City Bag", "price": "1900", "rating": "4.5", "image": "images/bags/Balenciaga City Bag.jpg" },
        { "id": "9", "title": "Burberry Banner Bag", "price": "1500", "rating": "4.6", "image": "images/bags/Burberry Banner Bag.jpg" },
        { "id": "10", "title": "Tory Burch Perry Triple-Compartment Tote", "price": "500", "rating": "4.4", "image": "images/bags/Tory Burch Perry Triple-Compartment Tote.jpg" },
        { "id": "11", "title": "Saint Laurent Loulou Bag", "price": "1800", "rating": "4.8", "image": "images/bags/Saint Laurent Loulou Bag.jpg" },
        { "id": "12", "title": "MCM Visetos Boston Bag", "price": "1300", "rating": "4.5", "image": "images/bags/MCM Visetos Boston Bag.jpg" },
        { "id": "13", "title": "Versace Palazzo Empire Bag", "price": "2600", "rating": "4.6", "image": "images/bags/Versace Palazzo Empire Bag.jpg" },
        { "id": "14", "title": "Givenchy Antigona Bag", "price": "2900", "rating": "4.7", "image": "images/bags/Givenchy Antigona Bag.jpg" },
        { "id": "15", "title": "Loewe Puzzle Bag", "price": "2200", "rating": "4.8", "image": "images/bags/Loewe Puzzle Bag.jpg" },
        { "id": "16", "title": "Valentino Rockstud Tote", "price": "3000", "rating": "4.6", "image": "images/bags/Valentino Rockstud Tote.jpg" },
        { "id": "17", "title": "Salvatore Ferragamo Gancini Bag", "price": "1500", "rating": "4.4", "image": "images/bags/Salvatore Ferragamo Gancini Bag.jpg" },
        { "id": "18", "title": "Coach Rogue Bag", "price": "800", "rating": "4.5", "image": "images/bags/Coach Rogue Bag.jpg" },
        { "id": "19", "title": "Marc Jacobs Snapshot Bag", "price": "450", "rating": "4.3", "image": "images/bags/Marc Jacobs Snapshot Bag.jpg" },
        { "id": "20", "title": "Chloé Drew Bag", "price": "1900", "rating": "4.6", "image": "images/bags/Chloé Drew Bag.jpg" },
        { "id": "21", "title": "Bottega Veneta Cassette Bag", "price": "2400", "rating": "4.7", "image": "images/bags/Bottega Veneta Cassette Bag.jpg" },
        { "id": "22", "title": "Celine Luggage Tote", "price": "2500", "rating": "4.8", "image": "images/bags/Celine Luggage Tote.jpg" },
        { "id": "23", "title": "Jimmy Choo Lockett Bag", "price": "1700", "rating": "4.5", "image": "images/bags/Jimmy Choo Lockett Bag.jpg" },
        { "id": "24", "title": "Oscar de la Renta Cabana Bag", "price": "1600", "rating": "4.6", "image": "images/bags/Oscar de la Renta Cabana Bag.jpg" },
        { "id": "25", "title": "Tiffany & Co. x Ralph Lauren Leather Tote", "price": "1400", "rating": "4.4", "image": "images/bags/Tiffany & Co. x Ralph Lauren Leather Tote.jpg" },
        { "id": "26", "title": "Stella McCartney Falabella Bag", "price": "1200", "rating": "4.3", "image": "images/bags/Stella McCartney Falabella Bag.jpg" },
        { "id": "27", "title": "Michael Kors Jet Set Travel Tote", "price": "300", "rating": "4.2", "image": "images/bags/Michael Kors Jet Set Travel Tote.jpg" },
        { "id": "28", "title": "Rag & Bone Pilot Bag", "price": "500", "rating": "4.5", "image": "images/bags/Rag & Bone Pilot Bag.jpg" },
        { "id": "29", "title": "AllSaints Kira Bag", "price": "600", "rating": "4.4", "image": "images/bags/AllSaints Kira Bag.jpg" },
        { "id": "30", "title": "Reed Krakoff Boxer Bag", "price": "1900", "rating": "4.6", "image": "images/bags/Reed Krakoff Boxer Bag.jpg" }
    ];

    const filteredBags = () => {
        if (filter === 'all') {
            return featuredBags;
        } else if (filter === 'under1500') {
            return featuredBags.filter(bag => bag.price < 1500);
        } else if (filter === 'under3000') {
            return featuredBags.filter(bag => bag.price < 3000);
        } else if (filter === 'above3000') {
            return featuredBags.filter(bag => bag.price >= 3000);
        }
        return featuredBags;
    };

    return (
        <Container>
            <Row>
                <div style={{ textAlign: 'center', margin: '40px 0' }}>
                    <h1 style={{
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                        color: 'transparent',
                        background: 'linear-gradient(90deg, #6a5acd, #ff69b4)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                    }}>
                        "Find the perfect bag for every occasion."
                    </h1>
                </div>

                <Form.Group controlId="filterBags" style={{ marginBottom: '20px' }}>
                    <Form.Label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                    <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All Bags</option>
                        <option value="under1500">Under $1500</option>
                        <option value="under3000">Under $3000</option>
                        <option value="above3000">Above $3000</option>
                    </Form.Control>
                </Form.Group>

                {filteredBags().map((bag) => (
                    <Col key={bag.id} md={4} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <Card.Img
                                variant="top"
                                src={bag.image}
                                alt={bag.title}
                                style={{ height: '350px', objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>{bag.title}</Card.Title>
                                <Card.Text>Price: {bag.price} $</Card.Text>
                                <Card.Text>Rating: {bag.rating} ★</Card.Text>
                                <Button variant="primary" onClick={() => addItem(bag)}>
                                    Add to cart
                                </Button>
                                <Button variant="warning" onClick={() => addToWishlist(bag)}>
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

function CustomerReviews() {
    const reviews = [
        { id: 1, name: "Alice", comment: "Stylish and practical bag!", rating: 5 },
        { id: 2, name: "John", comment: "Great quality for the price.", rating: 4 },
        { id: 3, name: "Emily", comment: "Perfect size for everyday use!", rating: 5 },
        { id: 4, name: "Michael", comment: "Love the design and color options.", rating: 4 },
        { id: 5, name: "Sarah", comment: "Highly recommend this bag!", rating: 5 },
    ];

    return (
        <Container>
            <h2>Customer Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <strong>{review.name}</strong>: {review.comment} <span>{"★".repeat(review.rating)}</span>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

function SubscribeForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container style={{ padding: "20px" }}>
            <h2>Subscribe for Updates!</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" required />
                <Button type="submit" variant="primary">Subscribe</Button>
            </form>
        </Container>
    );
}

function Allbags() {
    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
        return storedWishlist ? storedWishlist : [];
    });

    const addToWishlist = (bag) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, bag];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));  
            return updatedWishlist;
        });
    };

    const removeFromWishlist = (itemToRemove) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = prevWishlist.filter(item => item.id !== itemToRemove.id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
            return updatedWishlist;
        });
    };

    return (
        <CartProvider>
            <Allnavbar />
            <br />
            <Container fluid style={{ padding: '0', margin: '0' }}>
                <Row noGutters>
                    <Col className="p-0" style={{ paddingTop: '100px' }}>
                        <img
                            className="img-fluid"
                            src="images/bags/bag1.jpg"
                            alt="Bag Banner 1"
                            style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col className="p-0" style={{ paddingTop: '100px' }}>
                        <img
                            className="img-fluid"
                            src="images/bags/bag2.jpg"
                            alt="Bag Banner 2"
                            style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col className="p-0" style={{ paddingTop: '100px' }}>
                        <img
                            className="img-fluid"
                            src="images/bags/bag3.jpg"
                            alt="Bag Banner 3"
                            style={{ width: '100%', height: '70vh', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
            </Container>

            <FeaturedBags
                addToWishlist={addToWishlist}
                wishlist={wishlist}
                setWishlist={setWishlist}
            />
            <CustomerReviews />
            <SubscribeForm />
            <Allfooter />
        </CartProvider>
    );
}

export default Allbags;
