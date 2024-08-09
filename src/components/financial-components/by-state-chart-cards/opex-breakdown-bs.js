import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Stack, Chip } from '@mui/material';
import { IconArrowUpRight, IconArrowDownLeft } from '@tabler/icons';
import { FinancialDataOpex } from './dataroom-financial-by-state/dataroom-financial-bs';

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return `₦${(amount / 1000000000).toFixed(1)}B`;
  }
  return `₦${(amount / 1000000).toFixed(1)}M`;
};

const OpexBreakdownFinancialBS = ({ selectedState }) => {
  console.log("Selected State: ", selectedState);

  const expenses = selectedState 
    ? Object.values(FinancialDataOpex).find(state => state.name === selectedState)?.expenses || []
    : Object.values(FinancialDataOpex).flatMap(state => state.expenses);

  console.log("Expenses before aggregation: ", expenses);

  const aggregatedExpenses = expenses.reduce((acc, expense) => {
    const existing = acc.find(item => item.label === expense.label);
    if (existing) {
      existing.amount += expense.amount;
    } else {
      acc.push({ ...expense });
    }
    return acc;
  }, []);

  console.log("Aggregated Expenses: ", aggregatedExpenses);

  const otherExpenses = Array(3).fill({ label: 'Other Expenses', amount: 0, trend: 'down' });

  return (
    <Card elevation={0} sx={{ backgroundColor: '#f2f5f6', py: 0, boxShadow: 'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px' }}>
      <CardContent sx={{ py: 2, px: 2 }}>
        <Box mb={4} mt={3}  display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography mb={2} variant="h4">
            Opex Breakdown
          </Typography>
          <Chip alignItems="right" label={selectedState || "All state"} size="small" />
        </Box>

        <Stack spacing={2} justifyContent="space-between" direction="row" divider={<Divider sx={{ borderColor: "#959697" }} orientation="vertical" flexItem />} alignItems="center">
          {aggregatedExpenses.slice(0, 5).map((expense, index) => (
            <Box key={index} sx={{ textAlign: 'center', width: '20%' }}>
              <Typography variant="h2" whiteSpace="nowrap">
                {formatAmount(expense.amount)} <span>{expense.trend === 'up' ? <IconArrowUpRight width={18} color="#39B69A" /> : <IconArrowDownLeft width={18} color="#b63939" />}</span>
              </Typography>
              <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">{expense.label}</Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ borderColor: "#cdd2da", marginTop: "20px", marginBottom: "20px" }} orientation="horizontal" flexItem />

        <Stack spacing={2} justifyContent="space-between" direction="row" divider={<Divider sx={{ borderColor: "#959697" }} orientation="vertical" flexItem />} alignItems="center">
          {aggregatedExpenses.slice(5).concat(otherExpenses).map((expense, index) => (
            <Box key={index} sx={{ textAlign: 'center', width: '20%' }}>
              <Typography variant="h2" whiteSpace="nowrap">
                {formatAmount(expense.amount)} <span>{expense.trend === 'up' ? <IconArrowUpRight width={18} color="#39B69A" /> : <IconArrowDownLeft width={18} color="#b63939" />}</span>
              </Typography>
              <Typography mt={2} variant="subtitle1" whiteSpace="nowrap">{expense.label}</Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OpexBreakdownFinancialBS;
