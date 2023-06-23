import React from 'react';
import {Formik, Form, Field} from 'formik';
import {format} from 'date-fns';
import styles from './TodoForm.module.css';

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
            <Form className={styles['form-wrapper']}>
                <Field name="body" placeholder="Enter your message"/>
                <Field name="fdeadline" type="date"/>
                <button type="submit" className={styles.button}>Tap me!</button>
            </Form>
            )}
        </Formik>
    );
}

export default TodoForm;