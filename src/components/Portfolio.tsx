'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import CLI from './CLI'
import IntroSection from './sections/IntroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'
import Navigation, { Section } from './Navigation'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>('intro')
  const [theme, setTheme] = useState<'retro' | 'sunset'>('sunset')
  const [cliMode, setCliMode] = useState(false)

  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500 ${theme === 'retro'
          ? 'bg-gray-900 font-mono text-gray-100'
          : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 font-sans text-gray-900'
        }`}
    >
      {/* Animated background accents for sunset theme */}
      {theme === 'sunset' && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/20 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
        </div>
      )}

      {/* Retro theme scanline effect */}
      {theme === 'retro' && (
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)',
          }}
        />
      )}

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
        cliMode={cliMode}
        setCliMode={setCliMode}
      />
      <main className="flex-grow flex items-center justify-center px-4 py-10 relative z-10">
        <div className="w-full max-w-4xl">
          {cliMode ? (
            <CLI theme={theme} setActiveSection={setActiveSection} setTheme={setTheme} setCliMode={setCliMode} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.section
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="min-h-[calc(100vh-12rem)] flex items-center justify-center"
              >
                <div className="w-full">
                  {activeSection === 'intro' && <IntroSection theme={theme} setActiveSection={setActiveSection} />}
                  {activeSection === 'projects' && <ProjectsSection theme={theme} />}
                  {activeSection === 'skills' && <SkillsSection theme={theme} />}
                  {activeSection === 'experience' && <ExperienceSection theme={theme} />}
                  {activeSection === 'education' && <EducationSection theme={theme} />}
                  {activeSection === 'contact' && <ContactSection theme={theme} />}
                </div>
              </motion.section>
            </AnimatePresence>
          )}
        </div>
      </main>
      <footer
        className={`text-center py-6 text-sm relative z-10 ${theme === 'retro' ? 'font-mono text-gray-500' : 'font-sans text-gray-400'
          }`}
      >
        © {new Date().getFullYear()} Sumedh. All rights reserved.
      </footer>
    </div>
  )
}
