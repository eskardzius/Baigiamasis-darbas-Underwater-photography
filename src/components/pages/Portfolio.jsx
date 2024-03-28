import { useContext, useRef } from "react";
import styled from "styled-components";
import PortfoliosContext, {
  PortfolioActionTypes,
} from "../../contexts/PortfolioContext";
import { v4 as uuid } from "uuid";
import UsersContext from "../../contexts/UsersContext";

const StyledSection = styled.header`
  background-color: rgb(215, 211, 199);
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding: 21.44px;
  h1 {
    margin: 0;
    padding-bottom: 1rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    gap: 10px;
    width: 200px;
    button {
      cursor: pointer;
      width: 50px;
    }
  }
  .image-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1100px;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      padding: 1rem;
      border: 1px solid #000;
      padding: 1rem 1rem;
    }
  }
`;
const Portfolio = () => {
  const { portfolios, setPortfolios } = useContext(PortfoliosContext);
  const { loggedInUser } = useContext(UsersContext);
  const photoUrlRef = useRef(null);

  const addNewPhoto = () => {
    if (!photoUrlRef.current) {
      return;
    }
    const newPortfolioItem = {
      id: uuid(),
      photoUrl: photoUrlRef.current.value.trim(),
    };

    setPortfolios({
      type: PortfolioActionTypes.addNew,
      data: newPortfolioItem,
    });

    photoUrlRef.current.value = "";
  };

  return (
    <StyledSection>
      <h1>Portfolio</h1>
      {loggedInUser.role === "admin" && (
        <div>
          <label>Add new photo:</label>
          <input type="text" placeholder="https://" ref={photoUrlRef} />
          <button onClick={addNewPhoto}>Add</button>
        </div>
      )}
      <div className="image-container">
        {portfolios.map((el) => (
          <img src={`${el.photoUrl}`} key={el.id}></img>
        ))}
      </div>
    </StyledSection>
  );
};

export default Portfolio;
