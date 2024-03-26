import {Link, NavLink, useNavigate  } from "react-router-dom"
import styled from 'styled-components'

const StyledHeader = styled.header`
    padding: 0 20px;
    height: 170px;
    background-image: url("https://c4.wallpaperflare.com/wallpaper/754/173/227/outdoors-underwater-sea-water-stones-hd-wallpaper-preview.jpg");
    background-size: cover; 
    background-position: center;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div{ 
        height: 80%;
        border: black;
        
        > a{
          > img{
          height: 100% ;
          border-radius: 20px;
        }
      }
    }
    > nav{
        > ul{
            margin: 0;
            padding: 0;
            list-style-type: none;
            > li{
                > a{
                    text-decoration: none;
                    font-size: 14px;
                    color: #dddce9;
                }
                > a.active{
                    color: #0202d5;
                }
                > a:hover{
                    color: #457452;
                }
            }
        }
    }
    .mainNav{
        > ul{
        display: flex;
        gap: 20px;
        
    }
    }
    .userNav{
        > ul{
        display: flex;
        flex-direction: column-reverse;
        padding-bottom: 0px;
        gap: 100px;  
        }
    }   
`;
 

const Header = () => {
    return ( 
        <StyledHeader>
        <div>
            <Link >
            <img 
            src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/295469053_557366269417128_601031087506877027_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=33ejDnKKrnQAX_iav81&_nc_ht=scontent.fvno2-1.fna&oh=00_AfDKZQOvaQMhVO7cqpcYuYCJLqJEqEYMa30jyBYJ7phYxA&oe=660731AC" 
            alt="Logo" 
            />
            </Link>
        </div>
        <nav className="mainNav">
            <ul>
                <li>
                    <NavLink to='/'>Pagrindinis</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Apie Mane</NavLink>
                </li>
                <li>
                    <NavLink to='/mycards/portfolio'>Mano darbai</NavLink>
                </li>

                <li>
                    <NavLink to='/cards/allCards'>Jūsų darbai</NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>Paslaugos</NavLink>
                </li>
            </ul>
        </nav>
        <nav className="userNav">
            <ul>
                <li>
                    <NavLink to='/user/register'>Registruotis</NavLink>
                </li>
                <li>
                    <NavLink to='/user/login'>Prisijungti</NavLink>
                </li>
            </ul>
        </nav>
        </StyledHeader>
     );
}
 
export default Header;