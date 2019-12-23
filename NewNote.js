import React from 'react';
import { Link } from 'react-router-dom';
import notefulContext from './notefulContext';

class NewNote extends React.Component {
    static contextType = notefulContext;

    updateNote = () => {
        console.log(document.getElementById('folderId').value)
        this.context.setNote(document.getElementById('noteName').value, document.getElementById('folderId').value, document.getElementById('noteContent').value)
    }
    render() {
        //let noteContent = document.getElementById('noteContent').value;
        //let noteName = document.getElementById('noteName').value;

        let value = this.context;
        console.log('value:', value)
        const options = value.folders.map((folder, id) => {
            return(
                <option value={folder.id}>{folder.name}</option>
            )
        })
        return(
                <div className='NewNote'>

                    <label>Create A Note</label>

                    <div className='newNote'>

                        <label>Name</label>

                        <input type='text' id='noteName' placeholder='Note Name' />

                        <label>Content</label>

                        <input type='text' id='noteContent' placeholder='Content' />

                        <select name='folderName' id='folderId'>
                            {options}
                        </select>

                        <Link to='/'>
                            <button
                                onClick={this.updateNote}
                                >
                                Add Note
                            </button>
                        </Link>

                    </div>
                </div>
        )
    }
}

export default NewNote;