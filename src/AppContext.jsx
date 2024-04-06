import { createContext, useContext, useRef } from "react";
import useRegisterForm from "./hooks/useRegisterForm";
import useData from "./hooks/useData";
import useEditForm from "./hooks/useEditForm";
import useNavMenu from "./hooks/useNavMenu";


const AppContext = createContext(null)

export function AppContextProvider({ children }) {



    // Player Data
    const {
        players,
        handleAddNewPlayer,
        handleAddScore,
        handleDeletePlayer,
        handleMakeNewGame,

        inputErrorState,
        setInputErrorState
    } = useData()

    // 

    // Register form custom hook
    const {
        playerNameInput,
        handleNameInput,
        handleClear,
        inputRef,
        
    } = useRegisterForm()
    // 

    // Edit form custom hook 
    const {
        socreInput,
        handleScoreInput,
        handleOpenModal,
        handleCloseModal,
        isModalOpen,
        selectedPlayerId,
        selectedPlayerInfo
    } = useEditForm()
    // 

    // Nav custom hook
    const {
        isMenuOpen,
        handleOpenNavMenu,
        handleCloseNavMenu
    } = useNavMenu()
    // 

    // Modal
    const deleteModalRef = useRef()

    const handleOpenDeleteModalRef = () => {
        deleteModalRef.current.showModal()
    }
    // 

    const values = {
        // register form
        playerNameInput,
        handleNameInput,
        handleClear,
        inputRef,

        // Edit form
        socreInput,
        handleScoreInput,
        handleOpenModal,
        isModalOpen,
        handleCloseModal,
        selectedPlayerId,
        selectedPlayerInfo,

        // Players 
        players,
        handleAddNewPlayer,
        handleAddScore,
        handleDeletePlayer,
        handleMakeNewGame,
        inputErrorState,
        setInputErrorState,

        // Modal
        deleteModalRef,
        handleOpenDeleteModalRef,

        // nav menu
        isMenuOpen,
        handleOpenNavMenu,
        handleCloseNavMenu
    }


    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext

export const useAppContext = () => useContext(AppContext)