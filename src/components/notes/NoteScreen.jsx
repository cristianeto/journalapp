import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesAppbar from './NotesAppbar';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;
  const dispatch = useDispatch();

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

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
          name='body'
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
