import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

const PostForm = ({
  handleSubmit,
  pristine,
  submitting,
}: InjectedFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='ui form'>
        <div className='field'>
          <label>Post Title</label>
          <Field
            name='title'
            component='input'
            type='text'
            placeholder='Title'
          />
        </div>

        <div className='field'>
          <label>Body</label>
          <Field name='body' component='textarea' />
        </div>
        <div className='field'>
          <button
            className={`ui blue  button `}
            type='submit'
            disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'PostForm', // a unique identifier for this form
})(PostForm);
