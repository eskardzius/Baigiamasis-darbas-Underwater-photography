import UsersContext from "../../contexts/UsersContext";
import CardsContext from "../../contexts/CardsContext";
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import styled from "styled-components";
import { CardsActionTypes } from "../../contexts/CardsContext";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: rgb(215, 211, 199);;

  > h1{
    font-size: 3rem;
  }

    > form {
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
      display: grid;
      grid-template-columns: 1fr 2fr;

      > textarea{
        height: 5lh;
      }
      > p{
        grid-column: span 3;
        color: red;
        text-align: center;
      }
    }
  }
`;

const AddNewCard = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UsersContext);
  const { setCards } = useContext(CardsContext);
  const date = new Date();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      photoUrl: "",
    },
    onSubmit: (values) => {
      const newCard = {
        id: uuid(),
        userId: loggedInUser.id,
        dateAdded: date.toLocaleDateString("lt-LT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        ...values,
      };

      setCards({
        type: CardsActionTypes.addNew,
        data: newCard
      });
      //navigate(-1);
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Title must be at least 5 symbols length")
        .max(50, "Title can't be longer than 50 symbols")
        .required("This field must be filled")
        .trim(),
      description: Yup.string()
        .min(5, "Description must be at least 5 symbols length")
        .max(500, "Description can't be longer than 500 symbols")
        .required("This field must be filled")
        .trim(),
      photoUrl: Yup.string().url().required("This field must be filled").trim(),
    }),
  });

  return (
    <StyledSection>
      <h1>Add New Card</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title" id="title"
            placeholder="Write card title..."
            value={formik.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.title && formik.errors.title &&
            <p>{formik.errors.title}</p>
          }
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description" 
            id="description"
            placeholder="Write card description..."
            value={formik.description}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.description && formik.errors.description &&
            <p>{formik.errors.description}</p>
          }
        </div>
        <div>
          <label htmlFor="photoUrl">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            id="photoUrl"
            placeholder="https://..."
            value={formik.photoUrl}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.photoUrl && formik.errors.photoUrl && (
            <p>{formik.errors.photoUrl}</p>
          )}
        </div>
        <input type="submit" value="Add New Card" />
      </form>
    </StyledSection>
  );
}
 
export default AddNewCard;