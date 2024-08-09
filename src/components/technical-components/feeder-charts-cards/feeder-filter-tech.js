import React, { useEffect, useState } from 'react';
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

const FeederFilterTechnical = ({ onFilterChange, selectedState, selectedBusinessDistrict }) => {
  const [localSelectedState, setLocalSelectedState] = useState(selectedState);
  const [localSelectedBusinessDistrict, setLocalSelectedBusinessDistrict] = useState(selectedBusinessDistrict);

  useEffect(() => {
    setLocalSelectedState(selectedState);
    console.log('Selected state updated in filter:', selectedState);
  }, [selectedState]);

  useEffect(() => {
    setLocalSelectedBusinessDistrict(selectedBusinessDistrict);
    console.log('Selected business district updated in filter:', selectedBusinessDistrict);
  }, [selectedBusinessDistrict]);

  const handleStateButtonClick = (state) => {
    const newSelectedState = localSelectedState === state ? '' : state;
    setLocalSelectedState(newSelectedState);
    onFilterChange({ state: newSelectedState, businessDistrict: '' });
    console.log('State button clicked:', state, 'New state:', newSelectedState);
  };

  const handleBusinessDistrictButtonClick = (businessDistrict) => {
    const newSelectedBusinessDistrict = localSelectedBusinessDistrict === businessDistrict ? '' : businessDistrict;
    setLocalSelectedBusinessDistrict(newSelectedBusinessDistrict);
    onFilterChange({ state: localSelectedState, businessDistrict: newSelectedBusinessDistrict });
    console.log('Business district button clicked:', businessDistrict, 'New business district:', newSelectedBusinessDistrict);
  };

  const stateButtons = (
    <>
      <StyledButton
        variant={localSelectedState === 'Kano' ? 'contained' : 'outlined'}
        onClick={() => handleStateButtonClick('Kano')}
      >
        Kano
      </StyledButton>
      <StyledButton
        variant={localSelectedState === 'Katsina' ? 'contained' : 'outlined'}
        onClick={() => handleStateButtonClick('Katsina')}
      >
        Katsina
      </StyledButton>
      <StyledButton
        variant={localSelectedState === 'Jigawa' ? 'contained' : 'outlined'}
        onClick={() => handleStateButtonClick('Jigawa')}
      >
        Jigawa
      </StyledButton>
    </>
  );

  const businessDistrictButtons = {
    Kano: [
      'Kano Central', 'Kano East', 'Kano Industrial', 'Kano North', 'Kano South'
    ],
    Katsina: [
      'Katsina Central', 'Katsina North', 'Katsina South'
    ],
    Jigawa: [
      'Jigawa North', 'Jigawa South'
    ],
  };

  return (
    <Stack direction="row">
      {localSelectedState ? (
        <>
          <StyledButton
            variant='contained'
            onClick={() => handleStateButtonClick(localSelectedState)}
          >
            {localSelectedState}
          </StyledButton>
          {businessDistrictButtons[localSelectedState].map((district) => (
            <StyledButton
              key={district}
              variant={localSelectedBusinessDistrict === district ? 'contained' : 'outlined'}
              onClick={() => handleBusinessDistrictButtonClick(district)}
            >
              {district}
            </StyledButton>
          ))}
        </>
      ) : (
        stateButtons
      )}
    </Stack>
  );
};

FeederFilterTechnical.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  selectedState: PropTypes.string,
  selectedBusinessDistrict: PropTypes.string,
};

export default FeederFilterTechnical;
