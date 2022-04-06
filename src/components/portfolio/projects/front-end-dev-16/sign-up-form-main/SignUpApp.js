import { useState } from "react";
import SignUp from "./reactSignUp/SignUp";
import { App, ContentWrapper, PromoBtn, SuccessModal } from "./styles/StyledComponents";
import {  } from "./styles/StyledComponents";
function SignUpApp() {
  const [success, setSuccess] = useState("false")
  return (
    <App>
      <SuccessModal display={success}/>
      <ContentWrapper>
        <section>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section>
          <PromoBtn>
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </PromoBtn>
          <SignUp setSuccess={setSuccess}/>
        </section>
      </ContentWrapper>
    </App>
  );
}

export default SignUpApp;
