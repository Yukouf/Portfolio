import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Unlock, Code, Database } from 'lucide-react'

interface HackingIntroProps {
  onComplete: () => void
}

const HackingIntro = ({ onComplete }: HackingIntroProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const steps = [
    { icon: Code, text: 'INITIALIZING DEVELOPMENT ENVIRONMENT', color: '#00A8FF' },
    { icon: Database, text: 'LOADING PROJECT DATABASE', color: '#00FF41' },
    { icon: Unlock, text: 'PORTFOLIO READY', color: '#FFD700' }
  ]

  // Initialize audio context
  const initAudio = () => {
    if (audioEnabled) return
    
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      setAudioContext(ctx)
      setAudioEnabled(true)
      playSound('glitch') // Play initial sound
    } catch (error) {
      console.log('Audio not supported')
    }
  }

  // Handle first user interaction
  const handleFirstInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
      initAudio()
    }
  }

  // Sound effects
  const playSound = (type: 'typing' | 'success' | 'glitch' | 'complete' | 'halo-nav' | 'halo-select' | 'halo-back') => {
    if (!audioEnabled || !audioContext) return
    
    try {
      switch (type) {
        case 'typing':
          // Typing sound effect
          const typingOsc = audioContext.createOscillator()
          const typingGain = audioContext.createGain()
          typingOsc.connect(typingGain)
          typingGain.connect(audioContext.destination)
          typingOsc.frequency.setValueAtTime(800, audioContext.currentTime)
          typingOsc.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1)
          typingGain.gain.setValueAtTime(0.1, audioContext.currentTime)
          typingGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
          typingOsc.start(audioContext.currentTime)
          typingOsc.stop(audioContext.currentTime + 0.1)
          break
          
        case 'success':
          // Success beep
          const successOsc = audioContext.createOscillator()
          const successGain = audioContext.createGain()
          successOsc.connect(successGain)
          successGain.connect(audioContext.destination)
          successOsc.frequency.setValueAtTime(1000, audioContext.currentTime)
          successOsc.frequency.setValueAtTime(1500, audioContext.currentTime + 0.1)
          successGain.gain.setValueAtTime(0.2, audioContext.currentTime)
          successGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
          successOsc.start(audioContext.currentTime)
          successOsc.stop(audioContext.currentTime + 0.2)
          break
          
        case 'glitch':
          // Glitch effect
          const glitchOsc = audioContext.createOscillator()
          const glitchGain = audioContext.createGain()
          glitchOsc.connect(glitchGain)
          glitchGain.connect(audioContext.destination)
          glitchOsc.frequency.setValueAtTime(200, audioContext.currentTime)
          glitchOsc.frequency.setValueAtTime(800, audioContext.currentTime + 0.05)
          glitchOsc.frequency.setValueAtTime(300, audioContext.currentTime + 0.1)
          glitchGain.gain.setValueAtTime(0.15, audioContext.currentTime)
          glitchGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
          glitchOsc.start(audioContext.currentTime)
          glitchOsc.stop(audioContext.currentTime + 0.15)
          break
          
        case 'complete':
          // Completion sound
          const completeOsc = audioContext.createOscillator()
          const completeGain = audioContext.createGain()
          completeOsc.connect(completeGain)
          completeGain.connect(audioContext.destination)
          completeOsc.frequency.setValueAtTime(800, audioContext.currentTime)
          completeOsc.frequency.setValueAtTime(1200, audioContext.currentTime + 0.1)
          completeOsc.frequency.setValueAtTime(1600, audioContext.currentTime + 0.2)
          completeGain.gain.setValueAtTime(0.3, audioContext.currentTime)
          completeGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
          completeOsc.start(audioContext.currentTime)
          completeOsc.stop(audioContext.currentTime + 0.3)
          break

        case 'halo-nav':
          // Halo navigation sound (iconic UI beep)
          const navOsc = audioContext.createOscillator()
          const navGain = audioContext.createGain()
          navOsc.connect(navGain)
          navGain.connect(audioContext.destination)
          navOsc.frequency.setValueAtTime(1200, audioContext.currentTime)
          navOsc.frequency.setValueAtTime(1400, audioContext.currentTime + 0.05)
          navOsc.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1)
          navGain.gain.setValueAtTime(0.15, audioContext.currentTime)
          navGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
          navOsc.start(audioContext.currentTime)
          navOsc.stop(audioContext.currentTime + 0.15)
          break

        case 'halo-select':
          // Halo selection sound (deeper confirmation)
          const selectOsc = audioContext.createOscillator()
          const selectGain = audioContext.createGain()
          selectOsc.connect(selectGain)
          selectGain.connect(audioContext.destination)
          selectOsc.frequency.setValueAtTime(800, audioContext.currentTime)
          selectOsc.frequency.setValueAtTime(1200, audioContext.currentTime + 0.08)
          selectOsc.frequency.setValueAtTime(600, audioContext.currentTime + 0.16)
          selectGain.gain.setValueAtTime(0.2, audioContext.currentTime)
          selectGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
          selectOsc.start(audioContext.currentTime)
          selectOsc.stop(audioContext.currentTime + 0.2)
          break

        case 'halo-back':
          // Halo back/cancel sound (reverse sweep)
          const backOsc = audioContext.createOscillator()
          const backGain = audioContext.createGain()
          backOsc.connect(backGain)
          backGain.connect(audioContext.destination)
          backOsc.frequency.setValueAtTime(1000, audioContext.currentTime)
          backOsc.frequency.setValueAtTime(800, audioContext.currentTime + 0.1)
          backOsc.frequency.setValueAtTime(1200, audioContext.currentTime + 0.2)
          backGain.gain.setValueAtTime(0.15, audioContext.currentTime)
          backGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25)
          backOsc.start(audioContext.currentTime)
          backOsc.stop(audioContext.currentTime + 0.25)
          break
      }
    } catch (error) {
      console.log('Audio error:', error)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          playSound('complete')
          setTimeout(onComplete, 1000)
          return 100
        }
        // Play typing sound occasionally during progress
        if (prev % 10 === 0) {
          playSound('typing')
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete, audioEnabled])

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepTimer)
          return steps.length - 1
        }
        // Play success sound when step changes
        playSound('success')
        return prev + 1
      })
    }, 800)

    return () => clearInterval(stepTimer)
  }, [steps.length, audioEnabled])

  return (
    <div className="ai-bg min-h-screen flex items-center justify-center relative overflow-hidden" onClick={handleFirstInteraction}>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 168, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 168, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Title with Glitch Effect */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="ai-title mb-8 relative"
          style={{
            textShadow: `
              0 0 10px #FFD700,
              0 0 20px #FFD700,
              0 0 30px #FFD700,
              0 0 40px #FFD700
            `
          }}
        >
          <span className="glitch-text">YOUSSEF GUERNIOU</span>
        </motion.h1>

        <div className="ai-divider mb-8"></div>

        {/* Loading Steps */}
        <div className="space-y-4 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === currentStep
            const isCompleted = index < currentStep

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: isActive || isCompleted ? 1 : 0.3,
                  x: 0
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`ai-card p-4 flex items-center space-x-4 ${
                  isActive ? 'border-watchdogs-blue' : ''
                }`}
              >
                <Icon 
                  className="w-6 h-6" 
                  style={{ color: isCompleted ? '#00FF41' : step.color }}
                />
                <span className="ai-text">{step.text}</span>
                {isCompleted && (
                  <div className="ai-status-dot ml-auto"></div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="ai-label mb-2">PORTFOLIO INITIALIZATION</div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-watchdogs-blue to-watchdogs-green h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="ai-text-small mt-2">{progress}% COMPLETE</div>
        </div>
      </div>

      {/* Scan Line Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ y: [0, window.innerHeight, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-watchdogs-blue to-transparent opacity-30"></div>
      </motion.div>
    </div>
  )
}

export default HackingIntro 