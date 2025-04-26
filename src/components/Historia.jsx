import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Card, CardContent, CardMedia } from "@mui/material";

const Historia = () => {
  return (
    <Box id="historia" sx={{ backgroundColor: "#f2f2f2", py: 6 }}>
      <Box sx={{ maxWidth: "900px", mx: "auto", px: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#101E33",
            textAlign: "center",
            fontFamily: "'Readex Pro', sans-serif", // Aplicando la fuente Readex Pro
            lineHeight: 1.5, // Ajustando el line-height
          }}
        >
          Nuestra Historia
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "#333",
            textAlign: "justify",
            lineHeight: 1.5, // Ajustando el line-height
            fontFamily: "'Readex Pro', sans-serif", // Aplicando la fuente Readex Pro
          }}
        >
          Energy and Water SpA nace con el propósito de ofrecer soluciones integrales de climatización,
          electricidad y automatización industrial. A través del tiempo hemos evolucionado, manteniéndonos
          fieles a nuestros valores de honestidad, respeto e innovación. Nos hemos consolidado como una empresa
          comprometida con la eficiencia, la calidad y la confianza, brindando servicios que garantizan el buen
          funcionamiento de hogares, empresas e industrias en todo Chile.
        </Typography>

        <Divider sx={{ mb: 5 }} />

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#D3512B" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" color="#101E33" fontWeight="bold" sx={{ fontFamily: "'Readex Pro', sans-serif", lineHeight: 1.5 }}>
                Fundación
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify", fontFamily: "'Readex Pro', sans-serif", lineHeight: 1.5 }}>
                Comenzamos con servicios de climatización y electricidad en la Región Metropolitana.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#035889" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" color="#101E33" fontWeight="bold" sx={{ fontFamily: "'Readex Pro', sans-serif", lineHeight: 1.5 }}>
                Expansión
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify", fontFamily: "'Readex Pro', sans-serif", lineHeight: 1.5 }}>
                Incorporamos automatización industrial y proyectos eléctricos a medida, ampliando nuestro alcance y capacidades técnicas.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#101E33" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" color="#101E33" fontWeight="bold" sx={{ fontFamily: "'Readex Pro', sans-serif", lineHeight: 1.5 }}>
                Actualidad
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify", fontFamily: "'Readex Pro', sans-serif", lineHeight: 1.5 }}>
                Somos un referente en soluciones integrales, atendiendo a clientes de alto nivel en distintos sectores, con un enfoque profesional y personalizado.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mt: 5,
            backgroundColor: "#ffffff",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <CardMedia
            component="img"
            image="/images/im3.jpg" // Asegúrate de que esta imagen exista en tu carpeta public/images
            alt="Nuestra Misión"
            sx={{ width: { xs: "100%", md: 350 }, height: "auto", objectFit: "cover" }}
          />
          <CardContent sx={{ padding: 3 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#101E33",
                fontWeight: "bold",
                mb: 2,
                fontFamily: "'Readex Pro', sans-serif", // Aplicando la fuente Readex Pro
                lineHeight: 1.5, // Ajustando el line-height
              }}
            >
              Nuestra Misión
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                color: "#333",
                lineHeight: 1.7,
                fontFamily: "'Readex Pro', sans-serif", // Aplicando la fuente Readex Pro
              }}
            >
              Nuestra misión es satisfacer las necesidades de nuestros clientes con eficiencia, rapidez y profesionalidad.
              Nuestra visión es ser la empresa referente en el mercado por nuestra excelencia y compromiso.
              Nuestros valores son la honestidad, la responsabilidad, el respeto y la innovación.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Historia;
