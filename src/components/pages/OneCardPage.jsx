import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CardsContext from "../../contexts/CardsContext";
import CardContent from "../UI/Card/CardContent";
import CardFooter from "../UI/Card/CardFooter";
import CardHeader from "../UI/Card/CardHeader";

const StyledSection = styled.section`
  padding-top: 10px;
  overflow-y: scroll;
  background-color: rgb(215, 211, 199);
  header {
    display: flex;
    justify-content: space-between;
    background-color: #a8acc6;
    padding: 0 1rem;
    > div {
      display: flex;
      img {
        height: 58px;
        padding-right: 1rem;
      }
    }
  }
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
  .comment {
    display: flex;
    flex-direction: column;
  }
  button {
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const OneCardPage = () => {
  const { id } = useParams();
  const { cards } = useContext(CardsContext);
  const card = cards.find((card) => card.id === id);

  return (
    <StyledSection>
      {card && (
        <>
          <CardHeader />
          <CardContent />
          <CardFooter />
        </>
      )}
    </StyledSection>
  );
};

export default OneCardPage;
