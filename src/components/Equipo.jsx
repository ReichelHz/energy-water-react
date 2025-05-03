import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Equipo = () => {
  const miembros = [
    {
      nombre: "Francisca Morales",
      cargo: "CEO",
      descripcion: "Francisca es la Directora Ejecutiva de la empresa, liderando con visión y pasión para transformar la industria.",
      imagen: "img4.jpg",
      alt: "Imagen de Francisca Morales, CEO"
    },
    {
      nombre: "Jane Doe",
      cargo: "CTO",
      descripcion: "Jane es la Directora de Tecnología, encargada de dirigir la estrategia tecnológica y la innovación en la empresa.",
      imagen: "img5.jpg",
      alt: "Imagen de Jane Doe, CTO"
    },
    {
      nombre: "Jim Beam",
      cargo: "CFO",
      descripcion: "Jim es el Director Financiero, responsable de la planificación financiera y el análisis en la empresa.",
      imagen: "img6.jpg",
      alt: "Imagen de Jim Beam, CFO"
    }
  ];

  return (
    <section
      id="equipo"
      className="equipo-section"
      role="region"
      aria-labelledby="equipo-titulo"
      style={{
        padding: '60px 20px',
        backgroundColor: '#f7f7f7',
        textAlign: 'center',
        marginBottom: '60px', // Asegura un buen espaciado entre las secciones
        minHeight: '100vh', // Asegura que la sección tenga suficiente altura
        overflow: 'hidden', // Evita cualquier desbordamiento
      }}
    >
      <Typography variant="h4" align="center" gutterBottom id="equipo-titulo" sx={{ fontWeight: 'bold' }}>
  Nuestro Equipo
</Typography>

      <Grid container spacing={3} justifyContent="center" wrap="wrap">
        {miembros && miembros.length > 0 ? (
          miembros.map((miembro, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px', // Añadir margen inferior a las tarjetas para evitar solapamiento
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: 'none',
                  borderRadius: '8px',
                  padding: '20px',
                  maxWidth: '280px', // Limitar el tamaño de la tarjeta
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  },
                }}
                role="article"
              >
                <CardMedia
                  component="img"
                  alt={miembro.alt}
                  height="200"
                  image={`/images/${miembro.imagen}`}
                  sx={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '20px',
                    border: 'none',
                  }}
                  aria-describedby={`descripcion-${index}`}
                />
                <CardContent>
                  <div>
                    <Typography
                      variant="h6"
                      align="center"
                      id={`nombre-${index}`}
                      sx={{
                        fontSize: '1.3rem',
                        fontWeight: 500,
                        color: '#333',
                        margin: 0,
                      }}
                    >
                      {miembro.nombre}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="textSecondary"
                      sx={{
                        fontSize: '1rem',
                        color: '#777',
                        margin: '5px 0',
                      }}
                    >
                      {miembro.cargo}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="textSecondary"
                      paragraph
                      id={`descripcion-${index}`}
                      sx={{
                        fontSize: '0.95rem',
                        color: '#555',
                        lineHeight: 1.6,
                        marginTop: '10px',
                        textAlign: 'justify',
                      }}
                    >
                      {miembro.descripcion}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" align="center" color="textSecondary">
            No se encontraron miembros del equipo.
          </Typography>
        )}
      </Grid>
    </section>
  );
};

export default Equipo;
