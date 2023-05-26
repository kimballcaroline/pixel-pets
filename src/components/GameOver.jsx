
import gameOverGraphic from '../assets/gameOverGraphic.png';
import '../stylesheets/GameOver.scss';

export const GameOver = () => {
  return (
    <div className="game-over-wrapper">
      <img src={gameOverGraphic} />
    </div>
  )
}
