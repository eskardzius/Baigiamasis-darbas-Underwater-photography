import styled from "styled-components";

const StyledHome = styled.div`
background-color: rgb(215, 211, 199);
> h2{
    color: rgb(34, 61, 89);
    margin-top: 0;
    padding-top: 40px ;
    padding-left: 32px;
}
> div{
    width: 100%;
    padding: 10px;
    gap: 10px;
    > img{
        width: 40%;
        height: 100%;
        padding-left: 20px;
        float: left;
        margin: 5px;
    }
    > p{
        width: 100%;
        font-size: 14px;
        text-indent: 25px;
        color: rgb(34, 61, 89);
        text-align: justify;
        padding-right: 20px;
        padding-left: 20px;
        align-self: flex-end;
    }
}
`;

const Home = () => {
    return ( 
        <StyledHome>
        <h2>Apie autorių</h2>
        <div>
        <img src="https://scontent.fvno2-1.fna.fbcdn.net/v/t31.18172-8/29351738_10209182467639322_2695539751281871602_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GrOE0EVGV-oAX9pk1es&_nc_ht=scontent.fvno2-1.fna&oh=00_AfBIolykf1ajZaSm77zJR3fkiic_oLk2D257_Gpn2frlFw&oe=662A31F7" alt="" />
        <p>„Fotografija – tai vienintelė sritis, kuriai nuo vaikystės esu ir lieku neabejingas.“ </p>
        <p>Erikas Skardžius yra baigęs M. K. Čiurlionio menų gimnaziją, dailės, dizaino ir architektūros profilį.  Jis svajojo apie architektūros studijas, tačiau tuokart pasidavęs racionalumui po kelerių metų apsigynė tarptautinės vadybos ir marketingo diplomą. Vėliau E. Skardžius ilgą laiką dirbo finansų ir personalo valdymo srityse, o pagrindinė jo aistra – fotografija tuo metu liko antrame plane, kaip hobis. </p>
        <p>Vis dėlto niekad neapleido jausmas, kad tikrąjį save autorius atras tik grįždamas prie menų. 2012 metais jis galutinai apsisprendė, kad nori į pasaulį žvelgti pro objektyvo akutę. Vilniaus technologijų ir dizaino kolegijoje E. Skardžius įstojo ir su pagyrimu baigė Fotografijos specialybės studijas, nė karto nesuabejojęs, kad šis jo pasirinkimas buvęs teisingas.</p>
        <p>2014 m. pagal Erasmus studentų mainų programą E. Skardžius buvo išvykęs į Tartu menų koledžą Estijoje. Anot jo paties, tai buvo neįtikėtina ir neįkainojama patirtis, leidusi ne tik pažinti įvairesnes, egzotiškesnes fotografijos rūšis, tokias kaip aktų fotografavimas, povandeninė, aerofotografija, bet ir pagilinti savo žinias kompozicijos bei apšvietimo srityse. Šviesa fotografijoje vaidina lemiamą rolę, tad ją perprasti ir suvaldyti yra vienas pagrindinių fotografo uždavinių. </p>
        <p>Nuo vaikystės fotografas taip pat buvo neabejingas povandeniniam pasauliui ir jau virš 10 metų užsiiminėjo giluminiu nardymu. Studijų metais, ypač įkvėptas patirties ir galimybių Tartu koledže, jis nusprendė sujungti šias dvi aistras į vieną – panardino savo foto įrangą po vandeniu ir ėmė fiksuoti siurrealistinius povandenius vaizdus. </p>
        <p>Lietuvoje povandeninė fotografija ir jos taikymo galimybės yra visiškai nauja, neišvystyta sritis. Fotografavimas po vandeniu stipriai skiriasi nuo įprastos fotografijos, nes čia aplinka – vanduo – taip pat tampa nuotraukos objektu. Įamžinti žmones jiems svetimoje, mažai pažįstamoje, nekomfortiškoje aplinkoje, tuo pačiu sukuriant mistišką lengvumo įspūdį – tokį tikslą išsikėlė E. Skardžius, norėdamas savo darbuose sujungti du skirtingus pasaulius, atskleisti jų paslaptis ir panardinti žiūrovą į vaizdingą pasaką. Fotografo darbuose modeliai atrodo tarsi užfiksuoti savo stichijoje, jaučiasi „it žuvys vandeny“. Būtent šis kontraversiškas įspūdis labiausiai ir jaudina žiūrovą, verčia užsibūti, patyrinėti detales ir pasvajoti.</p>
        </div>

        </StyledHome>
     );
}
 
export default Home;