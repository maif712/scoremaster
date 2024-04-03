import { useState } from "react"


export default function useEditForm() {
  
    const [socreInput, setScoreInput] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [selectedPlayerInfo, setSelectedPlayerInfo] = useState({
        id: "",
        seletedName: ""
    })

    const handleScoreInput = (e) => {
        setScoreInput(e.target.value)
    }

    const handleOpenModal = (id, name) => {
        setIsModalOpen(true)
        setSelectedPlayerInfo(
            {
                id: id,
                selectedName: name
            }
        )
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedPlayerInfo({
            id: "",
            seletedName: ""
        })
        setScoreInput("")
    }

    return {
        socreInput,
        handleScoreInput, 
        isModalOpen,
        handleOpenModal,
        handleCloseModal, 
        selectedPlayerInfo
    }
}
