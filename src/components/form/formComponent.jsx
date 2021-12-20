
import React, { useCallback, useState, useEffect } from 'react';
const FormComponent = ({ children, onSubmit, className, validationSchema }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    validationSchema && 
    validationSchema.validate(data)
          .then(() => {setError(null)})
          .catch((error) => setError({ [error.path]: error.message }));
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }
  const handleChange = useCallback(
    (target) => {
      setData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const clonedElements = React.Children.map(children, (child) => {
    const childType = typeof child.type;
    let config;
    if (childType === 'object') {
      config = {
        ...child.props,
        onHandleChange: handleChange,
        value: data[child.props.fieldName] || '',
        error: error && error[child.props.fieldName],
      };
    }
    if (childType === 'string') {
      if (child.type === 'button') {
        if (child.props.type === 'submit' || child.props.type === undefined) {
          config = { ...child.props };
        }
      }
    }
    return React.cloneElement(child, config);
  });
  return (
    <form onSubmit={handleSubmit} className={className}>
      {clonedElements}
    </form>
  );
};
export default FormComponent;
