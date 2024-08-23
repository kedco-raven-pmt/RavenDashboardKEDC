import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import { FeederData } from './dataroom-financial-feeder/dataroom-financial-feeder';

const FeederDropdown = ({ selectedState, selectedBusinessDistrict, selectedFeeder, onFeederChange }) => {
  const [feeders, setFeeders] = useState([]);

  useEffect(() => {
    if (selectedState && selectedBusinessDistrict) {
      const districtFeeders = FeederData[selectedState].businessDistricts[selectedBusinessDistrict] || [];
      setFeeders(districtFeeders.map(feeder => feeder.name));
    } else {
      setFeeders([]);
    }
  }, [selectedState, selectedBusinessDistrict]);

  const handleChange = (event) => {
    const feeder = event.target.value === 'Feeder' ? '' : event.target.value;
    onFeederChange(feeder);
  };

  return (
    <CustomSelect
      labelId="feeder-dd"
      id="feeder-dd"
      value={selectedFeeder === '' ? 'Feeder' : selectedFeeder}
      size="small"
      onChange={handleChange}
      disabled={feeders.length === 0}
    >
      <MenuItem value="Feeder">Feeder</MenuItem>
      {feeders.map((feeder, index) => (
        <MenuItem key={index} value={feeder}>{feeder}</MenuItem>
      ))}
    </CustomSelect>
  );
};

FeederDropdown.propTypes = {
  selectedState: PropTypes.string,
  selectedBusinessDistrict: PropTypes.string,
  selectedFeeder: PropTypes.string,
  onFeederChange: PropTypes.func.isRequired,
};

export default FeederDropdown;
