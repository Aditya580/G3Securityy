import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="form-part border-4 border-orange-500 border-b-blue-500 p-6 rounded-lg shadow-lg bg-white w-[90%] sm:w-[50%] lg:w-[40%]">
                <div className="form">
                    <div className="form-details text-center">
                        <h1 className="text-2xl font-bold mb-4">Let's Connect with Us</h1>
                        
                        <div className="name mb-4">
                            <div className="input flex gap-4">
                                <input type="text" placeholder="First Name" className="w-1/2 p-2 border rounded" />
                                <input type="text" placeholder="Last Name" className="w-1/2 p-2 border rounded" />
                            </div>
                        </div>
                        <div className="name mb-4">
                            <div className="input flex gap-4">
                                <input type="email" placeholder="Email" className="w-1/2 p-2 border rounded" />
                                <input type="number" placeholder="Phone Number" className="w-1/2 p-2 border rounded" />
                            </div>
                        </div>
                        <div className="name mb-4">
                            <div className="input">
                                <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
                            </div>
                        </div>
                        <div className="name">
                            <div className="input text-center">
                                <input type="submit" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map mt-6">
                <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7340.129136832227!2d77.50634463731967!3d23.09473208553464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c47b6d656d071%3A0xa4ae9a9957a321eb!2sShiv%20vatika%20Patel%20Nagar%20Mandideep!5e0!3m2!1sen!2sin!4v1741354674279!5m2!1sen!2sin"
                    width="800" height="600" 
                    className="w-[85vw] h-[70vh] border-2 border-orange-500" 
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Contact;
