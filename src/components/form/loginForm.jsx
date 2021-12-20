
import { useHistory} from "react-router-dom"
import FormComponent from '../form/formComponent';
import TextField from './textField';
// import * as yup from 'yup';
import CheckboxField from "./ckeckboxField";
// import validator from "../../../utils/validator";

const LoginForm = () => {
  const history = useHistory()
    function handleSubmit(data) {
        console.log(data);
        // eslint-disable-next-line no-lone-blocks
        // {JSON.parse(localStorage.getItem('authors')).find(
        //   (author) => author.email === inputValue.email && author.password === inputValue.password
        // ) && history.push('/admin')}
    }
    return (
      <>
        <FormComponent onSubmit={handleSubmit} className="authentication">
          <TextField
            fieldType="email"
            fieldName="email"
            placeholder="Username"
            classes="login__input"
          />
          <TextField
            fieldType="password"
            fieldName="password"
            placeholder="Password"
            classes="login__input"
          />
          {/* <div className="log__remember">
            <Link to="/login">Log in</Link>
            <CheckboxField name="remember">Remember me</CheckboxField>
          </div> */}
          <button type="submit" className="login__btn">
            Sing in
          </button>
        </FormComponent>
      </>
    );
};
export default LoginForm;
