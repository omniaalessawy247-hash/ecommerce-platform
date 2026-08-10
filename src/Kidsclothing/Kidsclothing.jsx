import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedKidsClothing({ addToWishlist }) {
    const { addItem } = useCart();
    const [filter, setFilter] = useState('all');

    const featuredKidsClothing =  [
        { "id": "1", "title": "Nike Kids T-Shirt", "image": "images/kidsclothes/Nike Kids T-Shirt.jpg", "price": 15, "rating": 4.5 },
        { "id": "2", "title": "Adidas Denim Overalls", "image": "images/kidsclothes/Adidas Denim Overalls.jpg", "price": 25, "rating": 4.2 },
        { "id": "3", "title": "Puma Graphic Hoodie", "image": "images/kidsclothes/Puma Graphic Hoodie.jpg", "price": 30, "rating": 4.8 },
        { "id": "4", "title": "Under Armour Cotton Shorts", "image": "images/kidsclothes/Under Armour Cotton Shorts.jpg", "price": 20, "rating": 4.3 },
        { "id": "5", "title": "Gap Floral Dress", "image": "images/kidsclothes/Gap Floral Dress.jpg", "price": 18, "rating": 4.5 },
        { "id": "6", "title": "Levi's Sweater Vest", "image": "images/kidsclothes/Levi's Sweater Vest.jpg", "price": 22, "rating": 4.7 },
        { "id": "7", "title": "Old Navy Jogging Pants", "image": "images/kidsclothes/Old Navy Jogging Pants.jpg", "price": 17, "rating": 4.1 },
        { "id": "8", "title": "The North Face Puffer Jacket", "image": "images/kidsclothes/The North Face Puffer Jacket.jpg", "price": 50, "rating": 4.9 },
        { "id": "9", "title": "Columbia Raincoat", "image": "images/kidsclothes/Columbia Raincoat.jpg", "price": 45, "rating": 4.6 },
        { "id": "10", "title": "H&M Summer Hat", "image": "images/kidsclothes/H&M Summer Hat.jpg", "price": 10, "rating": 4.0 },
        { "id": "11", "title": "Zara Patterned Leggings", "image": "images/kidsclothes/Zara Patterned Leggings.jpg", "price": 12, "rating": 4.2 },
        { "id": "12", "title": "Converse Sneakers", "image": "images/kidsclothes/Converse Sneakers.jpg", "price": 35, "rating": 4.8 },
        { "id": "13", "title": "OshKosh B'Gosh Tulle Skirt", "image": "images/kidsclothes/OshKosh B'Gosh Tulle Skirt.jpg", "price": 28, "rating": 4.5 },
        { "id": "14", "title": "Carter's Casual Sandals", "image": "images/kidsclothes/Carter's Casual Sandals.jpg", "price": 15, "rating": 4.3 },
        { "id": "15", "title": "Gymboree Sweatshirt", "image": "images/kidsclothes/Gymboree Sweatshirt.jpg", "price": 20, "rating": 4.6 },
        { "id": "16", "title": "Tommy Hilfiger Boys' Chinos", "image": "images/kidsclothes/Tommy Hilfiger Boys' Chinos.jpg", "price": 30, "rating": 4.4 },
        { "id": "17", "title": "Calvin Klein Girls' Cardigan", "image": "images/kidsclothes/Calvin Klein Girls' Cardigan.jpg", "price": 25, "rating": 4.7 },
        { "id": "18", "title": "Lands' End Animal Print Pajamas", "image": "images/kidsclothes/Lands' End Animal Print Pajamas.jpg", "price": 22, "rating": 4.5 },
        { "id": "19", "title": "Ralph Lauren Baseball Cap", "image": "images/kidsclothes/Ralph Lauren Baseball Cap.jpg", "price": 18, "rating": 4.3 },
        { "id": "20", "title": "Sorel Winter Boots", "image": "images/kidsclothes/Sorel Winter Boots.jpg", "price": 55, "rating": 4.9 },
        { "id": "21", "title": "Uniqlo Beach Cover-Up", "image": "images/kidsclothes/Uniqlo Beach Cover-Up.jpg", "price": 20, "rating": 4.4 },
        { "id": "22", "title": "Boys' Lightweight Jacket from Land's End", "image": "images/kidsclothes/Boys' Lightweight Jacket from Land's End.jpg", "price": 35, "rating": 4.6 },
        { "id": "23", "title": "H&M Checkered Shirt", "image": "images/kidsclothes/H&M Checkered Shirt.jpg", "price": 22, "rating": 4.3 },
        { "id": "24", "title": "Speedo Swim Trunks", "image": "images/kidsclothes/Speedo Swim Trunks.jpg", "price": 15, "rating": 4.5 },
        { "id": "25", "title": "Burton Wool Hat", "image": "images/kidsclothes/Burton Wool Hat.jpg", "price": 25, "rating": 4.2 },
        { "id": "26", "title": "Bogs Colorful Rain Boots", "image": "images/kidsclothes/Bogs Colorful Rain Boots.jpg", "price": 40, "rating": 4.5 },
        { "id": "27", "title": "Lands' End Lightweight Cargo Shorts", "image": "images/kidsclothes/Lands' End Lightweight Cargo Shorts.jpg", "price": 28, "rating": 4.4 },
        { "id": "28", "title": "Gap Cute Sun Dress", "image": "images/kidsclothes/Gap Cute Sun Dress.jpg", "price": 30, "rating": 4.6 },
        { "id": "29", "title": "OshKosh Classic Blazer", "image": "images/kidsclothes/OshKosh Classic Blazer.jpg", "price": 40, "rating": 4.8 },
        { "id": "30", "title": "Columbia Warm Fleece Jacket", "image": "images/kidsclothes/Columbia Warm Fleece Jacket.jpg", "price": 50, "rating": 4.7 },
        { "id": "31", "title": "Adidas Kids Soccer Jersey", "image": "images/kidsclothes/Adidas Kids Soccer Jersey.jpg", "price": 25, "rating": 4.5 },
        { "id": "32", "title": "Nike Kids Running Shoes", "image": "images/kidsclothes/Nike Kids Running Shoes.jpg", "price": 40, "rating": 4.9 }
    ]
    ;

    const filteredClothing = () => {
        if (filter === 'all') {
            return featuredKidsClothing;
        } else if (filter === 'under20') {
            return featuredKidsClothing.filter(item => item.price < 20);
        } else if (filter === 'under30') {
            return featuredKidsClothing.filter(item => item.price < 30);
        } else if (filter === 'above30') {
            return featuredKidsClothing.filter(item => item.price >= 30);
        }
        return featuredKidsClothing;
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
                        "Stylish Clothing for Your Little Ones!"
                    </h1>
                </div>

                <Form.Group controlId="filterClothing" style={{ marginBottom: '20px' }}>
                    <Form.Label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                    <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All Clothing</option>
                        <option value="under20">Under $20</option>
                        <option value="under30">Under $30</option>
                        <option value="above30">Above $30</option>
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

function CustomerReviews() {
    const reviews =  [
        {
            id: 1,
            name: "Layla",
            rating: 5,
            comment: "This dress is so cute! My daughter loves it and it feels so soft!",
        },
        {
            id: 2,
            name: "Sara",
            rating: 5,
            comment: "The quality of this outfit is fantastic! It washes well and looks brand new.",
        },
        {
            id: 3,
            name: "Zara",
            rating: 5,
            comment: "My son looks adorable in this shirt! The fabric is breathable and comfortable.",
        },
        {
            id: 4,
            name: "Aisha",
            rating: 5,
            comment: "These pants are perfect for my little one! They fit well and the material is high quality.",
        },
        {
            id: 5,
            name: "Maya",
            rating: 5,
            comment: "I’m so impressed with this clothing line! The designs are fun and the fabric is soft.",
        },
        {
            id: 6,
            name: "Hala",
            rating: 5,
            comment: "Great quality! My daughter loves wearing this outfit every day!",
        },
        {
            id: 7,
            name: "Fatima",
            rating: 5,
            comment: "These clothes are not only cute but also very durable. Highly recommend!",
        },
        {
            id: 8,
            name: "Nour",
            rating: 5,
            comment: "My kids love these pajamas! They are so cozy and perfect for bedtime.",
        },
        {
            id: 9,
            name: "Rami",
            rating: 5,
            comment: "The material is soft and perfect for sensitive skin. My son feels great in it!",
        },
        {
            id: 10,
            name: "Lina",
            rating: 5,
            comment: "Best kids' clothes I've found! They fit perfectly and the colors are vibrant.",
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

function Kidsclothing() {
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
            <br />  <br /> <br /> <br />
            <Container
    fluid
    style={{
        padding: '0',
        margin: '0',
        background: 'linear-gradient(135deg, #c657ae, #0e69c4, #c657ae, #0e69c4)', // خلفية متدرجة
        overflow: 'hidden'
    }}
>
    <Row noGutters>
        <Col className="p-0" style={{ paddingTop: '100px' }}>
            <img
                className="img-fluid animated-img"
                src="images/kidsclothes/img1.jpg"
                alt="Kids Clothing Banner 1"
                style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
        </Col>
        <Col className="p-0" style={{ paddingTop: '100px' }}>
            <img
                className="img-fluid animated-img"
                src="images/kidsclothes/img2.jpg"
                alt="Kids Clothing Banner 2"
                style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
        </Col>
        <Col className="p-0" style={{ paddingTop: '100px' }}>
            <img
                className="img-fluid animated-img"
                src="images/kidsclothes/img3.jpg"
                alt="Kids Clothing Banner 3"
                style={{ width: '100%', height: '60vh', objectFit: 'cover' }}
            />
        </Col>
    </Row>
</Container>


            <FeaturedKidsClothing addToWishlist={addToWishlist} />
            <Allfooter />
        </CartProvider>
    );
}

export default Kidsclothing;
