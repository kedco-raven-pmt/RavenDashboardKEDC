import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconAperture,
  IconShoppingCart,
  IconHelp,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconLayout,
  IconZoomCode,
  IconSettings,
  IconBorderStyle2,
  IconAppWindow,
  IconLockAccess,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Overview Page',
    icon: IconAperture,
    href: '/overview/overviewpage',
    chip: 'New',
    chipColor: 'secondary',
  },
  {
    navlabel: true,
    subheader: 'Commercial',
  },
  {
    id: uniqueId(),
    title: 'Overview',
    icon: IconChartDonut3,
    href: '/commercial/commercial-overview',
  },
  {
    id: uniqueId(),
    title: 'State',
    icon: IconChartDonut3,
    href: '/commercial/',
    children: [
      {
        id: uniqueId(),
        title: 'All State',
        icon: IconPoint,
        href: '/commercial/commercial-all-state',
      },
      {
        id: uniqueId(),
        title: 'State',
        icon: IconPoint,
        href: '/commercial/commercial-by-state',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Business Disrict',
    icon: IconChartDonut3,
    href: '/commercial/businessdistrict',
    children: [
      {
        id: uniqueId(),
        title: 'All Business District',
        icon: IconPoint,
        href: '/commercial/commercial-all-business-district',
      },
      {
        id: uniqueId(),
        title: 'Business District',
        icon: IconPoint,
        href: '/commercial/commercial-by-business-district',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Feeder',
    icon: IconChartDonut3,
    href: '/commercial/commercial-feeder',
  },
  {
    id: uniqueId(),
    title: 'Service Band',
    icon: IconChartDonut3,
    href: '/commercial/commercial-service-band',
  },

  {
    id: uniqueId(),
    title: 'Customers',
    icon: IconChartDonut3,
    href: '/commercial/commercial-customer',
  },
  {
    navlabel: true,
    subheader: 'Financial',
  },
  {
    id: uniqueId(),
    title: 'Overview',
    icon: IconChartDonut3,
    href: '/financial/financial-overview',
  },
  {
    id: uniqueId(),
    title: 'State',
    icon: IconChartDonut3,
    href: '/financial/',
    children: [
      {
        id: uniqueId(),
        title: 'All State',
        icon: IconPoint,
        href: '/financial/financial-all-state',
      },
      {
        id: uniqueId(),
        title: 'State',
        icon: IconPoint,
        href: '/financial/financial-by-state',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Business Disrict',
    icon: IconChartDonut3,
    href: '/financial/businessdistrict',
    children: [
      {
        id: uniqueId(),
        title: 'All Business District',
        icon: IconPoint,
        href: '/financial/financial-all-business-district',
      },
      {
        id: uniqueId(),
        title: 'Business District',
        icon: IconPoint,
        href: '/financial/financial-by-business-district',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Feeder',
    icon: IconChartDonut3,
    href: '/financial/financial-feeder',
  },
  {
    id: uniqueId(),
    title: 'Sales Rep',
    icon: IconChartDonut3,
    href: '/financial/financial-sales-rep',
  },
  {
    id: uniqueId(),
    title: 'Service Band',
    icon: IconChartDonut3,
    href: '/financial/financial-service-band',
  },
  {
    navlabel: true,
    subheader: 'Technical',
  },
  {
    id: uniqueId(),
    title: 'Overview',
    icon: IconChartDonut3,
    href: '/technical/technical-overview',
  },
  {
    id: uniqueId(),
    title: 'State',
    icon: IconChartDonut3,
    href: '/technical/',
    children: [
      {
        id: uniqueId(),
        title: 'All State',
        icon: IconPoint,
        href: '/technical/technical-all-state',
      },
      {
        id: uniqueId(),
        title: 'State',
        icon: IconPoint,
        href: '/technical/technical-by-state',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Business Disrict',
    icon: IconChartDonut3,
    href: '/technical/businessdistrict',
    children: [
      {
        id: uniqueId(),
        title: 'All Business District',
        icon: IconPoint,
        href: '/technical/technical-all-business-district',
      },
      {
        id: uniqueId(),
        title: 'Business District',
        icon: IconPoint,
        href: '/technical/technical-by-business-district',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Feeder',
    icon: IconChartDonut3,
    href: '/technical/technical-feeder',
  },
  {
    id: uniqueId(),
    title: 'Service Band',
    icon: IconChartDonut3,
    href: '/technical/technical-service-band',
  },

  {
    navlabel: true,
    subheader: 'Staff Manager',
  },
  {
    id: uniqueId(),
    title: 'Overview',
    icon: IconChartDonut3,
    href: '/staff/staff-overview',
  },
  {
    id: uniqueId(),
    title: 'State',
    icon: IconChartDonut3,
    href: '/staff/',
    children: [
      {
        id: uniqueId(),
        title: 'All State',
        icon: IconPoint,
        href: '/staff/staff-all-state',
      },
      {
        id: uniqueId(),
        title: 'State',
        icon: IconPoint,
        href: '/staff/staff-by-state',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Business Disrict',
    icon: IconChartDonut3,
    href: '/staff/staff-all-business-district',
  },

  {
    navlabel: true,
    subheader: 'Regulatory',
  },

  {
    id: uniqueId(),
    title: 'NERC Orders',
    icon: IconChartDonut3,
    href: '/regulatory/',
    children: [
      {
        id: uniqueId(),
        title: 'Performance Framework 24',
        icon: IconPoint,
        href: '/regulatory/performance-framework-2024',
      },
    ],
  },
];

export default Menuitems;
