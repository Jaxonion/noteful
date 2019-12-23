import React from 'react';
import { Link } from 'react-router-dom';
import notefulContext from './notefulContext';

class Main extends React.Component {
    static contextType = notefulContext;
    render() {
        let value = this.context;
        console.log(this.props)
        const notes = value.notes.map((note, i) => {
            return(
                <div key={i} className='note'>
                    <Link to={`/note/${note.name}`}>{note.name}</Link>
                </div>
               
            )
        })
        return(
            <notefulContext.Consumer>
                {value =>
                <div>
                    {notes}
                    <Link to='/NewNote'>New Note</Link>
                </div>}
            </notefulContext.Consumer>
        )
    }
}

export default Main;