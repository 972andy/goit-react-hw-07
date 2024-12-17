import { useSelector, useDispatch } from 'react-redux';
import style from './SearchBox.module.css';
// import { setFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';


const SearchBox = () => {
   const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = evt => dispatch(changeFilter(evt.target.value));

  return (
    <div className={style.searchContainer}>
      <label className={style.searchLabel}>
        <span className={style.searchText}>Find contacts by name:</span>
        <input
          type="text"
          name="name"
          placeholder="Search..."
          value={filter} //  значення з Redux
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;

