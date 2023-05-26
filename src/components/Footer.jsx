import HeartIcon from '../assets/icons/icon_heart.png';
import '../stylesheets/Footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <p>This game was built with <img src={HeartIcon} alt="heart icon" /> by <a href="https://www.linkedin.com/in/kimballcaroline/" target="_blank" rel="noreferrer">Caroline Kimball</a>.</p>
      <p>View the source code <a href="https://github.com/kimballcaroline/pixel-pets/tree/main" target="_blank" rel="noreferrer">here</a>.</p>
    </div>
  )
}
