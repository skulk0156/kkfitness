const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images_1.jpg')" }} // make sure this image is in your public folder
      >
        <div className="text-center px-4">
          <p className="text-blue-500 tracking-widest text-sm font-semibold uppercase">
            Our Business
          </p>
          <h1 className="text-5xl font-bold mt-2 tracking-wide">About Us</h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <p className="text-blue-600 text-sm font-bold uppercase mb-4 tracking-widest">What We Do</p>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Designing Impactful Digital Fitness Experiences <br className="hidden md:block" />
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">

We merge aesthetics with functionality to create powerful, immersive online journeys. From seamless user interfaces to performance-driven layouts, every pixel is crafted to inspire, engage, and deliver value to your fitness goals. Our mission is to make your digital interaction as motivating as your physical transformation.


          </p>
        </div>

        {/* Right Icon Box */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex items-start space-x-5">
          <div className="text-blue-600 text-4xl">
            💎
          </div>
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-2">
              A True Business Partner
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
We’re more than just a service provider — we’re your partner in transformation. Whether you're building strength, boosting endurance, or enhancing wellness, our team stands beside you with unwavering support, expert guidance, and personalized attention. Together, we work to achieve your goals and create real, lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Visually Stunning Section */}
      <section className="flex flex-col md:flex-row w-full min-h-[80vh]">
        {/* Left Image Side */}
        <div
          className="md:w-1/2 w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images_4.jpg')" }} // replace with your actual image
        ></div>

        {/* Right Content Side */}
        <div className="md:w-1/2 w-full bg-gray-900 text-white px-6 py-12 md:px-12 flex flex-col justify-center">
          <p className="text-blue-500 text-sm uppercase tracking-widest mb-2">WHAT WE DO</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
            Crafting Visually Stunning <br /> Memorable Experiences
          </h2>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="text-blue-500 text-2xl">💎</div>
              <p className="text-sm text-gray-300">
                
Elevating Your Wellness Journey
We fuse design, performance, and community to create immersive fitness experiences that leave a lasting impression—whether you're training solo or part of a group.


              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="text-blue-500 text-2xl">☕</div>
              <p className="text-sm text-gray-300">
                 Empowering Everyday Progress
From expert guidance to tailored programs, we provide the tools and motivation you need to stay consistent, inspired, and aligned with your goals—every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
