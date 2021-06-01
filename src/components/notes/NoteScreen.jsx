import React from 'react';
import NotesAppbar from './NotesAppbar';

const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppbar />
      <div className='notes__content'>
        <input
          autoComplete='off'
          type='text'
          name='title'
          className='notes__title-input'
          placeholder='Some awesome title'
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
        ></textarea>
        <div className='notes__image'>
          <img
            src='https://images.immediate.co.uk/production/volatile/sites/22/2019/06/Englsih-oak-in-a-field-d2ece6a.png?quality=45&resize=620,413'
            alt='tree'
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
