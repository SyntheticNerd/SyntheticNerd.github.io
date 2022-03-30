export default function About() {
  return (
    <>
      <iframe
        src={process.env.PUBLIC_URL + '/docs/andrewSchroepferResume10.2021.docx-1.pdf#view=Fit&zoom=70'}
        title='Resume'
        scrolling="no"
        style={{
          border: "none",
          marginTop: "64px",
          boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.8)",
          opacity: "0.9",
          height: "800px",
          width: "600px",
        }}
      ></iframe>
    </>
  );
}
