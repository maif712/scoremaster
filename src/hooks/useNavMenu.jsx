import { useState } from "react"



export default function useNavMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleOpenNavMenu = () => {
        setIsMenuOpen(true)
    }

    const handleCloseNavMenu = () => {
        setIsMenuOpen(false)
    }

    return {
        isMenuOpen,
        handleOpenNavMenu,
        handleCloseNavMenu
    }
}
