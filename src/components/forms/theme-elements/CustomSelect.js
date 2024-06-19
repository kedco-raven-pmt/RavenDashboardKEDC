import React from 'react';
import { styled, Select } from '@mui/material';

const CustomSelect = styled((props) => <Select  sx={{backgroundColor: "#fff"}} {...props} />)();

export default CustomSelect;
