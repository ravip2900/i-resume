import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Left from '../src/left';
import Right from '../src/right';
import styled from '@emotion/styled';

const AppContainer = styled(Container)`
  -webkit-print-color-adjust: exact;
  font-size: 14px;
  padding: 0 !important;
  @media print {
    padding: 0 !important;s
  }
`;

export default function Index() {
  return (
    <AppContainer maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Left />
        </Grid>
        <Grid item xs={7} style={{paddingLeft:0}}>
          <Right />
        </Grid>
      </Grid>
    </AppContainer>
  );
}
