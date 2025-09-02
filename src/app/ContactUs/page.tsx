import ContactUsHero from "./components/ContactUsHero";
import ContactForm from "./components/ContactForm";

const ContactUs = () => {
  return (
    <>
      <ContactUsHero
        title="Contact Us"
        bgImage="/contactbg.jpg"
      />
      <ContactForm />
    </>
  );
};

export default ContactUs;
