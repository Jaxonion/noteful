import React from 'react';
import notefulContext from './notefulContext';
import { Link } from 'react-router-dom';

export default class SelectedNote extends React.Component {
    static contextType = notefulContext;
    render() {
        let value = this.context;
        const selectedNote = value.notes.filter((note) => {
            return note.name === this.props.match.params.dynamic
        })
        const note = selectedNote.map((note, i) => {
            return(
                <div key={i} className='note'>
                    <Link to={`/note/${note.name}`}>{note.name}</Link>
                    <p>{note.content}</p>
                </div>
            )
        })
        return(
            <div className='selectedNote'>
                {note}
            </div>
        )
    }
}