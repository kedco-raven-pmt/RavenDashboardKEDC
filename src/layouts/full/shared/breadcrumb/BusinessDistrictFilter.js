import React, { useState } from 'react';
import { Grid, Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: '2px',
  padding: '2px 4px',
  fontSize: '0.7rem',
  minWidth: 0,
  flexGrow: 1,
}));

const businessDistricts = [
  'Kano Industrial', 'Kano Central', 'Katsina North', 'Kano North', 'Kano East',
  'Kano West', 'Katsina South', 'Jigawa South', 'Jigawa North', 'Katsina Central'
];

const BusinessDistrictFilter = ({ onFilterChange }) => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleDistrictButtonClick = (district) => {
    const newSelectedDistrict = selectedDistrict === district ? '' : district;
    setSelectedDistrict(newSelectedDistrict);
    onFilterChange(newSelectedDistrict);
  };

  return (
    <Grid container spacing={1} sx={{ maxWidth: '600px', margin: '0 auto' }}>
      {businessDistricts.map((district) => (
        <Grid item xs={2.4} key={district}>
          <StyledButton
            fullWidth
            variant={selectedDistrict === district ? 'contained' : 'outlined'}
            onClick={() => handleDistrictButtonClick(district)}
          >
            {district}
          </StyledButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default BusinessDistrictFilter;