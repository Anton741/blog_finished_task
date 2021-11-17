const CheckboxField = ({ name, value, onHandleChange, children }) => {
    console.log(value);
    const handleChange = ({ target }) => {
        console.log(target);
        onHandleChange({ name: target.name, value: !value });
    };
    return (
      <div className="form-check mb-4">
        <input
          className="login__ckeckbox"
          type="checkbox"
          value={value}
          id={name}
          checked={value}
          onChange={handleChange}
          name={name}
        />
        <label className="login__lable" htmlFor={name}>
          {children}
        </label>
      </div>
    );
};

export default CheckboxField;
