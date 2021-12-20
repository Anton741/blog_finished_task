import FormComponent from '../form/formComponent';
import TextField from './textField';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import {singUp} from '../../redux/action'

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const schema = yup.object().shape({
    password: yup
      .string()
      .required('Обязательно для заполнения')
      .min(6, 'Пароль должен содержать не менее 8 символов')
      .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одно число.')
      .matches(
        /(?=.*[!@#$%^&*])/,
        'Пароль должен содержать хотя бы один спецсимвол .'
      ),
    email: yup.string().email().required('Это поле обязательно для заполнения'),
    name: yup.string().required('Это поле обязательно для заполнения'),
  });

  function handleSubmit(data) {
    console.log(data);
    try{
      dispatch(singUp(data))
    }
    catch(error){
      console.log(error);
    }
    
  }

  return (
    <FormComponent
      onSubmit={handleSubmit}
      className="registration_form"
      validationSchema={schema}
    >
      <TextField
        fieldType="text"
        fieldName="name"
        fieldLable="Ваше имя"
        classes="login__input"
      />
      <TextField
        fieldType="email"
        fieldName="email"
        fieldLable="Ваш логин/email"
        classes="login__input"
      />
      <TextField
        fieldType="password"
        fieldName="password"
        fieldLable=" Введите пароль"
        classes="login__input"
      />
      <TextField
        fieldType="textarea"
        fieldName="about"
        fieldLable="Пару слов о себе"
        classes="login__input"
      />
      <button type="submit" className="btn registration__btn">
        Sing up
      </button>
    </FormComponent>
  );
};

export default RegistrationForm;
