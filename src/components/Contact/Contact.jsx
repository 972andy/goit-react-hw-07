import style from './Contact.module.css';
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contactItem }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
      const action = deleteContact(contactItem.id); 
    dispatch(action)
    }
   

  return (
    <li className={style.list}>
      <div>
        <p className={style.listItem}>
          <span className={style.listIcon}><IoMdPerson /></span>{contactItem.name}
        </p>
        <p className={style.listItem}>
          <span className={style.listIcon}><FaPhoneAlt /></span>{contactItem.number}
        </p>
      </div>
      <button className={style.listButton} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;

