import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesAppbar from './NotesAppbar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleteting } from '../../actions/notes';

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;
  const dispatch = useDispatch();

  const activeId = useRef(note.id);

  const handleDelete = () => {
    console.log(id);
    dispatch(startDeleteting(id));
  };

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
        {note.url && (
          <div className='notes__image'>
            <img src={note.url} alt='tree' />
          </div>
        )}
      </div>
      <button className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
