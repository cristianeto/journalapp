import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  const { notes: entries } = useSelector((state) => state.notes);

  return (
    <div className='journal__entries'>
      {entries.map((entry) => (
        <JournalEntry key={entry.id} {...entry} />
      ))}
    </div>
  );
};

export default JournalEntries;
