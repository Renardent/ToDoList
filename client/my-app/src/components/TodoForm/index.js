import React from 'react';
import {Formik, Form, Field} from 'formik';
import {format} from 'date-fns';

const TodoForm = (props) => {

const initialValues = {
        body: '',
        deadline: format(new Date(), 'yyyy-MM-dd')
    }

const onSubmit = (values, actions) => {
        props.sendData(values);
    }

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {(props) => (
            <Form>
                <Field name="body" placeholder="Enter your message"/>
                <Field name="fdeadline" type="date"/>
                <button type="submit">Tap me!</button>
            </Form>
            )}
        </Formik>
    );
}

export default TodoForm;