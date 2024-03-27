import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import CardsContext from "../../contexts/CardsContext";
import { CardsActionTypes } from "../../contexts/CardsContext";
import styled from "styled-components";

const Comment = ({ comment, cardId }) => {
  const { loggedInUser, users } = useContext(UsersContext);
  const { setCards } = useContext(CardsContext);
  const author = users.find((user) => user.id === comment.authorId);
  const StyledSection = styled.section`
    width: 100%;
    > div {
      display: flex;
      justify-content: space-between;
      > button {
        height: 25px;
        margin-top: 1rem;
        cursor: pointer;
      }
    }
  `;

  return (
    <StyledSection>
      {users.length && (
        <div>
          <div>
            <p>Comment by: {author.userName}</p>
            <p>{comment.text}</p>
            {loggedInUser.id === comment.authorId && (
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
            )}
          </div>
          <button>Reply</button>
        </div>
      )}
    </StyledSection>
  );
};

export default Comment;