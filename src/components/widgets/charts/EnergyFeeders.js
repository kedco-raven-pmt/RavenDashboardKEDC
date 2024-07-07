import React, { useState, useMemo } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardContent, Typography, Stack, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const EnergyFeeders = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const tertiary = theme.palette.error.main;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const [activeFilter, setActiveFilter] = useState('all');
  const [stateFilter, setStateFilter] = useState('All');
  const [districtFilter, setDistrictFilter] = useState('All');

  const feederData = [
    { name: '11KV Dr Bala', type: '11' },
{ name: '33KV CBN Lineload', type: '33' },
{ name: '11KV Ahmadu Bello', type: '11' },
{ name: '11KV Bank Road', type: '11' },
{ name: '11KV Audu Bako', type: '11' },
{ name: '11KV Badawa', type: '11' },
{ name: '11KV Race Course', type: '11' },
{ name: '11KV Noman\'S Land', type: '11' },
{ name: '11KV Fanisau', type: '11' },
{ name: '33KV Briscoe Lineload', type: '33' },
{ name: '11KV Bompai', type: '11' },
{ name: '11KV Maimalari', type: '11' },
{ name: '11KV Independence', type: '11' },
{ name: '11KV Yusuf', type: '11' },
{ name: '11KV Gwagwarwa', type: '11' },
{ name: '11KV T/Wada', type: '11' },
{ name: '33KV Club F3 (Flour Mills) Lineload', type: '33' },
{ name: '11KV Murtala Mohd', type: '11' },
{ name: '11KV Lamido', type: '11' },
{ name: '33KV IDH Lineload', type: '33' },
{ name: '11KV Airport Road', type: '11' },
{ name: '11KV Sabon Gari', type: '11' },
{ name: '11KV Abuja', type: '11' },
{ name: '11KV Kaura Goje', type: '11' },
{ name: '11KV Tudun Murtala', type: '11' },
{ name: '11KV Rimin Kebe', type: '11' },
{ name: '11KV Kabuga(22%)', type: '11' },
{ name: '33KV BUK Lineload', type: '33' },
{ name: '11KV Aminu Kano', type: '11' },
{ name: '11KV Jakara', type: '11' },
{ name: '11KV Sani Mainagge', type: '11' },
{ name: '11KV Bello Dandago', type: '11' },
{ name: '33KV Kurna Lineload', type: '33' },
{ name: '11KV Fed.Sec', type: '11' },
{ name: '11KV Bachirawa', type: '11' },
{ name: '11KV Orthorpaedic', type: '11' },
{ name: '11KV Sagagi', type: '11' },
{ name: '33KV Dawanau', type: '33' },
{ name: '11KV Ibrahim Taiwo', type: '11' },
{ name: '11KV City', type: '11' },
{ name: '11KV K/Naisa', type: '11' },
{ name: '11KV K/Nassarawa', type: '11' },
{ name: '11KV Fagge', type: '11' },
{ name: '11KV Gwammaja', type: '11' },
{ name: '11KV Koki (Katsina Road)', type: '11' },
{ name: '11KV Newsite', type: '11' },
{ name: '33KV Rijiyar Zaki Lineload', type: '33' },
{ name: '11KV Gwarzo Road', type: '11' },
{ name: '33KV Hon Abubakar Kabir Lineload', type: '33' },
{ name: '33KV Gaskiya Lineload', type: '33' },
{ name: '11KV Yankaba', type: '11' },
{ name: '11KV Dakata', type: '11' },
{ name: '33KV Lineload (New Gezawa)', type: '33' },
{ name: '11KV Tokarawa', type: '11' },
{ name: '11KV Tsamiya', type: '11' },
{ name: '33KV Zaria Rd (NNPC) Lineload', type: '33' },
{ name: '11KV Talamiz', type: '11' },
{ name: '11KV Danladi Nasidi', type: '11' },
{ name: '11KV Farawa', type: '11' },
{ name: '11KV Maiduguri Road', type: '11' },
{ name: '33KV Makole', type: '33' },
{ name: '33KV Gano', type: '33' },
{ name: '11KV Tarauni', type: '11' },
{ name: '11KV Hotoro', type: '11' },
{ name: '11KV Kundila', type: '11' },
{ name: '11KV U/Uku', type: '11' },
{ name: '11KV KUT', type: '11' },
{ name: '33KV Wudil Line Load (KUT)', type: '33' },
{ name: '11KV Makama', type: '11' },
{ name: '33KV Wudil Lineload (Gaya Leg)', type: '33' },
{ name: '33KV Joda', type: '33' },
{ name: '33KV Garko', type: '33' },
{ name: '11KV Ajasa', type: '11' },
{ name: '33KV Zaria Road Lineload', type: '33' },
{ name: '11KV Hausawa', type: '11' },
{ name: '11KV Karkasara', type: '11' },
{ name: '11KV Marhaba', type: '11' },
{ name: '11KV Sallari', type: '11' },
{ name: '33KV Angel Spinners', type: '33' },
{ name: '11KV Ceramic', type: '11' },
{ name: '11KV NBC', type: '11' },
{ name: '11KV Dala Foods', type: '11' },
{ name: '11KV Housing Estate', type: '11' },
{ name: '11KV NNDC', type: '11' },
{ name: '11KV Chiranci', type: '11' },
{ name: '11KV Mundadu', type: '11' },
{ name: '11KV Jaen', type: '11' },
{ name: '11KV Sharada Industrial', type: '11' },
{ name: '11KV Tukuntawa', type: '11' },
{ name: '33KV Sharada 2 (Dangote)', type: '33' },
{ name: '33KV Spannish 1', type: '33' },
{ name: '33KV Mamuda', type: '33' },
{ name: '33KV Spannish 2', type: '33' },
{ name: '33KV Coca Cola', type: '33' },
{ name: '33KV Falgore', type: '33' },
{ name: '33KV K/Kwaso', type: '33' },
{ name: '33KV Karaye', type: '33' },
{ name: '11KV Campus', type: '11' },
{ name: '11KV Tiga', type: '11' },
{ name: '33KV L/ School Lineload', type: '33' },
{ name: '11KV Masarauta', type: '11' },
{ name: '11KV Yanlemo', type: '11' },
{ name: '33KV Bagauda Lineload', type: '33' },
{ name: '11KV W/Works', type: '11' },
{ name: '11KV Panshekara', type: '11' },
{ name: '11KV Zawachiki', type: '11' },
{ name: '11KV Tamburawa W/Works', type: '11' },
{ name: '33KV Dr. Jamil Gwamna (Tamburawa Line Load)', type: '33' },
{ name: '33KV D/Ma F4', type: '33' },
{ name: '33KV Ampri Global', type: '33' },
{ name: '33KV Danbatta (Kazaure F1)', type: '33' },
{ name: '11KV Dan Tunku', type: '11' },
{ name: '11KV Kanti', type: '11' },
{ name: '11KV Kofar Fada', type: '11' },
{ name: '11KV Matazu', type: '11' },
{ name: '33KV Musawa Line Load', type: '33' },
{ name: '11KV Bichi', type: '11' },
{ name: '33KV Watari W/Works', type: '33' },
{ name: '11KV Apex', type: '11' },
{ name: '33KV Ajiwa W/W Lineload', type: '33' },
{ name: '11KV Hassan Usman Rd', type: '11' },
{ name: '11KV Nagoggo', type: '11' },
{ name: '11KV Kadarko', type: '11' },
{ name: '33KV Dana', type: '33' },
{ name: '33KV Kaita Lineload', type: '33' },
{ name: '11KV Muhd Dikko', type: '11' },
{ name: '11KV Dandagoro', type: '11' },
{ name: '11KV GRA(Katsina)', type: '11' },
{ name: '11KV Kano Road', type: '11' },
{ name: '11KV Lowcost', type: '11' },
{ name: '11KV Army Barracks', type: '11' },
{ name: '11KV K/Marusa', type: '11' },
{ name: '33KV K/Guga Lineload', type: '33' },
{ name: '11KV FMC', type: '11' },
{ name: '11KV D/Safe', type: '11' },
{ name: '11KV Natsinta', type: '11' },
{ name: '11KV Hospital Road', type: '11' },
{ name: '33KV Poly', type: '33' },
{ name: '11KV Bayajida', type: '11' },
{ name: '11KV Rijma Rice', type: '11' },
{ name: '11KV Daurama', type: '11' },
{ name: '33KV Mashi', type: '33' },
{ name: '33KV Mai Adua', type: '33' },
{ name: '33KV Dandume', type: '33' },
{ name: '11KV BCGA', type: '11' },
{ name: '11KV Galadima', type: '11' },
{ name: '33KV M/Fashi', type: '33' },
{ name: '33KV Faskari', type: '33' },
{ name: '11KV Textile', type: '11' },
{ name: '11KV W/Works (Funtua)', type: '11' },
{ name: '11KV Nakowa', type: '11' },
{ name: '11KV Mairuwa', type: '11' },
{ name: '11KV Industrial (Funtua)', type: '11' },
{ name: '11KV Jabiri', type: '11' },
{ name: '11KV D/Reme', type: '11' },
{ name: '11KV Town', type: '11' },
{ name: '33KV Gumel Line Load', type: '33' },
{ name: '11KV Makwalla', type: '11' },
{ name: '33KV Rice Mill', type: '33' },
{ name: '11KV Lautai', type: '11' },
{ name: '33KV Gumel/Gagarawa Line Load', type: '33' },
{ name: '33KV Hadejia Line Load', type: '33' },
{ name: '11KV Maje', type: '11' },
{ name: '11KV Shagari', type: '11' },
{ name: '33KV K/Hausa Line Load', type: '33' },
{ name: '11KV Fantai', type: '11' },
{ name: '11KV Jama\'Are', type: '11' },
{ name: '33KV Lamido University', type: '33' },
{ name: '33KV Birniwa', type: '33' },
{ name: '11KV Majestic', type: '11' },
{ name: '33KV B/Kudu Lineload', type: '33' },
{ name: '11KV School Of Nursing', type: '11' },
{ name: '33KV Dutse Lineload', type: '33' },
{ name: '11KV Sani Abacha', type: '11' },
{ name: '11KV Govt House (Sule Lamido)', type: '11' },
{ name: '11KV Garu', type: '11' },
{ name: '11KV Limawa', type: '11' },
{ name: '11KV Takur', type: '11' },
{ name: '33KV Sumaila', type: '33' },
{ name: '33KV Gujungu', type: '33' },
{ name: '33KV Jahun', type: '33' }

    // ... Add all 181 feeders here with their respective states and districts
  ];

  const filteredFeeders = useMemo(() => {
    return feederData.filter(feeder => 
      (activeFilter === 'all' || feeder.type === activeFilter) &&
      (stateFilter === 'All' || feeder.state === stateFilter) &&
      (districtFilter === 'All' || feeder.district === districtFilter)
    );
  }, [activeFilter, stateFilter, districtFilter]);

  const optionsComboChart = {
    chart: {
      type: 'line',
      stacked: false,
      height: 500,
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: textColor,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    colors: [primary, secondary, tertiary, '#FFA500'],
    stroke: {
      width: [1, 1, 1, 4],
      curve: 'smooth',
    },
    xaxis: {
      categories: filteredFeeders.map(feeder => feeder.name),
      labels: {
        style: {
          colors: textColor,
          fontsize: '10px',
        },
        rotateAlways: true,
        rotate: -45,
        trim: false,
      },
      tickPlacement: 'on',
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: primary,
        },
        labels: {
          style: {
            colors: primary,
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FFA500',
        },
        labels: {
          style: {
            colors: '#FFA500',
          },
        },
      },
    ],
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      shared: true,
      intersect: false,
      y: {
        formatter: function (y, { seriesIndex }) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + (seriesIndex === 3 ? "%" : " GWh");
          }
          return y;
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '50%',
      },
    },
  };

  const seriesComboChart = [
    {
      name: 'Energy Delivered',
      type: 'column',
      data: filteredFeeders.map(() => Math.floor(Math.random() * (20 - 15 + 1) + 15)),
    },
    {
      name: 'Energy Billed',
      type: 'column',
      data: filteredFeeders.map(() => Math.floor(Math.random() * (13 - 8 + 1) + 8)),
    },
    {
      name: 'Energy Collected',
      type: 'column',
      data: filteredFeeders.map(() => Math.floor(Math.random() * (5 - 1 + 1) + 1)),
    },
    {
      name: 'ATCC',
      type: 'line',
      data: filteredFeeders.map(() => Math.floor(Math.random() * (78 - 50 + 1) + 50)),
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="flex-start" flexWrap="wrap">
          <Stack spacing={2} direction="row" flexWrap="wrap">
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>State</InputLabel>
              <Select
                value={stateFilter}
                label="State"
                onChange={(e) => setStateFilter(e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Kano">Kano</MenuItem>
                <MenuItem value="Katsina">Katsina</MenuItem>
                <MenuItem value="Jigawa">Jigawa</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Business District</InputLabel>
              <Select
                value={districtFilter}
                label="Business District"
                onChange={(e) => setDistrictFilter(e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Kano Industrial">Kano Industrial</MenuItem>
                <MenuItem value="Kano Central">Kano Central</MenuItem>
                <MenuItem value="Katsina North">Katsina North</MenuItem>
                <MenuItem value="Kano North">Kano North</MenuItem>
                <MenuItem value="Kano East">Kano East</MenuItem>
                <MenuItem value="Kano West">Kano West</MenuItem>
                <MenuItem value="Katsina South">Katsina South</MenuItem>
                <MenuItem value="Jigawa South">Jigawa South</MenuItem>
                <MenuItem value="Jigawa North">Jigawa North</MenuItem>
              </Select>
            </FormControl>
            <Button 
              color="primary" 
              variant={activeFilter === '11' ? "contained" : "outlined"}
              onClick={() => handleFilterClick('11')}
            >
              11
            </Button>
            <Button 
              color="primary" 
              variant={activeFilter === '33' ? "contained" : "outlined"}
              onClick={() => handleFilterClick('33')}
            >
              33
            </Button>
            <Button 
              color="primary" 
              variant={activeFilter === 'all' ? "contained" : "outlined"}
              onClick={() => handleFilterClick('all')}
            >
              All
            </Button>
          </Stack>
        </Stack>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Feeders
        </Typography>

        <Box mt={4} sx={{ overflowX: 'auto' }}>
          <Box sx={{ minWidth: `${filteredFeeders.length * 50}px`, maxWidth: '100%' }}>
            <Chart
              options={optionsComboChart}
              series={seriesComboChart}
              type="line"
              height="500px"
            />
          </Box>
        </Box>
      </CardContent>
    </BlankCard>
  );
};

export default EnergyFeeders;
