import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppbar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureClick = () => {
    console.log('picture');
    document.querySelector('#file').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className='notes__appbar'>
      <span> 01 junio 2021</span>
      <input
        id='file'
        type='file'
        style={{ display: 'none' }}
        name='file'
        onChange={handleFileChange}
      />
      <div>
        <button className='btn' onClick={handlePictureClick}>
          Picture
        </button>
        <button className='btn' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppbar;
