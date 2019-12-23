import React from 'react';
import { Route } from 'react-router-dom';

import Main from './Main.js';
import NewNote from './NewNote.js';
import MainSidebar from './MainSidebar.js';
import AddSidebar from './AddSidebar.js';
import NewFolder from './NewFolder.js';
import notefulContext from './notefulContext';
import './index.css'
import STORE from './STORE';
import SelectedFolder from './SelectedFolder';
import SelectedNote from './SelectedNote';
import SelectedFolderSideBar from './SelectedFolderSideBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: [],
      selectedFolder: null
    }
  }

  componentDidMount() {
    this.setState({
      folders: STORE.folders,
      notes: STORE.notes 
    })
  }

  addNote = (noteToAdd, folderId, noteContent) => {
    this.setState({ notes: [...this.state.notes, {name: noteToAdd, folderId: folderId, content: noteContent}]})
  }
  
  addFolder = (folderToAdd, createdId) => {
    console.log(createdId)
    console.log(folderToAdd)
    this.setState({ folders: [...this.state.folders, {id: createdId, name: folderToAdd}]})
    //window.location.href = ('/')
  }
  
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      setFolder: this.addFolder,
      setNote: this.addNote,
    }
    return(
      <notefulContext.Provider
        value={contextValue}>
        <div  className='App'>

          <div className='Sidebar' >
            <Route path={['/note/:dynamic']}
              render={(props) => {
                return(
                  <SelectedFolderSideBar {...props} state={this.state} />
                )
              }} />
            <Route exact path={'/'}
              render={() => {
                return(
                  <MainSidebar state={this.state} />
                )
              }} />
            <Route path={['/folder/:dynamic']}
              render={() => {
                return(
                  <MainSidebar state={this.state} />
                )
              }} />
            <Route path={['/NewNote', '/NewFolder']} component={AddSidebar} />

          </div>

          <section className='Notes'>
            <Route exact path='/' render={() => {
              return(              
                <Main state={this.state} />
              )
            }} />
            <Route path='/NewNote' render={() => {
              return(
                <NewNote state={this.state} />
              )
            }} />
            <Route path='/NewFolder' render={() => {
              return(
                <NewFolder state={this.state} addFolder={this.addFolder} />
              )
            }} />
            <Route path='/folder/:dynamic' render={(props) => {
              return(
                <SelectedFolder {...props} state={this.state} />
              )
            }} />
            <Route path='/note/:dynamic' render={(props) => {
              return(
                <SelectedNote {...props} state={this.state} />
              )
            }}/>
          </section>

        </div>
      </notefulContext.Provider>
    )
  }
}

export default App;
