import React, { useState } from 'react';
import { Button, useTheme, styled } from '@mui/material';

const SmallButton = styled(Button)(({ theme }) => ({
  padding: '2px 8px',
  fontSize: '0.75rem',
  minWidth: '40px',
  margin: '2px',
}));

const FeederType = () => {
  const theme = useTheme();
  const [selectedVoltages, setSelectedVoltages] = useState([]);

  const handleButtonClick = (voltage) => {
    setSelectedVoltages((prevSelected) => {
      if (prevSelected.includes(voltage)) {
        return prevSelected.filter((v) => v !== voltage);
      } else {
        return [...prevSelected, voltage];
      }
    });
  };

  const isSelected = (voltage) => selectedVoltages.includes(voltage);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SmallButton
        variant={isSelected('11') ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('11')}
        sx={{
          backgroundColor: isSelected('11') ? theme.palette.primary.main : 'transparent',
          color: isSelected('11') ? 'white' : theme.palette.primary.main,
        }}
      >
        11
      </SmallButton>
      <SmallButton
        variant={isSelected('33') ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick('33')}
        sx={{
          backgroundColor: isSelected('33') ? theme.palette.primary.main : 'transparent',
          color: isSelected('33') ? 'white' : theme.palette.primary.main,
        }}
      >
        33
      </SmallButton>
    </div>
  );
};

export default FeederType;