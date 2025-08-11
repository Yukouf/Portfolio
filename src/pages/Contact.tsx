import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import CopyButton from '../components/CopyEmailButton'

const Contact = () => {
  const { t } = useLanguage()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.location'),
      value: t('contact.location'),
      link: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/Yukouf" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/in/youssefguerniou" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/yourusername" }
  ]

  const faqs = [
    {
      question: t('contact.faqServices'),
      answer: t('contact.faqServicesAnswer')
    },
    {
      question: t('contact.faqTimeline'),
      answer: t('contact.faqTimelineAnswer')
    },
    {
      question: t('contact.faqInternational'),
      answer: t('contact.faqInternationalAnswer')
    },
    {
      question: t('contact.faqProcess'),
      answer: t('contact.faqProcessAnswer')
    }
  ]

  return (
    <div className="ai-bg min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="ai-subtitle mb-4">{t('contact.getInTouch')}</div>
            <h1 className="ai-title text-5xl md:text-7xl mb-8">
              {t('contact.letsConnect')}
            </h1>
            <p className="ai-text text-xl max-w-3xl mx-auto">
              {t('contact.connectDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="ai-card p-6 text-center"
            >
              <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: '#00A8FF' }} />
              <h3 className="ai-title text-xl mb-2">{t('contact.email')}</h3>
              <div className="flex justify-center">
                <CopyButton 
                  value={t('contact.emailAddress')} 
                  type="email"
                  variant="icon-only"
                  className="mx-auto"
                />
              </div>
              <div className="ai-text mt-2 text-sm">{t('contact.emailAddress')}</div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="ai-card p-6 text-center"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" style={{ color: '#00A8FF' }} />
              <h3 className="ai-title text-xl mb-2">{t('contact.phone')}</h3>
              <div className="flex justify-center">
                <CopyButton 
                  value={t('contact.phone')} 
                  type="phone"
                  variant="icon-only"
                  className="mx-auto"
                />
              </div>
              <div className="ai-text mt-2 text-sm">{t('contact.phone')}</div>
            </motion.div>

            {/* Other contact info */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                className="ai-card p-6 text-center"
              >
                <info.icon className="w-12 h-12 mx-auto mb-4" style={{ color: '#00A8FF' }} />
                <h3 className="ai-title text-xl mb-2">{info.title}</h3>
                <a 
                  href={info.link} 
                  className="ai-text hover:text-watchdogs-blue transition-colors"
                >
                  {info.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="ai-card p-8"
            >
              <h2 className="ai-title text-3xl mb-6">{t('contact.sendMessage')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="ai-label block mb-2">{t('contact.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="ai-input w-full"
                    required
                  />
                </div>
                <div>
                  <label className="ai-label block mb-2">{t('contact.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="ai-input w-full"
                    required
                  />
                </div>
                <div>
                  <label className="ai-label block mb-2">{t('contact.subject')}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="ai-input w-full"
                    required
                  />
                </div>
                <div>
                  <label className="ai-label block mb-2">{t('contact.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="ai-input w-full resize-none"
                    required
                  />
                </div>
                <button type="submit" className="ai-button-yellow w-full py-4">
                  <Send className="w-5 h-5 mr-2 inline" />
                  {t('contact.send')}
                </button>
              </form>
            </motion.div>

            {/* Social Links & FAQ */}
            <div className="space-y-8">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="ai-card p-8"
              >
                <h2 className="ai-title text-3xl mb-6">{t('contact.connectWithMe')}</h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 ai-card hover:border-watchdogs-blue transition-all duration-300"
                    >
                      <social.icon className="w-6 h-6" style={{ color: '#00A8FF' }} />
                      <span className="ai-text">{social.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

               {/* Fun Random Facts Generator */}
               <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="ai-card p-8"
               >
                 <h2 className="ai-title text-3xl mb-6">{t('contact.funFacts')}</h2>
                 
                 <div className="space-y-6">
                   {/* Current Fact Display */}
                   <div className="text-center p-6 border border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900">
                     <div className="text-4xl mb-4">🤖</div>
                     <motion.div
                       key={Math.random()}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6 }}
                       className="ai-text-lg mb-4"
                     >
                       {t('contact.fact1')}
                     </motion.div>
                     <div className="ai-text-small text-gray-400">💡 {t('contact.factCategory')}</div>
                   </div>

                   {/* Fun Quote */}
                   <div className="p-4 border-l-4 border-watchdogs-blue bg-gray-800 rounded-r-lg">
                     <div className="ai-text italic mb-2">"{t('contact.funQuote')}"</div>
                     <div className="ai-text-small text-gray-400">- {t('contact.quoteAuthor')}</div>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="ai-subtitle mb-4">{t('contact.frequentlyAsked')}</div>
            <h2 className="ai-title text-4xl md:text-5xl mb-8">{t('contact.questions')}</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ai-card p-6"
              >
                <h3 className="ai-title text-xl mb-3">{faq.question}</h3>
                <p className="ai-text">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 