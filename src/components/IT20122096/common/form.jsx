import React, { Component } from "react";
import Joi from "joi-browser";
import DropDownList from "./dropDownList";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty(input) {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const result = Joi.validate(obj, schema);

    if (!result.error) return null;
    return result.error.details[0].message;
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) {
      errors[name] = errorMessage;
    } else {
      delete errors[name];
    }

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data,errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderInputField(label, name, type) {
    const {data,errors} = this.state;
    return (
      <Input
        label={label}
        name={name}
        type={type}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
      />
    );
  }
  renderButton(label, className, type, onClick) {
    return (
      <React.Fragment>
        <button type={type} className={className} onClick={onClick} disabled={this.validate()}>
          {label}
        </button>
      </React.Fragment>
    );
  }
  renderDropDown(lable, name, options) {
    return (
      <DropDownList
        label={lable}
        name={name}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
