import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Case from './Case';
import '../../styles/Section.sass';

export default function CasesSection() {
  const [cases, setCases] = useState([]);

  const fetchCases = async () => {
    const response = await axios.get('https://sp-labs.vercel.app/api/cases/');
    setCases(response.data.cases);
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <main className='section--container'>
      <section id="cases">
        <h2 className="section--title extra-bold">
          Problemas complexos. Soluções <span className='strike-through'>complexas</span> <span className='italic'>criativas_</span>
        </h2>
        <p className='paragraph soft-black'>Confira nossos cases de suscesso que vão além do mundo jurídico.</p>
      </section>
      <section>
        {cases.map(({ title, description, link }) => (
          <Case key={title} title={title} description={description} link={link} />
        ))}
      </section>
    </main>
  );
}
