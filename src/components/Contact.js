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
  margin: 20vh auto;
  justify-content: center;
  z-index: 1;
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
`;

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("test");
  }
  return (
    <ContactForm
      action='https://formsubmit.co/9f4fde6f09fe53f776423acfe73e3c89'
      method='POST'
      onSubmit={handleSubmit}
    >
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
          class='form-control'
          name='message'
          rows='10'
          required
        />
      </div>

      <button type='submit'>Send</button>

      <input type='text' name='_honey' style={{ display: "none" }} />
      <input type='hidden' name='_captcha' value='false' />
      <input type='hidden' name='_next' value='http://localhost:3000/' />
    </ContactForm>
  );
}
