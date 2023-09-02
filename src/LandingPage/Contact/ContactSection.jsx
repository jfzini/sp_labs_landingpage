import React from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contato" className="section--container page-padding al-item-center flex-col">
      <h2 className="section--title extra-bold">Não fique parado, fale conosco</h2>
      <ContactForm />
    </section>
  );
}
