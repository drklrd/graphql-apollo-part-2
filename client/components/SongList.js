import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs } from '../queries/queries';
import { deleteSong } from '../queries/queries';

class SongList extends Component{

    renderSongs(){

        // if(!this.props.data.songs) return ( <div>Fetching</div>)

        return this.props.data.songs.map(( { title, id} ) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i className="material-icons" onClick={ ()=> this.onSongDelete(id) }> delete </i>
                </li>

            );
        });
    }

    onSongDelete(id){
        this.props.mutate({
            variables : {
                id
            }
        })
    }

    render() {
        if(this.props.data.loading) return(<div>Loading...</div>)
        return(
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link
                    to ="/songs/new"
                    className="btn-floating btn-large red right"
                >
                <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}



export default graphql(deleteSong)(
    graphql(fetchSongs)(SongList)
);
