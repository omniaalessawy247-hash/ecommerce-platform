import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedClothing({ addToWishlist, wishlist, setWishlist }) {
    const { addItem } = useCart();
    const [filter, setFilter] = useState('all');

    // Api
    const featuredClothing =  [
        { id: 1, title: 'Floral Maxi Dress', image: 'images/women clothes/Floral Maxi Dress.jpg', price: 1500, rating: 4.7 },
        { id: 2, title: 'High Waist Jeans', image: 'images/women clothes/High Waist Jeans.jpg', price: 1200, rating: 4.6 },
        { id: 3, title: 'Leather Jacket', image: 'images/women clothes/Leather Jacket.jpg', price: 2500, rating: 4.8 },
        { id: 4, title: 'Casual T-Shirt', image: 'images/women clothes/Casual T-Shirt.jpg', price: 800, rating: 4.5 },
        { id: 5, title: 'A-Line Skirt', image: 'images/women clothes/A-Line Skirt.jpg', price: 1000, rating: 4.7 },
        { id: 6, title: 'Knitted Sweater', image: 'images/women clothes/Knitted Sweater.jpg', price: 1300, rating: 4.6 },
        { id: 7, title: 'Denim Jacket', image: 'images/women clothes/Denim Jacket.jpg', price: 1800, rating: 4.4 },
        { id: 8, title: 'Office Blouse', image: 'images/women clothes/Office Blouse.jpg', price: 1100, rating: 4.7 },
        { id: 9, title: 'Pencil Skirt', image: 'images/women clothes/Pencil Skirt.jpg', price: 1200, rating: 4.5 },
        { id: 10, title: 'Wrap Dress', image: 'images/women clothes/Wrap Dress.jpg', price: 1700, rating: 4.8 },
        { id: 11, title: 'Wide Leg Trousers', image: 'images/women clothes/Wide Leg Trousers.jpg', price: 1400, rating: 4.6 },
        { id: 12, title: 'Strapless Top', image: 'images/women clothes/Strapless Top.jpg', price: 900, rating: 4.4 },
        { id: 13, title: 'Belted Coat', image: 'images/women clothes/Belted Coat.jpg', price: 2400, rating: 4.7 },
        { id: 14, title: 'Linen Shirt', image: 'images/women clothes/Linen Shirt.jpg', price: 1100, rating: 4.5 },
        { id: 15, title: 'Chiffon Skirt', image: 'images/women clothes/Chiffon Skirt.jpg', price: 1300, rating: 4.6 },
        { id: 16, title: 'Graphic Hoodie', image: 'images/women clothes/Graphic Hoodie.jpg', price: 1000, rating: 4.4 },
        { id: 17, title: 'Culottes', image: 'images/women clothes/Culottes.jpg', price: 1400, rating: 4.7 },
        { id: 18, title: 'Silk Scarf', image: 'images/women clothes/Silk Scarf.jpg', price: 600, rating: 4.5 },
        { id: 19, title: 'Peplum Top', image: 'images/women clothes/Peplum Top.jpg', price: 1200, rating: 4.6 },
        { id: 20, title: 'Sporty Joggers', image: 'images/women clothes/Sporty Joggers.jpg', price: 900, rating: 4.5 },
        { id: 21, title: 'Evening Gown', image: 'images/women clothes/Evening Gown.jpg', price: 3500, rating: 4.9 },
        { id: 22, title: 'Cotton Tank Top', image: 'images/women clothes/Cotton Tank Top.jpg', price: 700, rating: 4.5 },
        { id: 23, title: 'Knit Dress', image: 'images/women clothes/Knit Dress.jpg', price: 1600, rating: 4.6 },
        { id: 24, title: 'Shorts Set', image: 'images/women clothes/Shorts Set.jpg', price: 1100, rating: 4.4 },
        { id: 25, title: 'Asymmetrical Top', image: 'images/women clothes/Asymmetrical Top.jpg', price: 950, rating: 4.7 },
        { id: 26, title: 'Boho Chic Dress', image: 'images/women clothes/Boho Chic Dress.jpg', price: 1800, rating: 4.6 },
        { id: 27, title: 'Graphic Tee', image: 'images/women clothes/Graphic Tee.jpg', price: 750, rating: 4.5 },
        { id: 28, title: 'Faux Fur Vest', image: 'images/women clothes/Faux Fur Vest.jpg', price: 2200, rating: 4.7 },
        { id: 29, title: 'Lace Top', image: 'images/women clothes/Lace Top.jpg', price: 1300, rating: 4.8 },
        { id: 30, title: 'Tailored Trousers', image: 'images/women clothes/Tailored Trousers.jpg', price: 1500, rating: 4.6 }
      ];

    const filteredClothing = () => {
        if (filter === 'all') {
            return featuredClothing;
        } else if (filter === 'under1500') {
            return featuredClothing.filter(item => item.price < 1500);
        } else if (filter === 'under3000') {
            return featuredClothing.filter(item => item.price < 3000);
        } else if (filter === 'above3000') {
            return featuredClothing.filter(item => item.price >= 3000);
        }
        return featuredClothing;
    };

    return (
        <Container>
            <Row>
           
                <Form.Group controlId="filterClothing" style={{ marginBottom: '20px' }}>
                    <Form.Label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                    <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All Clothing</option>
                        <option value="under1500">Under $1500</option>
                        <option value="under3000">Under $3000</option>
                        <option value="above3000">Above $3000</option>
                    </Form.Control>
                </Form.Group>

                {filteredClothing().map((item) => (
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
        <Container fluid style={{ margin: '0', padding: '0' }}>
            <Row style={{ margin: '0', padding: '0' }}>
                <Col md={4} className="banner-animation mb-0" style={{ padding: '0' }}>
                    <img src="images/women clothes/3.jpg" alt="Banner 1" style={{ width: '100%', height: '90%' }} />
                </Col>
                <Col md={4} className="banner-animation mb-0" style={{ padding: '0' }}>
                    <img src="images/women clothes/2.jpg" alt="Banner 2" style={{ width: '100%', height: ' 90%' }} />
                </Col>
                <Col md={4} className="banner-animation mb-0" style={{ padding: '0' }}>
                    <img src="images/women clothes/1.jpg" alt="Banner 3" style={{ width: '100%', height: ' 90%' }} />
                </Col>
            </Row>
            <div style={{ textAlign: 'center', margin: '0px 0' }}>
    <h1 className="slideUpDown" style={{
        fontWeight: 'bold',
        fontSize: '2rem',
        color: 'transparent',
        background: 'linear-gradient(90deg, #6a5acd, #ff69b4)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
    }}>
        " Discover the perfect blend of comfort and style in our latest women's fashion line."
    </h1>
</div>

        </Container>
    );
}

function CustomerReviews() {
    const reviews = [
        { id: 1, name: "Sophie", comment: "Love the quality and fit!", rating: 5 },
        { id: 2, name: "Emma", comment: "Fashionable and comfortable!", rating: 4 },
        { id: 3, name: "Olivia", comment: "Great value for the price.", rating: 4 },
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

function WomensClothing() {
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
            <Banner />  
            <FeaturedClothing
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

export default WomensClothing;
