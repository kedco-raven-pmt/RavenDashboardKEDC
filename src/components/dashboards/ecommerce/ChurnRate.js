import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Avatar } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import { IconArrowDownRight, IconUserOff } from '@tabler/icons';

const ChurnRate = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;

  return (
    <DashboardCard>
      <>
        <Box width={38} height={13} bgcolor="secondary.light" display="flex" alignItems="center" justifyContent="center">
          <Avatar sx={{ width: 25, height: 25 }}>
            <IconUserOff size={20} />
          </Avatar>
        </Box>
        <Box mt={3} mb={2}>
          {/* Chart removed */}
        </Box>
        <Typography variant="h4">
          6%
          <span>
            <IconArrowDownRight width={18} color="#39B69A" />
          </span>
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Churn Rate
        </Typography>
      </>
    </DashboardCard>
  );
};

export default ChurnRate;