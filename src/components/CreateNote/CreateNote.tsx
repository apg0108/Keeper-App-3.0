import { INote } from './../../shared/INote';
import DeleteIcon from '@material-ui/icons/Delete';
import './CreateNote.css';

function CreateNote(props: INote) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="col-xxl-4">
      <div className="note">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
export default CreateNote;
