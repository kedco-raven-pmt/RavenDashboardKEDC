import React from 'react';
import { Grid, Typography, Box, Breadcrumbs, Link, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CustomSelect from '../../../../components/forms/theme-elements/CustomSelect';
import breadcrumbImg from 'src/assets/images/breadcrumb/ChatBc.png';
import { IconCircle } from '@tabler/icons';


const Breadcrumb = ({ subtitle, items, title, children }) => {

  const [month, setMonth] = React.useState('1');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  
  return(
  <Grid
    container
    sx={{
      backgroundColor: 'primary.light',
      borderRadius: (theme) => theme.shape.borderRadius / 4,
      p: '30px 25px 20px',
      marginBottom: '30px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Grid item xs={12} sm={6} lg={8} mb={1}>
      <Typography variant="h4">{title}</Typography>
      <Typography color="textSecondary" variant="h6" fontWeight={400} mt={0.8} mb={0}>
        {subtitle}
      </Typography>
      <Breadcrumbs
        separator={
          <IconCircle
            size="5"
            fill="textSecondary"
            fillOpacity={'0.6'}
            style={{ margin: '0 5px' }}
          />
        }
        sx={{ alignItems: 'center', mt: items ? '10px' : '' }}
        aria-label="breadcrumb"
      >
        {items
          ? items.map((item) => (
              <div key={item.title}>
                {item.to ? (
                  <Link underline="none" color="inherit" component={NavLink} to={item.to}>
                    {item.title}
                  </Link>
                ) : (
                  <Typography color="textPrimary">{item.title}</Typography>
                )}
              </div>
            ))
          : ''}
      </Breadcrumbs>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="flex-end">
      <Box
        sx={{
          display: { xs: 'none', md: 'block', lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        {children ? (
          <Box sx={{ top: '0px', position: 'absolute' }} alignContent='center'>{children}</Box>
        ) : (
          <>
            <Box sx={{ top: '0px', position: 'absolute' }}>
            <CustomSelect labelId="month-dd" id="month-dd" size="small" value={month}  onChange={handleChange} sx={{ display: 'flex' }} p="15px"
              >
              <MenuItem value={1}>Today</MenuItem>
              <MenuItem value={2}>Week</MenuItem>
              <MenuItem value={3}>Month</MenuItem>
              </CustomSelect>
            
            </Box>
          </>
        )}
      </Box>
    </Grid>
  </Grid>
  )
};

export default Breadcrumb;
