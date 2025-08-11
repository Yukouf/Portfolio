import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { Code, Database, Palette, Cloud, ArrowRight, Download, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimations'

const Home = () => {
  const [, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const navigate = useNavigate()
  const { t } = useLanguage()
  const offset = useParallax()
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.3, triggerOnce: true })
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  const handleViewProjects = () => {
    navigate('/projects')
  }

  // const handleContact = () => {
  //   navigate('/contact')
  // }

  const handleDownloadCV = () => {
    // Créer un lien temporaire pour télécharger le CV
    const link = document.createElement('a')
    link.href = '/documents/cv-youssef-guerniou.pdf'
    link.download = 'CV_Youssef_Guerniou.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleStartProject = () => {
    // Rediriger vers la page contact
    navigate('/contact')
  }

  const handleViewGitHub = () => {
    // Ouvrir votre GitHub dans un nouvel onglet
    window.open('https://github.com/Yukouf', '_blank')
  }

  return (
    <div className="ai-bg min-h-screen pt-20 depth-container">      
      {/* Hero Section */}
      <section className="py-20 px-4 relative">


        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="ai-subtitle mb-4">{t('home.welcome')}</div>
            <h1 className="ai-title text-5xl md:text-7xl mb-8">
              <span className="text-watchdogs-blue">{t('home.title')}</span>
            </h1>
            <p className="ai-text text-xl max-w-3xl mx-auto mb-12">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleViewProjects}
                className="ai-button-yellow px-8 py-4 text-lg flex items-center justify-center"
              >
                {t('home.viewProjects')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={handleDownloadCV}
                className="ai-button-outline px-8 py-4 text-lg flex items-center justify-center"
              >
                <Download className="mr-2 w-5 h-5" />
                {t('home.downloadCV')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 depth-container"
          >
            {[
              { number: "50+", label: "Projects", icon: Code },
              { number: "5+", label: "Years", icon: Database },
              { number: "25+", label: "Clients", icon: Palette },
              { number: "15+", label: "Technologies", icon: Cloud }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ai-card p-6 text-center depth-card"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4" style={{ color: '#00A8FF' }} />
                <div className="ai-title text-3xl mb-2">{stat.number}</div>
                <div className="ai-text-small">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="ai-panel p-12 depth-card"
          >
            <h2 className="ai-title text-4xl md:text-5xl mb-8">
              {t('home.readyToCollaborate')}
            </h2>
            <p className="ai-text text-xl mb-8 max-w-2xl mx-auto">
              {t('home.collaborateText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartProject}
                className="ai-button-yellow px-8 py-4 text-lg flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                {t('home.startProject')}
              </button>
              <button 
                onClick={handleViewGitHub}
                className="ai-button-outline px-8 py-4 text-lg"
              >
                {t('home.viewGitHub')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 