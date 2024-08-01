import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoBackButton from "../../Components/GoBackButton";
import { useNavigate } from "react-router-dom";

const Cart = () => {


  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string().required("Phone number is required"),
  });

 const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again later.");
    }
  };
  if (response.ok) {
    alert("Form submitted successfully!");
    navigate("/");
  }
  
  return (
    
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="place-order bg-gray-100 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b-2 pb-4 mb-4">
          <GoBackButton/>
            <div className="place-order-left">
              <p className="title text-xl font-bold mb-4 border-b-2 pb-2">
                Delivery Information
              </p>
              <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Field
                    type="text"
                    placeholder="Enter First Name"
                    className="input-field ps-1 rounded border-2 border-gray-300 ps-1"
                    name="firstName"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    placeholder="Enter Last Name"
                    className="input-field ps-1 rounded border-2 border-gray-300"
                    name="lastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div>
                <Field
                  type="email"
                  placeholder="Enter Email Address"
                  className="input-field ps-1 rounded border-2 border-gray-300"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Enter Street"
                  className="input-field ps-1 rounded border-2 border-gray-300"
                  name="street"
                />
                <ErrorMessage
                  name="street"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Field
                    type="text"
                    placeholder="Enter City"
                    className="input-field ps-1 rounded border-2 border-gray-300"
                    name="city"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    placeholder="Enter State"
                    className="input-field ps-1 rounded border-2 border-gray-300"
                    name="state"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div className="multi-fields grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Field
                    type="text"
                    placeholder="Enter Zip Code"
                    className="input-field ps-1 rounded border-2 border-gray-300"
                    name="zipCode"
                  />
                  <ErrorMessage
                    name="zipCode"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    placeholder="Enter Country"
                    className="input-field ps-1 rounded border-2 border-gray-300"
                    name="country"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Enter Phone"
                  className="input-field ps-1 rounded border-2 border-gray-300"
                  name="phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600"
                />
              </div>
            </div>

            <div className="place-order-right">
              <div className="class-total flex-1 flex flex-col gap-5">
                <h1 className="font-extrabold text-2xl border-b-2 pb-2">
                  Cart Totals
                </h1>
               
              </div>

              <div className="flex flex-col justify-end mt-4">
                <button
                  type="submit"
                  className="bg-black text-white cursor-pointer px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300"
                >
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Cart;
