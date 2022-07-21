import styled from "styled-components";

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  max-width: 800px;
  background-image: var(--gold-gradient);
  padding: 40px;
  position: relative;
  margin: auto;
  justify-content: center;
  z-index: 1;
  @media (max-width: 690px) {
    width: 95%;
  }
  &::before {
    content: "";
    background-color: var(--elevation4);
    position: absolute;
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    top: 4px;
    left: 4px;
    z-index: -1;
  }
  .flex {
    display: flex;
    gap: 16px;
    @media (max-width: 690px) {
      flex-direction: column;
    }
  }

  .inputWrapper {
    width: 100%;
    background-image: var(--gold-gradient);
    display: grid;
    place-items: center;
    input {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      padding: 16px;
      border: none;
      background-color: var(--elevation5);
      color: white;
      outline: none;
    }
    textarea {
      width: 100%;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      padding: 16px;
      border: none;
      background-color: var(--elevation5);
      color: white;
      outline: none;
    }
  }
  button {
    background-image: var(--gold-gradient);
    border: none;
    padding: 16px 80px;
    border-radius: 80px;
    width: fit-content;
    position: relative;
    z-index: 1;
    color: white;
    align-self: flex-end;
    font-weight: bold;
    letter-spacing: 0.3em;
    font-family: "Poppins";
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 690px) {
      width: 100%;
    }
    &::before {
      content: "";
      background-color: var(--elevation5);
      position: absolute;
      height: calc(100% - 8px);
      width: calc(100% - 8px);
      top: 4px;
      left: 4px;
      z-index: -1;
      border-radius: 80px;
    }
  }
  h1 {
    margin-bottom: 16px;
    align-self: flex-start;
  }
`;

export default function Contact() {
  function handleSubmit(e) {
    // e.preventDefault();
    console.log("test");
  }
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <ContactForm
        action='https://formsubmit.co/9f4fde6f09fe53f776423acfe73e3c89'
        method='POST'
        onSubmit={handleSubmit}
      >
        <h1>Contact Me</h1>
        <div className='flex'>
          <div className='inputWrapper'>
            <input type='text' name='name' placeholder='Name' required />
          </div>
          <div className='inputWrapper'>
            <input type='email' name='email' placeholder='Email' required />
          </div>
        </div>

        <div className='inputWrapper'>
          <textarea
            placeholder='Your Message'
            className='form-control'
            name='message'
            rows='10'
            required
          />
        </div>

        <button type='submit'>Send</button>

        <input type='text' name='_honey' style={{ display: "none" }} />
        <input type='hidden' name='_captcha' value='false' />
        <input type='hidden' name='_next' value='https://syntheticdesigner.github.io/contact' />
      </ContactForm>
    </div>
  );
}
