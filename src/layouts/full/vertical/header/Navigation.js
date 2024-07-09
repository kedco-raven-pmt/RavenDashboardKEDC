import { useState } from 'react';
import { Box, Menu, Typography, Button, Divider, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const AppDD = () => {


  return (
    <>

      <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} variant="text" to='/home' component={Link}>
        Home
      </Button>
      <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} variant="text" to='/overview/overviewpage' component={Link}>
        Overview
      </Button>
      <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} variant="text" to="/commercial/commercial-overview" component={Link}>
        Commercial
      </Button>
      <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} variant="text" to="/financial/financial-overview" component={Link}>
        Financial
      </Button>
      <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} variant="text" to="/technical/technical-overview" component={Link}>
        Technical
      </Button>
      <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} variant="text" to="/staff/staff-overview" component={Link}>
        Staff Manager
      </Button>
      <Button color="inherit" sx={{color: (theme) => theme.palette.text.secondary}} variant="text" to="/staff/staff-overview" component={Link}>
        NERC
      </Button>
    </>
  );
};

export default AppDD;
