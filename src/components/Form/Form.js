import React from 'react';

const Form = ({ getUser }) => {
  return (
    <form onSubmit={getUser}>
      <input
        style={{ margin: '10px auto', display: 'block' }}
        type='text'
        name='username'
        placeholder='github username'
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
