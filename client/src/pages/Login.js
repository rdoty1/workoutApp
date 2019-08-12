import React from "react";
import ReactDOM from "react-dom";
import Jumbotron from '../components/Jumbotron'


const txtFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: "" 
};
const ErrorValidationLabel = ({ txtLbl }) => (
  <label htmlFor="" style={{ color: "red" }}>
    {txtLbl}
  </label>
);
const Field = ({
  valid,
  type,
  fieldId,
  fieldName,
  typeMismatch,
  formatErrorTxt,
  requiredTxt
}) => {
  const renderErrorLabel = !valid ? (
    <ErrorValidationLabel
      txtLbl={typeMismatch ? formatErrorTxt : requiredTxt}
    />
  ) : (
    ""
  );
  return (
    <>
      <input type={type} name={fieldId} placeholder={fieldName} required />
      <br />
      {renderErrorLabel}
      <br />
    </>
  );
};
class Login extends React.Component {
  state = {
    email: {
      ...txtFieldState,
      fieldName: "Email",
      required: true,
      requiredTxt: "Email is required",
      formatErrorTxt: "Incorrect email format",
      type: "email"
    },
    firstname: {
      ...txtFieldState,
      fieldName: "First Name",
      required: true,
      requiredTxt: "First Name is required",
      type: "text"
    },
    lastname: {
      ...txtFieldState,
      fieldName: "Last Name",
      required: false,
      requiredTxt: "Last Name is required",
      type: "text"
    },
    allFieldsValid: false
  };
  reduceFormValues = formElements => {
    const arrElements = Array.prototype.slice.call(formElements); //we convert elements/inputs into an array found inside form element
    //we need to extract specific properties in Constraint Validation API using this code snippet
    const formValues = arrElements
      .filter(elem => elem.name.length > 0)
      .map(x => {
        const { typeMismatch } = x.validity;
        const { name, type, value } = x;
        return {
          name,
          type,
          typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
          value,
          valid: x.checkValidity()
        };
      })
      .reduce((acc, currVal) => {
        //then we finally use reduce, ready to put it in our state
        const { value, valid, typeMismatch, type } = currVal;
        const { fieldName, requiredTxt, formatErrorTxt } = this.state[
          currVal.name
        ]; //get the rest of properties inside the state object
        //we'll need to map these properties back to state so we use reducer...
        acc[currVal.name] = {
          value,
          valid,
          typeMismatch,
          fieldName,
          requiredTxt,
          formatErrorTxt
        };
        return acc;
      }, {});
    return formValues;
  };
  checkAllFieldsValid = formValues => {
    return !Object.keys(formValues)
      .map(x => formValues[x])
      .some(field => !field.valid);
  };
  onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    
    const formValues = this.reduceFormValues(form.elements);
    const allFieldsValid = this.checkAllFieldsValid(formValues);
 
    this.setState({ ...formValues, allFieldsValid }); 
  };
  mapFieldInputs = () => {
   
    return Object.keys(this.state)
      .filter(x => x !== "allFieldsValid")
      .map(field => {
        return {
          fieldId: field,
          ...this.state[field]
        };
      });
  };
  render() {
    const { allFieldsValid } = this.state;
    const successFormDisplay = allFieldsValid ? "block" : "none";
    const inputFormDisplay = !allFieldsValid ? "block" : "none";
    const fields = this.mapFieldInputs();
    const renderFields = fields.map(x => <Field {...x} />);
    return (
      <>
        <Jumbotron>
            <h1 className="title">
             Login
            </h1>
        </Jumbotron>
    
        <div style={{ display: successFormDisplay }}>
          <h1 style={{ textAlign: "center" }}>Success!</h1>
          <p style={{ textAlign: "center" }}>
            You have successfully submitted a form.
          </p>
        </div>

       

        <div className="form-input" style={{ display: inputFormDisplay }}>
         <div className="formHeader"> 
         <h2 className="please"> Please Insert Login Information</h2>
         <form
            className="form-inside-input"
            onSubmit={this.onSubmit}
            noValidate
          >
              
            {renderFields}
            <input type="submit" value="Submit" />
          </form>




         </div>
          
        </div>
        
      </>
    );
  }
}
export default Login;

const rootElement = document.getElementById("root");
