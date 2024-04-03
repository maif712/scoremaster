

import { useAppContext } from '../AppContext'

import Button from './ui/Button';
import PlusIcon from './ui/PlusIcon';

export default function RegisterForm() {

    const {
        playerNameInput,
        handleNameInput,
        handleAddNewPlayer,
        handleClear,
        inputRef,
        handleMakeNewGame,
        deleteModalRef,
        handleOpenDeleteModalRef,

        inputErrorState,
    } = useAppContext()

    
    return (
        <section>
            <div className="layout-wrapper">
                <div className="register-form">
                    <div>
                        <h2 className="form-title">add new player</h2>
                    </div>
                    <form onSubmit={e => { handleAddNewPlayer(e, playerNameInput), handleClear()}}>
                        <input ref={inputRef} value={playerNameInput} onChange={handleNameInput} className={`${inputErrorState ? "active-error" : ""}`} type="text" placeholder="name, exp: sara" />
                        <div className="register-form-buttons-wrapper">
                            <Button>
                                <PlusIcon />
                                add player
                            </Button>
                            <Button type="button" onClick={handleOpenDeleteModalRef} cn="new-game-btn">new game</Button>
                        </div>
                    </form>
                    <dialog className='new-game-modal' ref={deleteModalRef}>
                        <p>do you want to make a new game?</p>
                        <div className='modal-buttons-wrapper'>
                            <button onClick={() => deleteModalRef.current.close()}>cancle</button>
                            <button onClick={() => {handleMakeNewGame(), deleteModalRef.current.close()}}>confirm</button>
                        </div>
                    </dialog>
                </div>
            </div>
        </section>
    )
}
