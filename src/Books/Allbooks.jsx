import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedBooks({ addToWishlist }) {
    const { addItem } = useCart();
    const [filter, setFilter] = useState('all');
    
    const featuredBooks  =  [
        { "id": "1", "title": "The Magic of Thinking Big", "price": "15", "rating": "4.7", "image": "images/books/The Magic of Thinking Big.jpg" },
        { "id": "2", "title": "The Power of Now", "price": "20", "rating": "4.8", "image": "images/books/The Power of Now.jpg" },
        { "id": "3", "title": "Atomic Habits", "price": "18", "rating": "4.9", "image": "images/books/Atomic Habits.jpg" },
        { "id": "4", "title": "The Subtle Art of Not Giving a F*ck", "price": "22", "rating": "4.6", "image": "images/books/book fuck.jpg" },
        { "id": "5", "title": "Thinking, Fast and Slow", "price": "25", "rating": "4.5", "image": "images/books/Thinking, Fast and Slow.jpg" },
        { "id": "6", "title": "Educated", "price": "19", "rating": "4.8", "image": "images/books/Educated.jpg" },
        { "id": "7", "title": "Becoming", "price": "23", "rating": "4.7", "image": "images/books/Becoming.jpg" },
        { "id": "8", "title": "The Silent Patient", "price": "26", "rating": "4.6", "image": "images/books/The Silent Patient.jpg" },
        { "id": "9", "title": "Where the Crawdads Sing", "price": "21", "rating": "4.8", "image": "images/books/Where the Crawdads Sing.jpg" },
        { "id": "10", "title": "The Alchemist", "price": "17", "rating": "4.9", "image": "images/books/The Alchemist.jpg" },
        { "id": "11", "title": "Sapiens: A Brief History of Humankind", "price": "30", "rating": "4.7", "image": "images/books/Sapiens.jpg" },
        { "id": "12", "title": "Daring Greatly", "price": "12", "rating": "4.6", "image": "images/books/Daring Greatly.jpg" },
        { "id": "13", "title": "The 7 Habits of Highly Effective People", "price": "24", "rating": "4.7", "image": "images/books/The 7 Habits of Highly Effective People.jpg" },
        { "id": "14", "title": "The Four Agreements", "price": "18", "rating": "4.5", "image": "images/books/The Four Agreements.jpg" },
        { "id": "15", "title": "You Are a Badass", "price": "10", "rating": "4.6", "image": "images/books/You Are a Badass.jpg" },
        { "id": "16", "title": "The Gifts of Imperfection", "price": "21", "rating": "4.8", "image": "images/books/The Gifts of Imperfection.jpg" },
        { "id": "17", "title": "Girl, Stop Apologizing", "price": "22", "rating": "4.5", "image": "images/books/Girl, Stop Apologizing.jpg" },
        { "id": "18", "title": "Mindset: The New Psychology of Success", "price": "24", "rating": "4.9", "image": "images/books/Mindset The New Psychology of Success.jpg" },
        { "id": "19", "title": "The Art of Happiness", "price": "19", "rating": "4.8", "image": "images/books/The Art of Happiness.jpg" },
        { "id": "20", "title": "The Body Keeps the Score", "price": "28", "rating": "4.7", "image": "images/books/The Body Keeps the Score.jpg" },
        { "id": "21", "title": "Outliers: The Story of Success", "price": "30", "rating": "4.7", "image": "images/books/Outliers The Story of Success.jpg" },
        { "id": "22", "title": "The 5 Love Languages", "price": "18", "rating": "4.8", "image": "images/books/The 5 Love Languages.jpg" },
        { "id": "23", "title": "The Road Less Traveled", "price": "24", "rating": "4.6", "image": "images/books/The Road Less Traveled.jpg" },
        { "id": "24", "title": "Start with Why", "price": "20", "rating": "4.7", "image": "images/books/Start with Why.jpg" },
        { "id": "25", "title": "Can't Hurt Me", "price": "25", "rating": "4.9", "image": "images/books/Can't Hurt Me.jpg" },
        { "id": "26", "title": "The Last Lecture", "price": "14", "rating": "4.8", "image": "images/books/The Last Lecture.jpg" },
        { "id": "27", "title": "The Innovator's Dilemma", "price": "28", "rating": "4.6", "image": "images/books/The Innovator's Dilemma.jpg" },
        { "id": "28", "title": "Eat, Pray, Love", "price": "20", "rating": "4.7", "image": "images/books/Eat, Pray, Love.jpg" },
        { "id": "29", "title": "Freakonomics", "price": "24", "rating": "4.5", "image": "images/books/Freakonomics.jpg" },
        { "id": "30", "title": "The Book Thief", "price": "25", "rating": "4.8", "image": "images/books/The Book Thief.jpg" },
        { "id": "31", "title": "The Hunger Games", "price": "13", "rating": "4.6", "image": "images/books/The Hunger Games.jpg" },
        { "id": "32", "title": "The Fault in Our Stars", "price": "1", "rating": "4.9", "image": "images/books/The Fault in Our Stars.jpg" },
        { "id": "33", "title": "1984", "price": "15", "rating": "4.8", "image": "images/books/1984.jpg" },
        { "id": "34", "title": "Brave New World", "price": "20", "rating": "4.7", "image": "images/books/Brave New World.jpg" },
        { "id": "35", "title": "Pride and Prejudice", "price": "18", "rating": "4.6", "image": "images/books/Pride and Prejudice.jpg" },
        { "id": "36", "title": "Moby Dick", "price": "25", "rating": "4.5", "image": "images/books/Moby Dick.jpg" },
        { "id": "37", "title": "The Great Gatsby", "price": "22", "rating": "4.9", "image": "images/books/The Great Gatsby.jpg" },
        { "id": "38", "title": "The Catcher in the Rye", "price": "18", "rating": "4.4", "image": "images/books/The Catcher in the Rye.jpg" },
        { "id": "39", "title": "The Chronicles of Narnia", "price": "30", "rating": "4.8", "image": "images/books/The Chronicles of Narnia.jpg" },
        { "id": "40", "title": "To Kill a Mockingbird", "price": "20", "rating": "4.9", "image": "images/books/To Kill a Mockingbird.jpg" },
        { "id": "41", "title": "The Kite Runner", "price": "22", "rating": "4.7", "image": "images/books/The Kite Runner.jpg" }
    ];  

    const filteredBooks = filter === 'all' ? featuredBooks : featuredBooks.filter(book => book.price <= 15);

    return (
        <Container>
            <Row>
         
            <h1 style={{ 
        position: 'absolute', 
        bottom: '20px',  
        left: '50%', 
        transform: 'translateX(-50%)', 
        fontWeight: 'bold', 
        fontSize: '2rem', 
        color: 'transparent',  
        background: 'linear-gradient(90deg, #6a5acd, #ff69b4)',  
        WebkitBackgroundClip: 'text',  
        backgroundClip: 'text',  
        paddingBottom: '20px' 
    }}>
        "Let each book take you on an unforgettable new journey."
    </h1>

                <Form.Group controlId="filterBooks" style={{ marginBottom: '20px' }}>
                    <Form.Label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                    <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All Books</option>
                        <option value="under15">Under $15</option>
                    </Form.Control>
                </Form.Group>

                {filteredBooks.map((book, index) => (
                    <Col key={book.id} md={4} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            <Card.Img
                                variant="top"
                                src={book.image}
                                alt={book.title}
                                style={{ height: '350px', objectFit: 'cover' }} 
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>Price: {book.price} $</Card.Text>
                                <Card.Text>Rating: {book.rating} ★</Card.Text>
                                <Button variant="primary" onClick={() => addItem(book)}>
                                    Add to cart
                                </Button>
                                <Button variant="warning" onClick={() => addToWishlist(book)}>
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
        { id: 1, name: "Alice", comment: "A fantastic read! Highly recommended!", rating: 5 },
        { id: 2, name: "John", comment: "The story was captivating and well-written.", rating: 4 },
        { id: 3, name: "Emily", comment: "I learned a lot from this book! Thank you!", rating: 5 },
        { id: 4, name: "Michael", comment: "Interesting perspectives and insights.", rating: 4 },
        { id: 5, name: "Sarah", comment: "Great value for the price!", rating: 5 },
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

function Allbooks() {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const addToWishlist = (book) => {
        const updatedWishlist = [...wishlist, book];
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));  
    };

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
                    zIndex: 0,
                }}
            >
               <img 
    className="img-fluid responsive-image" 
    src="images/books/img1.webp" 
    alt="Book Banner" 
    style={{ 
        width: '100%',        
        maxHeight: '80%',    
        height: 'auto',       
        objectFit: 'cover',   
        objectPosition: 'bottom' 
    }} 
/>

            </div>

            <FeaturedBooks addToWishlist={addToWishlist} />
            <CustomerReviews />
            <SubscribeForm />
            <Allfooter />
        </CartProvider>
    );
}

export default Allbooks; 
