import { useContext } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";

const CardSummary = ({ data }) => {
  const { users } = useContext(UsersContext);

  const cardUser = users.find((user) => user.id === data.userId);
  const StyledSection = styled.section`
    border: 1px solid #000;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 200px;
    }
    div {
      display: none;
      height: 30px;
    }

    img:hover + div {
      display: block;
    }
  `;

  return (
    <StyledSection>
      <img src={data.photoUrl} />
      <div>
        by {cardUser.userName} {data.dateAdded.split(" ")[0]}
      </div>
    </StyledSection>
  );
};

export default CardSummary;
