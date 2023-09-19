import Layout from "../components/layout";
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikProps,
  FieldProps,
} from "formik";

interface MyFormValues {
  name: string;
  address: string;
}

const initialValues: MyFormValues = {
  name: "",
  address: "",
};

const Basic: React.FC = () => (
  <Layout>
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="address" name="address" />
            <ErrorMessage name="address" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </Layout>
);

export default Basic;
