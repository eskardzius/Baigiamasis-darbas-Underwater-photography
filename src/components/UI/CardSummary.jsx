import { useContext } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import { UsersActionTypes } from "../../contexts/UsersContext";
import CardsContext, { CardsActionTypes } from "../../contexts/CardsContext";

const CardSummary = ({ data }) => {
  const { users, setUsers, loggedInUser } = useContext(UsersContext);
  const cardUser = users.find((user) => user.id === data.userId);
  const { setCards } = useContext(CardsContext);

  const StyledSection = styled.section`
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      padding: 1rem;
    }
    div {
      display: flex;
      flex-direction: column;
      visibility: hidden;
      gap: 20px;
      justify-content: center;
      align-items: center;
      height: 0px;
    }
    img:hover + div {
      visibility: visible;
      height: auto;
    }
    div:hover {
      visibility: visible;
      height: auto;
    }
    div button {
      width: 50px;
      cursor: pointer;
    }
  `;

  const banUser = (e, cardUser) => {
    e.preventDefault();

    setUsers({
      type: UsersActionTypes.delete,
      id: cardUser.id,
    });
    setCards({
      type: CardsActionTypes.deleteAll,
      id: cardUser.id,
    });
  };

  return (
    <StyledSection>
      <img src={data.photoUrl} />
      <div>
        <span>
          by {cardUser.userName} {data.dateAdded.split(" ")[0]}
        </span>
        {cardUser.role !== "admin" && loggedInUser.role === "admin" && (
          <button onClick={(e) => banUser(e, cardUser)}>Ban</button>
        )}
      </div>
    </StyledSection>
  );
};

export default CardSummary;
