import React from 'react';
import Search from '../components/Search'; 
import BookList from '../components/BookList';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Search/>
                <BookList/>
            </div>
        );
    }
}

export default Home;