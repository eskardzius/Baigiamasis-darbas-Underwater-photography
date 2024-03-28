import styled from "styled-components";

const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background-color: rgb(215, 211, 199);
  > h2 {
    color: rgb(34, 61, 89);
    gap: 0px;
    margin: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: white;
    gap: 0px;
    
    >p{
      text-align: center;
      padding-bottom: 20px;
    }
    > p:first-child {
      font-size: 14px;
      color: rgb(34, 61, 89);
      margin: 0;
    }
    > form {
      display: flex;
      flex-direction: column;
      > label {
        color: rgb(34, 61, 89);
      }
      > p {
        display: flex;
        margin: 10px;
      }
      > input {
        width: 100%;
        height: 30px;
      }
      > textarea {
        width: 100%;
        height: 100px;
      }
      button {
        width: 100%;
        height: 30px;
      }
    }
  }
`;

const Contacts = () => {
  return (
    <StyledContacts>
      <h2>Susisiekite su mumis</h2>
      <div>
        <p>
          Erikas Skardžius <br /> El. paštas: eskadrasphotography@gmail.com{" "}
          <br /> Telefonas: +37061100458
        </p>
        <p>Susisiekti su manimi galite nurodytais kontaktiniais duomenimis <br /> arba panaudodami pateiktą kontaktų formą:</p>
        <form>
          <p>
            <input type="text" 
            id="your_name" name="your_name" 
            title="Name*" 
            placeholder="Vardas..." />
          </p>
          <p>
            <input type="text" 
            id="email" name="email" 
            title="Email*" 
            placeholder="El. paštas" />
          </p>
          <p>
            <input type="text" 
            id="phone" name="text" 
            title="Phone*" 
            placeholder="+370 12345678"/>
          </p>
          <textarea
            name="massage"
            id="massage"
            cols="10"
            rows="7"
            title="Massage*"
            placeholder="Jūsų žinutė..."
          ></textarea>
          <p>
            <input type="submit" value="Siųsti" />
          </p>
        </form>
      </div>
    </StyledContacts>
  );
};

export default Contacts;
