import styled from "styled-components";


const StyledShop = styled.div`
    display: flex;  
    padding: 20px;
    height: 100%;
    background-color: rgb(215, 211, 199);
    > h3 {
        color: rgb(34, 61, 89);
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