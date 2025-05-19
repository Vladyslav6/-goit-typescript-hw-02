import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const initialValues = {
  query: "",
};

const SearchBar = ({ handleChangeQwery }) => {
  const handleSabmit = (values, options) => {
    handleChangeQwery(values.query);
    if (!values.query) toast.error("The field cannot be empty");
    options.resetForm();
  };

  return (
    <div className={css.SearchBox}>
      <Formik initialValues={initialValues} onSubmit={handleSabmit}>
        <Form>
          <label>
            <Field type="text" name="query" placeholder="Enter Text"></Field>
          </label>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
