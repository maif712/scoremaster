

import { useAppContext } from '../AppContext'
import Modal from './Modal'
import PlayerList from './player/PlayerList'

export default function Leaderboard() {

  const {isModalOpen} = useAppContext()

  return (
    <section className="relative">
        <div className="layout-wrapper">
            <div className="leaderboard">
                <PlayerList />
            </div>
        </div>
        {isModalOpen  && <Modal />}
    </section>
  )
}
