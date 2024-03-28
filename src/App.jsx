import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UsersContext from "./contexts/UsersContext";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Cards from "./components/pages/Cards";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import AddNewCard from "./components/pages/AddNewCard";
import OneCardPage from "./components/pages/OneCardPage";
import UserPage from "./components/pages/UserPage";
import AdminPanel from "./components/pages/AdminPanel";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Shop from "./components/pages/Shop";
import Contacts from "./components/pages/Contacts";
import styled from "styled-components";
import EditCard from "./components/pages/EditCard";
import EditProfile from "./components/pages/EditProfile";

const App = () => {
  const { loggedInUser, setLoggedInUser, users } = useContext(UsersContext);
  const StyledSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: 198px 1fr 140px;
    gap: 0;
  `;

  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    if (!storedUser || users.length <= 0) {
      return;
    }
    const userObject = users.find((user) => user.id === storedUser);
    setLoggedInUser(userObject);
  }, [users]);

  return (
    <StyledSection>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mycards">
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
          <Route path="/cards">
            <Route path="allCards" element={<Cards />} />
            <Route
              path="addNew"
              element={
                loggedInUser ? <AddNewCard /> : <Navigate to="/user/login" />
              }
            />
            <Route path="/cards/edit/:id" element={<EditCard />} />
            <Route path=":id" element={<OneCardPage />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/user">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/user/edit/:id" element={<EditProfile />} />
            <Route
              path=":name"
              element={
                loggedInUser ? <UserPage /> : <Navigate to="/user/login" />
              }
            />
            <Route
              path="adminPanel"
              element={
                loggedInUser?.role === "admin" ? (
                  <AdminPanel />
                ) : (
                  <Navigate to="/user/login" />
                )
              }
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </StyledSection>
  );
};

export default App;
