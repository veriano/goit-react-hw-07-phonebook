import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './filter-styles.module.css';
import  actions from 'redux/contacts-actions';

export default function Filter () {
  const filterValue = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <div className={s.div}>
      <label className={s.label}>Find contacts by name</label>
      <input
        onChange={(e) => dispatch(actions.filterChange(e.target.value))}
        value={filterValue}
        className={s.input}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};


