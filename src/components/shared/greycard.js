import { Card } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const GreyCard = ({ children, className }) => {
  const customizer = useSelector((state) => state.customizer);
  return (
    <Card
      sx={{ p: 0, position: 'relative',  bgcolor: '#f7f8f9', boxShadow: 'rgb(191 195 198 / 87%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px' }}
      className={className}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {children}
    </Card>
  );
};

GreyCard.propTypes = {
  children: PropTypes.node,
};

export default GreyCard;
