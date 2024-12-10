import { useSelector, useDispatch } from 'react-redux';
import style from './SearchBox.module.css';
import { setFilter } from '../../redux/filtersSlice';


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  // Обробник зміни інпуту
  const handleChange = (event) => {
    const searchQuery = event.target.value;
    // const action = { type: 'filter/setFilter', payload: searchQuery };
    const action = setFilter(searchQuery);
    // Оновлюємо значення фільтра в Redux
    dispatch(action);
  };

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

