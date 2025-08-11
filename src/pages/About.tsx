import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Shield, Zap, Target, Heart, Code, Database, Network, Lock } from 'lucide-react'

const About = () => {
  const { t } = useLanguage()

  const values = [
    {
      icon: Shield,
      title: t('about.securityFirst'),
      description: t('about.securityDesc')
    },
    {
      icon: Zap,
      title: t('about.continuousInnovation'),
      description: t('about.innovationDesc')
    },
    {
      icon: Target,
      title: t('about.technicalExcellence'),
      description: t('about.excellenceDesc')
    },
    {
      icon: Heart,
      title: t('about.collaboration'),
      description: t('about.collaborationDesc')
    }
  ]

  const journey = [
    {
      year: "2021",
      title: t('about.journey2021'),
      description: t('about.journey2021Desc')
    },
    {
      year: "2023",
      title: t('about.journey2023'),
      description: t('about.journey2023Desc')
    },
    {
      year: "2024",
      title: t('about.journey2024'),
      description: t('about.journey2024Desc')
    },
    {
      year: "2026",
      title: t('about.journey2026'),
      description: t('about.journey2026Desc')
    }
  ]

  return (
    <div className="min-h-screen ai-bg pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="ai-title text-4xl mb-4">{t('about.title')}</h1>
          <p className="ai-text-lg text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ai-card p-8 mb-16"
        >
          <h2 className="ai-title text-2xl mb-6">{t('about.myStory')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="ai-text mb-4">
                {t('about.storyText1')}
              </p>
              <p className="ai-text mb-4">
                {t('about.storyText2')}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <Code className="w-16 h-16 text-watchdogs-blue" />
                <Database className="w-16 h-16 text-watchdogs-green" />
                <Network className="w-16 h-16 text-watchdogs-accent" />
                <Lock className="w-16 h-16 text-watchdogs-red" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="ai-title text-2xl text-center mb-12">{t('about.myValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="ai-card p-6 text-center"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-watchdogs-blue" />
                <h3 className="ai-title text-lg mb-3">{value.title}</h3>
                <p className="ai-text text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="ai-card p-8"
        >
          <h2 className="ai-title text-2xl text-center mb-12">{t('about.myJourney')}</h2>
          <div className="space-y-8">
            {journey.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="ai-subtitle text-watchdogs-blue mb-2">{step.year}</div>
                  <h3 className="ai-title text-xl mb-3">{step.title}</h3>
                  <p className="ai-text">{step.description}</p>
                </div>
                <div className="w-4 h-4 bg-watchdogs-blue rounded-full relative">
                  <div className="absolute inset-0 bg-watchdogs-blue rounded-full animate-ping opacity-20"></div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 