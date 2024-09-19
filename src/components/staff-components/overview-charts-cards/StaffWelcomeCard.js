import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';
import welcomeImg from 'src/assets/images/backgrounds/overveiw-bg.svg';
import { useTheme } from '@mui/material/styles';

const StaffWelcomeCard = () => {
  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  return (
    <Card elevation={0} sx={{ backgroundColor: primaryLight, py: 0 }}>
      <CardContent sx={{ py: 2, px: 2 }}>
        <Grid container justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box>
              <Typography gap="16px" mb={10} variant="h4" whiteSpace="nowrap">
                Welcome back Regis Fortune!
              </Typography>
              <Box
                gap="16px"
                mb={5}
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'flex',
                  },
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5" whiteSpace="nowrap">
                  Staff Manager Overview:
                </Typography>
              </Box>

              <Stack
                spacing={2}
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">
                    1,200{' '}
                    <span>
                      <IconArrowUpRight width={18} color="#39B69A" />
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">
                    Total Staff Number
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">
                    ₦202,300
                    <span>
                      <IconArrowUpRight width={18} color="#39B69A" />
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">
                    Average Salary
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" whiteSpace="nowrap">
                    41 yrs
                    <span>
                      <IconArrowDownLeft width={18} color="#b63939" />
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" whiteSpace="nowrap">
                    Average Staff Age
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Box mb="-30px" mt="50px">
              <img src={welcomeImg} alt="Welcome Background" width={'400px'} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StaffWelcomeCard;
