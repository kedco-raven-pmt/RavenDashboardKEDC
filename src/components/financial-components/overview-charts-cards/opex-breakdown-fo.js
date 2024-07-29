import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, Stack } from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';

const expenses = [
  { label: 'Administrative Expenses', amount: '₦1.5B', trend: 'up' },
  { label: 'Technical Expenses', amount: '₦5.7B', trend: 'down' },
  { label: 'Petrol Costs', amount: '₦750M', trend: 'up' },
  { label: 'General Repairs', amount: '₦405M', trend: 'down' },
  { label: 'Salaries', amount: '₦600M', trend: 'down' },
  { label: 'Cables/Fuses & Breakers', amount: '₦1.5B', trend: 'up' },
  { label: 'Complaint Resolutions', amount: '₦5.7B', trend: 'down' },
];

const otherExpenses = Array(3).fill({ label: 'Other Expenses', amount: '₦0', trend: 'down' });

const OpexBreakdownFinancial = () => {
  return (
    <Card elevation={0} sx={{ backgroundColor: '#f2f5f6', py: 0, boxShadow: 'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px' }}>
      <CardContent sx={{ py: 2, px: 2 }}>
        <Typography mb={4} mt={3} variant="h4" textAlign="center">
          Opex Breakdown
        </Typography>

        <Stack spacing={2} justifyContent="space-between" direction="row" divider={<Divider sx={{ borderColor: "#959697" }} orientation="vertical" flexItem />} alignItems="center">
          {expenses.slice(0, 5).map((expense, index) => (
            <Box key={index} sx={{ textAlign: 'center', width: '20%' }}>
              <Typography variant="h2" whiteSpace="nowrap">
                {expense.amount} <span>{expense.trend === 'up' ? <IconArrowUpRight width={18} color="#39B69A" /> : <IconArrowDownLeft width={18} color="#b63939" />}</span>
              </Typography>
              <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">{expense.label}</Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ borderColor: "#cdd2da", marginTop: "20px", marginBottom: "20px" }} orientation="horizontal" flexItem />

        <Stack spacing={2} justifyContent="space-between" direction="row" divider={<Divider sx={{ borderColor: "#959697" }} orientation="vertical" flexItem />} alignItems="center">
          {expenses.slice(5).concat(otherExpenses).map((expense, index) => (
            <Box key={index} sx={{ textAlign: 'center', width: '20%' }}>
              <Typography variant="h2" whiteSpace="nowrap">
                {expense.amount} <span>{expense.trend === 'up' ? <IconArrowUpRight width={18} color="#39B69A" /> : <IconArrowDownLeft width={18} color="#b63939" />}</span>
              </Typography>
              <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">{expense.label}</Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OpexBreakdownFinancial;
