import { useContext, useState } from "react";
import CardsContext, { CardsActionTypes } from "../../../contexts/CardsContext";
import { useParams } from "react-router-dom";
import UsersContext from "../../../contexts/UsersContext";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import Comment from "../Comment";

const FilterEnums = {
  none: "none",
  noComments: "noComments",
};

const CardFooter = () => {
  const { id } = useParams();
  const { setCards, cards } = useContext(CardsContext);
  const { loggedInUser } = useContext(UsersContext);
  const [filtering, setFiltering] = useState(FilterEnums.none);
  const card = cards.find((card) => card.id === id);
  const date = new Date();

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .min(10, "Comment must be at least 10 symbols length")
        .max(500, "Comment can't be longer than 500 symbols")
        .required("This field {loggedInUser && (must be filled")
        .trim(),
    }),
    onSubmit: (values) => {
      const newComment = {
        text: values.text,
        id: uuid(),
        authorId: loggedInUser.id,
        dateAdded: date.toLocaleDateString("lt-LT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        replyTo: null,
        likes: [],
        dislikes: [],
      };
      setCards({
        type: CardsActionTypes.addComment,
        comment: newComment,
        cardId: card.id,
      });
      formik.resetForm();
    },
  });

  const displayComments = () => {
    const newComments = [...card.comments];
    const filteredComments = newComments.filter((el) => {
      if (
        filtering === FilterEnums.noComments &&
        newComments.find((filterEl) => filterEl.replyTo === el.id)
      ) {
        return false;
      }
      return true;
    });

    return filteredComments
      ?.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
      .map((comment) => {
        if (comment.replyTo) {
          return null;
        }
        const replies = card.comments?.filter(
          (reply) => reply.replyTo === comment.id
        );
        return (
          <div className="comment" key={comment.id}>
            <Comment key={comment.id} comment={comment} cardId={card.id} />
            {replies.map((reply) => {
              return (
                <Comment
                  key={reply.id}
                  comment={reply}
                  cardId={card.id}
                  isReply={true}
                />
              );
            })}
          </div>
        );
      });
  };

  const changeFilters = (e) => {
    if (e.target.checked) {
      setFiltering(FilterEnums.noComments);
      return;
    }
    setFiltering(FilterEnums.none);
  };

  return (
    <div className="comments">
      <div>
        <span>Filtrai: </span>
        <div>
          <label>Be atsakymų</label>
          <input
            type="checkbox"
            value={FilterEnums.noComments}
            onChange={(e) => changeFilters(e)}
          />
        </div>
      </div>
      {displayComments()}
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
  );
};

export default CardFooter;
