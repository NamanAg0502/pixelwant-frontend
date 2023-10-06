import { useState } from 'react';
import { Button } from '@mantine/core';
import { IconSettings, IconLogout } from '@tabler/icons-react';
import classes from '../../styles/common/Sidebar.module.css';
import { useAuth } from '@/context/auth.context';
import { IconDashboard } from '@tabler/icons-react';
import { IconMessage } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { IconFileUpload } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const data = [
  {
    link: '/',
    label: 'Dashboard',
    icon: IconDashboard,
  },
  { link: '/chat', label: 'Chat', icon: IconMessage },
  { link: '/calender', label: 'Events', icon: IconCalendarEvent },
  { link: '/file-sharing', label: 'File Sharing', icon: IconFileUpload },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];

export default function Sidebar({ label }) {
  const router = useRouter();
  const { logout } = useAuth();
  const [active, setActive] = useState(label);

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <Button
          href="#"
          fullWidth
          variant="light"
          color="red"
          onClick={() => {
            console.log('logging out');
            logout();
            console.log('logged out');
            router.push('/auth');
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Button>
      </div>
    </nav>
  );
}
