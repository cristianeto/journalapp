import React from 'react';

const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg)',
        }}
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Lorem ipsum dolor sit amet.</p>
        <p className='journal__entry-content'>
          Quibusdam quis cumque iure repellendus eveniet voluptatum numquam
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
