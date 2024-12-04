import {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';


const templates = [
  {
    id: 'modern',
    name: 'Modern Resume',
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-cv-design-template-1971fc20faa11f3819de404f8d320bcc_screen.jpg?ts=1732709079',
  },
  {
    id: 'creative',
    name: 'Creative Developer',
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/curriculum-vitae-template-design-4114c04f3747860dadc895f20b41b44b_screen.jpg?ts=1698304471',
  },
  {
    id: 'data-science',
    name: 'Data Science/AI',
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/resume-template-design-4782fea09714c30bb0e9b926edd90a6f_screen.jpg?ts=1732690831',
  },
  {
    id: 'technical',
    name: 'Technical Resume',
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-minimal-black-and-white-cv-template-de-design-c94d5aad5efae5634cab5e324b71b8d3_screen.jpg?ts=1664524634',
  },
];


const TypingEffect = ({ textArray, typingSpeed = 150, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return <span>{displayedText}</span>;
};

const Dashboard = () => {


 const [selectedTemplate, setSelectedTemplate] = useState('modern'); // Default template is 'modern'

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const getTemplateClass = () => {
    switch (selectedTemplate) {
      case 'modern':
        return 'modern-template';
      case 'creative':
        return 'creative-template';
      case 'data-science':
        return 'data-science-template';
      case 'technical':
        return 'technical-template';
      default:
        return 'modern-template';
    }
  };

  const selectedTemplateDetails = templates.find(template => template.id === selectedTemplate);



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mb-4 drop-shadow-lg animate-pulse"
        >
        {/* <Typing 
        text={[
          'Craft Your Perfect Resume',
          'Design Your Professional Journey',
        ]}
        speed={100}
            eraseSpeed={50}
            eraseDelay={1500}
            typingDelay={500}
        /> */}
         <TypingEffect
            textArray={[
              'Craft Your Perfect Resume',
              'Design Your Professional Journey',
              'Create Standout Career Documents',
            ]}
          />
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          {/* Explore sleek, professionally crafted templates and tailor them effortlessly to reflect your unique style */}
          <span className="text-blue-400">Explore sleek</span>, professionally crafted templates, and tailor them <span className="text-indigo-400">effortlessly</span> to reflect your unique style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
              <Link
                to={`/builder?template=${template.id}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
              >
                <Layout className="w-4 h-4 mr-2" />
                Use Template
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/builder"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors"
        >
          <FileText className="w-5 h-5 mr-2" />
          Start from Scratch
        </Link>
      </div>
    </motion.div>
  );
};

export default Dashboard;