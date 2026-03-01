"use client"

import { motion } from "framer-motion"
import type { ThemeConfig } from "@/lib/themeConfig"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    theme: ThemeConfig
}

export default function SectionHeader({ title, subtitle, theme }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center mb-10 sm:mb-16"
        >
            <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold ${theme.primary} ${theme.font} text-center`}
            >
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-3 text-gray-400 ${theme.font} text-center max-w-xl`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}
