import { useParams, useHistory, Link } from "react-router-dom";
import LoginForm from "../components/form/loginForm";
import RegistrationForm from "../components/form/registrationForm";
import Header from "../components/header";
const Login = () => {
    const { type } = useParams();
    const history = useHistory();
    return (
      <>
      < Header/>
      <div className="login__pages">
        <div className="login__body">
            {type !== 'registration' ? (
              <>
                <h3 className="login__title">Welcome!!!</h3>
                <div className="login__subtitle">Log in to get the most out of nuntium.</div>
                <LoginForm />
                <p>Don't you have an account?<Link to = '/login/registration'>Sing up</Link></p>
              </>
            ) : (
              <>
                <div className="registration__head">
                  <h3 className="registration__title">Registration</h3>
                  <p>Already have account?<Link to = '/login'>Sing in</Link></p>
                </div>
                <RegistrationForm />
              </>
            )}
          </div>
      </div>
      </>
    );
};

export default Login;
