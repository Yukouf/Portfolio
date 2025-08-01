import { motion } from 'framer-motion'
import { Github, Twitter, Instagram, Mail, Code, User } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/Yukouf", label: "GitHub" },
    { icon: Twitter, url: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com/yourusername", label: "Instagram" },
    { icon: Mail, url: "mailto:Youssef.guerniou@proton.me", label: "Email" }
  ]

  return (
    <footer className="ai-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md">
          {/* Portfolio Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-watchdogs-blue" />
              <User className="h-8 w-8 text-watchdogs-blue" />
              <span className="ai-title text-xl">PORTFOLIO</span>
            </div>
            <p className="ai-text mb-6 max-w-md">
              Passionate full-stack developer creating innovative digital experiences. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="ai-card p-3 hover:border-watchdogs-blue transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" style={{ color: '#00A8FF' }} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 