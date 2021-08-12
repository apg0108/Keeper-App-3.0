import { useState } from 'react';
import { INote } from 'shared/INote';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import './Layout.css';

function Layout(props: { onAdd: any }) {
  const initialState: INote = { title: '', content: '' };
  const [note, setNote] = useState(initialState);
  const [showTitle, setShowTitle] = useState(false);

  function onChangeNote(event: any) {
    const { name, value } = event.target;
    setNote(prevValue => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event: any) {
    if (note.title !== '' && note.content !== '') {
      props.onAdd(note);
      setNote(initialState);
      setShowTitle(false);
    } else alert('Note is empty!');
    event.preventDefault();
  }

  function onShowTitle() {
    setShowTitle(true);
  }

  return (
    <div className="container">
      <form className="create-note">
        {showTitle && <input type="text" placeholder="Title" name="title" onChange={onChangeNote} value={note.title} />}
        <textarea placeholder="Take a note..." name="content" onClick={onShowTitle} onChange={onChangeNote} value={note.content}></textarea>
        <Zoom in={showTitle}>
          <Fab className="btn-circle" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Layout;
