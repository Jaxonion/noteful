import React from 'react';
import { Link } from 'react-router-dom'

export default class SelectedFolder extends React.Component {
    
    render() {
        console.log(this.props)
        const selectedNotes = this.props.state.notes.filter((note) => {
            return note.folderId === this.props.match.params.dynamic
        })
        const foldersNotes = selectedNotes.map((note, i) => {
            return(
                <div key={i} className='note'>
                    <Link to={`/note/${note.name}`}>{note.name}</Link>
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