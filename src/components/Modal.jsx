

import React from 'react'
import { useAppContext } from '../AppContext'
import Button from './ui/Button'
import TrashbinIcon from "./ui/TrashbinIcon"
import EditIcon from "./ui/EditIcon"



export default function Modal() {

    const {
        handleCloseModal,
        socreInput,
        handleScoreInput,
        handleAddScore,
        selectedPlayerInfo,
        handleDeletePlayer
    } = useAppContext()

    return (
        <div className="modal">
            <div className="modal-form">
                <div className="bg-blue-100 p-1 flex justify-between items-center">
                    <h2 className="modal-title">{selectedPlayerInfo.selectedName}</h2>
                    <button onClick={handleCloseModal} className="close-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" strokeWidth="1.5"
                            stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={e => { handleAddScore(e, selectedPlayerInfo.id, socreInput), handleCloseModal() }}>
                    <input value={socreInput} onChange={handleScoreInput} type="number" placeholder="score, exp: 250" />
                    <div className="form-buttons-wrapper">
                        <Button type="button" onClick={(e) => { handleDeletePlayer(e, selectedPlayerInfo.id), handleCloseModal() }} cn="fs-09 bg-light-red">
                            <TrashbinIcon />
                            remove player
                        </Button>
                        <Button cn="fs-09 bg-blue">
                            <EditIcon />
                            add score
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}
