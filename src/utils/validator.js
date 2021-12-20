import * as yup from 'yup';
export function validate(data){
let schema = yup.object().shape({
    email: yup.string().email().required("Это поле обязательно для заполнения"),
    password: yup.string()
                            .required('Обязательно для заполнения')
                            .min(6, 'Пароль должен содержать не менее 8 символов')
                            .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одно число.')
                            .matches(/(?=.*[!@#$%^&*])/, 'Пароль должен содержать хотя бы один спецсимвол .'),
    name: yup.string().required("Это поле обязательно для заполнения"),
    })
    let errors = schema.validateSync({...data, abortEarly: false})
    return errors;
}
