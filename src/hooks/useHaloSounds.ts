import { useEffect, useRef } from 'react'

export const useHaloSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioEnabledRef = useRef(false)

  // Initialize audio context
  const initAudio = () => {
    if (audioEnabledRef.current) return
    
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      audioContextRef.current = ctx
      audioEnabledRef.current = true
    } catch (error) {
      console.log('Audio not supported')
    }
  }

  // Play Halo-style sounds
  const playHaloSound = (type: 'nav' | 'select' | 'back') => {
    if (!audioEnabledRef.current || !audioContextRef.current) return
    
    const audioContext = audioContextRef.current
    
    try {
      switch (type) {
        case 'nav':
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

        case 'select':
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

        case 'back':
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

  // Initialize audio on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!audioEnabledRef.current) {
        initAudio()
      }
    }

    // Listen for any user interaction
    document.addEventListener('click', handleFirstInteraction, { once: true })
    document.addEventListener('keydown', handleFirstInteraction, { once: true })
    document.addEventListener('touchstart', handleFirstInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [])

  return { playHaloSound }
} 