import React from 'react';
import { Link } from 'react-router-dom';
import notefulContext from './notefulContext';

class MainSidebar extends React.Component {
    static contextType = notefulContext;
    render() {
        let value = this.context;
        const folders = value.folders.map((folder, i) => {
            return(
                <div key={i} className='folder'>
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                </div>
            )
        })
        return(
            <div>
                {folders}
                <Link to='/NewFolder'>Add Folder</Link>
            </div>
        )
    }
}

export default MainSidebar;