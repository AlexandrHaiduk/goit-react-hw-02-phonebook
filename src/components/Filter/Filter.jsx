import css from './styles.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label htmlFor="filter">Find contact by name</label>
      <input
        type="text"
        name="filter"
        id=""
        value={value}
        onChange={onChangeFilter}
        className={css.filter}
      />
    </>
  );
};
