import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Case from './Case';

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
    <main>
      <section>
        <p>
          Problemas complexos. Soluções <span>complexas</span> <span>criativas</span>
        </p>
        <p>Confira nossos cases de suscesso que vão além do mundo jurídico.</p>
      </section>
      <section>
        {cases.map(({ title, description, link }) => (
          <Case key={title} title={title} description={description} link={link} />
        ))}
      </section>
    </main>
  );
}
