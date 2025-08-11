import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimations'

const Characters = () => {
  const [, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const navigate = useNavigate()
  const { t, language } = useLanguage()

  const handleStartProject = () => {
    // Rediriger vers la page contact
    navigate('/contact')
  }

  const handleViewGitHub = () => {
    // Ouvrir votre GitHub dans un nouvel onglet
    window.open('https://github.com/Yukouf', '_blank')
  }

  const getProjects = () => [
    {
      id: 1,
      title: t('projects.siemTitle') || "SIEM Security Onion - Cybersecurity Lab",
      category: "Cybersecurity",
      description: t('projects.siemDescription') || "Mise en place et configuration d'un laboratoire de cybersécurité avec Security Onion...",
      technologies: ["Security Onion", "SIEM", "IDS/IPS", "Elastic Stack", "Suricata", "Zeek", "Nmap", "Metasploit"],
      image: "images/portfolio-screenshot.png",
      github: "https://github.com/Yukouf",
      live: "#",
      features: [
        t('projects.siemFeatures.feature1') || "Déploiement et configuration de Security Onion",
        t('projects.siemFeatures.feature5') || "Surveillance réseau en temps réel",
        t('projects.siemFeatures.feature2') || "Tests d'intrusion et simulation d'attaques",
        t('projects.siemFeatures.feature6') || "Analyse de logs et corrélation d'événements",
        t('projects.siemFeatures.feature3') || "Création de règles de détection personnalisées",
        t('projects.siemFeatures.feature7') || "Dashboard de visualisation des menaces",
        t('projects.siemFeatures.feature4') || "Réponse aux incidents de sécurité"
      ]
    },
    {
      id: 2,
      title: t('projects.glpiTitle') || "GLPI - Gestion d'Assets et Helpdesk",
      category: "Infrastructure",
      description: t('projects.glpiDescription') || "Déploiement et administration complète de GLPI...",
      technologies: ["GLPI", "PHP", "MySQL", "Apache", "LDAP", "OCS Inventory", "FusionInventory", "ITIL"],
      image: "images/portfolio-screenshot.png",
      github: "https://github.com/Yukouf",
      live: "#",
      features: [
        t('projects.glpiFeatures.feature1') || "Installation et configuration de GLPI",
        t('projects.glpiFeatures.feature2') || "Gestion complète de l'inventaire IT",
        t('projects.glpiFeatures.feature3') || "Système de tickets et helpdesk",
        t('projects.glpiFeatures.feature4') || "Intégration Active Directory",
        t('projects.glpiFeatures.feature5') || "Workflows ITIL personnalisés",
        t('projects.glpiFeatures.feature6') || "Rapports et tableaux de bord",
        t('projects.glpiFeatures.feature7') || "Formation des utilisateurs finaux"
      ]
    },
    {
      id: 3,
      title: t('projects.portfolioTitle') || "Portfolio Website",
      category: "Full-Stack",
      description: t('projects.portfolioDescription') || "Un site portfolio moderne avec une interface futuriste...",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "React Router", "Lucide Icons"],
      image: "images/portfolio-screenshot.png",
      github: "https://github.com/Yukouf",
      live: "#",
      features: [
        t('projects.portfolioFeatures.feature1') || "Interface futuriste avec style AI et glassmorphism",
        t('projects.portfolioFeatures.feature2') || "Animation d'introduction de hacking immersive",
        t('projects.portfolioFeatures.feature3') || "Curseur personnalisé interactif avec effets visuels",
        t('projects.portfolioFeatures.feature4') || "Système de traduction 4 langues (FR/EN/KR/JP)",
        t('projects.portfolioFeatures.feature5') || "Effets de profondeur CSS 3D et animations parallax",
        t('projects.portfolioFeatures.feature6') || "Animations de scroll révélatrices et transitions fluides",
        t('projects.portfolioFeatures.feature7') || "Horloge en temps réel avec localisation",
        t('projects.portfolioFeatures.feature8') || "Barre de progression de scroll minimaliste",
        t('projects.portfolioFeatures.feature9') || "Boutons de copie email/téléphone avec feedback",
        t('projects.portfolioFeatures.feature10') || "Design responsive et navigation mobile optimisée",
        t('projects.portfolioFeatures.feature11') || "Architecture composants modulaires et réutilisables",
        t('projects.portfolioFeatures.feature12') || "Gestion d'état avec Context API React"
      ]
    }
  ]

  const projects = getProjects()

  const [currentProject, setCurrentProject] = useState(0)
  // const offset = useParallax() // Unused
  const [projectRef, projectVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <div key={language} className="ai-bg min-h-screen pt-20 depth-container">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="ai-subtitle mb-4">{t('projects.showcase')}</div>
            <h1 className="ai-title text-5xl md:text-7xl mb-8">
              {t('projects.title')}
            </h1>
            <p className="ai-text text-xl max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Single Project Display */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Project Navigation */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="ai-title text-4xl">Mes Projets</h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentProject(Math.max(0, currentProject - 1))}
                disabled={currentProject === 0}
                className="ai-button p-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="ai-text">
                {currentProject + 1} / {projects.length}
              </span>
              <button 
                onClick={() => setCurrentProject(Math.min(projects.length - 1, currentProject + 1))}
                disabled={currentProject === projects.length - 1}
                className="ai-button p-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <motion.div
            key={`${language}-${currentProject}`}
            ref={projectRef as any}
            initial={{ opacity: 0, y: 50 }}
            animate={projectVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel depth-card"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="ai-subtitle">{projects[currentProject].category}</span>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="ai-text-small bg-gray-800 px-3 py-1 rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="ai-title text-3xl">{projects[currentProject].title}</h2>
            </div>



            {/* Project Description */}
            <div className="p-8">
              <h3 className="ai-title text-xl mb-6">{t('projects.description')}</h3>
              <p className="ai-text text-lg leading-relaxed mb-8">
                {projects[currentProject].description}
              </p>

              {/* Project Features */}
              <div className="mb-8">
                <h4 className="ai-subtitle mb-4">{t('projects.features')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projects[currentProject].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="ai-status-dot"></div>
                      <span className="ai-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-8">
                <h4 className="ai-subtitle mb-4">{t('projects.techStack')}</h4>
                <div className="flex flex-wrap gap-3">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="ai-text bg-gray-800 px-4 py-2 rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="ai-panel p-12"
          >
            <h2 className="ai-title text-4xl md:text-5xl mb-8">
              {t('projects.wantToCollaborate')}
            </h2>
            <p className="ai-text text-xl mb-8 max-w-2xl mx-auto">
              {t('projects.collaborateText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleStartProject} className="ai-button-yellow px-8 py-4 text-lg">
                {t('projects.startProject')}
              </button>
              <button onClick={handleViewGitHub} className="ai-button-outline px-8 py-4 text-lg">
                {t('projects.viewGitHub')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Characters 