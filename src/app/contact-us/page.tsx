import ContactUsHero from "./components/ContactUsHero";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const ContactUs = () => {
  return (
    <>
      <ContactUsHero title="Contact Us" bgImage="/contactbg.jpg" />
      <ContactForm />
      <ContactInfo />
    </>
  );
};

export default ContactUs;
