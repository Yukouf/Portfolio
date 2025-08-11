import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Mail, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface CopyButtonProps {
  value: string
  type?: 'email' | 'phone'
  variant?: 'default' | 'compact' | 'icon-only'
  className?: string
}

const CopyButton = ({ 
  value, 
  type = 'email',
  variant = 'default',
  className = '' 
}: CopyButtonProps) => {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error(`Failed to copy ${type}: `, err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = value
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  const getIcon = () => type === 'email' ? Mail : Phone
  const getLabel = () => type === 'email' ? t('contact.email') : t('contact.phone')
  const getCopyLabel = () => type === 'email' ? t('contact.copyEmail') : t('contact.copyPhone')
  const getCopiedLabel = () => type === 'email' ? t('contact.emailCopied') : t('contact.phoneCopied')

  const IconComponent = getIcon()

  if (variant === 'icon-only') {
    return (
      <motion.button
        onClick={copyToClipboard}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative p-2 rounded-md border border-gray-700 bg-gray-800/50 hover:border-watchdogs-blue transition-all duration-300 ${className}`}
        title={copied ? getCopiedLabel() : getCopyLabel()}
      >
        <motion.div
          initial={false}
          animate={{ rotate: copied ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 hover:text-watchdogs-blue" />
          )}
        </motion.div>
        
        {/* Feedback tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: copied ? 1 : 0, y: copied ? -5 : 10 }}
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-green-400 rounded border border-green-400/30 whitespace-nowrap"
        >
          {getCopiedLabel()}
        </motion.div>
      </motion.button>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.button
        onClick={copyToClipboard}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-700 bg-gray-800/50 hover:border-watchdogs-blue transition-all duration-300 group ${className}`}
      >
        <IconComponent className="w-4 h-4 text-watchdogs-blue" />
        <span className="ai-text text-sm truncate max-w-48">{value}</span>
        <motion.div
          initial={false}
          animate={{ rotate: copied ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 group-hover:text-watchdogs-blue" />
          )}
        </motion.div>
        
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-green-400 rounded border border-green-400/30 whitespace-nowrap"
          >
            {getCopiedLabel()}
          </motion.div>
        )}
      </motion.button>
    )
  }

  // Default variant
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-between space-x-3 w-full p-4 rounded-lg border border-gray-700 bg-gray-800/30 hover:border-watchdogs-blue transition-all duration-300 group ${className}`}
    >
      <div className="flex items-center space-x-3">
        <IconComponent className="w-5 h-5 text-watchdogs-blue" />
        <div className="text-left">
          <div className="text-sm text-gray-400">{getLabel()}</div>
          <div className="ai-text">{value}</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        {copied && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-green-400 absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            ✓
          </motion.span>
        )}
        <motion.div
          initial={false}
          animate={{ rotate: copied ? 360 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-md border border-gray-600 bg-gray-700/50 group-hover:border-watchdogs-blue"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 group-hover:text-watchdogs-blue" />
          )}
        </motion.div>
      </div>
    </motion.button>
  )
}

export default CopyButton

// Alias pour compatibilité
export { CopyButton as CopyEmailButton }
