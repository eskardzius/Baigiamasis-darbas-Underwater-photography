import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";

const StyledFooter = styled.footer`
  height: 140px;
  padding: 0 20px;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/754/173/227/outdoors-underwater-sea-water-stones-hd-wallpaper-preview.jpg");
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    > a {
      height: 50%;
      > img {
        height: 100%;
      }
    }
    > p {
      color: #b8b1b1;
      padding-bottom: 9px;
    }
  }
  > div:nth-child(2) {
    > ul {
      padding: 0;
      > li {
        display: flex;
        font-size: 15px;

        color: #b8b1b1;
        > a {
          text-decoration: none;
          color: #b8b1b1;
        }
      }
    }
  }
  div:nth-child(3) {
    > ul {
      display: flex;
      > li {
        display: flex;
        justify-content: center;
        color: #b8b1b1;
        gap: 10px;

        > a {
          text-decoration: none;
          color: #b8b1b1;
          > i {
            display: flex;
            flex-direction: row;
            font-size: 30px;
            margin-right: 10px;
            color: #b8b1b1;
          }
          > i:hover {
            color: white;
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p> &copy; ESkadras 2024 </p>
      </div>
      <div>
        <ul>
          <li>Puslapio taisyklės</li>
          <li>
            <Link>Duomenų tvarkymas</Link>
          </li>
          <li>
            <Link>Slapukų nuostatos</Link>
          </li>
          <li>
            <Link>Privatumo politika</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="https://www.facebook.com/eskadras" target="_blank">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <i className="bi bi-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com/" target="_blank">
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link to="https://www.tiktok.com/" target="_blank">
              <i className="bi bi-tiktok"></i>
            </Link>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
