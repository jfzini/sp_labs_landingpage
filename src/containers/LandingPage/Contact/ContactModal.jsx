import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/actions';
import closeIcon from '../../../assets/x.svg';
import '../../../styles/Modal.sass';


export default function ContactModal() {
  const { open, name } = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();

  return (
    <div className={`${open ? 'modal--opened' : 'modal--closed'}`}>
      <div className="modal--bg" onClick={() => dispatch(closeModal())}>
        <dialog className="modal">
          {/* used <button> for accessibility */}
          <button type="button" className="modal__button" onClick={() => dispatch(closeModal())}>
            <img src={closeIcon} alt="fechar" className="modal__button--close" />
          </button>
          <p className='modal--content'>Obrigado pelo contato, {name}!</p>
        </dialog>
      </div>
    </div>
  );
}
