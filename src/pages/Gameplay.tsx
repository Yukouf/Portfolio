import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Zap, Cloud, Server, Network, Monitor, Globe, Users, BookOpen, MapPin, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import CopyButton from '../components/CopyEmailButton'

const Gameplay = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { t } = useLanguage()

  const technicalSkills = [
    {
      category: t('skills.cloud'),
      skills: ["Azure", "Proxmox", "AWS"],
      icon: Cloud,
      color: "#00A8FF"
    },
    {
      category: t('skills.networks'),
      skills: [t('skills.ipAddressing'), "TCP/IP", "DNS", "DHCP", "VPN"],
      icon: Network,
      color: "#00FF41"
    },
    {
      category: t('skills.security'),
      skills: [t('skills.firewall'), "StormShield", t('skills.vulnerabilityAnalysis')],
      icon: Shield,
      color: "#FF6B35"
    },
    {
      category: t('skills.administration'),
      skills: [t('skills.windowsServer'), t('skills.linuxUbuntuDebian')],
      icon: Server,
      color: "#FFD700"
    },
    {
      category: t('skills.monitoring'),
      skills: ["Grafana", "Zabbix", "GLPI"],
      icon: Monitor,
      color: "#00A8FF"
    }
  ]

  const softSkills = [
    {
      name: t('skills.problemSolving'),
      icon: Zap,
      color: "#FFD700"
    },
    {
      name: t('skills.teamCollaboration'), 
      icon: Users,
      color: "#00A8FF"
    },
    {
      name: t('skills.adaptability'),
      icon: Shield,
      color: "#00FF41"
    }
  ]

  const experience = [
    {
      title: t('skills.systemAdmin'),
      company: "IMX France",
      period: t('skills.since2023'),
      achievements: [
        t('skills.glpiDeployment'),
        t('skills.firewallSetup'),
        t('skills.virtualization'),
        t('skills.nasMonitoring'),
        t('skills.vpnSetup'),
        t('skills.gpoImplementation'),
        t('skills.siemSetup')
      ]
    },
    {
      title: t('skills.itSupport'),
      company: "BIOGROUP France",
      period: t('skills.from2021to2023'),
      achievements: [
        t('skills.technicalSupport'),
        t('skills.ticketing')
      ]
    }
  ]

  const education = [
    {
      degree: t('skills.masterCybersecurity'),
      institution: "SUP DE VINCI La Défense",
      period: t('skills.from2024to2026')
    },
    {
      degree: t('skills.bachelorSystems'),
      institution: "SUP DE VINCI La Défense", 
      period: t('skills.from2023to2024'),
      areas: t('skills.areas')
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
            <div className="ai-subtitle mb-4">{t('skills.expertise')}</div>
            <h1 className="ai-title text-5xl md:text-7xl mb-8">
              {t('skills.title')}
            </h1>
            <p className="ai-text text-xl max-w-3xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel p-8"
          >
            <h2 className="ai-title text-2xl mb-6">{t('skills.contactInfo')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <CopyButton 
                  value="Youssef.guerniou@proton.me" 
                  type="email"
                  variant="compact"
                />
                <CopyButton 
                  value="06 20 01 95 27" 
                  type="phone"
                  variant="compact"
                />
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-watchdogs-blue" />
                  <span className="ai-text">Paris (75008)</span>
                </div>

              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-watchdogs-blue" />
                  <a href="https://github.com/Yukouf" target="_blank" rel="noopener noreferrer" className="ai-text hover:text-watchdogs-blue transition-colors">
                    @Yukouf
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-watchdogs-blue" />
                  <span className="ai-text">@youssefguerniou</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-watchdogs-blue" />
                  <span className="ai-text">{t('skills.englishLevel')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel p-8"
          >
            <h2 className="ai-title text-3xl mb-8">{t('skills.technicalSkills')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => {
                const Icon = skillGroup.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="ai-card p-6"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className="w-8 h-8" style={{ color: skillGroup.color }} />
                      <h3 className="ai-subtitle text-lg">{skillGroup.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <div className="ai-status-dot" style={{ backgroundColor: skillGroup.color }}></div>
                          <span className="ai-text-small">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel p-8"
          >
            <h2 className="ai-title text-3xl mb-8">{t('skills.softSkills')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="ai-card p-6 text-center relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animation de flottement japonais */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="mb-4"
                  >
                    <skill.icon 
                      className="w-12 h-12 mx-auto" 
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  
                  {/* Effet de pulsation autour de l'icône */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      border: `2px solid ${skill.color}`,
                      opacity: 0.3
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                  
                  <h3 className="ai-text font-medium relative z-10">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel p-8"
          >
            <h2 className="ai-title text-3xl mb-8">{t('skills.experience')}</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-watchdogs-blue"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-watchdogs-blue rounded-full"></div>
                  <div className="mb-4">
                    <h3 className="ai-title text-xl">{exp.title}</h3>
                    <p className="ai-subtitle text-watchdogs-blue">{exp.company}</p>
                    <p className="ai-text-small text-gray-400">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className="ai-status-dot mt-2"></div>
                        <span className="ai-text">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel p-8"
          >
            <h2 className="ai-title text-3xl mb-8">{t('skills.education')}</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-watchdogs-green"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-watchdogs-green rounded-full"></div>
                  <div className="mb-3">
                    <h3 className="ai-title text-xl">{edu.degree}</h3>
                    <p className="ai-subtitle text-watchdogs-green">{edu.institution}</p>
                    <p className="ai-text-small text-gray-400">{edu.period}</p>
                  </div>
                  {edu.areas && (
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(edu.areas) ? edu.areas.map((area: string, areaIndex: number) => (
                        <span
                          key={areaIndex}
                          className="ai-text-small bg-gray-800 px-3 py-1 rounded border border-gray-600"
                        >
                          {area}
                        </span>
                      )) : null}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="ai-panel p-8"
          >
            <h2 className="ai-title text-3xl mb-8">{t('skills.interests')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="ai-card p-6 text-center"
              >
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-watchdogs-blue" />
                <h3 className="ai-text font-medium">{t('skills.reading')}</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="ai-card p-6 text-center"
              >
                <MapPin className="w-12 h-12 mx-auto mb-4 text-watchdogs-blue" />
                <h3 className="ai-text font-medium">{t('skills.travel')}</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gameplay 