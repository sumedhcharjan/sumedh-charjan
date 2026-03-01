import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon } from 'lucide-react'
import { experiences } from '@/lib/data'
import { Experience } from '../../../types'

export default function ExperienceSection({ theme }: { theme: 'retro' | 'sunset' }) {
  const isRetro = theme === 'retro'

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 text-center ${isRetro ? 'text-green-400 font-mono' : 'text-orange-600 font-sans'}`}>Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp: Experience, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-lg shadow-lg border ${isRetro
                ? 'bg-gray-800 border-green-400'
                : 'bg-white/80 backdrop-blur-sm border-orange-200'
              }`}
          >
            <div className="flex items-center mb-4">
              <BriefcaseIcon className={`w-6 h-6 mr-2 ${isRetro ? 'text-green-400' : 'text-orange-600'}`} />
              <h3 className={`text-xl font-semibold ${isRetro ? 'font-mono text-gray-100' : 'font-sans text-gray-900'}`}>{exp.title}</h3>
            </div>
            <p className={`mb-2 ${isRetro ? 'font-mono text-gray-400' : 'font-sans text-gray-500'}`}>{exp.company}</p>
            <div className={`flex items-center mb-4 ${isRetro ? 'font-mono text-gray-500' : 'font-sans text-gray-400'}`}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>{exp.period}</span>
            </div>
            <p className={`${isRetro ? 'font-mono text-gray-300' : 'font-sans text-gray-600'}`}>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
