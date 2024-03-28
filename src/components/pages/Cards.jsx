import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CardsContext from "../../contexts/CardsContext";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import CardSummary from "../UI/CardSummary";

const SortingEnums = {
  none: "none",
  dateAsc: "dateAsc",
  dateDec: "dateDec",
  commentCountAsc: "commentCountAsc",
  commentCountDec: "commentCountDec",
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(215, 211, 199);
  padding-bottom: 1rem;

  > h1 {
    text-align: center;
  }
  > p {
    text-align: center;

    > a {
      text-decoration: none;
      padding: 5px 12px;
      border: 2px solid white;
      border-radius: 10px;
      color: rgb(34, 61, 89);
      transition: 0.3s;
    }
    > a:hover {
      box-shadow: rgb(163, 206, 244) 3px 3px 6px 0px inset,
        rgba(9, 23, 150, 0.5) -3px -3px 6px 1px inset;
    }
  }
  > div {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  select {
    width: 150px;
    margin: 1rem 0;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    max-width: 1100px;
  }
`;

const Cards = () => {
  const { cards } = useContext(CardsContext);
  const { loggedInUser } = useContext(UsersContext);
  const [sorting, setSorting] = useState(SortingEnums.none);
  const location = useLocation();

  const displayCards = () => {
    const newCards = [...cards];
    switch (sorting) {
      case SortingEnums.none:
        break;
      case SortingEnums.dateAsc:
        newCards.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        break;
      case SortingEnums.dateDec:
        newCards.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case SortingEnums.commentCountAsc:
        newCards.sort((a, b) => a.comments.length - b.comments.length);
        break;
      case SortingEnums.commentCountDec:
        newCards.sort((a, b) => b.comments.length - a.comments.length);
        break;
      default:
        break;
    }

    return newCards.map((card, index) => (
      <Link to={`/cards/${card.id}`} key={index}>
        <CardSummary key={index} data={card} location={location} />
      </Link>
    ));
  };

  return (
    <StyledSection>
      <h1>Jūsų fotografijos ir komentarai</h1>
      {loggedInUser && (
        <p>
          <Link to="/cards/addNew">Add New Card</Link>
        </p>
      )}
      <select onChange={(e) => setSorting(e.target.value)}>
        <option value={SortingEnums.none}>Rušiuoti pagal</option>
        <option value={SortingEnums.dateDec}>Data (naujausi viršuje)</option>
        <option value={SortingEnums.dateAsc}>Data (naujausi apačioje)</option>
        <option value={SortingEnums.commentCountDec}>
          Komentarų kiekis (daugiausi viršuje)
        </option>
        <option value={SortingEnums.commentCountAsc}>
          Komentarų kiekis (daugiausi apačioje)
        </option>
      </select>
      <div className="cards">{displayCards()}</div>
    </StyledSection>
  );
};

export default Cards;
