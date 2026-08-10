import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';

function SupermarketBanner() {
    return (
        <div className="banner-container"style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" , paddingTop: "100px" }}>
        <div className="creative-section"style={{ textAlign: "center" }}>
            <div className="inspiration">
            <Container className="text-center my-1">
  <div style={{ textAlign: 'center', margin: '40px 0' }}>
                <h1 style={{ 
                    fontWeight: 'bold', 
                    fontSize: '2rem', 
                    color: 'transparent',  
                    background: 'linear-gradient(90deg, #6a5acd, #ff69b4)',  
                    WebkitBackgroundClip: 'text',  
                    backgroundClip: 'text'  
                }}>
                     
"Fresh products at your fingertips. Shop now for fast delivery and great deals!"
                </h1>
            </div>
  </Container>
            </div>

                <div className="decorative-shapes">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="cooking-tips">
                    <h3>Cooking Tips</h3>
                    <ul style={{ listStyle: "none", padding: "0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"  }}>
    <li style={{ marginBottom: "10px" }}>
        <img 
            src="images/imgsupermarket/chief hat.jpg" 
            alt="Chef's Hat" 
            style={{ width: "30px", height: "30px", marginBottom: "5px" }} 
        />
        Try mixing fresh fruits into your salad for a delicious flavor!
    </li>
    <li style={{ marginBottom: "10px" }}>
        <img 
            src="images/imgsupermarket/chief hat.jpg" 
            alt="Chef's Hat" 
            style={{ width: "30px", height: "30px", marginBottom: "5px" }} 
        />
        Enhance your pasta with a sprinkle of fresh herbs and a drizzle of olive oil.
    </li>
    <li style={{ marginBottom: "10px" }}>
        <img 
            src="images/imgsupermarket/chief hat.jpg" 
            alt="Chef's Hat" 
            style={{ width: "30px", height: "30px", marginBottom: "5px" }} 
        />
        Add a pinch of salt to your dessert to elevate the sweetness!
    </li>
    <li style={{ marginBottom: "10px" }}>
        <img 
            src="images/imgsupermarket/chief hat.jpg" 
            alt="Chef's Hat" 
            style={{ width: "30px", height: "30px", marginBottom: "5px" }} 
        />
        Use room temperature eggs for baking to ensure better mixing and texture.
    </li>
</ul>

                </div>
            </div>
        </div>
    );
}

