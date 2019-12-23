import React from 'react';
import { Link } from 'react-router-dom';

export default class SelectedFolderSideBar extends React.Component {
    render() {
        const selectedNote = this.props.state.notes.filter((note) => {
            return note.name === this.props.match.params.dynamic
        })
        console.log(selectedNote[0].folderId)
        const selectedFolder = this.props.state.folders.filter((folder) => {
            return folder.id === selectedNote[0].folderId
        })
        console.log(selectedFolder)
        return(
            <div className='selectedFolderSideBar'>
                <Link to='/'>Back</Link>
                <p className='topToBottom'>{selectedFolder[0].name}</p>
            </div>
        )
    }
}