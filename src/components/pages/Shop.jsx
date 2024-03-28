import styled from "styled-components";


const StyledShop = styled.div`
    display: flex;  
    padding: 20px;
    height: 100%;
    background-color: rgba(183, 218, 239, 0.684);
    > h3 {
        color: rgb(1, 7, 15);
        gap: 0px;
        margin: 40px;
    }
`;

const Shop = () => {
    return ( 
        <StyledShop>
            <h3>Informacija ruošiama!!! <br /> 
            Jus dominančiais klausimais dėl paslaugų, susisiekti su manimi galite tiklapio meniu "Kontaktai" nurodytais kontaktais.</h3>
        </StyledShop>
     );
}
 
export default Shop;