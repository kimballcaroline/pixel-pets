import HeartIcon from '../assets/icons/icon_heart.png';
import '../stylesheets/Modal.scss';

export const Modal = () => {
  return (
    <div className="modal">
      <h1>Welcome to Pixel Pets!</h1>
      <p>Use the buttons on the bottom to select the controls, feed, clean, or give pets <img src={HeartIcon} alt="heart icon" /></p>
      <p>To start the game, press the center button!</p>
    </div>
  )
}
