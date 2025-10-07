import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { isDark } = useTheme();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'jhaaniket2005@gmail.com',
      link: 'mailto:jhaaniket2005@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8651628470',
      link: 'tel:+918651628470',
      description: 'Call for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Kolkata, India',
      link: '#',
      description: 'Available for remote work globally'
    },
    {
      icon: Calendar,
      title: 'Availability',
      details: 'Open to opportunities',
      link: '#',
      description: 'Currently accepting new projects'
    }
  ];

  return (
    <section id="contact" className={`py-20 lg:py-32 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    } relative`}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Work Together
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            isDark ? 'bg-blue-400' : 'bg-blue-600'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? Let's discuss your project and 
            create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Get in Touch
              </h3>
              <p className={`text-lg mb-8 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 group hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600' 
                      : 'bg-white/50 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`flex-shrink-0 p-3 rounded-lg transition-colors duration-300 ${
                    isDark 
                      ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' 
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                  }`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {info.title}
                    </h4>
                    <p className={`font-medium mb-1 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {info.details}
                    </p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {info.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Find me on social media
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com', icon: '🐱' },
                  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
                  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 ${
                      isDark 
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className={`p-8 rounded-2xl ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-white/50 border border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-6">
                <MessageSquare className={`${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} size={24} />
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Send a Message
                </h3>
              </div>

              {submitted && (
                <div className={`p-4 rounded-lg mb-6 flex items-center space-x-3 ${
                  isDark 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-green-50 border border-green-200 text-green-700'
                }`}>
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        errors.name
                          ? isDark 
                            ? 'border-red-500 bg-red-500/5 text-red-400' 
                            : 'border-red-500 bg-red-50 text-red-700'
                          : isDark 
                            ? 'bg-gray-900/50 border-gray-600 text-gray-300 focus:border-blue-500 focus:bg-gray-900' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className={`mt-1 text-sm flex items-center space-x-1 ${
                        isDark ? 'text-red-400' : 'text-red-600'
                      }`}>
                        <AlertCircle size={14} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        errors.email
                          ? isDark 
                            ? 'border-red-500 bg-red-500/5 text-red-400' 
                            : 'border-red-500 bg-red-50 text-red-700'
                          : isDark 
                            ? 'bg-gray-900/50 border-gray-600 text-gray-300 focus:border-blue-500 focus:bg-gray-900' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className={`mt-1 text-sm flex items-center space-x-1 ${
                        isDark ? 'text-red-400' : 'text-red-600'
                      }`}>
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      errors.subject
                        ? isDark 
                          ? 'border-red-500 bg-red-500/5 text-red-400' 
                          : 'border-red-500 bg-red-50 text-red-700'
                        : isDark 
                          ? 'bg-gray-900/50 border-gray-600 text-gray-300 focus:border-blue-500 focus:bg-gray-900' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className={`mt-1 text-sm flex items-center space-x-1 ${
                      isDark ? 'text-red-400' : 'text-red-600'
                    }`}>
                      <AlertCircle size={14} />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                      errors.message
                        ? isDark 
                          ? 'border-red-500 bg-red-500/5 text-red-400' 
                          : 'border-red-500 bg-red-50 text-red-700'
                        : isDark 
                          ? 'bg-gray-900/50 border-gray-600 text-gray-300 focus:border-blue-500 focus:bg-gray-900' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                  {errors.message && (
                    <p className={`mt-1 text-sm flex items-center space-x-1 ${
                      isDark ? 'text-red-400' : 'text-red-600'
                    }`}>
                      <AlertCircle size={14} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? isDark 
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : isDark 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-[1.02] shadow-lg hover:shadow-blue-600/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;