/* eslint-disable react/prop-types */
import '../stylesheets/Penguin.scss';

const Penguin = (props) => {
  const {status} = props;

  switch (status) {
  case 'HATCHING':
    return <div className="penguin penguin-hatching"></div>
  case 'HUNGRY':
    return <div className="penguin penguin-hungry"></div>
  case 'EATING':
    return <div className="penguin penguin-eating"></div>
  case 'POOPING':
    return <div className="penguin penguin-pooping"></div>
  case 'SLEEPING':
    return <div className="penguin penguin-sleeping"></div>
  case 'IDLING':
    return <div className="penguin penguin-idling"></div>
  case 'CELEBRATING':
    return <div className="penguin penguin-celebrating"></div>
  case 'DEAD':
    return <div className="penguin penguin-dead"></div>
  default:
    return <div className="penguin penguin-idling"></div>
  }
}
export default Penguin;