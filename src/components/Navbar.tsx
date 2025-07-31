import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, Code, User, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useHaloSounds } from '../hooks/useHaloSounds'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()
  const { playHaloSound } = useHaloSounds()

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/contact', label: t('nav.contact') }
  ]

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ]

  const handleNavClick = (path: string) => {
    if (location.pathname !== path) {
      playHaloSound('nav')
    }
  }

  const handleLanguageChange = (langCode: string) => {
    playHaloSound('select')
    setLanguage(langCode as 'fr' | 'en' | 'ko' | 'ja')
    setLanguageMenuOpen(false)
  }

  const handleMenuToggle = () => {
    playHaloSound(isOpen ? 'back' : 'select')
    setIsOpen(!isOpen)
  }

  const currentLanguage = languages.find(lang => lang.code === language)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.language-menu')) {
        setLanguageMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'ai-header' : 'ai-header'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-watchdogs-blue" />
              <User className="h-8 w-8 text-watchdogs-blue" />
            </div>
            <span className="ai-title text-xl glitch-text">Y.G</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`ai-nav-item ${
                  location.pathname === item.path ? 'text-watchdogs-blue' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative language-menu">
              <button
                onClick={() => {
                  playHaloSound('select')
                  setLanguageMenuOpen(!languageMenuOpen)
                }}
                className="ai-button-outline px-3 py-2 flex items-center space-x-2"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {languageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 ai-panel min-w-[200px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors flex items-center space-x-3 ${
                        language === lang.code ? 'text-watchdogs-blue' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="ai-text">{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher for Mobile */}
            <div className="relative language-menu">
              <button
                onClick={() => {
                  playHaloSound('select')
                  setLanguageMenuOpen(!languageMenuOpen)
                }}
                className="ai-button-outline p-2"
              >
                <Globe className="h-5 w-5" />
              </button>
              
              {languageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 ai-panel min-w-[200px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors flex items-center space-x-3 ${
                        language === lang.code ? 'text-watchdogs-blue' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="ai-text">{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            
            <button
              onClick={handleMenuToggle}
              className="ai-button-outline p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="ai-panel mt-4 p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    handleNavClick(item.path)
                    setIsOpen(false)
                  }}
                  className={`ai-nav-item block ${
                    location.pathname === item.path ? 'text-watchdogs-blue' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar 