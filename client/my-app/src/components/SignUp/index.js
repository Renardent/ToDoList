import React from 'react';
import {Formik, Form, Field} from 'formik';
import {format} from 'date-fns';
import {registerUser} from '../../api/userApi';


const SignUp = (props) => {

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    birthday: format(new Date(), 'yyyy-MM-dd'),
    password: ''
}

const onSubmit = (values, actions) => {
    props.sendData({callback: registerUser,
        values});
}

  return (
    <>
        <h2>SignUp</h2>
        <Formik initialValues={initialValues}
        onSubmit = {onSubmit}>
            {(props) => (
                <Form>
                    <Field name="firstName" placeholder="Type your name"/>
                    <Field name="lastName" placeholder="Type your last name"/>
                    <Field name="email" placeholder="Type your email"/>
                    <Field type="date" name="birthday"/>
                    <Field name="password" placeholder="Type your  password"/>
                    <button type="submit">Send me</button>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default SignUp;