import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MentionsInput, Mention } from 'react-mentions'
import './App.scss'

export class App extends React.Component{
    state = {
        comment:"",
        users:[
            {
                id: 1,
                display: "Amira"
              },
              {
                id: 2,
                display: "Mai"
              },
              {
                id: 3,
                display: "uhuhuhu"
              }
            ]
    }
    saveComment = () =>{
        let newComment = this.state.comment;
        newComment = newComment.split('@@@__').join('<a href=\”/user/')
        newComment = newComment.split('^^^__').join('<\'>')
        newComment = newComment.split('@@@^^^').join('</a>');
        if (newComment != '') {
          let comment = newComment.trim();
          console.log("comment",comment)
    }
}
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>d
                    <MentionsInput value={this.state.comment} onChange={event => this.setState({comment: event.target.value})} className="comments-textarea">
                        <Mention
                        trigger='@'
                        data={this.state.users}
                        />
                        </MentionsInput>
                        <button onClick={() => this.saveComment()}>save</button>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;