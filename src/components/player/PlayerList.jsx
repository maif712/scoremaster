import { useAppContext } from "../../AppContext";
import Player from "./Player";
import { useAutoAnimate } from '@formkit/auto-animate/react'


export default function PlayerList() {

    const {players} = useAppContext()
    const [animationParent] = useAutoAnimate()

    return (
        <div ref={animationParent} className="player-list-container">
            {players.sort((a, b) => b.score - a.score).map((player, index) => {
                return (
                    <Player key={player.id} index={index} {...player} />
                )
            })}
        </div>
    )
}
