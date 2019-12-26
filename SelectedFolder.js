import React from 'react';
import { Link } from 'react-router-dom';
import notefulContext from './notefulContext';

export default class SelectedFolder extends React.Component {
    static contextType = notefulContext;
    removeNote = (noteId) => {
        //console.log(`removeNote: ${noteId}`)
        this.context.removeNote(noteId);
    }
    render() {
        let value = this.context;
        //console.log(this.props)
        const selectedNotes = value.notes.filter((note) => {
            return note.folderId === this.props.match.params.dynamic
        })
        const foldersNotes = selectedNotes.map((note) => {
            return(
                <div key={note.id} id={note.name} className='note'>
                    <Link to={`/note/${note.name}`}>{note.name}</Link>
                    <button
                        className='deleteButton'
                        onClick={e => this.removeNote(e.target.parentElement.id)}>Delete</button>
                </div>
            )
        })
        console.log(selectedNotes)
        return(
            <div className='selectedFolder'>
                {foldersNotes}
                <Link to='/NewNote'>New Note</Link>
            </div>
        )
    }
}