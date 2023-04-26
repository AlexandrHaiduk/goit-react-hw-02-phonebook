import { nanoid } from 'nanoid';

export const Contacts = ({ data, onDeleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <p>Find contact by name</p>
      <input type="text" name="" id="" />
      <ul>
        {data.map((info, i) => {
          return (
            <>
              <li key={info.id} id={info.id}>
                <p>{info.name}: </p>
                <p>{info.number}</p>
                <button
                  type="button"
                  className="delete__button"
                  onClick={() => onDeleteContact(info.id)}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
