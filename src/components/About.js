import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          At <span className="font-semibold text-indigo-600">StyleNest</span>, we believe fashion is not just what you wear—it’s how you express your identity. Our mission is to provide timeless, comfortable, and sustainable clothing for everyone.
        </p>
        <p className="text-gray-600 text-base">
          Founded in 2023, StyleNest blends tradition with modernity. We work with skilled artisans and eco-conscious materials to bring you clothing that lasts—both in quality and in style. From everyday wear to standout statements, we've got you covered.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
