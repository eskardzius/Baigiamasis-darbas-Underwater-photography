import styled from "styled-components";

const StyledHome = styled.div`
background-color: rgb(220, 211, 216);
> h2{
    color: rgb(34, 61, 89);
}
> div{
    display: flex;
    width: 100%;
    padding: 10px;
    gap: 10px;
    > iframe{
        width: 40%;
    }
    > p{
        width: 60%;
        font-size: 14px;
        text-indent: 25px;
        color: rgb(34, 61, 89);
        text-align
    }
}
`;

const Home = () => {
    return ( 
        <StyledHome>
        <h2>Sveiki atvykę į povandeninį pasaulį</h2>
        <div>
            <iframe 
                width="360" 
                height="215" 
                src="https://www.youtube.com/embed/E8OMbCoSucQ" 
                title="YouTube video player" 
            ></iframe>
            <p>Lietuvoje povandeninė fotografija ir jos taikymo galimybės yra gana nauja, dar neišvystyta sritis. Fotografavimas po vandeniu stipriai skiriasi nuo įprastos fotografijos, nes čia aplinka – vanduo – taip pat tampa nuotraukos objektu. Įamžinti žmones jiems svetimoje, mažai pažįstamoje, nekomfortiškoje aplinkoje, tuo pačiu sukuriant mistišką lengvumo įspūdį – tokį tikslą sau ir išsikėliau, norėdamas savo darbuose sujungti du skirtingus pasaulius, atskleisti jų paslaptis ir panardinti žiūrovą į vaizdingą pasaką. Fotografo darbuose modeliai atrodo tarsi užfiksuoti savo stichijoje, jaučiasi „it žuvys vandeny“. Būtent šis kontraversiškas įspūdis labiausiai ir jaudina žiūrovą, verčia užsibūti, patyrinėti detales ir pasvajoti.
Grazios povandeninės fotografijos yra ne tik techniškai sudėtingos, bet ir reikalauja meninio supratimo, kuris padeda sugauti natūralius momentus ir išryškinti po vandeniu esančių kūnų grožį bei gyvybingumą. Taigi, šis fotografijos žanras yra nuolat kintantis ir nuostabus būdas atskleisti pasaulį, kurį retai kas nors mato.
            </p>
        </div>
        </StyledHome>
     );
}
 
export default Home;