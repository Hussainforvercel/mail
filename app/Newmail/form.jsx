// Form.js
import React from 'react';

const Form = () => {
  // Your form component logic goes here

  return (
    <div className='w-full'>
      {/* Your form JSX goes here */}
      {/* For example, a simple form with input fields */}
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
