import React, { useState } from 'react';
import Allnavbar from '../Home/Allnavbar';
import Allfooter from '../Home/Allfooter';
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap';
import { FaCamera } from 'react-icons/fa';  

function Alluserprofile() {
  const defaultAvatar = ' images/image.png'; 
  const [profile, setProfile] = useState({
    name: 'Omar hossam',
    phone: '01984235890',
    email: 'omar@gmail.com',
    address: 'El Mansoura',
    avatar: defaultAvatar, 
  });

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  const handleDeleteAccount = () => {
    setShowModal(true); 
  };

  const handleConfirmDelete = () => {
    setProfile({
      name: '',
      phone: '',
      email: '',
      address: '',
      avatar: 'images/avatar.jpg',  
    });
    setShowModal(false);  
  };
  

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);  
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSaveChanges = () => {
    setProfile(newProfile);
    setEditMode(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result }); 
      };
      reader.readAsDataURL(file);  
    }
  };

  return (
    <div>
      <Allnavbar />
      <Container style={styles.container} className="d-flex flex-column align-items-center">
        <h1 className="mb-4 text-center" style={styles.header}>User Profile</h1>

        <Form style={styles.form}>
       
          <Row className="mb-3">
            <Col md={4}>
              <div style={styles.avatarContainer}>
                <img
                  src={profile.avatar}
                  alt="User Avatar"
                  style={{
                    ...styles.avatar,
                    width: '200px',  
                    height: '200px',  
                    objectFit: 'cover', 
                    borderRadius: '50%'   
                  }}
                />
                 
                <label htmlFor="avatarInput" style={styles.cameraIcon}>
                  <FaCamera size={30} />  
                </label>
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}  
                />
              </div>
            </Col>
            <Col md={8}>
             
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label style={styles.label}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={editMode ? newProfile.name : profile.name}
                      onChange={handleProfileChange}
                      readOnly={!editMode}
                      style={styles.input}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label style={styles.label}>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={editMode ? newProfile.phone : profile.phone}
                      onChange={handleProfileChange}
                      readOnly={!editMode}
                      style={styles.input}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label style={styles.label}>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={editMode ? newProfile.email : profile.email}
                      onChange={handleProfileChange}
                      readOnly={!editMode}
                      style={styles.input}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group>
                    <Form.Label style={styles.label}>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={editMode ? newProfile.address : profile.address}
                      onChange={handleProfileChange}
                      readOnly={!editMode}
                      style={styles.input}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>

         
          <div className="d-flex justify-content-center mt-4">
            {!editMode ? (
              <Button variant="primary" onClick={handleEditToggle} style={styles.editButton}>
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="success" onClick={handleSaveChanges} style={styles.saveButton}>
                  Save Changes
                </Button>
                <Button variant="secondary" onClick={handleEditToggle} style={styles.cancelButton}>
                  Cancel
                </Button>
              </>
            )}
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button variant="danger" onClick={handleDeleteAccount} style={styles.deleteButton}>
              Delete Account
            </Button>
          </div>
        </Form>

      
        <Modal show={showModal} onHide={handleCancelDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Account Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete your account? This action cannot be undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Allfooter />
    </div>
  );
}

const styles = {
  container: {
    padding: '150px 90px 0 90px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  avatarContainer: {
    marginBottom: '20px',
    textAlign: 'center', 
    position: 'relative',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ddd',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '5px',
    cursor: 'pointer',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
  },
  form: {
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    padding: '40px 20px',
    borderRadius: '8px',
    backgroundColor: '#fff',  
    marginBottom: '80px', 
  },
  label: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  editButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    padding: '10px 20px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    padding: '10px 20px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    padding: '10px 20px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
    marginLeft: '10px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    padding: '10px 20px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#fff',
    marginTop: '20px',
  },
};

export default Alluserprofile;
