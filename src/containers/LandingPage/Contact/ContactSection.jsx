import ContactForm from './ContactForm';
import ContactModal from './ContactModal';

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="section--container page-padding al-item-center flex-col contact__bg"
    >
      <h2 className="section--title extra-bold">Não fique parado, fale conosco</h2>
      <ContactForm />
      <ContactModal />
    </section>
  );
}
