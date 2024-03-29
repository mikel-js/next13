import Link from 'next/link';
import React from 'react';

const getTickets = async () => {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
};

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <Link href={`/tickets/${ticket.id}`}>
          <div key={ticket.id} className='card my-5'>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        </Link>
      ))}
      {tickets.length === 0 && <p className='text-center'>No open ticket</p>}
    </>
  );
};

export default TicketList;
