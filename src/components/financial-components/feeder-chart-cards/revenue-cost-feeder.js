import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Grid, Typography, Stack, Avatar, ButtonGroup } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const RevenueCostFinancialFeeder = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const FeederChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: "100%",
    },
    colors: ['#3B80B2', '#599BC8', '#77ADD2', '#97BEDC', '#B3CEE6'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: val => "₦" + val + "B",
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: false },
    grid: { show: false },
    xaxis: {
      categories: [['Total Cost'], ['Revenue Billed'], ['Collections']],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: val => val + "bn",
      },
    },
    tooltip: { theme: theme.palette.mode === 'dark' ? 'dark' : 'light' },
  };

  const FeederSeries = [
    { name: '', data: [42, 62, 38] },
    { name: '', data: [21, 32, 12] },
    { name: '', data: [14, 26, 20] },
    { name: '', data: [14, 26, 20] },
    { name: '', data: [14, 26, 20] },
    { name: '', data: [14, 26, 20] },
    { name: '', data: [14, 26, 20] },
    { name: '', data: [14, 26, 20] },
    { name: '', data: [14, 26, 20] },
    { name: '', data: [14, 26, 20] },
  ];

  const feeders = [
    { name: "11KV Dr Bala", series: FeederSeries[0], id: "01" },
    { name: "33KV CBN Lineload", series: FeederSeries[1], id: "02" },
    { name: "11KV Ahmadu Bello", series: FeederSeries[2], id: "03" },
    { name: "11KV Bank Road", series: FeederSeries[3], id: "04" },
    { name: "11KV Audu Bako", series: FeederSeries[4], id: "05" },
    { name: "11KV Badawa", series: FeederSeries[5], id: "06" },
    { name: "11KV Race Course", series: FeederSeries[6], id: "07" },
    { name: "11KV Noman'S Land", series: FeederSeries[7], id: "08" },
    { name: "11KV Fanisau", series: FeederSeries[8], id: "09" },
    { name: "33KV Briscoe Lineload", series: FeederSeries[9], id: "10" },

    { name: "11KV Bompai", series: FeederSeries[0], id: "11" },
    { name: "11KV Maimalari", series: FeederSeries[1], id: "12" },
    { name: "11KV Independence", series: FeederSeries[2], id: "13" },
    { name: "11KV Yusuf", series: FeederSeries[3], id: "14" },
    { name: "11KV Gwagwarwa", series: FeederSeries[4], id: "15" },
    { name: "11KV T/Wada", series: FeederSeries[5], id: "16" },
    { name: "33KV Club F3 (Flour Mills) Lineload", series: FeederSeries[6], id: "17" },
    { name: "11KV Murtala Mohd", series: FeederSeries[7], id: "18" },
    { name: "11KV Lamido", series: FeederSeries[8], id: "19" },
    { name: "33KV IDH Lineload", series: FeederSeries[9], id: "20" },

    { name: "11KV Airport Road", series: FeederSeries[0], id: "21" },
    { name: "11KV Sabon Gari", series: FeederSeries[1], id: "22" },
    { name: "11KV Abuja", series: FeederSeries[2], id: "23" },
    { name: "11KV Kaura Goje", series: FeederSeries[3], id: "24" },
    { name: "11KV Tudun Murtala", series: FeederSeries[4], id: "25" },
    { name: "11KV Rimin Kebe", series: FeederSeries[5], id: "26" },
    { name: "11KV Kabuga(22%)", series: FeederSeries[6], id: "27" },
    { name: "33KV BUK Lineload", series: FeederSeries[7], id: "28" },
    { name: "11KV Aminu Kano", series: FeederSeries[8], id: "29" },
    { name: "11KV Jakara", series: FeederSeries[9], id: "30" },

    { name: "11KV Sani Mainagge", series: FeederSeries[0], id: "31" },
    { name: "11KV Bello Dandago", series: FeederSeries[1], id: "32" },
    { name: "33KV Kurna Lineload", series: FeederSeries[2], id: "33" },
    { name: "11KV Fed.Sec", series: FeederSeries[3], id: "34" },
    { name: "11KV Bachirawa", series: FeederSeries[4], id: "35" },
    { name: "11KV Orthorpaedic", series: FeederSeries[5], id: "36" },
    { name: "11KV Fanisau", series: FeederSeries[6], id: "37" },
    { name: "11KV Sagagi", series: FeederSeries[7], id: "38" },
    { name: "33KV Dawanau", series: FeederSeries[8], id: "39" },
    { name: "11KV Ibrahim Taiwo", series: FeederSeries[9], id: "40" },

    { name: "11KV City", series: FeederSeries[0], id: "41" },
    { name: "11KV K/Naisa", series: FeederSeries[1], id: "42" },
    { name: "11KV K/Nassarawa", series: FeederSeries[2], id: "43" },
    { name: "11KV Fagge", series: FeederSeries[3], id: "44" },
    { name: "11KV Gwammaja", series: FeederSeries[4], id: "45" },
    { name: "11KV Koki (Katsina Road)", series: FeederSeries[5], id: "46" },
    { name: "11KV Newsite", series: FeederSeries[6], id: "47" },
    { name: "33KV Rijiyar Zaki Lineload", series: FeederSeries[7], id: "48" },
    { name: "11KV Gwarzo Road", series: FeederSeries[8], id: "49" },
    { name: "33KV Hon Abubakar Kabir Lineload", series: FeederSeries[9], id: "50" },

    { name: "33KV Gaskiya Lineload", series: FeederSeries[0], id: "51" },
    { name: "11KV Yankaba", series: FeederSeries[1], id: "52" },
    { name: "11KV Dakata", series: FeederSeries[2], id: "53" },
    { name: "33KV Lineload (New Gezawa)", series: FeederSeries[3], id: "54" },
    { name: "11KV Tokarawa", series: FeederSeries[4], id: "55" },
    { name: "11KV Tsamiya", series: FeederSeries[5], id: "56" },
    { name: "33KV Zaria Rd (NNPC) Lineload", series: FeederSeries[6], id: "57" },
    { name: "11KV Talamiz", series: FeederSeries[7], id: "58" },
    { name: "11KV Danladi Nasidi", series: FeederSeries[8], id: "59" },
    { name: "11KV Farawa", series: FeederSeries[9], id: "60" },
  ];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>All</Button>
            <Button>Kano</Button>
            <Button>Katsina</Button>
            <Button>Jigawa</Button>
          </ButtonGroup>
          <Stack direction="row" spacing={3}>
            {['Total Cost', 'Revenue Billed', 'Collections'].map((label, index) => (
              <Stack direction="row" alignItems="center" spacing={1} key={index}>
                <Avatar
                  sx={{ width: 9, height: 9, bgcolor: FeederChartOptions.colors[index], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="subtitle2" fontSize="12px" fontWeight={700} color="textSecondary">
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          {feeders.map((feeders, index) => (
            <Grid item xs={12} sm={2.4} key={index}>
              <BlankCard>
                <CardContent sx={{ p: '20px' }}>
                  <Box>
                    <Chart
                      options={FeederChartOptions}
                      series={[feeders.series]}
                      type="bar"
                      height="220px"
                    />
                  </Box>
                  <Stack direction="row" spacing={1} mt={1} alignItems="center" justifyContent="space-between">
                    <Typography variant="h10" fontSize="11px" fontWeight={600} textAlign="center" mb={1}>
                      {feeders.name}
                    </Typography>
                    <Avatar sx={{ bgcolor: '#f7f8f9', width: 30, height: 30 }}>
                      <Typography variant="subtitle1" fontSize="10px"   color="#000">
                        {feeders.id}
                      </Typography>
                    </Avatar>
                  </Stack>
                </CardContent>
              </BlankCard>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default RevenueCostFinancialFeeder;
