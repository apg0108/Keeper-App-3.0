import { INote } from './../../shared/INote';
import './CreateNote.css';

function CreateNote(props: INote) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="col-xxl-4">
      <div className="note">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.content}</p>
        <button onClick = {handleClick}>DELETE</button>
      </div>
    </div>
  );
}
export default CreateNote;
