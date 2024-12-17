import style from './Contact.module.css';
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
import { deleteContacts } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();
   

  return (
    <li className={style.list}>
      <div>
        <p className={style.listItem}>
          <span className={style.listIcon}><IoMdPerson /></span>{name}
        </p>
        <p className={style.listItem}>
          <span className={style.listIcon}><FaPhoneAlt /></span>{number}
        </p>
      </div>
      <button className={style.listButton} onClick={() => dispatch(deleteContacts(id))}>Delete</button>
    </li>
  );
};

export default Contact;

