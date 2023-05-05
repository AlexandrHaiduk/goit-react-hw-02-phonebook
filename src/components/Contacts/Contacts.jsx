import css from './styles.module.css';
export const Contacts = ({ data, onDeleteContact }) => {
  return (
    <>
      <ul>
        {data.map(info => {
          return (
            <li key={info.id} id={info.id}>
              <p>{info.name}: </p>
              <p>{info.number}</p>
              <button
                type="button"
                className={css.delete__button}
                onClick={() => onDeleteContact(info.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
