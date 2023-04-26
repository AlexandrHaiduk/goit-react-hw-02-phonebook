import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';

const initialValues = {
  name: '',
  number: '',
};

let userSchema = object({
  name: string().min(10).required(),
  number: number().required(),
});

export const Phonebook = () => {
  const handleFormSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
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
        <Form>
          <label htmlFor="name">
            <p>Name</p>
            <Field name="name" />
            <ErrorMessage component="div" name="name" />
          </label>
          <label htmlFor="number">
            <p>Number</p>
            <Field type="number" name="number" />
            <ErrorMessage component="div" name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
