import { useContext, useEffect, useRef, useState } from "react";
import UsersContext from "../../contexts/UsersContext";
import CardsContext from "../../contexts/CardsContext";
import { CardsActionTypes } from "../../contexts/CardsContext";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const Comment = ({ comment, cardId }) => {
  const { loggedInUser, users } = useContext(UsersContext);
  const { setCards } = useContext(CardsContext);
  const [isEditComment, setIsEditComment] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const editCommentRef = useRef(null);
  const replyCommentRef = useRef(null);
  const author = users.find((user) => user.id === comment.authorId);
  const date = new Date();

  const StyledSection = styled.section`
    width: 100%;
    padding-bottom: 1rem;
    .comment-header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      > div {
        display: flex;
      }
    }
    > div {
      display: flex;
      justify-content: space-between;
      button {
        height: 25px;
        cursor: pointer;
        margin-right: 10px;
      }
      input {
        margin-bottom: 1rem;
      }
      > div {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
      }
    }
    .reply {
      margin-left: 1rem;
    }
    .reply-form {
      margin: 1rem 0 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .reply-btn {
      margin-top: 1rem;
    }
    .likes {
      display: flex;
      gap: 1rem;
    }
    .positive-likes {
      color: green;
    }
    .negative-likes {
      color: red;
    }
    .comment-text {
      background-color: white;
      padding: 1rem;
      width: 100%;
    }
  `;

  useEffect(() => {
    if (!editCommentRef.current) {
      return;
    }
    editCommentRef.current.value = comment.text;
  }, [isEditComment]);

  const submitEditComment = (cardId, commentId, newValue) => {
    setCards({
      type: CardsActionTypes.editComment,
      commentId: commentId,
      cardId: cardId,
      newValue: newValue,
    });
    setIsEditComment(false);
  };

  const submitReply = (cardId, commentId, replyValue) => {
    if (!replyCommentRef.current) {
      return;
    }
    const newReply = {
      text: replyValue,
      id: uuid(),
      authorId: loggedInUser.id,
      dateAdded: date.toLocaleDateString("lt-LT", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      replyTo: commentId,
      likes: [],
      dislikes: [],
    };

    setCards({
      type: CardsActionTypes.addComment,
      comment: newReply,
      cardId: cardId,
    });

    setIsReply(false);
  };

  const changeLikes = (isAddLike, commentId, userId) => {
    setCards({
      type: CardsActionTypes.changeCommentLikes,
      commentId: commentId,
      cardId: cardId,
      isAddLike: isAddLike,
      userId: userId,
    });
  };

  return (
    <StyledSection>
      {users.length && (
        <div className={`${comment.replyTo ? "reply" : null}`}>
          <div>
            <div className="comment-header">
              <p>
                <b>Comment by:</b>{" "}
                <i>
                  {author.userName} {comment.dateAdded}
                </i>
              </p>
              <div>
                {loggedInUser &&
                  !comment.likes.includes(loggedInUser.id) &&
                  !comment.dislikes.includes(loggedInUser.id) && (
                    <div>
                      <button
                        onClick={() =>
                          changeLikes(true, comment.id, loggedInUser.id)
                        }
                      >
                        Like
                      </button>
                      <button
                        onClick={() =>
                          changeLikes(false, comment.id, loggedInUser.id)
                        }
                      >
                        Dislike
                      </button>
                    </div>
                  )}
                {(loggedInUser.id === comment.authorId ||
                  loggedInUser.role === "admin") && (
                  <div>
                    <button
                      onClick={() =>
                        setCards({
                          type: CardsActionTypes.deleteComment,
                          commentId: comment.id,
                          cardId: cardId,
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                )}
                {loggedInUser.id === comment.authorId && (
                  <div>
                    <button onClick={() => setIsEditComment(true)}>Edit</button>
                  </div>
                )}
              </div>
            </div>
            <div className="likes">
              <span
                className={`${
                  comment.likes.length - comment.dislikes.length >= 0
                    ? "positive-likes"
                    : "negative-likes"
                }`}
              >
                {comment.likes.length - comment.dislikes.length} Likes
              </span>
            </div>
            {isEditComment ? (
              <div>
                <input type="text" ref={editCommentRef} />
              </div>
            ) : (
              <p className="comment-text">{comment.text}</p>
            )}
            {isEditComment ? (
              <button
                onClick={() =>
                  submitEditComment(
                    cardId,
                    comment.id,
                    editCommentRef.current.value
                  )
                }
              >
                Submit
              </button>
            ) : null}
            {isReply ? (
              <form
                onSubmit={() =>
                  submitReply(cardId, comment.id, replyCommentRef.current.value)
                }
                className="reply-form"
              >
                <textarea
                  rows={8}
                  cols={80}
                  name="text"
                  id="text"
                  placeholder="Write your reply..."
                  ref={replyCommentRef}
                />
                <input type="submit" value="Submit" />
              </form>
            ) : null}
          </div>
          {!comment.replyTo && (
            <button className="reply-btn" onClick={() => setIsReply(!isReply)}>
              Reply
            </button>
          )}
        </div>
      )}
    </StyledSection>
  );
};

export default Comment;
