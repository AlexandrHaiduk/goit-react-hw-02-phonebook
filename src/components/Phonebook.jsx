import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { object, string, number } from 'yup';

const initialValues = {
  name: '',
  number: '',
  id: '',
};

let userSchema = object({
  name: string().min(3).required(),
  number: number().required(),
  id: string(),
});

export const Phonebook = ({ addContact }) => {
  const handleFormSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    addContact({ ...values, id: nanoid() });
    actions.resetForm();
  };
  return (
    <>
      <h1>Phonebook</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={userSchema}
      >
        <Form className="form">
          <label htmlFor="name">
            <p>Name</p>
            <Field name="name" />
            <ErrorMessage component="div" className="error" name="name" />
          </label>
          <label htmlFor="number">
            <p>Number</p>
            <Field type="tel" name="number" />
            <ErrorMessage component="div" className="error" name="number" />
          </label>
          <button type="submit" className="add__button">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
