import React , { Component } from 'react';
import { SongQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongDetail extends Component{

    render(){
        const { song } = this.props.data;
        if(!song) {
            return (
                <div> Loading ... </div>
            );
        }
        return(
            <div>
                <Link to="/"> Back  </Link>
                <h3>{ song.title } </h3>
            </div>
        );
    }
}

export default graphql(SongQuery,{
    options : (props) => { return { variables : { id : props.params.id } } }
})(SongDetail);
