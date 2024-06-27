import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Commercial***** */
const OverviewPage = Loadable(lazy(() => import('../views/overveiw/OverviewPage')));
const CommercialOverviewLayout = Loadable(lazy(() => import('../views/commercial/commercial-overview')));
const CommercialAllState = Loadable(lazy(() => import('../views/commercial/state/commercial-all-state')));
const CommercialByState = Loadable(lazy(() => import('../views/commercial/state/commercial-by-state')));
const CommercialAllBusinessDistricts = Loadable(lazy(() => import('../views/commercial/businessdistrict/commercial-all-business-district')));
const CommercialByBusinessDistricts = Loadable(lazy(() => import('../views/commercial/businessdistrict/commercial-by-business-district')));
const CommercialFeeder = Loadable(lazy(() => import('../views/commercial/feeder/commercial-feeder')));
const CommercialServiceBand = Loadable(lazy(() => import('../views/commercial/serviceband/commercial-service-band')));
const CommercialCustomer = Loadable(lazy(() => import('../views/commercial/customer/commercial-customer')));

/* ****Financial***** */
const FinancialOverview = Loadable(lazy(() => import('../views/financial/financial-overview')));
const FinancialAllState = Loadable(lazy(() => import('../views/financial/state/financial-all-state')));
const FinancialByState = Loadable(lazy(() => import('../views/financial/state/financial-by-state')));
const FinancialAllBusinessDistricts = Loadable(lazy(() => import('../views/financial/businessdistrict/financial-all-business-district')));
const FinancialByBusinessDistricts = Loadable(lazy(() => import('../views/financial/businessdistrict/financial-by-business-district')));
const FinancialFeeder = Loadable(lazy(() => import('../views/financial/feeder/financial-feeder')));
const FinancialServiceBand = Loadable(lazy(() => import('../views/financial/serviceband/financial-service-band')));
const FinancialCustomer = Loadable(lazy(() => import('../views/financial/customer/financial-customer')));

/* ****Technical***** */
const TechnicalOverview = Loadable(lazy(() => import('../views/technical/technical-overview')));
const TechnicalAllState = Loadable(lazy(() => import('../views/technical/state/technical-all-state')));
const TechnicalByState = Loadable(lazy(() => import('../views/technical/state/technical-by-state')));
const TechnicalAllBusinessDistricts = Loadable(lazy(() => import('../views/technical/businessdistrict/technical-all-business-district')));
const TechnicalByBusinessDistricts = Loadable(lazy(() => import('../views/technical/businessdistrict/technical-by-business-district')));
const TechnicalFeeder = Loadable(lazy(() => import('../views/technical/feeder/technical-feeder')));
const TechnicalServiceBand = Loadable(lazy(() => import('../views/technical/serviceband/technical-service-band')));
const TechnicalCustomer = Loadable(lazy(() => import('../views/technical/customer/technical-customer')));

/* ****Staff***** */
const StaffOverview = Loadable(lazy(() => import('../views/staff/staff-overview')));
const StaffAllState = Loadable(lazy(() => import('../views/staff/state/staff-all-state')));
const StaffByState = Loadable(lazy(() => import('../views/staff/state/staff-by-state')));
const StaffAllBusinessDistricts = Loadable(lazy(() => import('../views/staff/businessdistrict/staff-all-business-district')));
const StaffByBusinessDistricts = Loadable(lazy(() => import('../views/staff/businessdistrict/staff-by-business-district')));
const StaffFeeder = Loadable(lazy(() => import('../views/staff/feeder/staff-feeder')));
const StaffServiceBand = Loadable(lazy(() => import('../views/staff/serviceband/staff-service-band')));
const StaffCustomer = Loadable(lazy(() => import('../views/staff/customer/staff-customer')));

/* ****Apps***** */
const Chats = Loadable(lazy(() => import('../views/temp-others/apps/chat/Chat')));
const Notes = Loadable(lazy(() => import('../views/temp-others/apps/notes/Notes')));
const Calendar = Loadable(lazy(() => import('../views/temp-others/apps/calendar/BigCalendar')));
const Email = Loadable(lazy(() => import('../views/temp-others/apps/email/Email')));
const Blog = Loadable(lazy(() => import('../views/temp-others/apps/blog/Blog')));
const BlogDetail = Loadable(lazy(() => import('../views/temp-others/apps/blog/BlogPost')));
const Tickets = Loadable(lazy(() => import('../views/temp-others/apps/tickets/Tickets')));
const Contacts = Loadable(lazy(() => import('../views/temp-others/apps/contacts/Contacts')));
const Ecommerce = Loadable(lazy(() => import('../views/temp-others/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/temp-others/apps/eCommerce/EcommerceDetail')));
const EcomProductList = Loadable(lazy(() => import('../views/temp-others/apps/eCommerce/EcomProductList')));
const EcomProductCheckout = Loadable(
  lazy(() => import('../views/temp-others/apps/eCommerce/EcommerceCheckout')),
);
const UserProfile = Loadable(lazy(() => import('../views/temp-others/apps/user-profile/UserProfile')));
const Followers = Loadable(lazy(() => import('../views/temp-others/apps/user-profile/Followers')));
const Friends = Loadable(lazy(() => import('../views/temp-others/apps/user-profile/Friends')));
const Gallery = Loadable(lazy(() => import('../views/temp-others/apps/user-profile/Gallery')));

