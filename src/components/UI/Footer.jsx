import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 140px;
  padding: 0 20px;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/754/173/227/outdoors-underwater-sea-water-stones-hd-wallpaper-preview.jpg");
    background-size: cover; 
    background-position: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div{
    height: 146%;
    display: flex;
    align-items: center;
    gap: 10px;

    > a{
      height: 50%;
      > img{
        height: 100%;
      }
    }
    > p{
    color: #b8b1b1;
  }
  }

  

  > ul{
    list-style-type: none;
    > li:first-child{
      display: flex;


      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    > li{
        display: flex;
        justify-content: center;
        color: #b8b1b1;

      > a{
        text-decoration: none;
        color:#b8b1b1;
        > i{
          font-size: 30px;
          margin-right: 10px;
          color: #b8b1b1;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
       <div>
        <Link to='/'>
          <img
            src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/295469053_557366269417128_601031087506877027_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=33ejDnKKrnQAX_iav81&_nc_ht=scontent.fvno2-1.fna&oh=00_AfDKZQOvaQMhVO7cqpcYuYCJLqJEqEYMa30jyBYJ7phYxA&oe=660731AC"
            alt="react logo png"
          />
        </Link>
        <p> &copy; ESkadras 2024 </p>
       </div>
        <ul>
        <li>Socialiniai tinklai</li>
        <li>
          <Link><i className="bi bi-facebook"></i></Link>
          <Link><i className="bi bi-instagram"></i></Link>
        </li>
        <li>
          <Link><i className="bi bi-twitter-x"></i></Link>
          <Link><i className="bi bi-linkedin"></i></Link>
        </li>
      </ul>
      <ul>
        <li>Privatumo politika</li>
        <li><Link>Slapukų nuostatos</Link></li>
        <li><Link>Privatumo politika</Link></li>
        <li><Link>Duomenų tvarkymas</Link></li>
      </ul>
    
    </StyledFooter>
  );
}
 
export default Footer;