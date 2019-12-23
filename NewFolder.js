import React from 'react';
import { Link } from 'react-router-dom';
import notefulContext from './notefulContext';

class NewFolder extends React.Component {
    static contextType = notefulContext;
    folderHandler = () => {
        const newFolderInput = document.getElementById('newFolder').value
        console.log(newFolderInput)
        this.context.setFolder(newFolderInput, this.createFolder())
    }

    createFolder = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    render(){

        //const newFolderInput = document.getElementById('newFolder').value
        return(
            <div className='NewFolder'>

                <label>Add Folder</label>

                <div className='newFolder'>
                    <label>Name</label>
                    <input id='newFolder' type='text' placeholder='New Folder Name' />
                    <Link to='/'>
                    <button
                    onClick={this.folderHandler}>Add Folder</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default NewFolder;