// Pages
const RollbaseCASL = Loadable(lazy(() => import('../views/temp-others/pages/rollbaseCASL/RollbaseCASL')));
const Treeview = Loadable(lazy(() => import('../views/temp-others/pages/treeview/Treeview')));
const Pricing = Loadable(lazy(() => import('../views/temp-others/pages/pricing/Pricing')));
const AccountSetting = Loadable(
  lazy(() => import('../views/temp-others/pages/account-setting/AccountSetting')),
);
const Faq = Loadable(lazy(() => import('../views/temp-others/pages/faq/Faq')));

// widget
const WidgetCards = Loadable(lazy(() => import('../views/temp-others/widgets/cards/WidgetCards')));
const WidgetBanners = Loadable(lazy(() => import('../views/temp-others/widgets/banners/WidgetBanners')));
const WidgetCharts = Loadable(lazy(() => import('../views/temp-others/widgets/charts/WidgetCharts')));

// form elements
const MuiAutoComplete = Loadable(
  lazy(() => import('../views/temp-others/forms/form-elements/MuiAutoComplete')),
);
const MuiButton = Loadable(lazy(() => import('../views/temp-others/forms/form-elements/MuiButton')));
const MuiCheckbox = Loadable(lazy(() => import('../views/temp-others/forms/form-elements/MuiCheckbox')));
const MuiRadio = Loadable(lazy(() => import('../views/temp-others/forms/form-elements/MuiRadio')));
const MuiSlider = Loadable(lazy(() => import('../views/temp-others/forms/form-elements/MuiSlider')));
const MuiDateTime = Loadable(lazy(() => import('../views/temp-others/forms/form-elements/MuiDateTime')));
const MuiSwitch = Loadable(lazy(() => import('../views/temp-others/forms/form-elements/MuiSwitch')));

// form layout
const FormLayouts = Loadable(lazy(() => import('../views/temp-others/forms/FormLayouts')));
const FormCustom = Loadable(lazy(() => import('../views/temp-others/forms/FormCustom')));
const FormWizard = Loadable(lazy(() => import('../views/temp-others/forms/FormWizard')));
const FormValidation = Loadable(lazy(() => import('../views/temp-others/forms/FormValidation')));
const QuillEditor = Loadable(lazy(() => import('../views/temp-others/forms/quill-editor/QuillEditor')));
const FormHorizontal = Loadable(lazy(() => import('../views/temp-others/forms/FormHorizontal')));
const FormVertical = Loadable(lazy(() => import('../views/temp-others/forms/FormVertical')));

// tables
const BasicTable = Loadable(lazy(() => import('../views/temp-others/tables/BasicTable')));
const CollapsibleTable = Loadable(lazy(() => import('../views/temp-others/tables/CollapsibleTable')));
const EnhancedTable = Loadable(lazy(() => import('../views/temp-others/tables/EnhancedTable')));
const FixedHeaderTable = Loadable(lazy(() => import('../views/temp-others/tables/FixedHeaderTable')));
const PaginationTable = Loadable(lazy(() => import('../views/temp-others/tables/PaginationTable')));
const SearchTable = Loadable(lazy(() => import('../views/temp-others/tables/SearchTable')));

// chart
const LineChart = Loadable(lazy(() => import('../views/temp-others/charts/LineChart')));
const GredientChart = Loadable(lazy(() => import('../views/temp-others/charts/GredientChart')));
const DoughnutChart = Loadable(lazy(() => import('../views/temp-others/charts/DoughnutChart')));
const AreaChart = Loadable(lazy(() => import('../views/temp-others/charts/AreaChart')));
const ColumnChart = Loadable(lazy(() => import('../views/temp-others/charts/ColumnChart')));
const CandlestickChart = Loadable(lazy(() => import('../views/temp-others/charts/CandlestickChart')));
const RadialbarChart = Loadable(lazy(() => import('../views/temp-others/charts/RadialbarChart')));

