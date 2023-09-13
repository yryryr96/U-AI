import LandingCanvas from "./components/landingcanvas";
import StartForm from "./components/startform";
import "@/styles/landing/style.css"

const LandingPage = () => {
  return (
    <>
      <LandingCanvas />
      <StartForm />
    </>
  );
};

export default LandingPage;
