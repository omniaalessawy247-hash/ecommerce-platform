import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function FeaturedPerfumes({ addToWishlist, wishlist, setWishlist }) {
    const { addItem } = useCart();
    const [filter, setFilter] = useState('all');

    // Api
    const featuredPerfumes =   [
        { "id": 1, "title": "Chanel No. 5 Perfume", "image": "images/perfum  makeup/Chanel No. 5 Perfume.jpg", "price": 3000, "rating": 4.9, "type": "perfume" },
        { "id": 2, "title": "Fenty Beauty Pro Filt’r Foundation", "image": "images/perfum  makeup/Fenty Beauty Pro Filt’r Foundation.jpg", "price": 1300, "rating": 4.8, "type": "makeup" },
      
        { "id": 3, "title": "Dior Sauvage Eau de Toilette", "image": "images/perfum  makeup/Dior Sauvage Eau de Toilette.jpg", "price": 2500, "rating": 4.8, "type": "perfume" },
        { "id": 4, "title": "Huda Beauty Desert Dusk Palette", "image": "images/perfum  makeup/Huda Beauty Desert Dusk Palette.jpg", "price": 1300, "rating": 4.6, "type": "makeup" },
      
        { "id": 5, "title": "Yves Saint Laurent Black Opium", "image": "images/perfum  makeup/Yves Saint Laurent Black Opium.jpg", "price": 2700, "rating": 4.7, "type": "perfume" },
        { "id": 6, "title": "NARS Orgasm Blush", "image": "images/perfum  makeup/NARS Orgasm Blush.jpg", "price": 800, "rating": 4.9, "type": "makeup" },
      
        { "id": 7, "title": "Tom Ford Tobacco Vanille", "image": "images/perfum  makeup/Tom Ford Tobacco Vanille.jpg", "price": 3500, "rating": 4.9, "type": "perfume" },
        { "id": 8, "title": "Marc Jacobs Daisy", "image": "images/perfum  makeup/Marc Jacobs Daisy.jpg", "price": 2200, "rating": 4.5, "type": "makeup" },
      
        { "id": 9, "title": "Gucci Bloom Eau de Parfum", "image": "images/perfum  makeup/Gucci Bloom Eau de Parfum.jpg", "price": 2800, "rating": 4.6, "type": "perfume" },
        { "id": 10, "title": "Charlotte Tilbury Magic Cream", "image": "images/perfum  makeup/Charlotte Tilbury Magic Cream.jpg", "price": 1500, "rating": 4.7, "type": "makeup" },
      
        { "id": 31, "title": "Dolce & Gabbana Light Blue", "image": "images/perfum  makeup/Dolce & Gabbana Light Blue.jpg", "price": 3000, "rating": 4.6, "type": "perfume" },
      
        { "id": 12, "title": "Too Faced Better Than Sex Mascara", "image": "images/perfum  makeup/Too Faced Better Than Sex Mascara.jpg", "price": 700, "rating": 4.5, "type": "makeup" },
      
        { "id": 13, "title": "Givenchy L'Interdit", "image": "images/perfum  makeup/Givenchy L'Interdit.jpg", "price": 3000, "rating": 4.8, "type": "perfume" },
        { "id": 14, "title": "Giorgio Armani Lip Maestro", "image": "images/perfum  makeup/Giorgio Armani Lip Maestro.jpg", "price": 900, "rating": 4.6, "type": "makeup" },
      
        { "id": 15, "title": "Prada Candy", "image": "images/perfum  makeup/Prada Candy.jpg", "price": 2600, "rating": 4.7, "type": "perfume" },
        { "id": 16, "title": "Benefit Hoola Bronzer", "image": "images/perfum  makeup/Benefit Hoola Bronzer.jpg", "price": 1000, "rating": 4.7, "type": "makeup" },
      
        { "id": 17, "title": "Jo Malone Peony & Blush Suede", "image": "images/perfum  makeup/Jo Malone Peony & Blush Suede.jpg", "price": 2900, "rating": 4.8, "type": "perfume" },
        { "id": 18, "title": "MAC Cosmetics Studio Fix Fluid", "image": "images/perfum  makeup/MAC Cosmetics Studio Fix Fluid.jpg", "price": 1200, "rating": 4.8, "type": "makeup" },
      
        { "id": 19, "title": "Armani Si Eau de Parfum", "image": "images/perfum  makeup/Armani Si Eau de Parfum.jpg", "price": 3100, "rating": 4.6, "type": "perfume" },
        { "id": 20, "title": "Dior Addict Lip Glow", "image": "images/perfum  makeup/Dior Addict Lip Glow.jpg", "price": 800, "rating": 4.5, "type": "makeup" },
      
        { "id": 21, "title": "Burberry Her Eau de Parfum", "image": "images/perfum  makeup/Burberry Her Eau de Parfum.jpg", "price": 3200, "rating": 4.7, "type": "perfume" },
        { "id": 22, "title": "Urban Decay Naked Eyeshadow Palette", "image": "images/perfum  makeup/Urban Decay Naked Eyeshadow Palette.jpg", "price": 1500, "rating": 4.7, "type": "makeup" },
      
        { "id": 23, "title": "Bvlgari Omnia Crystalline", "image": "images/perfum  makeup/Bvlgari Omnia Crystalline.jpg", "price": 2500, "rating": 4.6, "type": "perfume" },
        { "id": 24, "title": "Yves Saint Laurent Touche Éclat", "image": "images/perfum  makeup/Yves Saint Laurent Touche Éclat.jpg", "price": 1300, "rating": 4.7, "type": "makeup" },
      
        { "id": 25, "title": "Hermès Terre d'Hermès", "image": "images/perfum  makeup/Hermès Terre d'Hermès.jpg", "price": 2800, "rating": 4.8, "type": "perfume" },
        { "id": 26, "title": "Guerlain Mon Guerlain", "image": "images/perfum  makeup/Guerlain Mon Guerlain.jpg", "price": 3200, "rating": 4.6, "type": "perfume" },
      
        { "id": 27, "title": "Lancôme La Vie Est Belle", "image": "images/perfum  makeup/Lancôme La Vie Est Belle.jpg", "price": 2900, "rating": 4.9, "type": "perfume" },
        { "id": 28, "title": "Salvatore Ferragamo Signorina", "image": "images/perfum  makeup/Salvatore Ferragamo Signorina.jpg", "price": 2400, "rating": 4.5, "type": "perfume" },
      
        { "id": 29, "title": "Versace Bright Crystal", "image": "images/perfum  makeup/Versace Bright Crystal.jpg", "price": 2200, "rating": 4.4, "type": "perfume" },
        { "id": 30, "title": "Calvin Klein Euphoria", "image": "images/perfum  makeup/Calvin Klein Euphoria.jpg", "price": 2100, "rating": 4.5, "type": "perfume" }
    ];
  

    const filteredPerfumes = () => {
        if (filter === 'all') {
            return featuredPerfumes;
        } else if (filter === 'under1500') {
            return featuredPerfumes.filter(item => item.price < 1500);
        } else if (filter === 'under3000') {
            return featuredPerfumes.filter(item => item.price < 3000);
        } else if (filter === 'above3000') {
            return featuredPerfumes.filter(item => item.price >= 3000);
        }
        return featuredPerfumes;
    };

   
    return (
        <Container>
            <Row>
                <Form.Group controlId="filterPerfumes" style={{ marginBottom: '20px' }}>
                    <Form.Label style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Filter by Price</Form.Label>
                    <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All Perfumes</option>
                        <option value="under1500">Under $1500</option>
                        <option value="under3000">Under $3000</option>
                        <option value="above3000">Above $3000</option>
                    </Form.Control>
                </Form.Group>

                {filteredPerfumes().map((item) => (
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



function Allmakeupperfums() {
    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
        return storedWishlist ? storedWishlist : [];
    });
 
    function Banner() {
        return (
            <Container fluid style={{ margin: 0, padding: 0 }}>
                <Row style={{ margin: 0, padding: 0 }}>
                    <Col md={4} className="banner-animation mb-0" style={{ padding: 0 }}>
                        <img src="images/perfum  makeup/1.jpg " alt="Banner 1" style={{ width: '100%', height: '100%' }} />
                    </Col>
                    <Col md={4} className="banner-animation mb-0" style={{ padding: 0 }}>
                        <img src=" images/perfum  makeup/2.jpg" alt="Banner 2" style={{ width: '100%', height: '100%' }} />
                    </Col>
                    <Col md={4} className="banner-animation mb-0" style={{ padding: 0 }}>
                        <img src=" images/perfum  makeup/3.jpg" alt="Banner 3" style={{ width: '100%', height: '100%' }} />
                    </Col>
                </Row>
                <div style={{ textAlign: 'center', margin: 14 }}>
                    <h1 className="slideUpDown" style={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        color: 'transparent',
                        background: 'linear-gradient(90deg, #6a5acd, #ff69b4)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                    }}> 
 "A fragrance that expresses you and makeup that highlights your beauty."
                    </h1>
                </div>
            </Container>
        );
    }

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
            <FeaturedPerfumes
                addToWishlist={addToWishlist}
                wishlist={wishlist}
                setWishlist={setWishlist}
            />
            <Allfooter />
        </CartProvider>
    );
}

export default Allmakeupperfums;
