import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-12 px-4">
      <Navbar />
      <main className="container mx-auto my-12 px-4">
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to bookStore, your number one source for all things books. We're dedicated to giving you the very best of literature, with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 2024 by Sparsh, bookStore has come a long way from its beginnings in a small office. When Sparsh first started out, my passion for reading drove them to start their own business.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We now serve customers all over the country and are thrilled to be a part of the literary industry. We hope you enjoy our products as much as we enjoy offering them to you.
          </p>
          <p className="text-lg text-gray-700">
            If you have any questions or comments, please don't hesitate to <a href="/contact" className="text-blue-600 hover:text-blue-800">contact us</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
