import React from 'react';
import { Book } from './Book';
import {connect} from 'react-redux';

export class BookList extends React.Component{
    renderList(){
        if(this.props.filteredBooks){
            return this.props.filteredBooks.map((book)=>{
                return <Book  key={book.volumeInfo.id} bookFromParent={book}/>
            })
        }
    }
    render(){
   
        return(
            <div>
                {this.renderList()}
            </div>
        );
        
    }
}

const mapStateToProps=(state)=>{
    return {
        filteredBooks:state.books.books
    }
}
export default connect(mapStateToProps)(BookList);