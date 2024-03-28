import { useContext } from "react";
import CardsContext from "../../../contexts/CardsContext";
import { useParams } from "react-router-dom";
import UsersContext from "../../../contexts/UsersContext";

const CardHeader = () => {
  const { id } = useParams();
  const { cards } = useContext(CardsContext);
  const { loggedInUser, users } = useContext(UsersContext);
  const card = cards.find((card) => card.id === id);
  let cardUser;
  if (card) {
    cardUser = users.find((user) => user.id === card.userId);
  }

  return (
    <header>
      <div>
        <img src={cardUser?.photoUrl} alt="user-photo" />
        <h3>
          {cardUser.id}, {cardUser.userName}
        </h3>
      </div>
      <h3>{card.dateAdded}</h3>
    </header>
  );
};

export default CardHeader;
