import React from 'react';
import { config } from 'config';
import { GeneralInput, TextInput, FormHolder, SubmitButton, TextArea } from 'form-components';
import { Field, reduxForm } from 'redux-form';

import styles from './RoleForm.module.css';

const roleTitles = ['Project Manager', 'Baker', 'Tinker'];

class Form extends React.Component {

  render () {
    return (
      <FormHolder onSubmit={this.props.handleSubmit}>
          <div className={styles.nearbyFields}>
              <GeneralInput label='First Name' field='first-name'>
                  <Field name="first-name" component={TextInput} />
              </GeneralInput>
              <GeneralInput label='Last Name' field='last-name'>
                  <Field name="last-name" component={TextInput} />
              </GeneralInput>
          </div>
        <GeneralInput label='Your position title' field='position-title'>
            <Field name="position-title" component={TextInput} />
        </GeneralInput>
        <GeneralInput label='Email' field='email'>
            <Field name="email" component={TextInput} />
        </GeneralInput>
        <GeneralInput label='Role title' field='role-title'
            extraLabel='Select the role that you would like to provide a description for'>
            <Field name="role-title" component="select">
               {roleTitles.map(option =>
                 <option value={option} key={option}>{option}</option>)}
             </Field>
        </GeneralInput>
        <GeneralInput label='How many years of experience do you have in this role?' field='years-of-experience'>
            <Field name='years-of-experience' component={TextInput} />
        </GeneralInput>
        <GeneralInput label='Describe this role. What are the responsabilities?'
            extraLabel='(this can include day-to-day activities, projects, objectives and expectations of your work)'
            field='description'>
            <Field name='description' component={TextArea} />
        </GeneralInput>
        <SubmitButton />
      </FormHolder>
    )
  }
}

Form = reduxForm({
    form: 'roleForm'
})(Form);

export default Form;
