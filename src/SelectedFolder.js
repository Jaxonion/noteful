import React from 'react';

export default class SelectedFolder extends React.Component {
    
    render() {
        console.log(this.props)
        const selectedNotes = this.props.state.notes.filter((note) => {
            return note.folderId === this.props.match.params.dynamic
        })
        const foldersNotes = selectedNotes.map((note) => {
            return(
                <p>{note.name}</p>
            )
        })
        console.log(selectedNotes)
        return(
            <div className='selectedFolder'>
                {foldersNotes}
            </div>
        )
    }
}

