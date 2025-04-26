import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqData from '../faq.json'; // Asegúrate de que la ruta sea correcta
import './faq.css';

const FAQ = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulación de llamada a la API con un retraso
        await new Promise(resolve => setTimeout(resolve, 500));
        setQuestionsAndAnswers(faqData);
        setLoading(false); // Al cargar los datos, ponemos loading en false
      } catch (err) {
        setError('Error al cargar las preguntas frecuentes.');
        setLoading(false); // En caso de error también se detiene la carga
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <CircularProgress /> {/* Indicador de carga */}
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
        <Typography variant="h6">{error}</Typography>
      </div>
    );
  }

  return (
    <section className="faq-section" id="faq">
      <h2>Preguntas Frecuentes</h2>
      {questionsAndAnswers.map((qa, index) => (
        <Accordion
          key={qa.question} // Usamos `qa.question` como clave única
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '15px 20px',
            marginBottom: '10px',
            width: '100%',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              transform: 'translateY(-2px)'
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{qa.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                marginTop: '10px',
                color: '#000',
                fontSize: '16px',
                lineHeight: 1.5,
                textAlign: 'justify',
                fontWeight: 'bold'
              }}
            >
              {qa.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
};

export default FAQ;
