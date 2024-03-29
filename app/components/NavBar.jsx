import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <h1>Helpdesk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  );
};

export default NavBar;
