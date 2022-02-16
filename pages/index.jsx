import { useCallback, useContext } from "react";

import { useFormik } from "formik";

import * as yup from "yup";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "./components/AppContext";

const Home = () => {
  const { addEntry } = useContext(AppContext);
  const handleSubmit = useCallback(
    (data) => {
      addEntry(data);
    },

    [addEntry]
  );

  const formik = useFormik({
    initialValues: {
      Name: "",
      Zip: "",
      Age: "",
      Country: "",
    },
    onSubmit: { handleSubmit },
    validationSchema: yup.object({
      Zip: yup.string().trim().required("Your zip code is required"),
      Name: yup.string().trim().required("Your name is required"),
      Age: yup.string().trim().required("Your Age is required"),
      Country: yup.string().trim().required("Your country is required"),
    }),
  });

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <Link href="/components/Tableau" passHref>
        <a>
          <button type="button" className="btn btn-primary">
            LIST OF INFORMATION
          </button>
        </a>
      </Link>
      <h3>Formulaire Annuaire</h3>

      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Ady MAsivi"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onSubmit={formik.handleSubmit}
          />
          {formik.errors.Name && (
            <div className="text-danger">{formik.errors.Name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Age
          </label>
          <input
            type=""
            name=""
            className="form-control"
            placeholder="Your Age"
            value={formik.values.Age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onSubmit={formik.handleSubmit}
          />
          {formik.errors.Age && (
            <div className="text-danger">{formik.errors.Age}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="zip">Zip Code</label>
          <input
            type="number"
            name="zip"
            className="form-control"
            placeholder="Zip Code"
            value={formik.values.Zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onSubmit={formik.handleSubmit}
          />
          {formik.errors.Zip && (
            <div className="text-danger">{formik.errors.Zip}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="form-control"
            placeholder="ex: France"
            value={formik.values.Country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onSubmit={formik.handleSubmit}
          />
          {formik.errors.Country && (
            <div className="text-danger">{formik.errors.Country}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Home;
