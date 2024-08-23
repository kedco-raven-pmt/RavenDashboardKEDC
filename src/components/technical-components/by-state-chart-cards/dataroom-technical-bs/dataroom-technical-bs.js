// Technical data for Mapbox
export const TechnicalDataMapbox = {
  NG018: {
    name: 'Jigawa',
    avgSupplyHours: [10, 12, 14, 16],
    durationInterruptions: [2, 3, 4, 5],
    turnaroundTime: [5, 6, 7, 8],
    dailyInterruptions: [12, 14, 16, 18],
    energy: [74, 78, 70, 82],
    feeders: [21, 21, 21, 21],
  },
  NG020: {
    name: 'Kano',
    avgSupplyHours: [20, 22, 24, 26],
    durationInterruptions: [3, 4, 5, 6],
    turnaroundTime: [7, 8, 9, 10],
    dailyInterruptions: [16, 18, 20, 22],
    energy: [150, 210, 220, 230],
    feeders: [90, 96, 96, 100],
  },
  NG021: {
    name: 'Katsina',
    avgSupplyHours: [15, 17, 19, 21],
    durationInterruptions: [4, 5, 6, 7],
    turnaroundTime: [8, 9, 10, 11],
    dailyInterruptions: [14, 16, 18, 20],
    energy: [120, 130, 110, 150],
    feeders: [60, 60, 62, 64],
  },
};

// dataroom-technical-by-state.js
export const TechnicalLoadData = {
  NG018: {
    name: 'Jigawa',
    feeders: [
      { name: '11KV Dr Bala', loadreading: [1.5, 2.7, 3.2, 4.0] },
      { name: '33KV CBN Lineload', loadreading: [0.8, 1.1, 2.5, 2.0] },
      { name: '11KV Ahmadu Bello', loadreading: [2.2, 3.5, 3.8, 4.2] },
      { name: '11KV Bank Road', loadreading: [1.0, 1.5, 2.0, 2.5] },
      { name: '11KV Audu Bako', loadreading: [0.6, 1.0, 1.5, 1.8] },
    ],
  },
  NG020: {
    name: 'Kano',
    feeders: [
      { name: '11KV Dr Bala', loadreading: [2.5, 3.7, 4.2, 5.0] },
      { name: '33KV CBN Lineload', loadreading: [1.8, 2.1, 3.5, 3.0] },
      { name: '11KV Ahmadu Bello', loadreading: [3.2, 4.5, 4.8, 5.2] },
      { name: '11KV Bank Road', loadreading: [2.0, 2.5, 3.0, 3.5] },
      { name: '11KV Audu Bako', loadreading: [1.6, 2.0, 2.5, 2.8] },
    ],
  },
  NG021: {
    name: 'Katsina',
    feeders: [
      { name: '11KV Dr Bala', loadreading: [1.2, 1.7, 2.2, 2.5] },
      { name: '33KV CBN Lineload', loadreading: [0.5, 0.8, 1.0, 1.2] },
      { name: '11KV Ahmadu Bello', loadreading: [2.0, 2.5, 3.0, 3.2] },
      { name: '11KV Bank Road', loadreading: [1.5, 1.8, 2.0, 2.2] },
      { name: '11KV Audu Bako', loadreading: [0.8, 1.0, 1.2, 1.5] },
    ],
  },
};
