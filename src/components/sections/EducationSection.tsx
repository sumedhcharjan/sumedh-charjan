import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { education } from '@/lib/data'
import { Education } from '../../../types'

export default function EducationSection({ theme }: { theme: 'retro' | 'sunset' }) {
  const isRetro = theme === 'retro'

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 text-center ${isRetro ? 'text-green-400 font-mono' : 'text-orange-600 font-sans'}`}>Education</h2>
      {education.length > 0 ? (
        <div className="space-y-8">
          {education.map((edu: Education, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg border ${isRetro
                  ? 'bg-gray-800 border-green-400'
                  : 'bg-white/80 backdrop-blur-sm border-orange-200'
                }`}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className={`w-6 h-6 mr-2 ${isRetro ? 'text-green-400' : 'text-orange-600'}`} />
                <h3 className={`text-xl font-semibold ${isRetro ? 'font-mono text-gray-100' : 'font-sans text-gray-900'}`}>{edu.degree}</h3>
              </div>
              <p className={`mb-2 ${isRetro ? 'font-mono text-gray-400' : 'font-sans text-gray-500'}`}>{edu.institution}</p>
              <div className={`flex items-center mb-4 ${isRetro ? 'font-mono text-gray-500' : 'font-sans text-gray-400'}`}>
                <Calendar className="w-4 h-4 mr-2" />
                <span>{edu.period}</span>
              </div>
              <p className={`${isRetro ? 'font-mono text-gray-300' : 'font-sans text-gray-600'}`}>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-lg shadow-lg border text-center ${isRetro
              ? 'bg-gray-800 border-green-400'
              : 'bg-white/80 backdrop-blur-sm border-orange-200'
            }`}
        >
          <GraduationCap className={`w-16 h-16 mx-auto mb-4 ${isRetro ? 'text-green-400' : 'text-orange-600'}`} />
          <p className={`text-xl ${isRetro ? 'font-mono text-green-400' : 'font-sans text-orange-600'}`}>Education details coming soon!</p>
        </motion.div>
      )}
    </div>
  )
}
