import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ContactModal({name, isOpen}) {
  const [isClosed, setIsClosed] = useState(false);
  const { open } = useSelector(state => state.modalReducer);
  return (
    <dialog id="contact__dialog" open={open} className='dialog'>
      <p>
        Obrigado por entrar em contato, {name}!
      </p>
    </dialog>
  )
}
