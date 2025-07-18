
import AboutImage from '../images/AboutImage.jpg'; // Adjust the path as needed


const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Clothing E-Comm</span>
          </h2>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            Clothing E-Comm is a modern fashion e-commerce platform offering stylish, affordable, and high-quality apparel for every taste and occasion. We merge fashion with technology to deliver a seamless shopping experience.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Built using ReactJS, TailwindCSS, and Material UI, the platform is optimized for speed, responsiveness, and cross-browser compatibility. With smart features like lazy loading, shimmer UI, and Redux-powered state management, our platform ensures performance and accessibility.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img 
            src={AboutImage}
            alt="Fashion Display"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
