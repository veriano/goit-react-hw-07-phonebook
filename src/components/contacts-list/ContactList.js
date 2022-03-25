import PropTypes from 'prop-types';
import s from './contactsList-styles.module.css';
import { useSelector } from 'react-redux';


export default function ContactList({ contacts, onDeleteContact }) {
  const filter = useSelector(state => state.contacts.filter);

   const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
    const filtered = contacts ? getVisibleContacts(contacts) : [];

  return (
    <ul className={s.list}>
      {filtered && filtered.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.item}>
            <p className={s.p}>
              {name} <span className={s.span}>{number}</span>
            </p>
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

