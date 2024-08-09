import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import StateMapBoxDataCards from './statemapbox-datacards-bbd';
import { FinancialDataBusinessDistrict } from "./dataroom-commercial-by-bd/dataroom-commercial-bbd";

mapboxgl.accessToken = 'pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g';

const StateMapboxCommercialBBD = ({ selectedBusinessDistrict, onBusinessDistrictClick }) => {
  const [selectedDistrictData, setSelectedDistrictData] = useState(null);
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const longitude = 8.582;
  const latitude = 12.075;

  useEffect(() => {
    if (!mapRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/dvo-regis/clyssb5i7002301pc2fajh6kt',
        center: [longitude, latitude],
        zoom: 6.6
      });

      mapRef.current = map;

      map.on('load', () => {
        map.addSource('states', {
          type: 'geojson',
          data: '/assets/map-data/KEDCBUSINESSDISTRICTS.geojson'
        });

        map.addLayer({
          id: 'states-layer',
          type: 'fill',
          source: 'states',
          paint: {
            'fill-color': '#888888',
            'fill-opacity': 0.5
          }
        });

        map.on('click', 'states-layer', (e) => {
          if (e.features.length > 0) {
            const feature = e.features[0];
            const selectedPcod = feature.properties.BusinessDistrict1Pcod;

            if (selectedPcod) {
              const data = FinancialDataBusinessDistrict[selectedPcod] || {
                name: 'Unknown',
                energyDelivered: [0, 0, 0, 0],
                energyBilled: [0, 0, 0, 0],
                energyCollected: [0, 0, 0, 0],
                ATCC: [0, 0, 0, 0],
                billingEfficiency: [0, 0, 0, 0],
                collectionEfficiency: [0, 0, 0, 0]
              };
              setSelectedDistrictData(data);
              onBusinessDistrictClick(data.name);

              map.setPaintProperty('states-layer', 'fill-color', [
                'case',
                ['==', ['get', 'BusinessDistrict1Pcod'], selectedPcod],
                primary,
                '#888888'
              ]);
            } else {
              console.error('Selected property code is undefined');
            }
          }
        });

        map.on('mouseenter', 'states-layer', () => {
          map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'states-layer', () => {
          map.getCanvas().style.cursor = '';
        });
      });
    }

    return () => {};
  }, [theme, primary, onBusinessDistrictClick]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;

    const updateMapLayer = () => {
      const selectedPcod = Object.keys(FinancialDataBusinessDistrict).find(key => FinancialDataBusinessDistrict[key].name === selectedBusinessDistrict);

      if (selectedPcod) {
        map.setPaintProperty('states-layer', 'fill-color', [
          'case',
          ['==', ['get', 'BusinessDistrict1Pcod'], selectedPcod],
          primary,
          '#888888'
        ]);
      } else {
        map.setPaintProperty('states-layer', 'fill-color', '#888888');
      }
    };

    if (map.isStyleLoaded()) {
      updateMapLayer();
    } else {
      map.once('styledata', updateMapLayer);
    }
  }, [selectedBusinessDistrict, primary]);

  useEffect(() => {
    if (selectedBusinessDistrict) {
      const districtData = Object.values(FinancialDataBusinessDistrict).find(district => district.name === selectedBusinessDistrict);
      setSelectedDistrictData(districtData);
    } else {
      setSelectedDistrictData(null);
    }
  }, [selectedBusinessDistrict]);

  return (
    <DashboardCard title="Financial Breakdown By Business District" subtitle="Select a business district">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="rounded-bars" bgcolor='#f7f8f9' height={350} ref={mapContainerRef} />
        </Grid>
        {selectedDistrictData && (
          <>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Energy Delivered"
                value={`${selectedDistrictData.energyDelivered[selectedDistrictData.energyDelivered.length - 1]} GWh`}
                chartData={selectedDistrictData.energyDelivered}
                unit="GWh"
                businessDistrictName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Energy Billed"
                value={`${selectedDistrictData.energyBilled[selectedDistrictData.energyBilled.length - 1]} GWh`}
                chartData={selectedDistrictData.energyBilled}
                unit="GWh"
                businessDistrictName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Energy Collected"
                value={`${selectedDistrictData.energyCollected[selectedDistrictData.energyCollected.length - 1]} GWh`}
                chartData={selectedDistrictData.energyCollected}
                unit="GWh"
                businessDistrictName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="ATCC"
                value={`${selectedDistrictData.ATCC[selectedDistrictData.ATCC.length - 1]}%`}
                chartData={selectedDistrictData.ATCC}
                unit="%"
                businessDistrictName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Billing Efficiency"
                value={`${selectedDistrictData.billingEfficiency[selectedDistrictData.billingEfficiency.length - 1]}%`}
                chartData={selectedDistrictData.billingEfficiency}
                unit="%"
                businessDistrictName={selectedDistrictData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Collection Efficiency"
                value={`${selectedDistrictData.collectionEfficiency[selectedDistrictData.collectionEfficiency.length - 1]}%`}
                chartData={selectedDistrictData.collectionEfficiency}
                unit="%"
                businessDistrictName={selectedDistrictData.name}
              />
            </Grid>
          </>
        )}
      </Grid>
    </DashboardCard>
  );
};

export default StateMapboxCommercialBBD;
