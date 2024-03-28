import UsersContext from "../../contexts/UsersContext";
import CardsContext from "../../contexts/CardsContext";
import { useContext } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { CardsActionTypes } from "../../contexts/CardsContext";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;

  > h1 {
    font-size: 3rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
      display: grid;
      grid-template-columns: 1fr 2fr;

      > textarea {
        height: 5lh;
      }
      > p {
        grid-column: span 3;
        color: red;
        text-align: center;
      }
    }
  }
`;

const EditCard = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UsersContext);
  const { setCards } = useContext(CardsContext);
  const { id } = useParams();
  const { cards } = useContext(CardsContext);

  const card = cards.find((card) => card.id === id);

  const formik = useFormik({
    initialValues: {
      title: card.title,
      description: card.description,
      photoUrl: card.photoUrl,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const newCard = {
        id: id,
        userId: loggedInUser.id,
        dateAdded: card.dateAdded,
        likes: card.likes,
        dislikes: card.dislikes,
        comments: card.comments,
        edited: true,
        ...values,
      };
      setCards({
        type: CardsActionTypes.editCard,
        cardId: id,
        data: newCard,
      });
      navigate(`/cards/${card.id}`);
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
      <h1>Edit Card</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Write card title..."
            value={formik.values.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title && (
            <p>{formik.errors.title}</p>
          )}
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Write card description..."
            value={formik.values.description}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.description && formik.errors.description && (
            <p>{formik.errors.description}</p>
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
        <input type="submit" value="Submit changes" />
      </form>
    </StyledSection>
  );
};

export default EditCard;
