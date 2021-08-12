import { useState } from 'react';
import { INote } from 'shared/INote';
import './Layout.css';

function Layout(props: { onAdd: any }) {
  const initialState: INote = { title: '', content: '' };
  const [note, setNote] = useState(initialState);

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
    } else alert('Note is empty!');
    event.preventDefault();
  }

  return (
    <div className="note mt-5">
      <form>
        <input type="text" placeholder="Title" name="title" onChange={onChangeNote} value={note.title} />
        <textarea placeholder="Take a note..." name="content" onChange={onChangeNote} value={note.content}></textarea>
        <button className="btn-circle" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Layout;
