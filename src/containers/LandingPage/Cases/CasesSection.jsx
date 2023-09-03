import { useState, useEffect } from 'react';
import axios from 'axios';
import Case from './Case';
import { api } from '../../../services';
import '../../../styles/Section.sass';

export default function CasesSection() {
  const [cases, setCases] = useState([]);

  const fetchCases = async () => {
    const response = await api.fetchCases();
    setCases(response);
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <main className="section--container page-padding">
      <section id="cases">
        <h2 className="section--title extra-bold">
          Problemas complexos. Soluções <span className="strike-through">complexas</span>{' '}
          <span className="italic">criativas_</span>
        </h2>
        <p className="paragraph soft-black">
          Confira nossos cases de suscesso que vão além do mundo jurídico.
        </p>
      </section>
      <section className="section--container">
        {cases.map(({ title, description, link }) => (
          <Case key={title} title={title} description={description} link={link} />
        ))}
      </section>
    </main>
  );
}
