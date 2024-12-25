// src/app/about/page.tsx



const AboutPage: React.FC = () => (
  <div className="container mx-auto my-10 px-6">
    <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      About Me
    </h2>
    
    <div className="bg-white shadow-lg p-2 rounded-lg">
      <p className="text-xl text-gray-700 mb-6">
        Hello! I&apos;m <span className="font-semibold text-pink-500">Sidra Naz</span>, a creative frontend developer who loves to build responsive and visually stunning websites.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed">
        With a background in <span className="text-blue-500 font-medium">TypeScript</span>, <span className="text-green-500 font-medium">React</span>, and <span className="text-purple-500 font-medium">Tailwind CSS</span>, I focus on creating smooth, engaging user experiences. I am always exploring new technologies and tools to bring fresh ideas into my projects.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-3">My Education</h2>
        <ul className="space-y-2">
          <li>⚡ Intermediate in commerce</li>
          <li>⚡ Matriculation in Science</li>
          <hr />
          <li>⚡ CIT</li>
          <li>⚡ Web Designing</li>
        </ul>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-3">My Goals</h2>
        <p>
          I aim to constantly evolve in the field of web development, focusing on creating applications that are both functional and visually captivating. My goal is to keep learning and growing in my profession.
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
