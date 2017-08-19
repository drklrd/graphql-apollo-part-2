import React, { Component } from 'react';
import { LikeLyric } from '../queries/queries';
import { graphql } from 'react-apollo';

class LyricList extends Component {

    onLike(id){
        this.props.mutate({
            variables : {
                id
            }
        })
    }

    renderLyrics(){
        return this.props.lyrics.map(({ id,content,likes }) => {
            return(
                <li key={id} className="collection-item">
                    { content }
                    <div className="vote-box">
                        <i
                            className="material-icons"
                            onClick={ ()=>this.onLike(id) }
                        >
                            thumb_up
                        </i>
                        {likes}
                    </div>
                </li>
            );
        });
    }

    render(){
        return(
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default graphql(LikeLyric)(LyricList);
