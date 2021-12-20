import React from 'react';
const TextField = ({
  fieldType,
  value,
  fieldName,
  fieldLable,
  onHandleChange,
  error,
  classes,
  placeholder,
}) => {
  function getClasses() {
    return error ? 'form-control is-invalid' : 'form-control ';
  }
  const handleChange = ({ target }) => {
    onHandleChange({ name: target.name, value: target.value });
  };
  return (
    <>
      <div className="form__field">
        <label htmlFor={`#${fieldName}`} className="form-label">
          {fieldLable}
        </label>
        {fieldType === 'textarea' && (
          <textarea
            name={fieldName}
            value={value}
            aria-describedby="addon-wrapping"
            id={fieldName}
            placeholder={placeholder}
            onChange={handleChange}
            className={classes}
          ></textarea>
        )}
        {fieldType !== 'textarea' && (
          <input
            type={fieldType}
            name={fieldName}
            value={value}
            aria-describedby="addon-wrapping"
            id={fieldName}
            placeholder={placeholder}
            onChange={handleChange}
            className={classes || getClasses()}
          ></input>
        )}
      </div>
      <div className="input__error">
        {error && (
          <div className={getClasses()} role="alert">
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(TextField);
