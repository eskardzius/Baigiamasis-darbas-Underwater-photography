import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import Logo from "../../images/logo.png";

const StyledHeader = styled.header`
  height: 200px;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/754/173/227/outdoors-underwater-sea-water-stones-hd-wallpaper-preview.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  flex-wrap: wrap;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: start;
    > a {
      > img {
        height: 100%;
        max-width: 350px;
        max-height: 100px;
        border-radius: 20px;
        margin-top: 3rem;
        margin-left: 3rem;
      }
    }
    > nav {
      > ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        > li {
          > a {
            text-decoration: none;
            font-size: 14px;
            color: rgb(68 119 168);
          }
          > a.active {
            color: #0202d5;
          }
          > a:hover {
            color: #457452;
          }
        }
      }
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
  }
  > nav {
    > ul {
      > li {
        > a {
          text-decoration: none;
          font-size: 14px;
          color: rgb(68 119 168);
        }
        > a.active {
          color: #0202d5;
        }
        > a:hover {
          color: #df4020;
        }
      }
    }
  }
  .mainNav {
    //padding-bottom: 10px;
    > ul {
      display: flex;
      gap: 20px;
      margin-bottom: -10px;
      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 5px 0px 0px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: rgb(215, 211, 199);
      }
    }
  }
  .userNav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    justify-content: center;
    align-items: center;
    > h3 {
      font-size: 12px;
      color: white;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 15px;
    }
    button {
      border: none;
      color: white;
      background-color: transparent;
      margin-top: 1rem;
      cursor: pointer;
    }
    > .profile-identity {
      display: flex;
      flex-direction: column;
      gap: 5px;
      color: white;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
  }
`;

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);

  function logOff() {
    localStorage.removeItem("storedUser");
    setLoggedInUser(false);
  }

  return (
    <StyledHeader>
      <div>
        <Link>
          <img src={Logo} alt="Logo" />
        </Link>
        <nav className="userNav">
          {!loggedInUser ? (
            <h3>
              <NavLink to="/user/login">Prisijungti</NavLink>
              {` \\ `}
              <NavLink to="/user/register">Registruotis</NavLink>
            </h3>
          ) : (
            <div className="action-container">
              <button onClick={logOff}>Atsijungti</button>
              {` \\ `}
              <NavLink to={`/user/edit/${loggedInUser.id}`}>Redaguoti</NavLink>
            </div>
          )}
          {loggedInUser && (
            <div className="profile-identity">
              <img src={loggedInUser.photoUrl} alt="user-photo" />
              <div>{loggedInUser.userName}</div>
            </div>
          )}
        </nav>
      </div>
      <div>
        <nav className="mainNav">
          <ul>
            <li>
              <NavLink to="/">Pagrindinis</NavLink>
            </li>
            <li>
              <NavLink to="/about">Apie Mane</NavLink>
            </li>
            <li>
              <NavLink to="/mycards/portfolio">Mano darbai</NavLink>
            </li>

            <li>
              <NavLink to="/cards/allCards">Jūsų darbai</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Paslaugos</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontaktai</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
