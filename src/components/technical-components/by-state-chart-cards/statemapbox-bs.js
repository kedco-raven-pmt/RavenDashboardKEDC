import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';
import 'mapbox-gl/dist/mapbox-gl.css';
import StateMapBoxDataCards from './statemapbox-datacards-bs';
import { TechnicalDataMapbox } from "./dataroom-technical-bs/dataroom-technical-bs";

mapboxgl.accessToken = 'pk.eyJ1IjoiZHZvLXJlZ2lzIiwiYSI6ImNseXNsdzYzZTBsMTYycnM2bXY5dDh2M2sifQ.w7XKnvlxVxtWiYIFEVbz2g';

const StateMapboxTechnicalBS = ({ selectedState, onStateClick }) => {
  const [selectedStateData, setSelectedStateData] = useState(null);
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const longitude = 8.582;
  const latitude = 12.075;

  useEffect(() => {
    if (!mapRef.current) {
      console.log('Initializing map...');
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [longitude, latitude],
        zoom: 6.6
      });

      mapRef.current = map;

      map.on('load', () => {
        console.log('Map loaded');
        map.addSource('states', {
          type: 'geojson',
          data: '/assets/map-data/KEDC.geojson'
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
          console.log('Map clicked', e);
          if (e.features.length > 0) {
            const feature = e.features[0];
            const selectedPcod = feature.properties.admin1Pcod;
            console.log('Selected feature', feature);

            if (selectedPcod) {
              const data = TechnicalDataMapbox[selectedPcod] || { name: 'Unknown', avgSupplyHours: [0, 0, 0, 0], durationInterruptions: [0, 0, 0, 0], turnaroundTime: [0, 0, 0, 0], dailyInterruptions: [0, 0, 0, 0], faults: [0, 0, 0, 0], feeders: [0, 0, 0, 0] };
              setSelectedStateData(data);
              onStateClick(data.name);

              // Update fill color immediately
              map.setPaintProperty('states-layer', 'fill-color', [
                'case',
                ['==', ['get', 'admin1Pcod'], selectedPcod],
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

    return () => {
      console.log('Cleaning up map initialization effect');
    };
  }, [theme, primary, onStateClick]);

  useEffect(() => {
    if (!mapRef.current) return;

    console.log('Updating map layer for selectedState:', selectedState);
    const map = mapRef.current;

    const updateMapLayer = () => {
      const selectedPcod = Object.keys(TechnicalDataMapbox).find(key => TechnicalDataMapbox[key].name === selectedState);

      if (selectedPcod) {
        console.log('Setting fill color for selectedPcod:', selectedPcod);
        map.setPaintProperty('states-layer', 'fill-color', [
          'case',
          ['==', ['get', 'admin1Pcod'], selectedPcod],
          primary,
          '#888888'
        ]);
      } else {
        console.log('Resetting fill color');
        map.setPaintProperty('states-layer', 'fill-color', '#888888');
      }
    };

    if (map.isStyleLoaded()) {
      updateMapLayer();
    } else {
      map.once('styledata', updateMapLayer);
    }
  }, [selectedState, primary]);

  useEffect(() => {
    console.log('Selected state changed:', selectedState);
    if (selectedState) {
      const stateData = Object.values(TechnicalDataMapbox).find(state => state.name === selectedState);
      setSelectedStateData(stateData);
      console.log('State data:', stateData);
    } else {
      setSelectedStateData(null);
    }
  }, [selectedState]);

  return (
    <DashboardCard title="Technical Breakdown By State" subtitle="Select a state">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box className="rounded-bars" bgcolor='#f7f8f9' height={350} ref={mapContainerRef} />
        </Grid>
        {selectedStateData && (
          <>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Average Supply Hours"
                value={`${selectedStateData.avgSupplyHours[selectedStateData.avgSupplyHours.length - 1].toFixed(2)} Hrs`}
                chartData={selectedStateData.avgSupplyHours}
                stateName={selectedStateData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Duration of Interruptions"
                value={`${selectedStateData.durationInterruptions[selectedStateData.durationInterruptions.length - 1].toFixed(2)} Hrs`}
                chartData={selectedStateData.durationInterruptions}
                stateName={selectedStateData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Turnaround Time"
                value={`${selectedStateData.turnaroundTime[selectedStateData.turnaroundTime.length - 1].toFixed(2)} Hrs`}
                chartData={selectedStateData.turnaroundTime}
                stateName={selectedStateData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Daily Interruptions"
                value={`${selectedStateData.dailyInterruptions[selectedStateData.dailyInterruptions.length - 1]} Times`}
                chartData={selectedStateData.dailyInterruptions}
                stateName={selectedStateData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Faults"
                value={`${selectedStateData.faults[selectedStateData.faults.length - 1].toLocaleString()}`}
                chartData={selectedStateData.faults}
                stateName={selectedStateData.name}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StateMapBoxDataCards
                title="Feeders"
                value={`${selectedStateData.feeders[selectedStateData.feeders.length - 1]}`}
                chartData={selectedStateData.feeders}
                stateName={selectedStateData.name}
              />
            </Grid>
          </>
        )}
      </Grid>
    </DashboardCard>
  );
};

export default StateMapboxTechnicalBS;
