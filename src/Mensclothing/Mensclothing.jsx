import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedMensClothing({ addToWishlist }) {
    const { addItem } = useCart();
    const [filter, setFilter] = useState('all');

    // Api
    const featuredMensClothing = [
        { "id": "1", "title": "Gucci Cotton Shirt", "image": "images/mensfashion/Gucci Cotton Shirt.jpg", "price": 120.00 },
        { "id": "2", "title": "Armani Slim-Fit Suit", "image": "images/mensfashion/Armani Slim-Fit Suit.jpg", "price": 350.00 },
        { "id": "3", "title": "Versace Silk Tie", "image": "images/mensfashion/Versace Silk Tie.jpg", "price": 75.00 },
        { "id": "4", "title": "Prada Leather Jacket", "image": "images/mensfashion/Prada Leather Jacket.jpg", "price": 600.00 },
        { "id": "5", "title": "Ralph Lauren Polo Shirt", "image": "images/mensfashion/Ralph Lauren Polo Shirt.jpg", "price": 85.00 },
        { "id": "6", "title": "Hugo Boss Wool Coat", "image": "images/mensfashion/Hugo Boss Wool Coat.jpg", "price": 250.00 },
        { "id": "9", "title": "Dolce & Gabbana Jeans", "image": "images/mensfashion/Dolce & Gabbana Jeans.jpg", "price": 180.00 },
        { "id": "10", "title": "Saint Laurent Leather Belt", "image": "images/mensfashion/Saint Laurent Leather Belt.jpg", "price": 150.00 },
        { "id": "11", "title": "Burberry Trench Coat", "image": "images/mensfashion/Burberry Trench Coat.jpg", "price": 700.00 },
        { "id": "12", "title": "Moncler Down Jacket", "image": "images/mensfashion/Moncler Down Jacket.jpg", "price": 450.00 },
        { "id": "13", "title": "Fendi Sweater", "image": "images/mensfashion/Fendi Sweater.jpg", "price": 300.00 },
        { "id": "14", "title": "Balmain Blazer", "image": "images/mensfashion/Balmain Blazer.jpg", "price": 400.00 },
        { "id": "15", "title": "Hermès Silk Scarf", "image": "images/mensfashion/Hermès Silk Scarf.jpg", "price": 250.00 },
        { "id": "17", "title": "Alexander McQueen T-Shirt", "image": "images/mensfashion/Alexander McQueen T-Shirt.jpg", "price": 95.00 },
        { "id": "18", "title": "Givenchy Joggers", "image": "images/mensfashion/Givenchy Joggers.jpg", "price": 800.00 },
        { "id": "19", "title": "Kenzo Hoodie", "image": "images/mensfashion/Kenzo Hoodie.jpg", "price": 120.00 },
        { "id": "21", "title": "Off-White Sweatshirt", "image": "images/mensfashion/Off-White Sweatshirt.jpg", "price": 150.00 },
        { "id": "22", "title": "Zegna Wool Blazer", "image": "images/mensfashion/Zegna Wool Blazer.jpg", "price": 350.00 },
        { "id": "23", "title": "Brioni Cashmere Coat", "image": "images/mensfashion/Brioni Cashmere Coat.jpg", "price": 800.00 },
        { "id": "24", "title": "Loro Piana Silk Shirt", "image": "images/mensfashion/Loro Piana Silk Shirt.jpg", "price": 220.00 },
        { "id": "25", "title": "Celine Leather Pants", "image": "images/mensfashion/Celine Leather Pants.jpg", "price": 300.00 },
        { "id": "26", "title": "Thom Browne Striped Shirt", "image": "images/mensfashion/Thom Browne Striped Shirt.jpg", "price": 200.00 },
        { "id": "27", "title": "Dsquared2 Denim Jacket", "image": "images/mensfashion/Dsquared2 Denim Jacket.jpg", "price": 180.00 },
        { "id": "28", "title": "Issey Miyake Pleated Pants", "image": "images/mensfashion/Issey Miyake Pleated Pants.jpg", "price": 160.00 },
        { "id": "30", "title": "Rick Owens Leather Vest", "image": "images/mensfashion/Rick Owens Leather Vest.jpg", "price": 250.00 },
        { "id": "31", "title": "Stone Island Knit Sweater", "image": "images/mensfashion/Stone Island Knit Sweater.jpg", "price": 210.00 },
        { "id": "32", "title": "Acne Studios Wool Beanie", "image": "images/mensfashion/Acne Studios Wool Beanie.jpg", "price": 80.00 }
    ];

    const filteredClothing = () => {
        if (filter === 'all') {
            return featuredMensClothing;
        } else if (filter === 'under200') {
            return featuredMensClothing.filter(clothing => clothing.price < 200);
        } else if (filter === 'above500') {
            return featuredMensClothing.filter(clothing => clothing.price > 500);
        } else if (filter === 'above700') {
            return featuredMensClothing.filter(clothing => clothing.price > 700);
        }
        return featuredMensClothing;
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
                        "Discover the latest men's fashion."
                    </h1>
                </div>

                <Form.Group controlId="filterClothing" style={{ marginBottom: '20px' }}>
                    <Form.Label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                    <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All Clothing</option>
                        <option value="under200">Under $200</option>
                        <option value="above500">Above $500</option>
                        <option value="above700">Above $700</option>
                    </Form.Control>
                </Form.Group>

                {filteredClothing().map((clothing) => (
                    <Col key={clothing.id} md={4} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <Card.Img
                                variant="top"
                                src={clothing.image}
                                alt={clothing.title}
                                style={{ height: '350px', objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>{clothing.title}</Card.Title>
                                <Card.Text>Price: {clothing.price} $</Card.Text>
                                <Button variant="primary" onClick={() => addItem(clothing)}>
                                    Add to cart
                                </Button>
                                <Button variant="warning" onClick={() => addToWishlist(clothing)}>
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
// reviews
function CustomerReviews() {
    const reviews = [
        {
            id: 1,
            name: "Ali",
            rating: 5,
            comment: "This shirt is amazing! The fabric is so soft and comfortable. Highly recommended!",
        },
        {
            id: 2,
            name: "Omar",
            rating: 5,
            comment: "I love the fit of these pants! They are perfect for any occasion and the quality is top-notch.",
        },
        {
            id: 3,
            name: "Zain",
            rating: 5,
            comment: "Absolutely delighted with this jacket! It's stylish and keeps me warm. Best purchase ever!",
        },
        {
            id: 4,
            name: "Samir",
            rating: 5,
            comment: "The fabric of this outfit is exceptional! So glad I decided to buy it.",
        },
        {
            id: 5,
            name: "Khalid",
            rating: 5,
            comment: "Fantastic quality! The colors are vibrant and the material feels premium.",
        },
        {
            id: 6,
            name: "Yusuf",
            rating: 5,
            comment: "This shirt exceeded my expectations. Comfortable and perfect for casual wear!",
        },
        {
            id: 7,
            name: "Hassan",
            rating: 5,
            comment: "I’m very impressed with the quality of this clothing line. Will definitely buy more!",
        },
        {
            id: 8,
            name: "Nabil",
            rating: 5,
            comment: "The stitching and finish on this jacket are flawless. Love wearing it!",
        },
        {
            id: 9,
            name: "Amir",
            rating: 5,
            comment: "The fabric breathes well and feels great on the skin. I'm a fan!",
        },
        {
            id: 10,
            name: "Sami",
            rating: 5,
            comment: "Best shirt I’ve ever owned! The quality is unbeatable. Highly satisfied!",
        },
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
        alert("Subscription form submitted!");
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

function Mensclothing() {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const addToWishlist = (clothing) => {
        const updatedWishlist = [...wishlist, clothing];
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));  
    };

    return (
        <CartProvider>
            <Allnavbar />
            <br></br><br></br><br></br><br></br>
            <Container
                fluid
                style={{
                    padding: '0',
                    margin: '0',
                    background: 'linear-gradient(135deg, #c657ae, #0e69c4,#c657ae, #0e69c4)', // Gradient background
                    overflow: 'hidden'
                }}
            >
                <Row noGutters>
                    <Col className="p-0" style={{ paddingTop: '100px' }}>
                        <img
                            className="img-fluid animated-img"
                            src="images/mensfashion/img1.jpg"
                            alt="Men's Clothing Banner 1"
                            style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col className="p-0" style={{ paddingTop: '100px' }}>
                        <img
                            className="img-fluid animated-img"
                            src=" images/mensfashion/img2.jpg"
                            alt="Men's Clothing Banner 2"
                            style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col className="p-0" style={{ paddingTop: '100px' }}>
                        <img
                            className="img-fluid animated-img"
                            src="images/mensfashion/img3.jpg"
                            alt="Men's Clothing Banner 3"
                            style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
            </Container>
            <FeaturedMensClothing addToWishlist={addToWishlist} />
            <CustomerReviews />
            <SubscribeForm />
            <Allfooter />
        </CartProvider>
    );
}

export default Mensclothing;
