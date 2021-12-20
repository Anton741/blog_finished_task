import TextField from "./textField";
import { React, useState } from 'react';


const SubscribeForm = ({ blockTitle, blockDescription}) => {
  const [inputValue, setInputValue] = useState({ name: null, email: null });

  function handleChange(target) {
    console.log(target);
    setInputValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }
  return (
    <div className="subscribe__block">
      <h2 className="subscribe__title right-column__titles">{blockTitle}</h2>
      <div className="subscribe__description">{blockDescription}</div>
      <form action="" className="subscribe__form">
        <TextField
          fieldType={'text'}
          fieldName={'name'}
          onHandleChange={handleChange}
          value={inputValue.name || ''}
          placeholder={'Your name'}
          classes={'subscribe__input'}
        />
        <TextField
          fieldType={'email'}
          fieldName={'email'}
          onHandleChange={handleChange}
          value={inputValue.email || ''}
          placeholder={'Your email address'}
          classes={'subscribe__input'}
        />
        <button className="subscribe__btn">Subscribe to newsletter</button>
      </form>
    </div>
  );
};
export default SubscribeForm;