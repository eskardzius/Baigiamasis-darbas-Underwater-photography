import { createContext, useEffect, useReducer } from "react";

const CardsContext = createContext();

export const CardsActionTypes = {
  getAll: "fetches all data on initial load",
  addNew: "adds new card to the data",
  delete: "delete one specific card",
  deleteAll: "delete all user cards with all comments",
  edit: "edit one specific card",
  changeLikes: "change amount of likes/dislikes on card",
  addComment: "add new comment to a specific card",
  editComment: "edit one specific comment from a card",
  deleteComment: "delete one specific comment from a card",
  changeCommentLikes: "change amount of likes/dislikes on comment",
};

const reducer = (state, action) => {
  switch (action.type) {
    case CardsActionTypes.getAll:
      return action.data;
    case CardsActionTypes.addNew:
      fetch(`http://localhost:7070/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return [...state, action.data];
    case CardsActionTypes.delete:
      fetch(`http://localhost:7070/cards/${action.id}`, { method: "DELETE" });

      return state.filter((el) => el.id !== action.id);
    case CardsActionTypes.deleteAll:
      const userCards = state.filter((card) => card.userId === action.id);

      userCards.forEach((el) => {
        fetch(`http://localhost:7070/cards/${el.id}`, { method: "DELETE" });
      });

      const cleanCards = state
        .map((card) => {
          const commentsWithoutUser = card.comments.filter(
            (el) => el.authorId !== action.id
          );

          const newCard = {
            ...card,
            comments: commentsWithoutUser,
          };

          fetch(`http://localhost:7070/cards/${card.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCard),
          });

          return card;
        })
        .filter((card) => card.userId !== action.id);

      return cleanCards;
    case CardsActionTypes.editCard:
      fetch(`http://localhost:7070/cards/${action.cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return state.map((el) => {
        if (el.id === action.cardId) {
          return action.data;
        } else {
          return el;
        }
      });

    case CardsActionTypes.changeLikes:
      const cardToChangeLikes = state.find((el) => el.id === action.cardId);
      if (action.isAddLike) {
        cardToChangeLikes.likes.push(action.userId);
      } else {
        cardToChangeLikes.dislikes.push(action.userId);
      }

      fetch(`http://localhost:7070/cards/${action.cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardToChangeLikes),
      });
      return state.map((el) => {
        if (el.id === action.cardId) {
          return cardToChangeLikes;
        } else {
          return el;
        }
      });
    case CardsActionTypes.addComment:
      const cardToAddComment = state.find((el) => el.id === action.cardId);
      const commentedCard = {
        ...cardToAddComment,
        comments: cardToAddComment.comments
          ? [...cardToAddComment.comments, action.comment]
          : [action.comment],
      };
      fetch(`http://localhost:7070/cards/${action.cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentedCard),
      });
      return state.map((el) => {
        if (el.id === action.cardId) {
          return commentedCard;
        } else {
          return el;
        }
      });
    case CardsActionTypes.editComment:
      const cardToEditComment = state.find((el) => el.id === action.cardId);
      const newComments = cardToEditComment.comments.map((el) => {
        if (el.id === action.commentId) {
          el.text = action.newValue;

          return el;
        }
        return el;
      });

      const newCard = {
        ...cardToEditComment,
        comments: newComments,
      };

      fetch(`http://localhost:7070/cards/${action.cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });
      return state.map((el) => {
        if (el.id === action.cardId) {
          return newCard;
        } else {
          return el;
        }
      });
    case CardsActionTypes.deleteComment:
      const cardToChange = state.find((el) => el.id === action.cardId);
      const changedCard = {
        ...cardToChange,
        comments: cardToChange.comments.filter(
          (comment) =>
            comment.id !== action.commentId &&
            comment.replyTo !== action.commentId
        ),
      };
      fetch(`http://localhost:7070/cards/${action.cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changedCard),
      });
      return state.map((el) => {
        if (el.id === action.cardId) {
          return changedCard;
        } else {
          return el;
        }
      });
    case CardsActionTypes.changeCommentLikes:
      const cardToChangeCommentLikes = state.find(
        (el) => el.id === action.cardId
      );
      const commentToChangeLikes = cardToChangeCommentLikes.comments.find(
        (el) => el.id === action.commentId
      );
      if (action.isAddLike) {
        commentToChangeLikes.likes.push(action.userId);
      } else {
        commentToChangeLikes.dislikes.push(action.userId);
      }

      fetch(`http://localhost:7070/cards/${action.cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardToChangeCommentLikes),
      });
      return state.map((el) => {
        if (el.id === action.cardId) {
          return cardToChangeCommentLikes;
        } else {
          return el;
        }
      });
    default:
      console.error(`No such reducer actions: ${action.type}`);
      return state;
  }
};

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:7070/cards`)
      .then((res) => res.json())
      .then((data) =>
        setCards({
          type: CardsActionTypes.getAll,
          data: data,
        })
      );
  }, []);

  return (
    <CardsContext.Provider
      value={{
        cards,
        setCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider };
export default CardsContext;
