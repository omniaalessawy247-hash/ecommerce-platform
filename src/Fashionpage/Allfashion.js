import React, { useState } from 'react';
import Allfooter from '../Home/Allfooter';
import Allnavbar from '../Home/Allnavbar';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaShoppingCart, FaInstagram, FaWhatsapp } from 'react-icons/fa';
 

const fashionCategories = [
  { 
    name: 'Bags', 
    image: '/images/bag1.webp', 
    description: 'Carry your style wherever you go! Our collection of bags combines elegance and practicality. From classic bags to trendy ones, you will find something that suits your taste.',
    link: '/Bags' 
  },
  { 
    name: 'Kids Clothing', 
    image: '/images/kids clothes.jpeg', 
    description:"Because your children deserve the best! Our kids' clothing combines comfort and style in every piece. Featuring vibrant colors and playful designs, every day is a special adventure for your little ones.",
    link: '/Kidsclothing'
  },
  { 
    name: 'Men\'s Clothing', 
    image: '/images/men fahion.jpeg', 
    description:"Elevate your style wherever you go! Our men's clothing collection combines elegance and comfort. From classic suits to trendy casual wear, you'll find the perfect outfit for every occasion.",
    link: '/Mensclothing'
  },
  { 
    name: 'Women\'s Clothing', 
    image: '/images/women fashion.jpeg', 
    description: 'Shine in your elegance! Explore our diverse collection of women\'s clothing that reflects your personality and gives you a stunning look for any occasion.',
    link: '/Womensclothing'
  },
  { 
    name: 'Makeup & Perfumes', 
    image: '/images/makeup and perfums.jpeg', 
    description: 'Make every moment special! Our collection of makeup and perfumes adds a touch of magic to your day, helping you look your best.',
    link: '/Makeupperfums'
  },
  { 
    name: 'Shoes', 
    image: '/images/shoeses.jpg', 
    description: 'Add the finishing touch to your look! Our shoes are not only stylish but also comfortable, ensuring you’re ready for anything.',
    link: '/Shoes'
  },
];

function Allfashion() {
  const [userComments, setUserComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  const staticComments = [
    { text: "I love my new bag! It goes with everything!", author: "Sarah" },
    { text: "The kids' clothing is both stylish and comfortable! My kids love it!", author: "John" },
    { text: "Amazing collection of shoes! I can't get enough!", author: "Maria" },
    { text: "Fantastic quality! Highly recommend this store!", author: "Emily" },
    { text: "The makeup products are simply the best. My favorite place to shop!", author: "Anna" },
    { text: "Great service and fast shipping. I will definitely be back!", author: "Michael" },
  ];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment && author) {
      setUserComments([...userComments, { text: newComment, author }]);
      setNewComment("");
      setAuthor("");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = userComments.filter((_, i) => i !== index);
    setUserComments(updatedComments);
  };

  return (
    <div>
      <Allnavbar />

      {/* image */}
      <div style={{ padding: '100px 0px 50px 0px', overflow: 'hidden' }}>
        <img 
          className="img-fluid responsive-image" 
          src="/images/fashion1.avif" 
          alt="First slide" 
          style={{ width: '100%', maxHeight: '760px', objectFit: 'cover', margin: '0 auto' }}  
        />
      </div>

      {/* social media */}
      <Container className="my-1 text-center" style={{ marginTop: '10px' }}>
        <h3 style={{ fontSize: '28px', color: '#E1306C' }}>Follow Us on Social Media</h3>
        <p style={{ fontSize: '28px', color: '#25D366' }}>Stay updated with the latest trends and collections!</p>
        <Row className="justify-content-center">
          <Col md={3} className="mb-1">
            <div 
              style={{ 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                padding: '20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <a 
                href="https://www.instagram.com/omnia_alessawy?igsh=cTd3bGowZXFnN3Vn" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '28px', color: '#E1306C' }} 
              >
                <FaInstagram />
              </a>
              <p>Instagram</p>
            </div>
          </Col>
          <Col md={3} className="mb-1">
            <div 
              style={{ 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                padding: '20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <a 
                href={`https://wa.me/01140339077`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '28px', color: '#25D366' }} 
              >
                <FaWhatsapp />
              </a>
              <p>WhatsApp</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="my-1" style={{ padding: '50px 20px' }}>
        <Row>
          {fashionCategories.map((category, index) => (
            <Col md={4} key={index} className="mb-4 text-center">
              <div className="category-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-fluid rounded-top"
                  style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                />
                <h3>{category.name}</h3>
                <div className="p-3">
                  <p className="text-muted">{category.description}</p>
                  <Link to={{ pathname: category.link }}>
                    <FaShoppingCart className="me-1" /> Shop Now
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Customer Testimonials Section */}
      <Container className="my-5 text-center">
        <h2 style={{ fontWeight: 'bold', marginBottom: '50px' }}>What Our Customers Say</h2>
        <Row>
          {staticComments.map((comment, index) => (
            <Col md={4} key={index}>
              <div className="comment-card">
                <blockquote>"{comment.text}"</blockquote>
                <p>- {comment.author}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* User Comments Section */}
      <Container className="my-5">
        <h3>User Comments</h3>
        <Row>
          {userComments.map((comment, index) => (
            <Col md={4} key={index}>
              <div className="comment-card">
                <blockquote>"{comment.text}"</blockquote>
                <p>- {comment.author}</p>
                <Button variant="danger" onClick={() => handleDeleteComment(index)}>Delete</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Add a Comment Form */}
      <Container className="my-5">
        <h3>Add Your Comment</h3>
        <Form onSubmit={handleCommentSubmit}>
          <Form.Group controlId="formAuthor">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your name" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
            />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Your comment" 
              value={newComment} 
              onChange={(e) => setNewComment(e.target.value)} 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Comment
          </Button>
        </Form>
      </Container>

      <Allfooter />
    </div>
  );
}

export default Allfashion;
