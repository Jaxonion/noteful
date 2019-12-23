import React from 'react';
import { Link } from 'react-router-dom';

class MainSidebar extends React.Component {
    render() {
        const folders = this.props.state.folders.map((folder, i) => {
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