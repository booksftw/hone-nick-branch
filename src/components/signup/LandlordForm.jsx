import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  InputLabel,
  Input,
} from "@mui/material";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  verifyEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Emails must match")
    .required("Email confirmation is required"),
  password: Yup.string().required("Password is required"),
  verifyPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  address: Yup.string().required("Address is required"),
  idPhoto: Yup.mixed().required("Government ID photo is required"),
});

const LandlordForm = () => {
  const [showNextPage, setShowNextPage] = useState(false); // State to control pagination
  const [idPhoto, setIdPhoto] = useState(null); // State to store the uploaded ID photo

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      verifyEmail: "",
      password: "",
      verifyPassword: "",
      mobileNumber: "",
      address: "",
      agreeToTerms: false,
      idPhoto: null,
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      console.log(idPhoto); // Access the uploaded photo using the state variable
    },
  });

  // Function to handle pagination to the next page
  const handleNextPage = () => {
    setShowNextPage(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Landlord Create Account
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        {/* First Page */}
        {!showNextPage && (
          <>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              margin="normal"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              margin="normal"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Verify Email"
              name="verifyEmail"
              fullWidth
              margin="normal"
              value={formik.values.verifyEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.verifyEmail && Boolean(formik.errors.verifyEmail)
              }
              helperText={
                formik.touched.verifyEmail && formik.errors.verifyEmail
              }
            />

            <Button
              type="button"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleNextPage} // Click handler to show next page
              style={{ backgroundColor: "#ED8B06", color: "#FFFFFF" }}
            >
              Next
            </Button>
          </>
        )}

        {/* Next Page */}
        {showNextPage && (
          <Box display="block">
            {/* ID Photo Upload */}
            <InputLabel htmlFor="idPhoto">Government ID Photo</InputLabel>
            {/* ID Photo Upload */}
            <div className="my-4">
              {/* ID Photo Upload */}
              <Box my={4}>
                <Typography variant="h6" component="label" htmlFor="idPhoto">
                  Government ID Photo
                </Typography>
                <input
                  id="idPhoto"
                  name="idPhoto"
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    setIdPhoto(file);
                  }}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
                {formik.touched.idPhoto && formik.errors.idPhoto && (
                  <p className="mt-2 text-red-500">{formik.errors.idPhoto}</p>
                )}
              </Box>
            </div>
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              label="Verify Password"
              name="verifyPassword"
              type="password"
              fullWidth
              margin="normal"
              value={formik.values.verifyPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.verifyPassword &&
                Boolean(formik.errors.verifyPassword)
              }
              helperText={
                formik.touched.verifyPassword && formik.errors.verifyPassword
              }
            />
            <TextField
              label="Mobile Number"
              name="mobileNumber"
              fullWidth
              margin="normal"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.mobileNumber &&
                Boolean(formik.errors.mobileNumber)
              }
              helperText={
                formik.touched.mobileNumber && formik.errors.mobileNumber
              }
            />
            <TextField
              label="Address"
              name="address"
              fullWidth
              margin="normal"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formik.values.agreeToTerms}
                  onChange={formik.handleChange}
                />
              }
              label="I agree to the terms and conditions"
              style={{ color: "#757575" }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ backgroundColor: "#ED8B06", color: "#FFFFFF" }}
            >
              Create Account
            </Button>
            {/* Back Button */}
            <Button
              type="button"
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => setShowNextPage(false)} // Click handler to go back to previous page
              style={{ backgroundColor: "#FFFFFF", color: "#E2E2E2" }}
            >
              Back
            </Button>
          </Box>
        )}
      </form>
    </Container>
  );
};

export default LandlordForm;