// ui
const MuiAlert = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiAlert')));
const MuiAccordion = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiAccordion')));
const MuiAvatar = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiAvatar')));
const MuiChip = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiChip')));
const MuiDialog = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiDialog')));
const MuiList = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiList')));
const MuiPopover = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiPopover')));
const MuiRating = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiRating')));
const MuiTabs = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiTabs')));
const MuiTooltip = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiTooltip')));
const MuiTransferList = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiTransferList')));
const MuiTypography = Loadable(lazy(() => import('../views/temp-others/ui-components/MuiTypography')));

// authentication
const Login = Loadable(lazy(() => import('../views/temp-others/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/temp-others/authentication/auth2/Login2')));
const Register = Loadable(lazy(() => import('../views/temp-others/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/temp-others/authentication/auth2/Register2')));
const ForgotPassword = Loadable(lazy(() => import('../views/temp-others/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(
  lazy(() => import('../views/temp-others/authentication/auth2/ForgotPassword2')),
);
const TwoSteps = Loadable(lazy(() => import('../views/temp-others/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/temp-others/authentication/auth2/TwoSteps2')));
const Error = Loadable(lazy(() => import('../views/temp-others/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/temp-others/authentication/Maintenance')));

// landingpage
const Landingpage = Loadable(lazy(() => import('../views/temp-others/pages/landingpage/Landingpage')));

const Homepage = Loadable(lazy(() => import('../views/homepage/homepage')))



const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/overview/overviewpage" /> },
      { path: '/overview/overviewpage', exact: true, element: <OverviewPage /> },
      { path: '/commercial/commercial-overview', exact: true, element: <CommercialOverviewLayout /> },
      { path: '/commercial/commercial-all-state', element: <CommercialAllState /> },
      { path: '/commercial/commercial-by-state', element: <CommercialByState /> },
      { path: '/commercial/commercial-all-business-district', element: <CommercialAllBusinessDistricts /> },
      { path: '/commercial/commercial-by-business-district', element: <CommercialByBusinessDistricts /> },
      { path: '/commercial/commercial-feeder', element: <CommercialFeeder /> },
      { path: '/commercial/commercial-service-band', element: <CommercialServiceBand /> },
      { path: '/commercial/commercial-customer', element: <CommercialCustomer /> },

      { path: '/financial/financial-overview', exact: true, element: <FinancialOverview /> },
      { path: '/financial/financial-all-state', element: <FinancialAllState /> },
      { path: '/financial/financial-by-state', element: <FinancialByState /> },
      { path: '/financial/financial-all-business-district', element: <FinancialAllBusinessDistricts /> },
      { path: '/financial/financial-by-business-district', element: <FinancialByBusinessDistricts /> },
      { path: '/financial/financial-feeder', element: <FinancialFeeder /> },
      { path: '/financial/financial-service-band', element: <FinancialServiceBand /> },
      { path: '/financial/financial-customer', element: <FinancialCustomer /> },

      { path: '/technical/technical-overview', exact: true, element: <TechnicalOverview /> },
      { path: '/technical/technical-all-state', element: <TechnicalAllState /> },
      { path: '/technical/technical-by-state', element: <TechnicalByState /> },
      { path: '/technical/technical-all-business-district', element: <TechnicalAllBusinessDistricts /> },
      { path: '/technical/technical-by-business-district', element: <TechnicalByBusinessDistricts /> },
      { path: '/technical/technical-feeder', element: <TechnicalFeeder /> },
      { path: '/technical/technical-service-band', element: <TechnicalServiceBand /> },
      { path: '/technical/technical-customer', element: <TechnicalCustomer /> },

      { path: '/staff/staff-overview', exact: true, element: <StaffOverview /> },
      { path: '/staff/staff-all-state', element: <StaffAllState /> },
      { path: '/staff/staff-by-state', element: <StaffByState /> },
      { path: '/staff/staff-all-business-district', element: <StaffAllBusinessDistricts /> },
      { path: '/staff/staff-by-business-district', element:<StaffByBusinessDistricts /> },
      { path: '/staff/staff-feeder', element: <StaffFeeder /> },
      { path: '/staff/staff-service-band', element: <StaffServiceBand /> },
      { path: '/staff/staff-customer', element: <StaffCustomer /> },

      { path: '/home', element: <Homepage /> },



      { path: '/apps/chats', element: <Chats /> },
      { path: '/apps/notes', element: <Notes /> },
      { path: '/apps/calendar', element: <Calendar /> },
      { path: '/apps/email', element: <Email /> },
      { path: '/apps/tickets', element: <Tickets /> },
      { path: '/apps/contacts', element: <Contacts /> },
      { path: '/apps/ecommerce/shop', element: <Ecommerce /> },
      { path: '/apps/blog/posts', element: <Blog /> },
      { path: '/apps/blog/detail/:id', element: <BlogDetail /> },
      { path: '/apps/ecommerce/eco-product-list', element: <EcomProductList /> },
      { path: '/apps/ecommerce/eco-checkout', element: <EcomProductCheckout /> },
      { path: '/apps/ecommerce/detail/:id', element: <EcommerceDetail /> },
      { path: '/apps/followers', element: <Followers /> },
      { path: '/apps/friends', element: <Friends /> },
      { path: '/apps/gallery', element: <Gallery /> },
      { path: '/user-profile', element: <UserProfile /> },
      { path: '/pages/casl', element: <RollbaseCASL /> },
      { path: '/pages/treeview', element: <Treeview /> },
      { path: '/pages/pricing', element: <Pricing /> },
      { path: '/pages/account-settings', element: <AccountSetting /> },
      { path: '/pages/faq', element: <Faq /> },
      { path: '/forms/form-elements/autocomplete', element: <MuiAutoComplete /> },
      { path: '/forms/form-elements/button', element: <MuiButton /> },
      { path: '/forms/form-elements/checkbox', element: <MuiCheckbox /> },
      { path: '/forms/form-elements/radio', element: <MuiRadio /> },
      { path: '/forms/form-elements/slider', element: <MuiSlider /> },
      { path: '/forms/form-elements/date-time', element: <MuiDateTime /> },
      { path: '/forms/form-elements/switch', element: <MuiSwitch /> },
      { path: '/forms/form-elements/switch', element: <MuiSwitch /> },
      { path: '/forms/quill-editor', element: <QuillEditor /> },
      { path: '/forms/form-layouts', element: <FormLayouts /> },
      { path: '/forms/form-horizontal', element: <FormHorizontal /> },
      { path: '/forms/form-vertical', element: <FormVertical /> },
      { path: '/forms/form-custom', element: <FormCustom /> },
      { path: '/forms/form-wizard', element: <FormWizard /> },
      { path: '/forms/form-validation', element: <FormValidation /> },
      { path: '/tables/basic', element: <BasicTable /> },
      { path: '/tables/collapsible', element: <CollapsibleTable /> },
      { path: '/tables/enhanced', element: <EnhancedTable /> },
      { path: '/tables/fixed-header', element: <FixedHeaderTable /> },
      { path: '/tables/pagination', element: <PaginationTable /> },
      { path: '/tables/search', element: <SearchTable /> },
      { path: '/charts/line-chart', element: <LineChart /> },
      { path: '/charts/gredient-chart', element: <GredientChart /> },
      { path: '/charts/doughnut-pie-chart', element: <DoughnutChart /> },
      { path: '/charts/area-chart', element: <AreaChart /> },
      { path: '/charts/column-chart', element: <ColumnChart /> },
      { path: '/charts/candlestick-chart', element: <CandlestickChart /> },
      { path: '/charts/radialbar-chart', element: <RadialbarChart /> },
      { path: '/ui-components/alert', element: <MuiAlert /> },
      { path: '/ui-components/accordion', element: <MuiAccordion /> },
      { path: '/ui-components/avatar', element: <MuiAvatar /> },
      { path: '/ui-components/chip', element: <MuiChip /> },
      { path: '/ui-components/dialog', element: <MuiDialog /> },
      { path: '/ui-components/list', element: <MuiList /> },
      { path: '/ui-components/popover', element: <MuiPopover /> },
      { path: '/ui-components/rating', element: <MuiRating /> },
      { path: '/ui-components/tabs', element: <MuiTabs /> },
      { path: '/ui-components/tooltip', element: <MuiTooltip /> },
      { path: '/ui-components/transfer-list', element: <MuiTransferList /> },
      { path: '/ui-components/typography', element: <MuiTypography /> },
      { path: '/widgets/cards', element: <WidgetCards /> },
      { path: '/widgets/banners', element: <WidgetBanners /> },
      { path: '/widgets/charts', element: <WidgetCharts /> },
      
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/login2', element: <Login2 /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/register2', element: <Register2 /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/forgot-password2', element: <ForgotPassword2 /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/two-steps2', element: <TwoSteps2 /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '/landingpage', element: <Landingpage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
