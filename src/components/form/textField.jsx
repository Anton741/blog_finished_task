const TextField = ({
  fieldType,
  value,
  fieldName,
  fieldLable,
  onHandleChange,
  error,
  classes,
  placeholder
}) => {
  function getClasses() {
    return error ? 'form-control is-invalid' : 'form-control ';
  }
  const handleChange = ({ target }) => {
    onHandleChange({ name: target.name, value: target.value });
  };
  return (
    <>
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
      {error && (
        <div className="invalid-feedback" role="alert">
          {error}
        </div>
      )}
    </>
  );
};

export default TextField;
