import React from "react";
import "./style.css";
import {Form, Col, Button} from "react-bootstrap";

const Forms = ({showForm, toggleThroughForms, logInForm, signUpForm}) => {
  const {
    button_close,
    button_submit,
    class_Name,
    e_mail_lable_footer,
    e_mail_lable_header,
    e_mail_lable_placeholder,
    password_lable_footer,
    password_lable_header,
    password_lable_placeholder,
    title,
  } = logInForm;

  const {
    signup_button_close,
    signup_button_submit,
    signup_class_Name,
    signup_e_mail_lable_footer,
    signup_e_mail_lable_header,
    signup_e_mail_lable_placeholder,
    signup_password_lable_footer,
    signup_password_lable_header,
    signup_password_lable_placeholder,
    signup_title,
  } = signUpForm;

  const typeOfForm =
    showForm.typeOfForm === "Log In"
      ? {
          class_Name: class_Name,
          title: title,
          e_mail_lable_header: e_mail_lable_header,
          e_mail_lable_placeholder: e_mail_lable_placeholder,
          e_mail_lable_footer: e_mail_lable_footer,
          password_lable_header: password_lable_header,
          password_lable_placeholder: password_lable_placeholder,
          password_lable_footer: password_lable_footer,
          button_submit: button_submit,
          button_close: button_close,
        }
      : {
          class_Name: signup_class_Name,
          title: signup_title,
          e_mail_lable_header: signup_e_mail_lable_header,
          e_mail_lable_placeholder: signup_e_mail_lable_placeholder,
          e_mail_lable_footer: signup_e_mail_lable_footer,
          password_lable_header: signup_password_lable_header,
          password_lable_placeholder: signup_password_lable_placeholder,
          password_lable_footer: signup_password_lable_footer,
          button_submit: signup_button_submit,
          button_close: signup_button_close,
        };

  return (
    <Form className={typeOfForm.class_Name}>
      <Form.Group className='forms_label' controlId='formBasicEmail'>
        {" "}
        <h1 className='form_title'>{typeOfForm.title}</h1>
        <Form.Label>{typeOfForm.e_mail_lable_header}</Form.Label>
        <Form.Control
          type='email'
          placeholder={typeOfForm.e_mail_lable_placeholder}
        />
        <Form.Text className='text-muted'>
          {typeOfForm.e_mail_lable_footer}
        </Form.Text>
        <Form.Label>{typeOfForm.password_lable_header}</Form.Label>
        <Form.Control
          type='password'
          placeholder={typeOfForm.password_lable_placeholder}
        />
        <Form.Text className='text-muted'>
          {typeOfForm.password_lable_footer}
        </Form.Text>
      </Form.Group>
      {showForm.typeOfForm !== "Log In" ? (
        <Form.Group className='forms_label' controlId='formBasicEmail'>
          <Form.Label>{typeOfForm.e_mail_lable_header}</Form.Label>
          <Form.Control
            type='email'
            placeholder={typeOfForm.e_mail_lable_placeholder}
          />
          <Form.Text className='text-muted'>
            {typeOfForm.e_mail_lable_footer}
          </Form.Text>

          <Form.Label>{typeOfForm.e_mail_lable_header}</Form.Label>
          <Form.Control
            type='email'
            placeholder={typeOfForm.e_mail_lable_placeholder}
          />
          <Form.Text className='text-muted'>
            {typeOfForm.e_mail_lable_footer}
          </Form.Text>
        </Form.Group>
      ) : null}
      <Form.Group className='forms_label' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='NEWSLETTER' />
      </Form.Group>
      <div className='forms_label'>
        <button
          className='form_buttons submit_button_color'
          variant='primary'
          type='submit'
        >
          {typeOfForm.button_submit}
        </button>
        <button
          className='form_buttons close_button_color'
          onClick={() => toggleThroughForms(!showForm.show)}
          variant='danger'
          type='submit'
        >
          {typeOfForm.button_close}
        </button>
      </div>
    </Form>
  );
};

export default Forms;
