import { nanoid } from 'nanoid';

export const Contacts = ({ data }) => {
  return (
    <>
      <h2>Contacts</h2>
      <p>Find contact by name</p>
      <input type="text" name="" id="" />
      {data.map((info, i) => {
        return (
          <>
            <li key={info.id}>
              <p>{info.name}: </p>
              <p>{info.number}</p>
              <button type="button">Delete</button>
            </li>
          </>
        );
      })}
    </>
  );
};
