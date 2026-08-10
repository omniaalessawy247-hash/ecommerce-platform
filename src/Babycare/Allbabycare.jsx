import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedProducts() {
    const { addItem } = useCart();
    const featuredProducts = [
        { id: 1, title: "Magical Unicorn Baby Dress", price: 30, rating: 4.9, image: "images/babycare/Magical Unicorn Baby Dress.jpg " },
        { id: 2, title: "Cloud Soft Baby Hoodie", price: 28, rating: 4.8, image: "images/babycare/Cloud Soft Baby Hoodie.jpg" },
    ];

    return (
        <Container>
            <Row>
            <div>
    <h1 className="title">
        Every moment with your baby is a treasure, and we’re here to help you create the most beautiful memories!
    </h1>
</div>

                {featuredProducts.map((product) => (
                    <Col key={product.id} md={6} className="mb-4">
                          <Card style={{ height: '100%' }}>
                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.title}
                                style={{ height: '350px', objectFit: 'cover' }} 
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Price: {product.price} $</Card.Text>
                                <Button variant="primary" onClick={() => addItem(product)}>
                                    Add to cart
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
        { id: 1, name: "Alice", comment: "Great products! My baby loves them!", rating: 5 },
        { id: 2, name: "John", comment: "The lotion is perfect for my baby's sensitive skin.", rating: 4 },
        { id: 3, name: "Emily", comment: "I highly recommend the bamboo diapers! So soft!", rating: 5 },
        { id: 4, name: "Michael", comment: "The baby wipes are a lifesaver when we're out.", rating: 4 },
        { id: 5, name: "Sarah", comment: "Fast shipping and excellent customer service!", rating: 5 },
        { id: 6, name: "David", comment: "The baby shampoo smells amazing and is gentle on the skin.", rating: 4.5 },
        { id: 7, name: "Jessica", comment: "My daughter loves her new toys! Thank you!", rating: 5 },
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
        <Container style={{padding:"20px"}}>
            <h2>Subscribe for Discounts!</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" required />
                <Button type="submit" variant="primary">Subscribe</Button>
            </form>
        </Container>
    );
}

function AllbabycareProducts() {
    const { addItem } = useCart();

    const babyCareProducts =   [
        { id: 1, title: "Eco-Friendly Baby Shampoo", price: 12, rating: 4.8, image: "images/babycare/Eco-Friendly Baby Shampoo.jpg" },
        { id: 2, title: "Soft Baby Blanket", price: 20, rating: 4.6, image: "images/babycare/Soft Baby Blanket.jpg" },
        { id: 3, title: "Organic Baby Lotion", price: 10, rating: 4.5, image: "images/babycare/Organic Baby Lotion.jpg" },
        { id: 4, title: "Hypoallergenic Baby Wipes", price: 5, rating: 4.7, image: "images/babycare/Hypoallergenic Baby Wipes.jpg" },
        { id: 5, title: "Bamboo Diapers", price: 15, rating: 4.9, image: "images/babycare/Bamboo Diapers.jpg" },
        { id: 6, title: "Baby Sunscreen", price: 14, rating: 4.6, image: "images/babycare/Baby Sunscreen.jpg" },
        { id: 7, title: "Gentle Baby Body Wash", price: 11, rating: 4.7, image: "images/babycare/Gentle Baby Body Wash.jpg" },
        { id: 8, title: "Soft Baby Pajamas", price: 18, rating: 4.8, image: "images/babycare/Soft Baby Pajamas.jpg" },
        { id: 9, title: "Breathable Baby Mattress", price: 150, rating: 4.9, image: "images/babycare/Breathable Baby Mattress.jpg" },
        { id: 10, title: "Cotton Baby Diapers", price: 20, rating: 4.8, image: "images/babycare/Cotton Baby Diapers.jpg" },
        { id: 11, title: "Baby Monitor", price: 75, rating: 4.6, image: "images/babycare/Baby Monitor.jpg" },
        { id: 12, title: "Silicone Baby Feeding Set", price: 25, rating: 4.7, image: "images/babycare/Silicone Baby Feeding Set.jpg" },
        { id: 13, title: "Baby Teething Toys", price: 10, rating: 4.5, image: "images/babycare/Baby Teething Toys.jpg" },
        { id: 14, title: "Baby High Chair", price: 85, rating: 4.6, image: "images/babycare/Baby High Chair.jpg" },
        { id: 15, title: "Baby Bath Tub", price: 30, rating: 4.7, image: "images/babycare/Baby Bath Tub.jpg" },
        { id: 16, title: "Nursing Pillow", price: 25, rating: 4.8, image: "images/babycare/Nursing Pillow.jpg" },
        { id: 17, title: "Baby Carrier", price: 50, rating: 4.9, image: "images/babycare/Baby Carrier.jpg" },
        { id: 18, title: "Diaper Bag", price: 40, rating: 4.6, image: "images/babycare/Diaper Bag.jpg" },
        { id: 19, title: "Muslin Baby Swaddle", price: 15, rating: 4.7, image: "images/babycare/Muslin Baby Swaddle.jpg" },
        { id: 20, title: "Baby Nail Clippers", price: 5, rating: 4.8, image: "images/babycare/Baby Nail Clippers.jpg" },
        { id: 21, title: "Baby Shampoo Brush", price: 7, rating: 4.5, image: "images/babycare/Baby Shampoo Brush.jpg" },
        { id: 22, title: "Baby Safety Gates", price: 45, rating: 4.7, image: "images/babycare/Baby Safety Gates.jpg" },
        { id: 23, title: "Portable Baby Crib", price: 100, rating: 4.8, image: "images/babycare/Portable Baby Crib.jpg" },
        { id: 24, title: "Baby Food Maker", price: 60, rating: 4.6, image: "images/babycare/Baby Food Maker.jpg" },
        { id: 25, title: "Baby Learning Walker", price: 35, rating: 4.7, image: "images/babycare/Baby Learning Walker.jpg" },
        { id: 26, title: "Infant Car Seat", price: 120, rating: 4.9, image: "images/babycare/Infant Car Seat.jpg" },
        { id: 27, title: "Pacifiers", price: 8, rating: 4.5, image: "images/babycare/Pacifiers.jpg" },
        { id: 28, title: "Baby Socks", price: 10, rating: 4.6, image: "images/babycare/Baby Socks.jpg" },
        { id: 29, title: "Baby Hat", price: 12, rating: 4.7, image: "images/babycare/Baby Hat.jpg" },
        { id: 30, title: "Diaper Rash Cream", price: 8, rating: 4.8, image: "images/babycare/Diaper Rash Cream.jpg" },
        { id: 31, title: "Baby Wet Wipes", price: 5, rating: 4.5, image: "images/babycare/Baby Wet Wipes.jpg" },
        { id: 32, title: "Baby Bottle Sterilizer", price: 40, rating: 4.6, image: "images/babycare/Baby Bottle Sterilizer.jpg" },
        { id: 33, title: "Baby Bathrobe", price: 20, rating: 4.8, image: "images/babycare/Baby Bathrobe.jpg" },
        { id: 34, title: "Breast Pump", price: 60, rating: 4.9, image: "images/babycare/Breast Pump.jpg" },
        { id: 35, title: "Baby Toothbrush", price: 4, rating: 4.5, image: "images/babycare/Baby Toothbrush.jpg" },
        { id: 36, title: "Baby Photo Album", price: 15, rating: 4.6, image: "images/babycare/Baby Photo Album.jpg" },
        { id: 37, title: "Baby Blanket", price: 20, rating: 4.7, image: "images/babycare/Baby Blanket.jpg" },
        { id: 38, title: "Baby Swing", price: 70, rating: 4.8, image: "images/babycare/Baby Swing.jpg" },
        { id: 39, title: "Baby Play Mat", price: 30, rating: 4.6, image: "images/babycare/Baby Play Mat.jpg" },
    ];

    return (
        <Container>
            <Row>
                {babyCareProducts.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                {product.onSale && <span className="badge bg-danger">Sale</span>}
                            </div>
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div style={{ textAlign: 'center' }}>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>Price: {product.price} $</Card.Text>
                                    <Card.Title>
                                        <span>{product.rating}</span>
                                        <span className="rating">{"★".repeat(Math.round(product.rating))}</span>
                                    </Card.Title>
                                </div>
                                <Button variant="success" onClick={() => addItem(product)}>
                                    Add to cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

function Allbabycare() {
    return (
        <CartProvider>
            <Allnavbar />
            <div 
    style={{ 
        width: '100%', 
        height: '90vh', 
        marginTop: '10px', 
        paddingTop: '50px',  
        boxSizing: 'border-box', 
        overflow: 'hidden', 
        position: 'relative', 
        zIndex: 0 ,
      
    }}
>
<div style={{ overflow: 'hidden', position: 'relative', height: '650px' }}>
    <img 
        className="img-fluid responsive-image" 
        src="images/babycare/babycare.jpg" 
        alt="First slide" 
        style={{ 
            width: '100%',        
            maxHeight: '100%',    
            height: 'auto',       
            objectFit: 'cover',   
            objectPosition: 'top',  
            marginTop: '-90px',  
            marginBottom: '0px'  
        }} 
    />
</div>
</div>
            <FeaturedProducts />
            <AllbabycareProducts />
            <CustomerReviews />
            <SubscribeForm />
            <Allfooter />
        </CartProvider>
    );
}

export default Allbabycare;
