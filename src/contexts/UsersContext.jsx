import { createContext, useReducer, useState, useEffect } from "react";

const UsersContext = createContext();

export const UsersActionTypes = {
  getAll: "fetches all data on initial load",
  addNew: "adds new user to the data",
  changeData: "change one piece of user data",
  edit: "change user data",
  ban: "delete user and his data",
};

const reducer = (state, action) => {
  switch (action.type) {
    case UsersActionTypes.getAll:
      return action.data;
    case UsersActionTypes.addNew:
      fetch(`http://localhost:7070/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return [...state, action.data];
    case UsersActionTypes.changeData:
      fetch(`http://localhost:7070/users/${action.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return state.map((el) => {
        if (el.id === action.id) {
          return {
            ...el,
            ...action.data,
          };
        } else {
          return el;
        }
      });
    case UsersActionTypes.edit:
      fetch(`http://localhost:7070/users/${action.data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return state.map((el) => {
        if (el.id === action.data.id) {
          return {
            ...el,
            ...action.data,
          };
        } else {
          return el;
        }
      });
    case UsersActionTypes.delete:
      fetch(`http://localhost:7070/users/${action.id}`, {
        method: "DELETE",
      });
      return state.filter((el) => el.id !== action.id);
    default:
      console.error(`No such reducer actions: ${action.type}`);
      return state;
  }
};

const UsersProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [users, setUsers] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:7070/users`)
      .then((res) => res.json())
      .then((data) =>
        setUsers({
          type: UsersActionTypes.getAll,
          data: data,
        })
      );
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider };
export default UsersContext;
