import styled from "styled-components";

const StyledHome = styled.div`
  background-color: rgb(215, 211, 199);
  > h2 {
    text-align: center;
    color: rgb(34, 61, 89);
    padding-top: 30px;
    margin-top: 0;
  }
  > div {
    display: flex;
    width: 100%;
    padding: 30px;
    .cool-effect {
      position: relative;
      width: 450px;
      height: 325px;
    }
    .cool-effect .filler {
      width: 400px;
      height: 275px;
      position: absolute;
      background-color: #9bbfd9;
      right: 0px;
    }
    .cool-effect iframe {
      position: absolute;
      width: 400px;
      height: 250px;
      bottom: 0px;
      left: 0px;
      background-color: blue;
    }
    > .text-block {
      width: 50%;
      height: 275px;
      margin: 0;
      padding: 2rem 1rem;
      background-color: white;
      overflow-y: scroll;
      p {
        margin: 0;
        font-size: 0.8em;
        text-indent: 25px;
        color: rgb(34, 61, 89);
        text-align: justify;
      }
    }
  }
  > div:last-child {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 2fr);
    align-items: center;
    background-color: rgb(189, 188, 175);
    > img {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      margin: 5px;
    }
  }
  @media only screen and (max-width: 780px) {
    .cool-effect .filler {
      height: 75% !important;
    }
    .cool-effect iframe {
      width: 100% !important;
    }
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <h2>Sveiki atvykę į povandeninį pasaulį</h2>
      <div>
        <div className="cool-effect">
          <div className="filler"></div>
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/E8OMbCoSucQ"
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="text-block">
          <p>
            Lietuvoje povandeninė fotografija ir jos taikymo galimybės yra gana
            nauja, dar neišvystyta sritis. Fotografavimas po vandeniu stipriai
            skiriasi nuo įprastos fotografijos, nes čia aplinka – vanduo – taip
            pat tampa nuotraukos objektu. Įamžinti žmones jiems svetimoje, mažai
            pažįstamoje, nekomfortiškoje aplinkoje, tuo pačiu sukuriant mistišką
            lengvumo įspūdį – tokį tikslą sau ir išsikėliau, norėdamas savo
            darbuose sujungti du skirtingus pasaulius, atskleisti jų paslaptis
            ir panardinti žiūrovą į vaizdingą pasaką. Fotografo darbuose
            modeliai atrodo tarsi užfiksuoti savo stichijoje, jaučiasi „it žuvys
            vandeny“. Būtent šis kontraversiškas įspūdis labiausiai ir jaudina
            žiūrovą, verčia užsibūti, patyrinėti detales ir pasvajoti. Grazios
            povandeninės fotografijos yra ne tik techniškai sudėtingos, bet ir
            reikalauja meninio supratimo, kuris padeda sugauti natūralius
            momentus ir išryškinti po vandeniu esančių kūnų grožį bei
            gyvybingumą. Taigi, šis fotografijos žanras yra nuolat kintantis ir
            nuostabus būdas atskleisti pasaulį, kurį retai kas nors mato.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/406192998_10220177672112562_9065284534554054665_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g8eyX1aqvBEAX__1O8T&_nc_ht=scontent.fvno2-1.fna&oh=00_AfCB57okpqyqTYsPxvFmJnMa02afBD3GpZdUYh9wks676w&oe=6608D082"
          alt="photo"
        />
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.6435-9/146067145_10215555983813243_3117033387352416718_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b1w6Dhqg0lkAX_WLOu4&_nc_ht=scontent.fvno2-1.fna&oh=00_AfC_nop70xhQBvo_wWQuZiVoLI-qpnen4nGYolz9iDQWqg&oe=662B7982"
          alt="photo"
        />
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/224472707_10216494624438672_2634973389903511160_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=__sGZm6tD6IAX99HuHd&_nc_ht=scontent.fvno2-1.fna&oh=00_AfDs1A9KQAXGpr2Pp-g6DIK8zNNTY6lhcltcqBq_OJx9Bw&oe=6609BEF6"
          alt="photo"
        />
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/406264547_10220177669952508_1807992912365584606_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9ynscUHX-5YAX-RJ8_q&_nc_ht=scontent.fvno2-1.fna&oh=00_AfBZuPowhpubpurcH4BLuc7hyUDbKPQ8IerUgm3z-gG_eQ&oe=66091D54"
          alt="photo"
        />
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.6435-9/143954653_10215525095361051_8946351188249185929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WeBAycnpjPwAX8oJnTc&_nc_ht=scontent.fvno2-1.fna&oh=00_AfCZ4KhrM2UOsU33uLED5napWm62M2db6dVaUZA1o5deZQ&oe=662B7F29"
          alt="photo"
        />
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t39.30808-6/406196181_10220177640311767_3960014355673480201_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Lshw230qe1cAX_xocB9&_nc_ht=scontent.fvno2-1.fna&oh=00_AfCGx7XznaDrv6BAVbjwsjHrp398jUjzunqGWVDAY_qCtw&oe=6609806F"
          alt="photo"
        />
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.6435-9/61884906_10211610841307146_2959744585959473152_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4OW-DYguVlgAX9xhrn9&_nc_ht=scontent.fvno2-1.fna&oh=00_AfChBadGdALA69OP1xXhcfxtUIpXaffZjRbfsN9kAuWCNQ&oe=662B8D04"
          alt="photo"
        />
        <img
          src="https://scontent.fvno2-1.fna.fbcdn.net/v/t31.18172-8/13422440_552730848221105_2316421364304504640_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_J7hiM7jgdEAX_wP77k&_nc_ht=scontent.fvno2-1.fna&oh=00_AfBc3KcxWsan0mPrCWi_b4zORIWVJ6x8zcRv9Bl9rLahPg&oe=662B7040"
          alt="photo"
        />
      </div>
    </StyledHome>
  );
};

export default Home;
