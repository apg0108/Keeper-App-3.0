import './App.css';
import { INote } from 'shared/INote';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { useState } from 'react';
import CreateNote from 'components/CreateNote/CreateNote';

function App() {
  const initialState: INote[] = [];
  const [notes, setNotes] = useState(initialState);

  function addNote(newNote: INote) {
    setNotes(prevValue => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id: number) {
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Layout onAdd={addNote} />
      <div className="row">
        {notes.map((item, index) => {
          return <CreateNote key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
