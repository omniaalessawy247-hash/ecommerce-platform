import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

function Allfooter() {
    return (
        <footer className="bg-gradient text-white py-5">
            <div className="container text-center">
                <h2 className="mb-4">Welcome to Infinite Market</h2>
                <p className="lead">Shop with ease, explore endless possibilities!</p>

                <h5>Connect with Us</h5>
                <div className="mb-3">
                    <a href="https://wa.me/01140339077" className="text-white mx-2 hover-effect">
                        <FaWhatsapp size={24} /> 
                    </a>
                    <a href="#" className="text-white mx-2 hover-effect">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="text-white mx-2 hover-effect">
                        <FaInstagram size={24} />
                    </a>
                </div>

                <h5>Payment Methods</h5>
                <div className="mb-4">
                    <FaCcVisa size={24} className="mx-2" />
                    <FaCcMastercard size={24} className="mx-2" />
                    <FaCcPaypal size={24} className="mx-2" />
                </div>

                <h5>Need Help?</h5>
                <div className="mb-4">
                    <a href="#" className="text-white mx-3">Contact Support</a>
                    <a href="#" className="text-white mx-3">Live Chat</a>
                </div>

                <p className="mt-4">© 2024 Infinite Market. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Allfooter;
