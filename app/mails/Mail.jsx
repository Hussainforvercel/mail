import React from 'react';
import { FaStar } from 'react-icons/fa';

const mails = [
  {
    id: 1,
    name: 'Theresa Webb',
    status: 'Unassign ',
    reference: 'OP1023',
    sender: 'Ellie',
    subject: 'Build prototypes without code deserunt mollit dolore cillum minim temp...',
    message: '',
    time: '12:01 PM',
  },
  {
    id: 2,
    name: 'Theresa Webb',
    status: 'Follow Up',
    reference: 'OP1023',
    sender: 'Ellie',
    subject: 'Build prototypes without code',
    message: '',
    time: '12:01 PM',
  },
  {
    id: 3,
    name: 'Theresa Webb',
    status: 'Follow Up',
    reference: 'OP1023',
    sender: 'Ellie',
    subject: '',
    message: '',
    time: '12:01 PM',
  },
];

function Mail({ mail }) {
  return (
    <div className={`flex items-center justify-start gap-4 mt-2 special-style`}>
      <div>
        <input type="checkbox" name="" id="" />
      </div>
      <FaStar className='text-[#EFD494]' />
      <div style={{ whiteSpace: 'nowrap' }}>{mail.name}</div>
      <div style={{ whiteSpace: 'nowrap' }} className='border-2 border-dashed '>
        {mail.status}
      </div>
      <div style={{ whiteSpace: 'nowrap', width: '80px' }} className={`border-2 border-[#146EF6] rounded-sm p-1`}>
        {mail.reference}
      </div>
      <div style={{ whiteSpace: 'nowrap', width: '80px' }} className='border-2 p-1 rounded-sm'>
        {mail.sender}
      </div>
      <div style={{ whiteSpace: 'nowrap' }}>{mail.subject}</div>
      <div style={{ whiteSpace: 'nowrap' }}>{mail.message}</div>
      <div style={{ whiteSpace: 'nowrap' }}>{mail.time}</div>
    </div>
  );
}

function MailList() {
  return (
    <div className="overflow-x-hidden">
      {mails.map((mail) => (
        <Mail key={mail.id} mail={mail} />
      ))}
    </div>
  );
}

export default MailList;
