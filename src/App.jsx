import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Nav from "./components/Nav.jsx";
import BottomNav from "./components/BottomNav.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [count, setCount] = useState(0);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const theme = createTheme({
    palette: {
      background: {
        default: "#fffee1",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <div></div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <h1 className="text-3xl font-bold underline">Tailwind Test</h1>

        <Button variant="contained">Material UI test</Button>

        <h1 className="text-3xl">Formik and Yup Test</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <Field name="lastName" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
