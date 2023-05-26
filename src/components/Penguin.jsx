/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';
import '../stylesheets/Penguin.scss';

const Penguin = (props) => {
  const {status} = props;

  const [statusClass, setStatusClass] = useState('penguin');

  useEffect(() => {
    switch (status) {
      case 'HATCHING':
        return setStatusClass('penguin penguin-hatching');
      case 'HUNGRY':
        return setStatusClass('penguin penguin-hungry');
      case 'EATING':
        return setStatusClass('penguin penguin-eating');
      case 'POOPING':
        return setStatusClass('penguin penguin-pooping');
      case 'SLEEPING':
        return setStatusClass('penguin penguin-sleeping');
      case 'IDLING':
        return setStatusClass('penguin penguin-idling');
      case 'CELEBRATING':
        return setStatusClass('penguin penguin-celebrating');
      case 'DEAD':
        return setStatusClass('penguin penguin-dead');
      default:
        return setStatusClass('penguin penguin-idling');
  }
  }, [status])

  return <div className={statusClass}></div>
}
export default Penguin;