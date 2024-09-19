import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Commercial***** */
const OverviewPage = Loadable(lazy(() => import('../views/overveiw/OverviewPage')));
const CommercialOverviewLayout = Loadable(
  lazy(() => import('../views/commercial/commercial-overview')),
);
const CommercialAllState = Loadable(
  lazy(() => import('../views/commercial/state/commercial-all-state')),
);
const CommercialByState = Loadable(
  lazy(() => import('../views/commercial/state/commercial-by-state')),
);
const CommercialAllBusinessDistricts = Loadable(
  lazy(() => import('../views/commercial/businessdistrict/commercial-all-business-district')),
);
const CommercialByBusinessDistricts = Loadable(
  lazy(() => import('../views/commercial/businessdistrict/commercial-by-business-district')),
);
const CommercialFeeder = Loadable(
  lazy(() => import('../views/commercial/feeder/commercial-feeder')),
);
const CommercialServiceBand = Loadable(
  lazy(() => import('../views/commercial/serviceband/commercial-service-band')),
);
const CommercialCustomer = Loadable(
  lazy(() => import('../views/commercial/customer/commercial-customer')),
);

/* ****Financial***** */
const FinancialOverview = Loadable(lazy(() => import('../views/financial/financial-overview')));
const FinancialAllState = Loadable(
  lazy(() => import('../views/financial/state/financial-all-state')),
);
const FinancialByState = Loadable(
  lazy(() => import('../views/financial/state/financial-by-state')),
);
const FinancialAllBusinessDistricts = Loadable(
  lazy(() => import('../views/financial/businessdistrict/financial-all-business-district')),
);
const FinancialByBusinessDistricts = Loadable(
  lazy(() => import('../views/financial/businessdistrict/financial-by-business-district')),
);
const FinancialFeeder = Loadable(lazy(() => import('../views/financial/feeder/financial-feeder')));
const FinancialServiceBand = Loadable(
  lazy(() => import('../views/financial/serviceband/financial-service-band')),
);
const FinancialSalesRep = Loadable(
  lazy(() => import('../views/financial/salesrep/financial-sales-rep')),
);

/* ****Technical***** */
const TechnicalOverview = Loadable(lazy(() => import('../views/technical/technical-overview')));
const TechnicalAllState = Loadable(
  lazy(() => import('../views/technical/state/technical-all-state')),
);
const TechnicalByState = Loadable(
  lazy(() => import('../views/technical/state/technical-by-state')),
);
const TechnicalAllBusinessDistricts = Loadable(
  lazy(() => import('../views/technical/businessdistrict/technical-all-business-district')),
);
const TechnicalByBusinessDistricts = Loadable(
  lazy(() => import('../views/technical/businessdistrict/technical-by-business-district')),
);
const TechnicalFeeder = Loadable(lazy(() => import('../views/technical/feeder/technical-feeder')));
const TechnicalServiceBand = Loadable(
  lazy(() => import('../views/technical/serviceband/technical-service-band')),
);
const TechnicalCustomer = Loadable(
  lazy(() => import('../views/technical/customer/technical-customer')),
);

/* ****Staff***** */
const StaffOverview = Loadable(lazy(() => import('../views/staff/staff-overview')));
const StaffAllState = Loadable(lazy(() => import('../views/staff/state/staff-all-state')));
const StaffByState = Loadable(lazy(() => import('../views/staff/state/staff-by-state')));
const StaffAllBusinessDistricts = Loadable(
  lazy(() => import('../views/staff/businessdistrict/staff-all-business-district')),
);
const StaffByBusinessDistricts = Loadable(
  lazy(() => import('../views/staff/businessdistrict/staff-by-business-district')),
);
const StaffFeeder = Loadable(lazy(() => import('../views/staff/feeder/staff-feeder')));
const StaffServiceBand = Loadable(
  lazy(() => import('../views/staff/serviceband/staff-service-band')),
);
const StaffCustomer = Loadable(lazy(() => import('../views/staff/customer/staff-customer')));

/* ****Regulatory***** */
const PerformanceFramework24 = Loadable(
  lazy(() => import('../views/regulatory/performance-framework-2024')),
);

const Homepage = Loadable(lazy(() => import('../views/homepage/homepage')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/overview/overviewpage" /> },
      { path: '/overview/overviewpage', exact: true, element: <OverviewPage /> },
      {
        path: '/commercial/commercial-overview',
        exact: true,
        element: <CommercialOverviewLayout />,
      },
      { path: '/commercial/commercial-all-state', element: <CommercialAllState /> },
      { path: '/commercial/commercial-by-state', element: <CommercialByState /> },
      {
        path: '/commercial/commercial-all-business-district',
        element: <CommercialAllBusinessDistricts />,
      },
      {
        path: '/commercial/commercial-by-business-district',
        element: <CommercialByBusinessDistricts />,
      },
      { path: '/commercial/commercial-feeder', element: <CommercialFeeder /> },
      { path: '/commercial/commercial-service-band', element: <CommercialServiceBand /> },
      { path: '/commercial/commercial-customer', element: <CommercialCustomer /> },

      { path: '/financial/financial-overview', exact: true, element: <FinancialOverview /> },
      { path: '/financial/financial-all-state', element: <FinancialAllState /> },
      { path: '/financial/financial-by-state', element: <FinancialByState /> },
      {
        path: '/financial/financial-all-business-district',
        element: <FinancialAllBusinessDistricts />,
      },
      {
        path: '/financial/financial-by-business-district',
        element: <FinancialByBusinessDistricts />,
      },
      { path: '/financial/financial-feeder', element: <FinancialFeeder /> },
      { path: '/financial/financial-service-band', element: <FinancialServiceBand /> },
      { path: '/financial/financial-sales-rep', element: <FinancialSalesRep /> },

      { path: '/technical/technical-overview', exact: true, element: <TechnicalOverview /> },
      { path: '/technical/technical-all-state', element: <TechnicalAllState /> },
      { path: '/technical/technical-by-state', element: <TechnicalByState /> },
      {
        path: '/technical/technical-all-business-district',
        element: <TechnicalAllBusinessDistricts />,
      },
      {
        path: '/technical/technical-by-business-district',
        element: <TechnicalByBusinessDistricts />,
      },
      { path: '/technical/technical-feeder', element: <TechnicalFeeder /> },
      { path: '/technical/technical-service-band', element: <TechnicalServiceBand /> },
      { path: '/technical/technical-customer', element: <TechnicalCustomer /> },

      { path: '/staff/staff-overview', exact: true, element: <StaffOverview /> },
      { path: '/staff/staff-all-state', element: <StaffAllState /> },
      { path: '/staff/staff-by-state', element: <StaffByState /> },
      { path: '/staff/staff-all-business-district', element: <StaffAllBusinessDistricts /> },
      { path: '/staff/staff-by-business-district', element: <StaffByBusinessDistricts /> },
      { path: '/staff/staff-feeder', element: <StaffFeeder /> },
      { path: '/staff/staff-service-band', element: <StaffServiceBand /> },
      { path: '/staff/staff-customer', element: <StaffCustomer /> },

      { path: '/regulatory/performance-framework-2024', element: <PerformanceFramework24 /> },

      { path: '/home', element: <Homepage /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [],
  },
];

export default Router;