function SupermarketProducts() {
  const { addItem } = useCart();

  const supermarketProducts =  [
    {
        "id": 1,
        "title": "Organic Avocados",
        "price": 7,
        "rating": 4.8,
         "image": "images/imgsupermarket/Organic Avocados.webp"
    },
    {
        "id": 2,
        "title": "Whole Wheat Bread",
        "price": 3,
        "rating": 4.5,
        "image": " images/imgsupermarket/Whole Wheat Bread.webp "
    },
    {
        "id": 3,
        "title": "Almond Milk",
        "price": 6,
        "rating": 4.6,
        "image": "images/imgsupermarket/Almond Milk.webp"
    },
    {
        "id": 4,
        "title": "Blender - High Speed",
        "price": 60,
        "rating": 4.6,
        "image": " images/imgsupermarket/Blender - High Speed.jpg "
    },
    {
        "id": 5,
        "title": "Organic Bananas",
        "price": 3,
        "rating": 4.9,
        "image": " images/imgsupermarket/Organic Bananas.webp "
    },
    {
        "id": 6,
        "title": "Brown Rice",
        "price": 4,
        "rating": 4.7,
        "image": " images/imgsupermarket/Brown Rice.jpeg"
    },
    {
        "id": 7,
        "title": "Fresh Spinach",
        "price": 2,
        "rating": 4.8,
        "image": " /images/imgsupermarket/Fresh Spinach.jpeg "
    },
    {
        "id": 8,
        "title": "Greek Yogurt",
        "price": 5,
        "rating": 4.9,
        "image": " images/imgsupermarket/Greek Yogurt.jpg "
    },
    {
        "id": 9,
        "title": "Frozen Blueberries",
        "price": 4,
        "rating": 4.5,
        "image": "images/imgsupermarket/Frozen Blueberries.jpg "
    },
    {
        "id": 10,
        "title": "Coconut Oil",
        "price": 8,
        "rating": 4.8,
        "image": "  images/imgsupermarket/Coconut Oil.jpg"
    },
    {
        "id": 11,
        "title": "Quinoa",
        "price": 9,
        "rating": 4.7,
        "image": "images/imgsupermarket/Quinoa.jpg"
    },
    {
        "id": 12,
        "title": "Organic Eggs",
        "price": 6,
        "rating": 4.9,
        "image": " images/imgsupermarket/Organic Eggs.jpg "
    },
    {
        "id": 13,
        "title": "Carrots",
        "price": 1,
        "rating": 4.6,
        "image": "images/imgsupermarket/Carrots.jpg"
    },
    {
        "id": 14,
        "title": "Chicken Breast",
        "price": 10,
        "rating": 4.5,
        "image": "images/imgsupermarket/Chicken Breast.jpg "
    },
    {
        "id": 15,
        "title": "Beef Steak",
        "price": 15,
        "rating": 4.8,
        "image": "images/imgsupermarket/Beef Steak.jpg"
    },
    {
        "id": 16,
        "title": "Pasta",
        "price": 2,
        "rating": 4.7,
        "image": "images/imgsupermarket/Pasta.jpg"
    },
    {
        "id": 17,
        "title": "Tomato Sauce",
        "price": 3,
        "rating": 4.6,
        "image": "images/imgsupermarket/Tomato Sauce.jpg"
    },
    {
        "id": 18,
        "title": "Oats",
        "price": 4,
        "rating": 4.5,
        "image": "images/imgsupermarket/Oats.jpg"
    },
    {
        "id": 19,
        "title": "Honey",
        "price": 8,
        "rating": 4.9,
        "image": "images/imgsupermarket/Honey.jpg "
    },
    {
        "id": 20,
        "title": "Peanut Butter",
        "price": 5,
        "rating": 4.8,
        "image": "images/imgsupermarket/Peanut Butter.jpg "
    },
    {
        "id": 21,
        "title": "Olive Oil",
        "price": 12,
        "rating": 4.9,
        "image": "images/imgsupermarket/Olive Oil.jpg"
    },
    {
        "id": 22,
        "title": "Garlic",
        "price": 1,
        "rating": 4.7,
        "image": "images/imgsupermarket/Garlic.jpg "
    },
    {
        "id": 23,
        "title": "Onions",
        "price": 1,
        "rating": 4.6,
        "image": "images/imgsupermarket/Onions.jpg "
    },
    {
        "id": 24,
        "title": "Potatoes",
        "price": 2,
        "rating": 4.5,
        "image": "images/imgsupermarket/Potatoes.jpg "
    },
    {
        "id": 25,
        "title": "Green Peppers",
        "price": 2,
        "rating": 4.5,
        "image": "images/imgsupermarket/Green Peppers.jpg"
    },
    {
        "id": 26,
        "title": "Frozen Vegetables",
        "price": 4,
        "rating": 4.7,
        "image": "images/imgsupermarket/frozen vegetabels.jpg"
    },
    {
        "id": 27,
        "title": "Rice Cakes",
        "price": 3,
        "rating": 4.8,
        "image": "images/imgsupermarket/Rice Cakes.jpeg"
    },
    {
        "id": 28,
        "title": "Granola Bars",
        "price": 5,
        "rating": 4.6,
        "image": " images/imgsupermarket/Granola Bars.jpg "
    },
    {
        "id": 29,
        "title": "Cereal",
        "price": 4,
        "rating": 4.9,
        "image": "images/imgsupermarket/Cereal.jpg "
    },
    {
        "id": 30,
        "title": "Pita Bread",
        "price": 2,
        "rating": 4.7,
        "image": " images/imgsupermarket/Pita Bread.jpg"
    },
    {
        "id": 31,
        "title": "Soy Sauce",
        "price": 3,
        "rating": 4.5,
        "image": "images/imgsupermarket/Soy Sauce.webp "
    },
    {
        "id": 32,
        "title": "Tortilla Chips",
        "price": 4,
        "rating": 4.8,
        "image": " images/imgsupermarket/Tortilla Chips.jpg "
    },
    {
        "id": 33,
        "title": "Salsa",
        "price": 3,
        "rating": 4.6,
        "image": "images/imgsupermarket/Salsa.jpg "
    },
    {
        "id": 34,
        "title": "Pickles",
        "price": 2,
        "rating": 4.5,
        "image": "images/imgsupermarket/Pickles.jpg "
    },
    {
        "id": 35,
        "title": "Ketchup",
        "price": 3,
        "rating": 4.8,
        "image": "images/imgsupermarket/Ketchup.jpg "
    },
    {
        "id": 36,
        "title": "Mustard",
        "price": 2,
        "rating": 4.5,
        "image": "images/imgsupermarket/Mustard.webp "
    },
    {
        "id": 37,
        "title": "Mayonnaise",
        "price": 4,
        "rating": 4.7,
        "image": " images/imgsupermarket/Mayonnaise.png "
    },
    {
        "id": 38,
        "title": "Balsamic Vinegar",
        "price": 5,
        "rating": 4.9,
        "image": "images/imgsupermarket/Balsamic Vinegar.png "
    },
    {
        "id": 39,
        "title": "Black Beans",
        "price": 2,
        "rating": 4.6,
        "image": "images/imgsupermarket/Black Beans.jpeg "
    },
    {
        "id": 40,
        "title": "Chickpeas",
        "price": 2,
        "rating": 4.5,
        "image": "images/imgsupermarket/Chickpeas.jpg"
    },
    {
        "id": 41,
        "title": "Lentils",
        "price": 3,
        "rating": 4.8,
        "image": "images/imgsupermarket/Lentils.webp "
    },
    {
        "id": 42,
        "title": "Sweet Potatoes",
        "price": 2,
        "rating": 4.7,
        "image": "images/imgsupermarket/Sweet Potatoes.jpeg"
    },
    {
        "id": 43,
        "title": "Cabbage",
        "price": 2,
        "rating": 4.6,
        "image": "images/imgsupermarket/Cabbage.jpeg "
    },
    {
        "id": 44,
        "title": "Cauliflower",
        "price": 3,
        "rating": 4.9,
        "image": "images/imgsupermarket/Cauliflower.jpeg"
    },
    {
        "id": 45,
        "title": "Zucchini",
        "price": 2,
        "rating": 4.5,
        "image": "images/imgsupermarket/Zucchini.jpeg"
    },
    {
        "id": 46,
        "title": "Broccoli",
        "price": 2,
        "rating": 4.8,
        "image": "/images/imgsupermarket/Broccoli.jpeg "
    },
    {
        "id": 47,
        "title": "Asparagus",
        "price": 4,
        "rating": 4.7,
        "image": "images/imgsupermarket/Asparagus.jpeg  "
    },
    {
        "id": 48,
        "title": "Pumpkin",
        "price": 3,
        "rating": 4.6,
        "image": "images/imgsupermarket/Pumpkin Seeds.jpeg "
    },
    {
        "id": 49,
        "title": "Spinach",
        "price": 2,
        "rating": 4.9,
        "image": "images/imgsupermarket/Spinach.jpeg "
    },
    {
        "id": 50,
        "title": "Eggplant",
        "price": 2,
        "rating": 4.5,
        "image": "images/imgsupermarket/Eggplant.jpeg "
    },
    {
        "id": 51,
        "title": "Cucumber",
        "price": 2,
        "rating": 4.6,
        "image": "images/imgsupermarket/Cucumber.jpeg "
    },
    {
        "id": 52,
        "title": "Celery",
        "price": 1,
        "rating": 4.7,
        "image": "images/imgsupermarket/Celery.jpeg"
    },
    {
        "id": 53,
        "title": "Bell Peppers",
        "price": 2,
        "rating": 4.8,
        "image": "images/imgsupermarket/Bell Peppers.jpeg "
    },
    {
        "id": 54,
        "title": "Cherries",
        "price": 5,
        "rating": 4.9,
        "image": "images/imgsupermarket/Cherries.jpg "
    },
    {
        "id": 55,
        "title": "Grapes",
        "price": 4,
        "rating": 4.6,
        "image": "images/imgsupermarket/Green Peppers.jpg "
    },
    {
        "id": 56,
        "title": "Peaches",
        "price": 3,
        "rating": 4.8,
        "image": "images/imgsupermarket/Peaches.jpeg  "
    },
    {
        "id": 57,
        "title": "Pineapple",
        "price": 5,
        "rating": 4.5,
        "image": "images/imgsupermarket/Pineapple.jpeg"
    },
    {
        "id": 58,
        "title": "Mango",
        "price": 4,
        "rating": 4.6,
        "image": "images/imgsupermarket/Mango.jpeg "
    },
    {
        "id": 59,
        "title": "Lemon",
        "price": 1,
        "rating": 4.7,
        "image": "images/imgsupermarket/Lemon.jpeg "
    },
    {
        "id": 60,
        "title": "Lime",
        "price": 1,
        "rating": 4.6,
        "image": "images/imgsupermarket/Lime.jpeg "
    },
    {
        "id": 61,
        "title": "Watermelon",
        "price": 5,
        "rating": 4.8,
        "image": "images/imgsupermarket/Watermelon.webp "
    },
    {
        "id": 62,
        "title": "Strawberries",
        "price": 4,
        "rating": 4.9,
        "image": "images/imgsupermarket/Strawberries.jpg "
    },
    {
        "id": 63,
        "title": "Blueberries",
        "price": 4,
        "rating": 4.5,
        "image": "images/imgsupermarket/Blueberries.jpg "
    },
    {
        "id": 64,
        "title": "Blackberries",
        "price": 4,
        "rating": 4.8,
        "image": "images/imgsupermarket/Bell Peppers.jpeg "
    },
    {
        "id": 65,
        "title": "Raspberries",
        "price": 5,
        "rating": 4.6,
        "image": "images/imgsupermarket/Raspberries.jpg "
    },
    {
        "id": 66,
        "title": "Peas",
        "price": 2,
        "rating": 4.7,
        "image": "images/imgsupermarket/Peas.jpeg "
    },
    {
        "id": 67,
        "title": "Pumpkin Seeds",
        "price": 3,
        "rating": 4.5,
        "image": "images/imgsupermarket/Pumpkin Seeds.jpeg "
    },
    {
        "id": 68,
        "title": "Chia Seeds",
        "price": 5,
        "rating": 4.9,
        "image": "images/imgsupermarket/Chia Seeds.jpeg "
    },
    {
        "id": 69,
        "title": "Flax Seeds",
        "price": 4,
        "rating": 4.8,
        "image": "images/imgsupermarket/Flax Seeds.png "
    },
    {
        "id": 70,
        "title": "Sunflower Seeds",
        "price": 3,
        "rating": 4.7,
        "image": "images/imgsupermarket/Sunflower Seeds.jpeg "
    },
    {
        "id": 71,
        "title": "Almonds",
        "price": 10,
        "rating": 4.6,
        "image": "images/imgsupermarket/Almond Milk.webp "
    },
    {
        "id": 72,
        "title": "Walnuts",
        "price": 12,
        "rating": 4.8,
        "image": "images/imgsupermarket/Walnuts.jpg "
    },
    {
        "id": 73,
        "title": "Cashews",
        "price": 10,
        "rating": 4.7,
        "image": "images/imgsupermarket/Cashews.webp "
    },
    {
        "id": 74,
        "title": "Pistachios",
        "price": 15,
        "rating": 4.8,
        "image": "images/imgsupermarket/Pistachios.jpg"
    },
    {
        "id": 75,
        "title": "Hazelnuts",
        "price": 12,
        "rating": 4.6,
        "image": " images/imgsupermarket/Hazelnuts.jpeg"
    },
    {
        "id": 76,
        "title": "Dark Chocolate",
        "price": 4,
        "rating": 4.9,
        "image": "images/imgsupermarket/Dark Chocolate.jpeg "
    },
    {
        "id": 77,
        "title": "Milk Chocolate",
        "price": 3,
        "rating": 4.8,
        "image": "images/imgsupermarket/Milk Chocolate.jpeg "
    },
    {
        "id": 78,
        "title": "White Chocolate",
        "price": 3,
        "rating": 4.7,
        "image": "images/imgsupermarket/White Chocolate.jpg"
    },
    {
        "id": 79,
        "title": "Chocolate Chip Cookies",
        "price": 5,
        "rating": 4.9,
        "image": "images/imgsupermarket/Chocolate Chip Cookies.jpeg "
    },
    {
        "id": 80,
        "title": "Ice Cream",
        "price": 6,
        "rating": 4.6,
        "image": "images/imgsupermarket/Ice Cream.jpeg "
    },
        {
            "id": 81,
            "title": "Pizza",
            "price": 10,
            "rating": 4.5,
            "image": " images/imgsupermarket/Pizza.webp"
        },
        {
            "id": 82,
            "title": "Pasta",
            "price": 8,
            "rating": 4.8,
            "image": " images/imgsupermarket/Pasta.webp"
        },
        {
            "id": 83,
            "title": "tea",
            "price": 5,
            "rating": 4.6,
            "image": "images/imgsupermarket/tea.jpg "
        }
]
;

return (
    <Container>
      <Row>
        {supermarketProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card style={{ height: '100%' }}>
              <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div style={{ textAlign: 'center' }}>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ color: 'red', textDecoration: 'line-through' }}></Card.Text>
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

function Supermarket() {
  return (
    <CartProvider>
      <Allnavbar />
      <SupermarketBanner />
      <SupermarketProducts />
      <Allfooter />
    </CartProvider>
  );
}

export default Supermarket;
