import icon1 from 'src/assets/images/svgs/icon-account.svg';
import icon2 from 'src/assets/images/svgs/icon-inbox.svg';
import icon3 from 'src/assets/images/svgs/icon-tasks.svg';

import ddIcon7 from 'src/assets/images/svgs/icon-dd-message-box.svg';

//
// Notifications dropdown
//
const notifications = [
  {
    avatar: ddIcon7,
    title: 'Matins added as user',
    subtitle: 'Congratulate him',
  },
  {
    avatar: ddIcon7,
    title: 'Update on financial',
    subtitle: 'Monitor your collections',
  },
  {
    avatar: ddIcon7,
    title: 'New update on NERC',
    subtitle: 'Track Compliance',
  },
];

//
// Profile dropdown
//
const profile = [
  {
    href: '#',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: icon1,
  },
  {
    href: '#',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: icon2,
  },
];

export { notifications, profile };
