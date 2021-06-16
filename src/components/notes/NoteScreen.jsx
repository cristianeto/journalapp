import React from 'react';
import { useSelector } from 'react-redux';
import NotesAppbar from './NotesAppbar';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { useRef } from 'react';

const NoteScreen = () => {
  const { active: activeNote } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(activeNote);
  const { body, title } = formValues;

  const activeId = useRef(activeNote.id);

  useEffect(() => {
    if (activeNote !== activeId.current) {
      reset(activeNote);
      activeId.current = activeNote.id;
    }
  }, [activeNote, reset]);
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
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {activeNote.url && (
          <div className='notes__image'>
            <img
              src='https://images.immediate.co.uk/production/volatile/sites/22/2019/06/Englsih-oak-in-a-field-d2ece6a.png?quality=45&resize=620,413'
              alt='tree'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteScreen;
