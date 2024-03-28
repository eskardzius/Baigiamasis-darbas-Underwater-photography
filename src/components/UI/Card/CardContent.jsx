import { useContext } from "react";
import CardsContext, { CardsActionTypes } from "../../../contexts/CardsContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import UsersContext from "../../../contexts/UsersContext";

const CardContent = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { setCards, cards } = useContext(CardsContext);
  const { loggedInUser, users } = useContext(UsersContext);
  const card = cards.find((card) => card.id === id);
  let cardUser;
  if (card) {
    cardUser = users.find((user) => user.id === card.userId);
  }

  const deleteCard = (cardId) => {
    setCards({
      type: CardsActionTypes.delete,
      id: cardId,
    });
    navigation(-1);
  };

  const changeLikes = (isAddLike, cardId, userId) => {
    setCards({
      type: CardsActionTypes.changeLikes,
      cardId: cardId,
      isAddLike: isAddLike,
      userId: userId,
    });
  };

  return (
    <>
      <div>
        <div>
          <h3>
            {card.title} by {cardUser.userName}
            {card.edited && loggedInUser.id === card.userId && (
              <span>(edited)</span>
            )}
          </h3>
          {loggedInUser &&
            !card.likes.includes(loggedInUser.id) &&
            !card.dislikes.includes(loggedInUser.id) && (
              <div>
                <button
                  onClick={() => changeLikes(true, card.id, loggedInUser.id)}
                >
                  Like
                </button>
                <button
                  onClick={() => changeLikes(false, card.id, loggedInUser.id)}
                >
                  Dislike
                </button>
              </div>
            )}
          <span>{card.likes.length - card.dislikes.length} Likes</span>
        </div>
        <img src={card.photoUrl} alt="photo" />
        {loggedInUser.id === card.userId && (
          <>
            <button onClick={() => deleteCard(card.id)}>Delete</button>
            <Link to={`/cards/edit/${card.id}`}>
              <button>Edit</button>
            </Link>
          </>
        )}
      </div>
      <div>
        <p>{card.description}</p>
      </div>
    </>
  );
};

export default CardContent;
