import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
  Box
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
        <Box
          key={qa.question} // Usamos `qa.question` como clave única
          sx={{
            width: '90%',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',  // Bordes redondeados
            marginBottom: '15px',
            backgroundColor: '#F9F9F9', // Fondo estático
          }}
        >
          <Accordion
            sx={{
              backgroundColor: '#F9F9F9',
              boxShadow: 'none', // Eliminamos la sombra para mayor control
              width: '100%', // Aseguramos que el acordeón se ajuste bien
              '& .MuiAccordionSummary-root': {
                padding: '15px', // Aseguramos que el padding no cambie
                minHeight: '56px', // Establecemos un tamaño mínimo estático
              },
              '& .MuiAccordionDetails-root': {
                paddingTop: '10px', // Aseguramos que la sección de detalles no tenga padding raro
                transition: 'none', // Eliminamos las transiciones en el details
              },
              '&.Mui-expanded': {
                // Evitamos cualquier cambio de tamaño cuando el acordeón se expande
                minHeight: '56px', // Aseguramos que la altura no cambie
              },
              '&:hover': {
                // Eliminamos cualquier hover que cause el movimiento
                boxShadow: 'none',
                transform: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                sx={{
                  fontWeight: 'bold', // Las preguntas en negrita
                  fontSize: '18px',
                }}
              >
                {qa.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: '#000',
                  fontSize: '16px',
                  lineHeight: 1.5,
                  textAlign: 'justify',
                  fontWeight: 'normal', // Descripciones sin negrita
                  paddingBottom: '10px', // Añadir padding hacia abajo
                }}
              >
                {qa.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </section>
  );
};

export default FAQ;
