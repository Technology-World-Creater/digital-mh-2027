import GetInvolvedHero from "./components/GetInvolvedHero";
import GetInvolvedSections from "./components/GetInvolvedSections";

const page = () => {
  return (
    <>
      <GetInvolvedHero
        title="Get Involved with Digital Maharashtra 2027"
        subtitle="Together, let's shape Maharashtra's digital future."
        bgImage="/getinvolved.jpg"
      />
      <GetInvolvedSections />
    </>
  );
};

export default page;
