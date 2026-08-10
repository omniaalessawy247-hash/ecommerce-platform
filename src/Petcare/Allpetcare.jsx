import React, { useState } from 'react'; 
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { CartProvider, useCart } from 'react-use-cart';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';  
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';


function PetCareProducts() {
    const { addItem } = useCart();

    // Api
    const petCareProducts =    [
      { "id": 1, "title": "Premium Dog Food", "price": 30, "rating": 4.5, "image": " images/petcare/Premium Dog Food.jpg" },
      { "id": 2, "title": "Catnip Toy", "price": 10, "rating": 4.8, "image": "images/petcare/Catnip Toy.jpg" },
      { "id": 3, "title": "Dog Leash", "price": 15, "rating": 4.7, "image": "  images/petcare/Dog Leash.jpg" },
        { "id": 4, "title": "Rabbit Food", "price": 20, "rating": 4.6, "image": "images/petcare/Rabbit Food.jpg" },
        { "id": 5, "title": "Bird Seed Mix", "price": 15, "rating": 4.5, "image": "images/petcare/Bird Seed Mix.jpg" },
        { "id": 6, "title": "Fish Tank Filter", "price": 40, "rating": 4.7, "image": "images/petcare/Fish Tank Filter.jpg" },
        { "id": 7, "title": "Hamster Cage", "price": 50, "rating": 4.9, "image": "images/petcare/Hamster Cage.jpg" },
        { "id": 8, "title": "Ferret Food", "price": 30, "rating": 4.6, "image": "images/petcare/Ferret Food.jpg" },
        { "id": 9, "title": "Turtle Food", "price": 12, "rating": 4.8, "image": "images/petcare/Turtle Food.jpg" },
        { "id": 10, "title": "Bird Cage", "price": 70, "rating": 4.7, "image": "images/petcare/Bird Cage.jpg" },
        { "id": 11, "title": "Dog Collar", "price": 12, "rating": 4.6, "image": "images/petcare/Dog Collar.jpg" },
        { "id": 12, "title": "Cat Food", "price": 25, "rating": 4.5, "image": "images/petcare/Cat Food.jpg" },
        { "id": 13, "title": "Dog Treats", "price": 8, "rating": 4.7, "image": "images/petcare/Dog Treats.jpg" },
        { "id": 14, "title": "Small Animal Bedding", "price": 15, "rating": 4.5, "image": "images/petcare/Small Animal Bedding.jpg" },
        { "id": 15, "title": "Fish Food Flakes", "price": 10, "rating": 4.7, "image": "images/petcare/Fish Food Flakes.jpg" },
        { "id": 16, "title": "Dog Shampoo", "price": 15, "rating": 4.7, "image": "images/petcare/Dog Shampoo.jpg" },
        { "id": 17, "title": "Bird Perch", "price": 8, "rating": 4.5, "image": "images/petcare/Bird Perch.jpg" },
        { "id": 18, "title": "Cat Scratching Post", "price": 35, "rating": 4.9, "image": "images/petcare/Cat Scratching Post.jpg" },
        { "id": 19, "title": "Dog Bed", "price": 40, "rating": 4.8, "image": "images/petcare/Dog Bed.jpg" },
        { "id": 20, "title": "Fish Tank Decor", "price": 25, "rating": 4.6, "image": "images/petcare/Fish Tank Decor.jpg" },
        { "id": 21, "title": "Small Animal Chew Toys", "price": 5, "rating": 4.7, "image": "images/petcare/Small Animal Chew Toys.jpg" },
        { "id": 22, "title": "Dog Training Pads", "price": 20, "rating": 4.7, "image": "images/petcare/Dog Training Pads.jpg" },
        { "id": 23, "title": "Pet Water Fountain", "price": 40, "rating": 4.7, "image": "images/petcare/Pet Water Fountain.jpg" },
        { "id": 24, "title": "Reptile Food", "price": 20, "rating": 4.8, "image": "images/petcare/Reptile Food.jpg" },
        { "id": 25, "title": "Cat Litter", "price": 12, "rating": 4.6, "image": "images/petcare/Cat Litter.jpg" },
        { "id": 26, "title": "Pet First Aid Kit", "price": 25, "rating": 4.9, "image": "images/petcare/Pet First Aid Kit.jpg" },
        { "id": 27, "title": "Dog Harness", "price": 20, "rating": 4.7, "image": "images/petcare/Dog Harness.jpg" },
        { "id": 28, "title": "Dog Fetch Toy", "price": 12, "rating": 4.6, "image": "images/petcare/Dog Fetch Toy.jpg" },
        { "id": 29, "title": "Cat Harness", "price": 15, "rating": 4.6, "image": "images/petcare/Cat Harness.jpg" },
        { "id": 30, "title": "Pet Carrier", "price": 50, "rating": 4.8, "image": "images/petcare/Pet Carrier.jpg" },
          { "id": 31, "title": "Pet Toothbrush", "price": 5, "rating": 4.8, "image": "images/petcare/Pet Toothbrush.jpg" },
          { "id": 32, "title": "Cat Nail Clipper", "price": 10, "rating": 4.6, "image": "images/petcare/Cat Nail Clipper.jpg" },
          { "id": 33, "title": "Dog Wipes", "price": 8, "rating": 4.7, "image": "images/petcare/Dog Wipes.jpg" },
          { "id": 34, "title": "Flea and Tick Treatment", "price": 25, "rating": 4.9, "image": "images/petcare/Flea and Tick Treatment.jpg" },
          { "id": 35, "title": "Ear Cleaner for Dogs", "price": 12, "rating": 4.8, "image": "images/petcare/Ear Cleaner for Dogs.jpg" },
          { "id": 36, "title": "Pet Bathing Glove", "price": 15, "rating": 4.5, "image": "images/petcare/Pet Bathing Glove.jpg" },
          { "id": 37, "title": "Pet Sunscreen", "price": 20, "rating": 4.6, "image": "images/petcare/Pet Sunscreen.jpg" },
          { "id": 38, "title": "Dog Life Jacket", "price": 35, "rating": 4.7, "image": "images/petcare/Dog Life Jacket.jpg" },
          { "id": 39, "title": "Pet Cooling Mat", "price": 30, "rating": 4.9, "image": "images/petcare/Pet Cooling Mat.jpg" },
          { "id": 40, "title": "Dog Crate Cover", "price": 25, "rating": 4.8, "image": "images/petcare/Dog Crate Cover.jpg" },
          { "id": 41, "title": "Pet First Aid Spray", "price": 10, "rating": 4.7, "image": "images/petcare/Pet First Aid Spray.jpg" },
          { "id": 42, "title": "Dog Eye Wipes", "price": 8, "rating": 4.6, "image": "images/petcare/Dog Eye Wipes.jpg" },
          { "id": 43, "title": "Cat Grooming Brush", "price": 15, "rating": 4.7, "image": "images/petcare/Cat Grooming Brush.jpg" },
          { "id": 44, "title": "Pet Hair Remover", "price": 10, "rating": 4.6, "image": "images/petcare/Pet Hair Remover.jpg" },
          { "id": 45, "title": "Dog Paw Balm", "price": 12, "rating": 4.8, "image": "images/petcare/Dog Paw Balm.jpg" },
          { "id": 46, "title": "Pet Calming Spray", "price": 20, "rating": 4.5, "image": "images/petcare/Pet Calming Spray.jpg" },
          { "id": 47, "title": "Dog Training Clicker", "price": 5, "rating": 4.9, "image": "images/petcare/Dog Training Clicker.jpg" },
          { "id": 48, "title": "Pet Travel Water Bottle", "price": 15, "rating": 4.7, "image": "images/petcare/Pet Travel Water Bottle.jpg" },
          { "id": 49, "title": "Pet Carrier Backpack", "price": 50, "rating": 4.6, "image": "images/petcare/Pet Carrier Backpack.jpg" },
          { "id": 50, "title": "Dog Snuffle Mat", "price": 30, "rating": 4.8, "image": "images/petcare/Dog Snuffle Mat.jpg" },
          { "id": 51, "title": "Cat Tree Tower", "price": 100, "rating": 4.7, "image": "images/petcare/Cat Tree Tower.jpg" },
          { "id": 52, "title": "Pet Grooming Kit", "price": 40, "rating": 4.6, "image": "images/petcare/Pet Grooming Kit.jpg" },
          { "id": 53, "title": "Dog Training Treats", "price": 10, "rating": 4.8, "image": "images/petcare/Dog Training Treats.jpg" },
          { "id": 54, "title": "Pet Car Seat Cover", "price": 25, "rating": 4.7, "image": "images/petcare/Pet Car Seat Cover.jpg" },
          { "id": 55, "title": "Dog Backpack", "price": 30, "rating": 4.6, "image": "images/petcare/Dog Backpack.jpg" },
          { "id": 56, "title": "Pet Water Bottle with Bowl", "price": 12, "rating": 4.5, "image": "images/petcare/Pet Water Bottle with Bowl.jpg" },
          { "id": 57, "title": "Cat Nail File", "price": 7, "rating": 4.9, "image": "images/petcare/Cat Nail File.jpg" },
          { "id": 58, "title": "Pet Flea Comb", "price": 5, "rating": 4.8, "image": "images/petcare/Pet Flea Comb.jpg" },
          { "id": 59, "title": "Pet Grooming Scissors", "price": 20, "rating": 4.7, "image": "images/petcare/Pet Grooming Scissors.jpg" },
          { "id": 60, "title": "Dog Seatbelt", "price": 15, "rating": 4.6, "image": "images/petcare/Dog Seatbelt.jpg" }
        
        
      
  ];

    return (
        <Row>
            {petCareProducts.map((product) => (
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
    );
}

function AllPetCare() {
    const [activeSection, setActiveSection] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    //  static comments
    const staticComments =  [
      { name: "Sara", text: "I bought the premium dog food, and my dog has become more active and happy! Great quality." },
      { name: "Ahmed", text: "The catnip toy is amazing! My cat plays with it all day long, truly a great investment!" },
      { name: "Fatima", text: "Your products really make a difference! I feel like my dog is healthier and happier after using your food." },
      { name: "Mariam", text: "The quality is fantastic and the prices are reasonable. I'm impressed with the beautiful design of the toys!" },
      { name: "Youssef", text: "I love how these products help improve my pets' behavior. Truly exceptional!" },
      { name: "Mona", text: "Your products have made a significant difference in my cat's life. I hope everyone discovers their benefits!" },
      { name: "Ali", text: "Not only does your product look great, but it's also incredibly effective! I can see the change in my pets." },
      { name: "Hala", text: "My dog loves his new food! A mix of amazing flavors and natural ingredients. Thank you for this quality!" },
      { name: "Kareem", text: "I can see the difference in my cat's health thanks to your food. Great product!" },
      { name: "Saad", text: "I've found the perfect product for taking care of my pet. There's no doubt I'll be ordering again!" },
  ];

    const handleButtonClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
        setIsVisible(true);  
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (name && commentText) {
            setComments([...comments, { name, text: commentText }]);
            setName('');
            setCommentText('');
        }
    };

    const handleCommentDelete = (index) => {
        const newComments = comments.filter((_, i) => i !== index);
        setComments(newComments);
    };

    return (
        <CartProvider>
            <Allnavbar />

            <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', padding: "0" }}>
                <img
                    src="images/petcare/petcare.jpg"
                    alt="Pet Care Banner"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            {/* buttons  */}
                <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
                    <Button variant="light" className="menu-button" onClick={() => handleButtonClick('consultation')}>Free Consultation</Button>
                    <Button variant="light" className="menu-button" onClick={() => handleButtonClick('Adoption stories')}> Adoption Stories</Button>
                    <Button variant="light" className="menu-button" onClick={() => handleButtonClick('petCareTips')}>Pet Care Tips</Button>
                    <Button variant="light" className="menu-button" onClick={() => handleButtonClick('comments')}>Comments</Button>
                </div>
            </div>

   
            <Container style={{ marginTop: '20px' }}>
                {isVisible && (
                    <div>
                        {activeSection === 'consultation' && (
                            <Row className="my-5">
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Free Consultation</Card.Title>
                                            <Card.Text>
                                                Do you have questions about your pet's health, behavior, or nutrition? Our team of pet care experts is here to provide personalized advice and support. 
                                                <br />
                                                We understand that every pet is unique, and we aim to address your specific concerns and needs. 
                                                <br />
                                                During the consultation, you can discuss your pet's diet, common health issues, and behavioral challenges. 
                                                <br />
                                                We also offer guidance on training techniques and how to create a healthy environment for your furry friend. 
                                                <br />
                                                Don't miss this opportunity to enhance your pet's well-being!
                                            </Card.Text>
                                            <Button variant="primary">Contact Us for a Free Consultation</Button>
                                            <FaWhatsapp /> <strong>WhatsApp:</strong> <a href="https://wa.me/01140339077">01999767543</a>
                                            <br />
                                            <FaPhone /> <strong>Hotline:</strong> 0800-123-456
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )}
                        {activeSection === 'Adoption stories' && (
                            <Row className="my-5">
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Adoption Stories</Card.Title>
                                            <Card.Text>
                                                <strong>1. Ahmed and Max:</strong> After finding a lost puppy named Max on the street, Ahmed decided to adopt him. Max brought immense joy into Ahmed's life, motivating him to engage in outdoor activities and socialize with other pet owners. Their bond has shown that love and companionship can truly transform lives, inspiring Ahmed to advocate for pet adoption in the community.
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>2. Sarah and Pusheen:</strong> Sarah, feeling lonely after moving to a new city, adopted a neglected cat named Pusheen from a local shelter. Pusheen's playful nature and affectionate personality not only lifted Sarah's spirits but also helped her make new friends in the neighborhood. Their heartwarming story showcases the positive impact of adopting pets and the incredible bonds that can be formed.
                                            </Card.Text>
                                            <Card.Text>
                                                <strong>3. John and Bella:</strong> John rescued Bella, an injured dog, from a busy street. With the help of a veterinarian, Bella recovered fully and became John's loyal companion. Their journey together has inspired John to start a blog sharing tips and experiences on pet care and adoption, encouraging others to consider rescuing animals in need.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )}
                       {activeSection === 'petCareTips' && (
    <Row className="my-5">
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>Pet Care Tips</Card.Title>
                    <Card.Text>
                        <strong>1. Nutrition</strong><br />
                        <strong>Cats:</strong><br />
                        Cats require a diet based on animal protein, such as meat and poultry. Offer dry or wet food specifically made for cats, ensuring a variety of food sources. Avoid giving milk to adult cats, as it may cause digestive issues. Ensure fresh, clean water is always available.<br /><br />
                        
                        <strong>Dogs:</strong><br />
                        Dogs need a balanced diet containing protein, carbohydrates, and fats. Offer dry or wet food based on the dog's age and weight. Avoid giving chocolate, grapes, and onions to dogs as they are toxic. Provide clean water regularly, especially during hot weather or after physical activity.<br /><br />

                        <strong>Rabbits:</strong><br />
                        Rabbits need a fiber-rich diet, including hay and fresh vegetables. Avoid sugary or starchy foods like bread and cereals. Ensure fresh water is always available.<br /><br />

                        <strong>Birds:</strong><br />
                        Birds need a varied diet that includes seeds, fresh fruits, and vegetables. Avoid giving fatty or salty foods like chips. Provide clean water, and change it regularly.<br /><br />

                        <strong>Fish:</strong><br />
                        Fish require a specific diet depending on their type (ornamental, tropical, or marine). Avoid overfeeding fish, as this can pollute the water. Ensure a varied diet for fish, including pellets and flakes.<br /><br />

                        <strong>Hamsters and other rodents:</strong><br />
                        Rodents need a balanced diet that includes fruits, vegetables, and seeds. Providing hay and straw is important for healthy digestion.<br /><br />
                    </Card.Text>
                    <Card.Text>
                        <strong>2. Cage Cleaning and Environment</strong><br />
                        <strong>Cats:</strong><br />
                        The litter box should be cleaned daily to avoid bad odors, and the litter should be changed regularly. Clean the cat's sleeping area and wash bedding frequently. Toys and feeding areas can be cleaned with mild soap and water.<br /><br />

                        <strong>Dogs:</strong><br />
                        Clean the dog's sleeping area once a week, and change and wash the bedding regularly. Keep food and water bowls clean, washing them with soap and water. If the dog uses a crate for sleeping or resting, it should be cleaned and sanitized regularly.<br /><br />

                        <strong>Rabbits:</strong><br />
                        Clean the cage weekly and change the hay periodically to maintain a clean and healthy environment. Regularly clean food and water dishes to avoid bacteria buildup.<br /><br />

                        <strong>Birds:</strong><br />
                        Cages should be cleaned regularly, and food and water should be changed daily. Providing a small bath for birds helps them maintain personal hygiene.<br /><br />

                        <strong>Hamsters and other rodents:</strong><br />
                        Cages should be cleaned weekly, with bedding changed regularly. Ensure food and water dishes are kept clean daily.<br /><br />
                    </Card.Text>
                    <Card.Text>
                        <strong>3. Importance of a Suitable Environment</strong><br />
                        <strong>Cats:</strong><br />
                        Cats love exploring high places, so providing a climbing tower or indoor shelves encourages movement. The ideal environment for cats should include stimulating toys like cotton balls and scratching posts to maintain their mental and physical health. Providing quiet, secluded areas for hiding and resting is essential for keeping the cat comfortable.<br /><br />

                        <strong>Dogs:</strong><br />
                        Dogs need ample space for movement and play, especially active breeds. Stimulating toys like balls and chewables can help provide physical activity. Ensure a safe and comfortable environment for sleep and rest, away from noise or disturbance.<br /><br />

                        <strong>Rabbits:</strong><br />
                        Rabbits need plenty of space to move inside the cage, with the option to access an area for exercise outside the cage. Providing toys and chewable items helps maintain the health of rabbits' teeth.<br /><br />

                        <strong>Birds:</strong><br />
                        Birds need a spacious cage with the ability to fly or move freely inside it. Providing toys like mirrors and bells helps keep birds entertained and happy.<br /><br />

                        <strong>Fish:</strong><br />
                        Fish tanks should be equipped with filters and sufficient oxygen to maintain clean water and the health of the fish. Adding plants or decorations to the tank provides a natural environment for fish and reduces stress.<br /><br />

                        <strong>Hamsters and other rodents:</strong><br />
                        The cage should be spacious and include a running wheel and tunnels for activity. Rodents enjoy mentally stimulating toys such as small balls and natural chews.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
)}
                        {activeSection === 'comments' && (
                            <Row className="my-5">
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Comments</Card.Title>
                                            <Form onSubmit={handleCommentSubmit}>
                                                <Form.Group controlId="name">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="comment">
                                                    <Form.Label>Comment</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        value={commentText}
                                                        onChange={(e) => setCommentText(e.target.value)}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Button type="submit" variant="primary">Submit</Button>
                                            </Form>
                                            <div className="comments-section">
                                                <h5 className="mt-4"> :</h5>
                                                <ul >
    {comments.map((comment, index) => (
        <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>{comment.name}:</strong> {comment.text}</span>
            <Button variant="danger" size="sm" onClick={() => handleCommentDelete(index)}>Delete</Button>
        </li>
    ))}
    {staticComments.map((comment, index) => (
        <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><strong>{comment.name}:</strong> {comment.text}</span>
         {/*  */}
        </li>
    ))}
</ul>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )}
                    </div>
                )}

                <Row>
                    <Col>
                        <PetCareProducts />
                    </Col>
                </Row>
            </Container>

            <Allfooter />
        </CartProvider>
    );
}

export default AllPetCare;
