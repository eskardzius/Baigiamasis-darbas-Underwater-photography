import { useFormik } from "formik";
import * as Yup from 'yup';
import { useContext, useState } from "react";
import UsersContext from "../../contexts/UsersContext";
import styled from "styled-components";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import { UsersActionTypes } from "../../contexts/UsersContext";
import bcrypt from 'bcryptjs';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;

  > h1{
    font-size: 3rem;
  }

  > form{
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
      display: grid;
      grid-template-columns: 1fr 2fr;

      > p{
        grid-column: span 3;
        color: red;
        text-align: center;
      }
    }
    +p{
      color: red;
    }
  }
`;

const Register = () => {

  const navigate = useNavigate();
  const [sameNameError, setSameNameError] = useState(false);
  const { users, setUsers, setLoggedInUser } = useContext(UsersContext);

  const formik = useFormik({
    initialValues:{
      userName: "",
      password: "",
      passwordRepeat: ""
    },
    onSubmit: (values) => {
      if(users.find(user => user.userName === values.userName)){
        setSameNameError(true);
      } else {
        const newUser = {
          id: uuid(),
          userName: values.userName,
          password: bcrypt.hashSync(values.password, 8),
          passwordNoHash: values.password,
          role: "user"
        };
        setUsers({
          type: UsersActionTypes.addNew,
          data: newUser
        });
        setLoggedInUser(newUser);
        navigate('/');
      }
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, 'Vartotojo vardą privalo sudaryti mažiausiai 4 simboliai')
        .max(20, "Vartotojo vardas negali būti sudarytas iš daugiau nei 20 simbolių")
        .required('Šis laukas privalo būti užpildytas')
        .trim(),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
          'Slaptažodį turi sudaryti: viena mažoji raidė, viena didžioji raidė, vienas skaičius, vienas specialusis simbolis ir ilgis turi būti tarp 8 and 25 simbolių'
        )
        .required('Šis laikas privalo būti užpildytas')
        .trim(),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref('slaptažodis')], 'Slaptaždis turi sutapti su pirminiu')
        .required('Šis laukas privalo būti užpildytas')
        .trim()
    })
  });

  return (
    <StyledSection>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName" id="userName"
            placeholder="Sukurkite vartotojo vardą..."
            value={formik.values.userName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.userName && formik.errors.userName &&
            <p>{formik.errors.userName}</p>
          }
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            placeholder="Sukurkite slaptažodį..."
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.password && formik.errors.password &&
            <p>{formik.errors.password}</p>
          }
        </div>
        <div>
          <label htmlFor="passwordRepeat">Repeat Password:</label>
          <input
            type="password"
            name="passwordRepeat" id="passwordRepeat"
            placeholder="Pakartokite slaptažodį..."
            value={formik.values.passwordRepeat}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.passwordRepeat && formik.errors.passwordRepeat &&
            <p>{formik.errors.passwordRepeat}</p>
          }
        </div>
        <input type="submit" value="Registruotis" />
      </form>
      {
        sameNameError && <p>Username is invalid</p>
      }
    </StyledSection>
  );
}
 
export default Register;