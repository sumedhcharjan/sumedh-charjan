export type ThemeName = "retro" | "sunset"

export interface ThemeConfig {
    // Typography
    font: string
    // Colors
    primary: string
    secondary: string
    muted: string
    // Borders
    border: string
    borderSubtle: string
    // Backgrounds
    bg: string
    bgCard: string
    bgGradient: string
    bgPage: string
    highlight: string
    // Buttons
    button: string
    buttonDisabled: string
    buttonText: string
    outlineBtn: string
    secondaryBtn: string
    // Badges
    badge: string
    // Hover
    hoverColor: string
    hoverBg: string
    // Image
    imgBorder: string
    shadow: string
}

export const themes: Record<ThemeName, ThemeConfig> = {
    retro: {
        font: "font-mono",
        primary: "text-green-400",
        secondary: "text-green-200",
        muted: "text-gray-400",
        border: "border-green-500",
        borderSubtle: "border-green-500/20",
        bg: "bg-gray-800",
        bgCard: "bg-gray-800",
        bgGradient: "from-gray-900 via-gray-900/90 to-black",
        bgPage: "bg-gray-900",
        highlight: "bg-green-500/10",
        button: "bg-green-500 hover:bg-green-600",
        buttonDisabled: "bg-green-500/40",
        buttonText: "text-black",
        outlineBtn:
            "bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black",
        secondaryBtn:
            "bg-transparent text-green-200 border border-green-200 hover:bg-green-200 hover:text-black",
        badge: "bg-green-700/30 text-green-100",
        hoverColor: "hover:text-green-300",
        hoverBg: "hover:bg-gray-700",
        imgBorder: "border-4 border-green-400",
        shadow: "shadow-lg shadow-green-400/50",
    },
    sunset: {
        font: "font-sans",
        primary: "text-orange-400",
        secondary: "text-orange-200",
        muted: "text-gray-400",
        border: "border-orange-500",
        borderSubtle: "border-orange-500/20",
        bg: "bg-gray-900",
        bgCard: "bg-gray-800/50",
        bgGradient: "from-gray-900 via-gray-900/90 to-black",
        bgPage:
            "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950 via-gray-900 to-gray-950",
        highlight: "bg-orange-500/10",
        button: "bg-orange-500 hover:bg-orange-600",
        buttonDisabled: "bg-orange-500/40",
        buttonText: "text-black",
        outlineBtn:
            "bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black",
        secondaryBtn:
            "bg-transparent text-orange-200 border border-orange-200 hover:bg-orange-200 hover:text-black",
        badge: "bg-orange-700/30 text-orange-100",
        hoverColor: "hover:text-orange-300",
        hoverBg: "hover:bg-gray-800",
        imgBorder: "border-2 border-orange-400",
        shadow: "",
    },
}

export function getTheme(theme: ThemeName): ThemeConfig {
    return themes[theme]
}
