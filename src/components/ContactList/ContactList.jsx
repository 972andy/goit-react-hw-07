import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  //  контакти та фільтр зі стану Redux
 const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <h2>Contact List</h2>
        {filteredContacts?.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </div>
  );
};

export default ContactList;


