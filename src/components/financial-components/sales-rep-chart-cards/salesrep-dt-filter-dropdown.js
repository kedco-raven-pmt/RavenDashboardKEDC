import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../../mui-forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import { SalesRepData } from './dataroom-financial-salesrep/dataroom-financial-salesrep';

const DTSalesRepDropdown = ({ selectedSalesRep, selectedDT, onDTChange }) => {
  const [dts, setDTs] = useState([]);

  useEffect(() => {
    if (selectedSalesRep) {
      // Find the sales rep data and extract DTs
      const salesRepData = SalesRepData[selectedSalesRep];
      if (salesRepData && salesRepData.DTs) {
        setDTs(salesRepData.DTs.map((dt) => dt.name));
      } else {
        setDTs([]);
      }
    } else {
      setDTs([]);
    }
  }, [selectedSalesRep]);

  const handleChange = (event) => {
    const dt = event.target.value === 'Transformer' ? '' : event.target.value;
    onDTChange(dt);
  };

  return (
    <CustomSelect
      labelId="dt-dd"
      id="dt-dd"
      value={selectedDT === '' ? 'Transformer' : selectedDT}
      size="small"
      onChange={handleChange}
      disabled={dts.length === 0}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 48 * 5,
          },
        },
      }}
    >
      <MenuItem value="Transformer">Transformer</MenuItem>
      {dts.map((dt, index) => (
        <MenuItem key={index} value={dt}>
          {dt}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

DTSalesRepDropdown.propTypes = {
  selectedSalesRep: PropTypes.string,
  selectedDT: PropTypes.string,
  onDTChange: PropTypes.func.isRequired,
};

export default DTSalesRepDropdown;
