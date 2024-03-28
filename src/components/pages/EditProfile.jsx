import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import UsersContext from "../../contexts/UsersContext";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { UsersActionTypes } from "../../contexts/UsersContext";
import bcrypt from "bcryptjs";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 80px;
  background-color: rgb(215, 211, 199);

  > h1 {
    font-size: 2rem;
    color: rgb(34, 61, 89);
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
      display: grid;
      grid-template-columns: 1fr 2fr;

      > p {
        grid-column: span 3;
        color: red;
        text-align: center;
      }
    }
    + p {
      color: red;
    }
  }
`;

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sameNameError, setSameNameError] = useState(false);
  const { users, setUsers, setLoggedInUser } = useContext(UsersContext);
  const userToEdit = users.find((user) => user.id === id);

  const formik = useFormik({
    initialValues: {
      userName: userToEdit.userName,
      password: "",
      passwordRepeat: "",
      photoUrl: userToEdit.photoUrl,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (users.find((user) => user.userName === values.userName)) {
        setSameNameError(true);

        return;
      }
      const newUser = {
        id: userToEdit.id,
        userName: values.userName,
        password: bcrypt.hashSync(values.password, 8),
        passwordNoHash: values.password,
        role: userToEdit.role,
        photoUrl: values.photoUrl,
      };
      setUsers({
        type: UsersActionTypes.edit,
        data: newUser,
      });
      setLoggedInUser(newUser);
      navigate(-1);
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, "Vartotojo vardą privalo sudaryti mažiausiai 4 simboliai")
        .max(
          20,
          "Vartotojo vardas negali būti sudarytas iš daugiau nei 20 simbolių"
        )
        .required("Šis laukas privalo būti užpildytas")
        .trim(),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
          "Slaptažodį turi sudaryti: viena mažoji raidė, viena didžioji raidė, vienas skaičius, vienas specialusis simbolis ir ilgis turi būti tarp 8 and 25 simbolių"
        )
        .required("Šis laikas privalo būti užpildytas")
        .trim(),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref("password")], "Slaptaždis turi sutapti su pirminiu")
        .required("Šis laukas privalo būti užpildytas")
        .trim(),
      photoUrl: Yup.string().url().required("This field must be filled").trim(),
    }),
  });

  return (
    <StyledSection>
      <h1>Redaguoti Profilį</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Sukurkite vartotojo vardą..."
            value={formik.values.userName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p>{formik.errors.userName}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Sukurkite slaptažodį..."
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label htmlFor="passwordRepeat">Repeat Password:</label>
          <input
            type="password"
            name="passwordRepeat"
            id="passwordRepeat"
            placeholder="Pakartokite slaptažodį..."
            value={formik.values.passwordRepeat}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.passwordRepeat && formik.errors.passwordRepeat && (
            <p>{formik.errors.passwordRepeat}</p>
          )}
        </div>
        <div>
          <label htmlFor="photoUrl">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            id="photoUrl"
            placeholder="https://..."
            value={formik.values.photoUrl}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.photoUrl && formik.errors.photoUrl && (
            <p>{formik.errors.photoUrl}</p>
          )}
        </div>
        <input type="submit" value="Pakeisti" />
      </form>
      {sameNameError && <p>Username is invalid</p>}
    </StyledSection>
  );
};

export default EditProfile;
