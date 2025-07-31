import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'

const Characters = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleStartProject = () => {
    // Rediriger vers la page contact
    navigate('/contact')
  }

  const handleViewGitHub = () => {
    // Ouvrir votre GitHub dans un nouvel onglet
    window.open('https://github.com/Yukouf', '_blank')
  }

  const project = {
    title: "Portfolio Website",
    category: "Full-Stack",
    description: "Un site portfolio moderne avec une interface futuriste inspirée des interfaces AI. Développé avec React, TypeScript et Tailwind CSS, ce projet présente une expérience utilisateur immersive avec des animations fluides, un curseur personnalisé et un design cyberpunk sophistiqué. Le site inclut une introduction de hacking stylisée, une navigation intuitive et des sections pour présenter les compétences, projets et expériences professionnelles.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "images/portfolio-screenshot.png", // Remplacez par le nom de votre fichier
    github: "https://github.com/Yukouf",
    live: "#",
    features: [
      "Interface futuriste avec style AI",
      "Animation d'introduction de hacking",
      "Curseur personnalisé interactif",
      "Design responsive et moderne",
      "Animations fluides avec Framer Motion",
      "Navigation intuitive"
    ]
  }

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
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="ai-subtitle">{project.category}</span>
                <div className="flex space-x-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="ai-text-small bg-gray-800 px-3 py-1 rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="ai-title text-3xl">{project.title}</h2>
            </div>

            {/* Project Screenshot - Large and Prominent */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                style={{ minHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a href={project.github} className="ai-button p-3">
                  <Github className="w-6 h-6" />
                </a>
                <a href={project.live} className="ai-button p-3">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Project Description */}
            <div className="p-8">
              <h3 className="ai-title text-xl mb-6">{t('projects.description')}</h3>
              <p className="ai-text text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Project Features */}
              <div className="mb-8">
                <h4 className="ai-subtitle mb-4">{t('projects.features')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
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
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="ai-text bg-gray-800 px-4 py-2 rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center pt-6 border-t border-gray-700">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="ai-button-yellow px-8 py-4 text-lg flex items-center justify-center">
                  <Github className="mr-2 w-5 h-5" />
                  {t('projects.viewCode')}
                </a>
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