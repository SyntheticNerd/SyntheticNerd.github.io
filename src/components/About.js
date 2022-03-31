export default function About() {
  return (
    <div style={{position: "relative" }}>
      <div style={{paddingBottom: "min(130%, 780px)"}}></div>
      <iframe
        src={
          process.env.PUBLIC_URL +
          "/docs/andrewSchroepferResume10.2021.docx-1.pdf#view=Fit"
        }
        title='Resume'
        scrolling='no'
        style={{
          position: "absolute",
          border: "none",
          marginTop: "32px",
          boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.8)",
          height: "100%",
          width: "100%",
          maxWidth: "600px",
          top: "0",
        }}
      ></iframe>
    </div>
  );
}
