import React from 'react';
import { Link } from 'react-router-dom';

class MainSidebar extends React.Component {
    render() {
        const folders = this.props.state.folders.map((folder, i) => {
            return(
                <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
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