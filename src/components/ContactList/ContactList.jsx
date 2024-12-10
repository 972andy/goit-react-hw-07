import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

const ContactList = () => {
  //  контакти та фільтр зі стану Redux
  const contacts = useSelector((state) => state.contactsData.contacts.items || []);
  const filter = useSelector((state) => state.filter.filter);

  // Фільтруємо контакти 
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contactItem={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;


