import React from 'react';
import './about.css'; // Make sure to create this CSS file for custom styling

const About = () => {
    return (
        <div className="aboutContainer">
            <h1>About Our Warehouse Management System</h1>
        {/* style to mobile text-align: center; font-size: 27px; */}
            <p>
                Welcome to our Warehouse Management System (WMS), a powerful tool designed to help businesses efficiently manage their inventory and streamline their operations.
            </p>
            <h2>Features</h2>
            <ul>
                <li><strong>Product Management:</strong> Easily add, update, and delete products in your warehouse.</li>
                <li><strong>Inventory Tracking:</strong> Keep track of stock levels and ensure you never run out of essential items.</li>
                <li><strong>Data Analytics:</strong> Analyze your inventory data to make informed decisions and optimize your warehouse operations.</li>
                <li><strong>User-Friendly Interface:</strong> Enjoy a simple and intuitive interface that makes managing your warehouse a breeze.</li>
            </ul>
            <h2>How It Works</h2>
            <p>
                Our system provides a comprehensive set of tools for managing your warehouse. With an easy-to-use interface, you can quickly add new products, update existing ones, and track inventory levels. The system ensures that all data is up-to-date and accessible, allowing you to make quick decisions and keep your warehouse running smoothly.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or need assistance, feel free to contact our support team at <a href="mailto:yousefeslam214@gmail.com">yousef@email.com</a>.
            </p>
        </div>
    );
};

export default About;
