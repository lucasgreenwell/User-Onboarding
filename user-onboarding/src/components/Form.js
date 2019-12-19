import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from 'axios';

import Users from './Users'


const FormComp = () => {
    const [users, setUsers] = useState([]);
    const handleSubmit = (values, tools) => {
       axios.post('https://reqres.in/api/users_', values)
       .then(res => {
        //    console.log(res);
           tools.resetForm();
           setUsers([...users, res.data])
        //    console.log(users)
       })
       .catch(err => {
           console.log(err);
       })
       .finally(

       )
    }

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", terms: false }}
      onSubmit={handleSubmit}
      render={props => {
        //   console.log(users)
        return (
          <Form>
            <Field name="name" type="text" placeholder="enter name" /> <br />

            <Field name="email" type="text" placeholder="enter email" /><br />

            <Field name="password" type="text" placeholder="enter password" /><br />

            I agree to the terms of service <Field name="terms" type="checkbox" /><br />

            <input type="submit" />

            <Users props={users}/>
          </Form>
        );
      }}
    />
  );
};

export default FormComp;
