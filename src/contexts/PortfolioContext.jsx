import { createContext, useEffect, useReducer } from "react";

const PortfoliosContext = createContext();

export const PortfolioActionTypes = {
  getAll: "fetches all data on initial load",
  addNew: "adds new portfolio to the data",
  delete: "delete one specific portfolio",
};

const reducer = (state, action) => {
  switch (action.type) {
    case PortfolioActionTypes.getAll:
      return action.data;
    case PortfolioActionTypes.addNew:
      fetch(`http://localhost:7070/portfolios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return [...state, action.data];
    case PortfolioActionTypes.delete:
      fetch(`http://localhost:7070/portfolios/${action.id}`, {
        method: "DELETE",
      });

      return state.filter((el) => el.id !== action.id);
    default:
      console.error(`No such reducer actions: ${action.type}`);
      return state;
  }
};

const PortfoliosProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:7070/portfolios`)
      .then((res) => res.json())
      .then((data) =>
        setPortfolios({
          type: PortfolioActionTypes.getAll,
          data: data,
        })
      );
  }, []);

  return (
    <PortfoliosContext.Provider
      value={{
        portfolios,
        setPortfolios,
      }}
    >
      {children}
    </PortfoliosContext.Provider>
  );
};

export { PortfoliosProvider };
export default PortfoliosContext;
