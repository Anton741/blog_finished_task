import React from "react";
import Select from "react-select";

const MultipleSelectField = ({ name, lable, options,onHandleChange , defaultV }) => {
    const handleChange = (value) => {
        onHandleChange({ name: name, value });
    };
    const optionsArray = typeof options === "object"
        ? Object.keys(options).map(option => ({
            label: options[option].name,
            value: options[option]._id
        }))
        : options;
    return (
      <div className="mb-4">
        <label htmlFor={'#professions'} className="form-label">
          {lable}
        </label>
        <Select
          isMulti
          defaultValue={defaultV}
          name={name}
          options={optionsArray}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleChange}
        />
      </div>
    );
};

export default MultipleSelectField;
