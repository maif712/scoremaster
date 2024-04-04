import { useEffect, useState } from "react"


import { Bounce, toast } from 'react-toastify'
import useRegisterForm from "./useRegisterForm";


export default function useData() {

    const [players, setPlayers] = useState(() => {
        const localValue = localStorage.getItem("PLAYERS")
        if (localValue == null) return []

        return JSON.parse(localStorage.getItem("PLAYERS"))
    })

    useEffect(() => {
        localStorage.setItem("PLAYERS", JSON.stringify(players))
    }, [players])


    // Toat Messages
    const showAddNewPlayerToastMessage = (playerName) => {
        toast.success(`${playerName} successfully added!`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const showRemoveToastMessage = () => {
        toast.success(`successfully removed!`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    // End


    const {
        inputErrorState,
        setInputErrorState
    } = useRegisterForm()

    const handleMakeNewGame = () => {
        setPlayers([])
    }

    const handleAddNewPlayer = (e, name) => {

        e.preventDefault()
        if (name == "") {
            setInputErrorState("error")
            return;
        }


        const newPlayer = {
            id: crypto.randomUUID(),
            playerName: name,
            score: 0
        }

        setPlayers(prev => [...prev, newPlayer])
        setInputErrorState("")
        showAddNewPlayerToastMessage(name)
    }

    const handleAddScore = (e, id, score) => {
        e.preventDefault()

        const newArray = players.map(player => {
            if (player.id == id) {
                return {
                    ...player,
                    score: Number(player.score) + Number(score)
                }
            }
            else {
                return player
            }
        })

        setPlayers(newArray)
    }



    const handleDeletePlayer = (e, id) => {
        e.preventDefault()
        const newArray = players.filter(player => player.id != id)
        setPlayers(newArray)
        showRemoveToastMessage()
    }

    return {
        players,
        handleAddNewPlayer,
        handleAddScore,
        handleDeletePlayer,
        handleMakeNewGame,

        inputErrorState,
    }
}
