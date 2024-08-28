// Financial data for Mapbox
export const FinancialDataMapbox = {
    'NG018': {
      name: 'Jigawa',
      revenueRequired: [6000000000, 6500000000, 7000000000, 7500000000],
      revenueBilled: [5500000000, 6000000000, 6500000000, 7600000000],
      collections: [4300000000, 4600000000, 4900000000, 5200000000]
    },
    'NG020': {
      name: 'Kano',
      revenueRequired: [5000000000, 5200000000, 5400000000, 5600000000],
      revenueBilled: [4800000000, 5000000000, 5200000000, 5400000000],
      collections: [3500000000, 3600000000, 3700000000, 3800000000]
    },
    'NG021': {
      name: 'Katsina',
      revenueRequired: [7000000000, 7300000000, 7600000000, 7900000000],
      revenueBilled: [6800000000, 7100000000, 7400000000, 7700000000],
      collections: [4500000000, 4700000000, 4900000000, 5100000000]
    }
  };
  
  // Financial data for Business Districts
  export const FinancialDataBusinessDistrict = {
    'NG018.1': {
        name: 'Jigawa North',
        revenueRequired: [3000000000, 3250000000, 3500000000, 3750000000],
        revenueBilled: [2750000000, 3000000000, 3250000000, 3800000000],
        collections: [2150000000, 2300000000, 2450000000, 2600000000],
        vendorCollections: {
            'BuyPower.ng': 10,
            'Banahim.net': 20,
            'Bank': 30,
            'Cash': 40,
            'POS': 10,
            'powershop.ng': 20,
            'Remita': 15
        }, 
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG018.2': {
        name: 'Jigawa South',
        revenueRequired: [3000000000, 3250000000, 3500000000, 3750000000],
        revenueBilled: [2750000000, 3000000000, 3250000000, 3800000000],
        collections: [2150000000, 2300000000, 2450000000, 2600000000],
        vendorCollections: {
            'BuyPower.ng': 15,
            'Banahim.net': 25,
            'Bank': 35,
            'Cash': 45,
            'POS': 15,
            'powershop.ng': 25,
            'Remita': 20
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG020.1': {
        name: 'Kano Central',
        revenueRequired: [1000000000, 1200000000, 1300000000, 1400000000],
        revenueBilled: [950000000, 1000000000, 1050000000, 1500000000],
        collections: [700000000, 730000000, 760000000, 790000000],
        vendorCollections: {
            'BuyPower.ng': 20,
            'Banahim.net': 30,
            'Bank': 40,
            'Cash': 50,
            'POS': 20,
            'powershop.ng': 30,
            'Remita': 25
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG020.2': {
        name: 'Kano South',
        revenueRequired: [1000000000, 1200000000, 1300000000, 1400000000],
        revenueBilled: [950000000, 1000000000, 1050000000, 1500000000],
        collections: [700000000, 730000000, 760000000, 790000000],
        vendorCollections: {
            'BuyPower.ng': 18,
            'Banahim.net': 28,
            'Bank': 38,
            'Cash': 48,
            'POS': 18,
            'powershop.ng': 28,
            'Remita': 23
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG020.3': {
        name: 'Kano North',
        revenueRequired: [1000000000, 1200000000, 1300000000, 1400000000],
        revenueBilled: [950000000, 1000000000, 1050000000, 1500000000],
        collections: [700000000, 730000000, 760000000, 790000000],
        vendorCollections: {
            'BuyPower.ng': 22,
            'Banahim.net': 32,
            'Bank': 42,
            'Cash': 52,
            'POS': 22,
            'powershop.ng': 32,
            'Remita': 27
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG020.4': {
        name: 'Kano Industrial',
        revenueRequired: [1000000000, 1200000000, 1300000000, 1400000000],
        revenueBilled: [950000000, 1000000000, 1050000000, 1500000000],
        collections: [700000000, 730000000, 760000000, 790000000],
        vendorCollections: {
            'BuyPower.ng': 25,
            'Banahim.net': 35,
            'Bank': 45,
            'Cash': 55,
            'POS': 25,
            'powershop.ng': 35,
            'Remita': 30
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG020.5': {
        name: 'Kano East',
        revenueRequired: [1000000000, 1200000000, 1300000000, 1400000000],
        revenueBilled: [950000000, 1000000000, 1050000000, 1500000000],
        collections: [700000000, 730000000, 760000000, 790000000],
        vendorCollections: {
            'BuyPower.ng': 19,
            'Banahim.net': 29,
            'Bank': 39,
            'Cash': 49,
            'POS': 19,
            'powershop.ng': 29,
            'Remita': 24
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG021.1': {
        name: 'Katsina South',
        revenueRequired: [2000000000, 2200000000, 2400000000, 2600000000],
        revenueBilled: [1800000000, 1900000000, 2000000000, 2700000000],
        collections: [1350000000, 1450000000, 1550000000, 1650000000],
        vendorCollections: {
            'BuyPower.ng': 14,
            'Banahim.net': 24,
            'Bank': 34,
            'Cash': 44,
            'POS': 14,
            'powershop.ng': 24,
            'Remita': 19
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG021.2': {
        name: 'Katsina Central',
        revenueRequired: [2000000000, 2200000000, 2400000000, 2600000000],
        revenueBilled: [1800000000, 1900000000, 2000000000, 2700000000],
        collections: [1350000000, 1450000000, 1550000000, 1650000000],
        vendorCollections: {
            'BuyPower.ng': 16,
            'Banahim.net': 26,
            'Bank': 36,
            'Cash': 46,
            'POS': 16,
            'powershop.ng': 26,
            'Remita': 21
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    },
    'NG021.3': {
        name: 'Katsina North',
        revenueRequired: [2000000000, 2200000000, 2400000000, 2600000000],
        revenueBilled: [1800000000, 1900000000, 2000000000, 2700000000],
        collections: [1350000000, 1450000000, 1550000000, 1650000000],
        vendorCollections: {
            'BuyPower.ng': 12,
            'Banahim.net': 22,
            'Bank': 32,
            'Cash': 42,
            'POS': 12,
            'powershop.ng': 22,
            'Remita': 17
        },
        dailyPostPaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10), 
        dailyPrePaidCollections: Array.from({ length: 31 }, () => Math.floor(Math.random() * 50) + 10),
    }
};

  
  export const FinancialDataOpex = {
    'NG018.1': { 
      name: 'Jigawa North', 
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
    'NG018.2': { 
      name: 'Jigawa South', 
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
    'NG020.1': { 
      name: 'Kano Central', 
      expenses: [
        { label: 'Administrative Expenses', amount: 1800000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 5500000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 900000000, trend: 'up' },
        { label: 'General Repairs', amount: 450000000, trend: 'down' },
        { label: 'Salaries', amount: 650000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 1800000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 5500000000, trend: 'down' }
      ]
    },
    'NG020.2': { 
      name: 'Kano South', 
      expenses: [
        { label: 'Administrative Expenses', amount: 1000000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 3000000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 450000000, trend: 'up' },
        { label: 'General Repairs', amount: 250000000, trend: 'down' },
        { label: 'Salaries', amount: 350000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 1000000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 3000000000, trend: 'down' }
      ]
    },
    'NG020.3': { 
      name: 'Kano North', 
      expenses: [
        { label: 'Administrative Expenses', amount: 2200000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 6000000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 950000000, trend: 'up' },
        { label: 'General Repairs', amount: 505000000, trend: 'down' },
        { label: 'Salaries', amount: 750000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 2000000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 6000000000, trend: 'down' }
      ]
    },
    'NG020.4': { 
      name: 'Kano Industrial', 
      expenses: [
        { label: 'Administrative Expenses', amount: 2500000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 7000000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 1000000000, trend: 'up' },
        { label: 'General Repairs', amount: 550000000, trend: 'down' },
        { label: 'Salaries', amount: 800000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 2200000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 7000000000, trend: 'down' }
      ]
    },
    'NG020.5': { 
      name: 'Kano East', 
      expenses: [
        { label: 'Administrative Expenses', amount: 1900000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 6500000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 850000000, trend: 'up' },
        { label: 'General Repairs', amount: 505000000, trend: 'down' },
        { label: 'Salaries', amount: 700000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 1900000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 6500000000, trend: 'down' }
      ]
    },
    'NG021.1': { 
      name: 'Katsina South', 
      expenses: [
        { label: 'Administrative Expenses', amount: 2100000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 5700000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 800000000, trend: 'up' },
        { label: 'General Repairs', amount: 600000000, trend: 'down' },
        { label: 'Salaries', amount: 500000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 1800000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 5700000000, trend: 'down' }
      ]
    },
    'NG021.2': { 
      name: 'Katsina Central', 
      expenses: [
        { label: 'Administrative Expenses', amount: 2500000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 6700000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 950000000, trend: 'up' },
        { label: 'General Repairs', amount: 550000000, trend: 'down' },
        { label: 'Salaries', amount: 600000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 2000000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 6700000000, trend: 'down' }
      ]
    },
    'NG021.3': { 
      name: 'Katsina North', 
      expenses: [
        { label: 'Administrative Expenses', amount: 2300000000, trend: 'up' },
        { label: 'Technical Expenses', amount: 6200000000, trend: 'down' },
        { label: 'Petrol Costs', amount: 900000000, trend: 'up' },
        { label: 'General Repairs', amount: 500000000, trend: 'down' },
        { label: 'Salaries', amount: 550000000, trend: 'down' },
        { label: 'Cables/Fuses & Breakers', amount: 1900000000, trend: 'up' },
        { label: 'Complaint Resolutions', amount: 6200000000, trend: 'down' }
      ]
    }
  };

  export const stateCostData = {
    'NG018': {
      name: 'Jigawa',
      businessDistricts: {
        'NG018.1': {
          name: 'Jigawa North',
          costs: {
            'NBET Invoice': 2100000000,
            'MO Invoice': 3100000000,
            'Salaries': 1900000000,
            'Disco Opex': 250000000,
            'Others': 400000000
          }
        },
        'NG018.2': {
          name: 'Jigawa South',
          costs: {
            'NBET Invoice': 2100000000,
            'MO Invoice': 3100000000,
            'Salaries': 1900000000,
            'Disco Opex': 250000000,
            'Others': 400000000
          }
        }
      }
    },
    'NG020': {
      name: 'Kano',
      businessDistricts: {
        'NG020.1': {
          name: 'Kano Central',
          costs: {
            'NBET Invoice': 1000000000,
            'MO Invoice': 1400000000,
            'Salaries': 900000000,
            'Disco Opex': 120000000,
            'Others': 200000000
          }
        },
        'NG020.2': {
          name: 'Kano South',
          costs: {
            'NBET Invoice': 1000000000,
            'MO Invoice': 1400000000,
            'Salaries': 900000000,
            'Disco Opex': 120000000,
            'Others': 200000000
          }
        },
        'NG020.3': {
          name: 'Kano North',
          costs: {
            'NBET Invoice': 1000000000,
            'MO Invoice': 1400000000,
            'Salaries': 900000000,
            'Disco Opex': 120000000,
            'Others': 200000000
          }
        },
        'NG020.4': {
          name: 'Kano Industrial',
          costs: {
            'NBET Invoice': 1000000000,
            'MO Invoice': 1400000000,
            'Salaries': 900000000,
            'Disco Opex': 120000000,
            'Others': 200000000
          }
        },
        'NG020.5': {
          name: 'Kano East',
          costs: {
            'NBET Invoice': 1000000000,
            'MO Invoice': 1400000000,
            'Salaries': 900000000,
            'Disco Opex': 120000000,
            'Others': 200000000
          }
        }
      }
    },
    'NG021': {
      name: 'Katsina',
      businessDistricts: {
        'NG021.1': {
          name: 'Katsina South',
          costs: {
            'NBET Invoice': 1166000000,
            'MO Invoice': 1833000000,
            'Salaries': 1000000000,
            'Disco Opex': 133300000,
            'Others': 233300000
          }
        },
        'NG021.2': {
          name: 'Katsina Central',
          costs: {
            'NBET Invoice': 1166000000,
            'MO Invoice': 1833000000,
            'Salaries': 1000000000,
            'Disco Opex': 133300000,
            'Others': 233300000
          }
        },
        'NG021.3': {
          name: 'Katsina North',
          costs: {
            'NBET Invoice': 1166000000,
            'MO Invoice': 1833000000,
            'Salaries': 1000000000,
            'Disco Opex': 133300000,
            'Others': 233300000
          }
        }
      }
    }
  };
  

  // Financial data for business districts
  export const tariffData = {
    'NG018': {
      name: 'Jigawa',
      businessDistricts: {
        'NG018.1': {
          name: 'Jigawa North',
          tariffs: [55, 60, 50, 25],
          energyDelivered: 100
        },
        'NG018.2': {
          name: 'Jigawa South',
          tariffs: [50, 55, 45, 20],
          energyDelivered: 80
        }
      }
    },
    'NG020': {
      name: 'Kano',
      businessDistricts: {
        'NG020.1': {
          name: 'Kano Central',
          tariffs: [60, 65, 50, 30],
          energyDelivered: 120
        },
        'NG020.2': {
          name: 'Kano South',
          tariffs: [55, 60, 45, 25],
          energyDelivered: 100
        },
        'NG020.3': {
          name: 'Kano North',
          tariffs: [50, 55, 40, 20],
          energyDelivered: 110
        },
        'NG020.4': {
          name: 'Kano Industrial',
          tariffs: [70, 75, 60, 35],
          energyDelivered: 130
        },
        'NG020.5': {
          name: 'Kano East',
          tariffs: [65, 70, 55, 30],
          energyDelivered: 90
        }
      }
    },
    'NG021': {
      name: 'Katsina',
      businessDistricts: {
        'NG021.1': {
          name: 'Katsina South',
          tariffs: [55, 60, 50, 25],
          energyDelivered: 70
        },
        'NG021.2': {
          name: 'Katsina Central',
          tariffs: [50, 55, 45, 20],
          energyDelivered: 60
        },
        'NG021.3': {
          name: 'Katsina North',
          tariffs: [45, 50, 40, 15],
          energyDelivered: 50
        }
      }
    }
  };

 
  