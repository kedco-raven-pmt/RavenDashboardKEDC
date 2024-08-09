import React from 'react';
import { Stack, Button, styled } from '@mui/material';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  '&:first-of-type': {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
  },
  '&:last-of-type': {
    borderTopRightRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  },
  '&:not(:first-of-type)': {
    marginLeft: '-1px',
  },
}));

const StateFilterCommercialBS = ({ onFilterChange, selectedState }) => {
  const handleStateButtonClick = (state) => {
    const newSelectedState = selectedState === state ? '' : state;
    onFilterChange(newSelectedState);
  };

  return (
    <Stack direction="row">
      <StyledButton
        variant={selectedState === 'Kano' ? 'contained' : 'outlined'}
        onClick={() => handleStateButtonClick('Kano')}
      >
        Kano
      </StyledButton>
      <StyledButton
        variant={selectedState === 'Katsina' ? 'contained' : 'outlined'}
        onClick={() => handleStateButtonClick('Katsina')}
      >
        Katsina
      </StyledButton>
      <StyledButton
        variant={selectedState === 'Jigawa' ? 'contained' : 'outlined'}
        onClick={() => handleStateButtonClick('Jigawa')}
      >
        Jigawa
      </StyledButton>
    </Stack>
  );
};

StateFilterCommercialBS.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  selectedState: PropTypes.string.isRequired,
};

export default StateFilterCommercialBS;
