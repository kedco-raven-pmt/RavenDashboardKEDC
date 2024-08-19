// Financial data for Opex
export const FinancialDataOpex = {
    'NG018': {
      name: 'Jigawa',
      expenses: [
        { label: 'Administrative Expenses', amount: 150000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 5700000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 750000000, trend: 'up' },
        { label: 'General Repairs', amount: 405000000, trend: 'down' },
        { label: 'Salaries', amount: 600000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 1500000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 5700000000, trend: 'down' }
      ]
    },
    'NG020': {
      name: 'Kano',
      expenses: [
        { label: 'Administrative Expenses', amount: 2000000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 4700000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 850000000, trend: 'up' },
        { label: 'General Repairs', amount: 505000000, trend: 'down' },
        { label: 'Salaries', amount: 700000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 2000000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 4700000000, trend: 'down' }
      ]
    },
    'NG021': {
      name: 'Katsina',
      expenses: [
        { label: 'Administrative Expenses', amount: 1800000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 5500000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 900000000, trend: 'up' },
        { label: 'General Repairs', amount: 450000000, trend: 'down' },
        { label: 'Salaries', amount: 650000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 1800000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 5500000000, trend: 'down' }
      ]
    }
  };
  
  // Financial data for Mapbox
  export const FinancialDataMapbox = {
    'NG018': {
      name: 'Jigawa',
      revenueRequired: [6000000000, 6500000000, 7000000000, 7500000000],
      revenueBilled: [5500000000, 6000000000, 6500000000, 7600000000],
      collections: [4300000000, 4600000000, 4900000000, 5200000000],
      vendorCollections: [5, 7, 12, 16, 15, 10, 15]
    },
    'NG020': {
      name: 'Kano',
      revenueRequired: [5000000000, 5200000000, 5400000000, 5600000000],
      revenueBilled: [4800000000, 5000000000, 5200000000, 5400000000],
      collections: [3500000000, 3600000000, 3700000000, 3800000000],
      vendorCollections: [35, 27, 92, 65, 55, 20, 5]
    },
    'NG021': {
      name: 'Katsina',
      revenueRequired: [7000000000, 7300000000, 7600000000, 7900000000],
      revenueBilled: [6800000000, 7100000000, 7400000000, 7700000000],
      collections: [4500000000, 4700000000, 4900000000, 5100000000],
      vendorCollections: [15, 27, 22, 36, 15, 10, 25]
    }
  };
  
  // Tariff data
  export const tariffData = {
    'NG018': {
      name: 'Jigawa',
      tariffs: [56, 62, 48, 25],
      energyDelivered: 75  
    },
    'NG020': {
      name: 'Kano',
      tariffs: [60, 65, 50, 30],
      energyDelivered: 100  
    },
    'NG021': {
      name: 'Katsina',
      tariffs: [55, 60, 45, 20],
      energyDelivered: 50  
    }
  };
  
  // State cost data
  export const stateCostData = {
    'NG018': {
      name: 'Jigawa',
      costs: {
        'NBET Invoice': 4200000000,
        'MO Invoice': 6200000000,
        'Salaries': 3800000000,
        'Disco Opex': 500000000,
        'Others': 800000000
      }
    },
    'NG020': {
      name: 'Kano',
      costs: {
        'NBET Invoice': 5000000000,
        'MO Invoice': 7000000000,
        'Salaries': 4500000000,
        'Disco Opex': 600000000,
        'Others': 1000000000
      }
    },
    'NG021': {
      name: 'Katsina',
      costs: {
        'NBET Invoice': 3500000000,
        'MO Invoice': 5500000000,
        'Salaries': 3000000000,
        'Disco Opex': 400000000,
        'Others': 700000000
      }
    }
  };
  
  // Financial data for collections (Post-Paid and Pre-Paid)
export const collectionData = {
  'NG018': {
    name: 'Jigawa',
    dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), // Generating random data between 10 and 60
    dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
  },
  'NG020': {
    name: 'Kano',
    dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 70) + 20), // Generating random data between 20 and 90
    dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 70) + 20),
  },
  'NG021': {
    name: 'Katsina',
    dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 30) + 5), // Generating random data between 5 and 35
    dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 30) + 5),
  }
};
