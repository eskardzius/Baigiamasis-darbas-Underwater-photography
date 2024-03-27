import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import CardsContext from "../../contexts/CardsContext";
import { CardsActionTypes } from "../../contexts/CardsContext";
import Comment from "../UI/Comment";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';

const StyledSection = styled.section`
  padding-top: 50px;
  overflow-y: scroll;
  > div {
    border: 1px solid black;
    padding: 10px 20px;
    margin: 10px;

    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;

    > h3 {
      margin: 0;
    }
    > p {
      margin: 0;
      text-align: start;
      width: 100%;
    }
  }
  img {
    max-width: 300px;
  }
  form {
    > input {
      cursor: pointer;
      width: 150px;
    }
    > textarea {
      width: 100%;
    }
    > p {
      color: red;
    }
  }
  .comments {
    align-items: start;
  }
  .comments > div {
    border: 1px solid #000;
    width: 100%;
    padding-left: 1rem;
  }
  .comment-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const OneCardPage = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { loggedInUser, users } = useContext(UsersContext);
  const { setCards, cards } = useContext(CardsContext);
  const card = cards.find((card) => card.id === id);
  const cardUser = users.find((user) => user.id === card.userId);

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .min(10, "Comment must be at least 10 symbols length")
        .max(500, "Comment can't be longer than 500 symbols")
        .required("This field must be filled")
        .trim(),
    }),
    onSubmit: (values) => {
      const newComment = {
        text: values.text,
        id: uuid(),
        authorId: loggedInUser.id,
      };
      setCards({
        type: CardsActionTypes.addComment,
        comment: newComment,
        cardId: card.id,
      });
      formik.resetForm();
    },
  });

  return (
    <StyledSection>
      {card && (
        <>
          <div>
            <h3>
              {card.title} by {cardUser.userName}
            </h3>
            <img src={card.photoUrl} alt="photo" />
            {loggedInUser.id === card.userId && (
              <button
                onClick={() => {
                  setCards({
                    type: CardsActionTypes.delete,
                    id: card.id,
                  });
                  navigation(-1);
                }}
              >
                Delete
              </button>
            )}
          </div>
          <div>
            <p>{card.description}</p>
          </div>
          <div className="comments">
            {card.comments?.map((comment) => (
              <Comment key={comment.id} comment={comment} cardId={card.id} />
            ))}
            {loggedInUser && (
              <form onSubmit={formik.handleSubmit} className="comment-form">
                <textarea
                  rows={8}
                  cols={80}
                  name="text"
                  id="text"
                  placeholder="Write your comment..."
                  value={formik.values.text}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.text && formik.errors.text && (
                  <p>{formik.errors.text}</p>
                )}
                <input type="submit" value="Comment" />
              </form>
            )}
          </div>
        </>
      )}
    </StyledSection>
  );
};

export default OneCardPage;
