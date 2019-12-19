import React from 'react';
import {Formik, Form, Field} from 'formik';

const Form = () => {
    return (<Formik
        initialValues={{name:'', email:'', password:'', terms: 'unchecked'}}
        onSubmit={(values, tools) => {
            tools.resetForm;
        }}
        render={props => {
            return (
                <Form>
                    <Field name='name' type='text' placeholder='enter name'/>
                    <Field name='email' type='text' placeholder='enter email'/>
                    <Field name='password' type='text' placeholder='enter password'/>
                    <Field name='terms' type='checkbox'/>
                </Form>
            )
        }}
    />)
}