import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const FirstData = ({ materials }) => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Typography variant="strong">
          {materials.irradiancia > 0 && 'Irradiância:'} <span>{materials.irradiancia}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Irradiância: <span>{materials.irradiancia_minima}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Irradiância: <span>{materials.irradiancia_maxima}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Irradiância: <span>{materials.integradores_regiao}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Irradiância: <span>{materials.integradores_minimo}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Irradiância: <span>{materials.integradores_maximo}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Irradiância: <span>{materials.economia}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Irradiância: <span>{materials.valor_instalacao}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          co2: <span>{materials.co2}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          potencyCC: <span>{materials.potencyCC}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          performance: <span>{materials.performance}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Qtde. Inversores: <span>{materials.qtdeInversores}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          Índice Único. Inversores: <span>{materials.indiceUnico}</span>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="strong">
          potenciaSistema: <span>{materials.potenciaSistema}</span>
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default FirstData;
