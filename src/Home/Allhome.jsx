import React, { useState } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import { CartProvider, useCart } from "react-use-cart";
import { FaShippingFast, FaTag } from 'react-icons/fa';

function Banner() {
    return (
        <div className="banner-container" style={{ backgroundColor: '#f8d7da', padding: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#721c24', fontWeight: 'bold' }}>Up to 70% OFF on selected items!</h2>
            <h4 style={{ color: '#721c24' }}>Don't miss out on free shipping for all orders!</h4>
        </div>
    );
}

function FeatureIcons() {
    return (
        <Container className="feature-icons" style={{ padding: '20px 0', textAlign: 'center' }}>
            <Row>
                <Col>
                    <FaShippingFast size={40} color="#007bff" />
                    <p>Free Shipping</p>
                </Col>
                <Col>
                    <FaTag size={40} color="#28a745" />
                    <p>Up to 70% OFF</p>
                </Col>
            </Row>
        </Container>
    );
}

function Page() {
    const { addItem } = useCart();

    const [priceFilter, setPriceFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');

//    Api
    const products =   [
            {
                "id": 1,
                "title": "Men's Casual Shirt",
                "category": "Fashion",
                "image": "/images/Men's Casual Shirt.webp",
                "old_price": 50,
                "new_price": 35,
                "rating": 4.5
            },
            {
                "id": 2,
                "title": "Women's Summer Dress",
                "category": "Fashion",
                "image": "/images/Women's Summer Dress.jpeg",
                "old_price": 70,
                "new_price": 50,
                "rating": 4.8
            },
            {
                "id": 3,
                "title": "Nike Running Shoes",
                "category": "Fashion",
                "image": "/images/Nike Running Shoes.jpeg",
                "old_price": 120,
                "new_price": 90,
                "rating": 4.7
            },
            {
                "id": 4,
                "title": "Foundation Makeup",
                "category": "Makeup",
                "image": "/images/Foundation Makeup.webp",
                "old_price": 40,
                "new_price": 30,
                "rating": 4.3
            },
            {
                "id": 5,
                "title": "Lipstick - Red",
                "category": "Makeup",
                "image": "/images/Lipstick - Red.webp",
                "old_price": 20,
                "new_price": 15,
                "rating": 4.6
            },
            {
                "id": 6,
                "title": "Eyeshadow Palette",
                "category": "Makeup",
                "image": "/images/Eyeshadow Palette.jpeg",
                "old_price": 35,
                "new_price": 25,
                "rating": 4.8
            },
            {
                "id": 7,
                "title": "Chanel No. 5 Perfume",
                "category": "Perfume",
                "image": "/images/Chanel No. 5 Perfume.webp",
                "old_price": 150,
                "new_price": 120,
                "rating": 4.9
            },
            {
                "id": 8,
                "title": "Gucci Guilty Perfume",
                "category": "Perfume",
                "image": "/images/Gucci Guilty Perfume.jpg",
                "old_price": 180,
                "new_price": 140,
                "rating": 4.7
            },
            {
                "id": 9,
                "title": "Dior Sauvage Perfume",
                "category": "Perfume",
                "image": "/images/Dior Sauvage Perfume.jpeg",
                "old_price": 170,
                "new_price": 130,
                "rating": 4.9
            },
            {
                "id": 10,
                "title": "Organic Avocados",
                "category": "Supermarket",
                "image": "/images/Organic Avocados.webp",
                "old_price": 10,
                "new_price": 7,
                "rating": 4.8
            },
            {
                "id": 11,
                "title": "Whole Wheat Bread",
                "category": "Supermarket",
                "image": "/images/Whole Wheat Bread.jpeg",
                "old_price": 5,
                "new_price": 3,
                "rating": 4.5
            },
            {
                "id": 12,
                "title": "Almond Milk",
                "category": "Supermarket",
                "image": "/images/Almond Milk.webp",
                "old_price": 8,
                "new_price": 6,
                "rating": 4.6
            },
            {
                "id": 13,
                "title": "The Great Gatsby",
                "category": "Books",
                "image": "/images/The Great Gatsby.jpeg",
                "old_price": 15,
                "new_price": 10,
                "rating": 4.9
            },
            {
                "id": 14,
                "title": "To Kill a Mockingbird",
                "category": "Books",
                "image": "/images/To Kill a Mockingbird.webp",
                "old_price": 18,
                "new_price": 12,
                "rating": 4.8
            },
            {
                "id": 15,
                "title": "1984 by George Orwell",
                "category": "Books",
                "image": "/images/1984 by George Orwell.jpeg",
                "old_price": 20,
                "new_price": 15,
                "rating": 4.7
            },
            {
                "id": 16,
                "title": "Dog Food - Chicken Flavor",
                "category": "Pet Care Products",
                "image": "/images/Dog Food - Chicken Flavor.jpeg",
                "old_price": 30,
                "new_price": 25,
                "rating": 4.2
            },
            {
                "id": 17,
                "title": "Cat Litter",
                "category": "Pet Care Products",
                "image": "/images/Cat Litter.jpeg",
                "old_price": 25,
                "new_price": 20,
                "rating": 4.3
            },
            {
                "id": 18,
                "title": "Bird Seed Mix",
                "category": "Pet Care Products",
                "image": "/images/Bird Seed Mix.webp",
                "old_price": 15,
                "new_price": 12,
                "rating": 4.4
            },
            {
                "id": 19,
                "title": "Women's Winter Coat",
                "category": "Fashion",
                "image": " /images/Women's Winter Coat.webp",
                "old_price": 200,
                "new_price": 160,
                "rating": 4.8
            },
            {
                "id": 20,
                "title": "Men's Leather Jacket",
                "category": "Fashion",
                "image": "/images/Men's Leather Jacket.jpeg",
                "old_price": 250,
                "new_price": 200,
                "rating": 4.9
            },
            {
                "id": 21,
                "title": "Sneakers - Adidas",
                "category": "Fashion",
                "image": "/images/Sneakers - Adidas.webp",
                "old_price": 100,
                "new_price": 80,
                "rating": 4.7
            },
            {
                "id": 22,
                "title": "Blender - High Speed",
                "category": "Supermarket",
                "image": "/images/Blender - High Speed.webp",
                "old_price": 80,
                "new_price": 60,
                "rating": 4.6
            },
            {
                "id": 23,
                "title": "Organic Bananas",
                "category": "Supermarket",
                "image": "/images/Organic Bananas.jpeg",
                "old_price": 5,
                "new_price": 3,
                "rating": 4.9
            },
            {
                "id": 24,
                "title": "Baby Diapers - Size 4",
                "category": "Baby Care Products",
                "image": "/images/Baby Diapers - Size.webp",
                "old_price": 50,
                "new_price": 40,
                "rating": 4.7
            },
            {
                "id": 25,
                "title": "Baby Lotion - Sensitive Skin",
                "category": "Baby Care Products",
                "image": "/images/Baby Lotion.jpeg",
                "old_price": 20,
                "new_price": 15,
                "rating": 4.7
            },
            {
                "id": 26,
                "title": "Baby Wipes - Aloe Vera",
                "category": "Baby Care Products",
                "image": "/images/Baby Wipes.jpeg",
                "old_price": 15,
                "new_price": 10,
                "rating": 4.5
            },
            {
                "id": 27,
                "title": "The Catcher in the Rye",
                "category": "Books",
                "image": "/images/The Catcher in the Rye.webp",
                "old_price": 18,
                "new_price": 13,
                "rating": 4.6
            },
            {
                "id": 28,
                "title": "The Hobbit",
                "category": "Books",
                "image": "/images/The Hobbit.jpeg",
                "old_price": 22,
                "new_price": 17,
                "rating": 4.9
            },
            {
                "id": 29,
                "title": "Aquarium Fish Food",
                "category": "Pet Care Products",
                "image": "/images/Aquarium Fish Food.jpeg",
                "old_price": 12,
                "new_price": 9,
                "rating": 4.4
            },
            {
                "id": 30,
                "title": "Dog Chew Toys",
                "category": "Pet Care Products",
                "image": "/images/Dog Chew Toys.webp",
                "old_price": 10,
                "new_price": 7,
                "rating": 4.5
            },
                { "id": 31,"title": "Eco-Friendly Baby Shampoo", "price": 12, "old_price": 15, "new_price": 12, "category": "Baby Care", "rating": 4.8, "image": "images/babycare/Eco-Friendly Baby Shampoo.jpg" },
                { "id": 32,"title": "Soft Baby Blanket", "price": 20, "old_price": 25, "new_price": 20, "category": "Baby Care", "rating": 4.6, "image": "images/babycare/Soft Baby Blanket.jpg" },
                { "id": 33,"title": "Organic Baby Lotion", "price": 10, "old_price": 12, "new_price": 10, "category": "Baby Care", "rating": 4.5, "image": "images/babycare/Organic Baby Lotion.jpg" },
                { "id": 34,"title": "Hypoallergenic Baby Wipes", "price": 5, "old_price": 7, "new_price": 5, "category": "Baby Care", "rating": 4.7, "image": "images/babycare/Hypoallergenic Baby Wipes.jpg" },
                { "id": 35,"title": "Bamboo Diapers", "price": 15, "old_price": 20, "new_price": 15, "category": "Baby Care", "rating": 4.9, "image": "images/babycare/Bamboo Diapers.jpg" },
                { "id": 36,"title": "Baby Sunscreen", "price": 14, "old_price": 16, "new_price": 14, "category": "Baby Care", "rating": 4.6, "image": "images/babycare/Baby Sunscreen.jpg" },
                { "id": 37,"title": "Gentle Baby Body Wash", "price": 11, "old_price": 13, "new_price": 11, "category": "Baby Care", "rating": 4.7, "image": "images/babycare/Gentle Baby Body Wash.jpg" },
                { "id": 38,"title": "Soft Baby Pajamas", "price": 18, "old_price": 22, "new_price": 18, "category": "Baby Care", "rating": 4.8, "image": "images/babycare/Soft Baby Pajamas.jpg" },
                { "id": 39,"title": "Breathable Baby Mattress", "price": 150, "old_price": 180, "new_price": 150, "category": "Baby Care", "rating": 4.9, "image": "images/babycare/Breathable Baby Mattress.jpg" },
                { "id": 40,"title": "Cotton Baby Diapers", "price": 20, "old_price": 25,"new_price": 20, "category": "Baby Care", "rating": 4.8, "image": "images/babycare/Cotton Baby Diapers.jpg" },
                { "id": 41, "title": "The Hunger Games", "price": 13, "old_price": 15, "new_price": 13, "category": "Books", "rating": 4.6, "image": "images/books/The Hunger Games.jpg" },
                { "id": 42, "title": "The Fault in Our Stars", "price": 1, "old_price": 3, "new_price": 1, "category": "Books", "rating": 4.9, "image": "images/books/The Fault in Our Stars.jpg" },
                { "id": 43, "title": "1984", "price": 15, "old_price": 20, "new_price": 15, "category": "Books", "rating": 4.8, "image": "images/books/1984.jpg" },
                { "id": 44, "title": "Brave New World", "price": 20, "old_price": 25, "new_price": 20, "category": "Books", "rating": 4.7, "image": "images/books/Brave New World.jpg" },
                { "id": 45, "title": "Pride and Prejudice", "price": 18, "old_price": 22, "new_price": 18, "category": "Books", "rating": 4.6, "image": "images/books/Pride and Prejudice.jpg" },
                { "id": 46, "title": "Moby Dick", "price": 25, "old_price": 30, "new_price": 25, "category": "Books", "rating": 4.5, "image": "images/books/Moby Dick.jpg" },
                { "id": 47, "title": "The Great Gatsby", "price": 22, "old_price": 27, "new_price": 22, "category": "Books", "rating": 4.9, "image": "images/books/The Great Gatsby.jpg" },
                { "id": 48, "title": "The Catcher in the Rye", "price": 18, "old_price": 21, "new_price": 18, "category": "Books", "rating": 4.4, "image": "images/books/The Catcher in the Rye.jpg" },
                { "id": 49, "title": "The Chronicles of Narnia", "price": 30, "old_price": 35, "new_price": 30, "category": "Books", "rating": 4.8, "image": "images/books/The Chronicles of Narnia.jpg" },
                { "id": 50, "title": "To Kill a Mockingbird", "price": 20, "old_price": 25, "new_price": 20, "category": "Books", "rating": 4.9, "image": "images/books/To Kill a Mockingbird.jpg" },
                { "id": 51, "title": "The Kite Runner", "price": 22, "old_price": 27, "new_price": 22, "category": "Books", "rating": 4.7, "image": "images/books/The Kite Runner.jpg" },
                { "id": 52, "title": "Dog Collar", "price": 12, "old_price": 15, "new_price": 12, "category": "Pet Care", "rating": 4.6, "image": "images/petcare/Dog Collar.jpg" },
                { "id": 53, "title": "Cat Food", "price": 25, "old_price": 30, "new_price": 25, "category": "Pet Care", "rating": 4.5, "image": "images/petcare/Cat Food.jpg" },
                { "id": 54, "title": "Dog Treats", "price": 8, "old_price": 10, "new_price": 8, "category": "Pet Care", "rating": 4.7, "image": "images/petcare/Dog Treats.jpg" },
                { "id": 55, "title": "Small Animal Bedding", "price": 15, "old_price": 18, "new_price": 15, "category": "Pet Care", "rating": 4.5, "image": "images/petcare/Small Animal Bedding.jpg" },
                { "id": 56, "title": "Fish Food Flakes", "price": 10, "old_price": 12, "new_price": 10, "category": "Pet Care", "rating": 4.7, "image": "images/petcare/Fish Food Flakes.jpg" },
                { "id": 57, "title": "Dog Shampoo", "price": 15, "old_price": 18, "new_price": 15, "category": "Pet Care", "rating": 4.7, "image": "images/petcare/Dog Shampoo.jpg" },
                { "id": 58, "title": "Bird Perch", "price": 8, "old_price": 10, "new_price": 8, "category": "Pet Care", "rating": 4.5, "image": "images/petcare/Bird Perch.jpg" },
                { "id": 59, "title": "Cat Scratching Post", "price": 35, "old_price": 40, "new_price": 35, "category": "Pet Care", "rating": 4.9, "image": "images/petcare/Cat Scratching Post.jpg" },
                { "id": 60, "title": "Dog Bed", "price": 40, "old_price": 45, "new_price": 40, "category": "Pet Care", "rating": 4.8, "image": "images/petcare/Dog Bed.jpg" },
 
            
        ];
        
    

    // Filter products based on selected price range and category
    const filteredProducts = products.filter(item => {
        // Filter by price
        if (priceFilter === 'low' && item.new_price >= 100) return false;
        if (priceFilter === 'mid' && (item.new_price < 100 || item.new_price > 150)) return false;
        if (priceFilter === 'high' && item.new_price <= 150) return false;

        // Filter by category
        if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;

        return true;
    });

    return (
        <div className="page-background">
            <Banner />
            <FeatureIcons />
            <Container>
                <Row style={{ marginBottom: '20px', textAlign: 'center' }}>
                    {/* Price Filter Dropdown */}
                    <Col md={6}>
                        <Form.Group controlId="priceFilter">
                        <Form.Label style={{ fontSize: '24px', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                            <Form.Control
                                as="select"
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value)}
                                style={{ margin: '0 auto', borderRadius: '5px', border: '1px solid #ced4da' }}
                            >
                                <option value="all">All Prices</option>
                                <option value="low">Less than $100</option>
                                <option value="mid">$100 - $150</option>
                                <option value="high">More than $150</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    {/* Category Filter Dropdown */}
                    <Col md={6}>
                        <Form.Group controlId="categoryFilter">
                        <Form.Label style={{ fontSize: '24px', fontWeight: 'bold' }}>Filter by Category</Form.Label>
                            <Form.Control
                                as="select"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                style={{ margin: '0 auto', borderRadius: '5px', border: '1px solid #ced4da' }}
                            >
                                <option value="all">All Categories</option>
                                <option value="Supermarket">Supermarket</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Pet Care Products">Pet Care Products</option>
                                <option value="Baby Care Products">Baby Care Products</option>
                                <option value="Books">Books</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Products Display */}
                <Row>
                    {filteredProducts.map((item) => (
                        <Col md="4" className="text-center mb-4" key={item.id}>
                            <div className="shadow-box">
                                <div className="product-card">
                                    <img className='img-fluid' style={{ height: "300px", width: "250px" }} src={item.image} alt={item.title} />
                                    <h5>{item.title}</h5>
                                    <h5 className="strikethrough">Old Price: {item.old_price} $</h5>
                                    <h5>New Price: {item.new_price} $</h5>
                                    <h5>Category: {item.category}</h5>
                                    <button className="btn btn-success" onClick={() => addItem({ id: item.id, title: item.title, price: item.new_price, image: item.image })}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

function Cart() {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } = useCart();

    if (isEmpty) return <h2 className='text-center'>Your cart is empty</h2>;

    return (
        <>
            <h1 className='text-center'>Cart ({totalUniqueItems})
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
                                        <td>{item.price * item.quantity} $</td>

                                        <td>
                                            <button className='btn btn-warning' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>
                                            <button className='btn btn-success mx-2' onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                                            <button className='btn btn-danger' onClick={() => removeItem(item.id)}>&times;</button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>
                                    <td>............</td>
                                    <td>{totalItems}</td>
                                    <td>{cartTotal} $</td>
                                    <td>
                                        <a href="//home-page" className='btn btn-primary mr-2'>Continue Shopping</a>
                                        <a href="//payment-page" className='btn btn-success'>Payment</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

function Allhome() {
    return (
        <CartProvider>
            <Page />
        </CartProvider>
    );
}

export default Allhome;
