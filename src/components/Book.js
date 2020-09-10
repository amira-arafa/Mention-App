import React from 'react';

export class Book extends React.Component {
    //function to check that the rating exists or not
    isFoundRating = () => {
        if (this.props.bookFromParent.volumeInfo.averageRating) {
            return <div><span className="text-info"> Average Rating:</span>
                {this.props.bookFromParent.volumeInfo.averageRating}</div>
        }
    }
    //finction to check that the publisher exists or not
    isFoundPublisher = () => {
        if (this.props.bookFromParent.volumeInfo.publisher) {
            return <div>
                <span className="text-info"> publisher</span>
                {this.props.bookFromParent.volumeInfo.publisher}
            </div>
        }
    }
    isFoundImage = () => {
        if (this.props.bookFromParent.volumeInfo.imageLinks.thumbnail) {
            return <div>
                    <img src={this.props.bookFromParent.volumeInfo.imageLinks.thumbnail}></img>
            </div>
        }
    }
    render() {
        return (
            <div key={this.props.bookFromParent.volumeInfo.id}>
                <div>
                    <span className="text-info"> Book Title:</span>
                    {this.props.bookFromParent.volumeInfo.title}
                </div>
                <div>
                    {this.isFoundPublisher()}
                </div>
                <div>
                    {this.isFoundRating()}
                </div>
                <div>                   
                {this.isFoundImage()}
                </div>

                <hr />
            </div>

        );
    }
}
