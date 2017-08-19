import React , { Component } from 'react';
import {  AddLyricToSong } from '../queries/queries';
import { graphql } from 'react-apollo';

class LyricCreate extends Component{

    constructor(props){
        super(props);

        this.state = {
            content : ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();

        this.props.mutate({
            variables : {
                content : this.state.content ,
                songId : this.props.songId
            }
        })
        .then(()=> this.setState({ content : '' }))

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Add a lyric</label>
                    <input
                        value = { this.state.content }
                        onChange = { event => this.setState({ content : event.target.value })}
                    />
                </form>
            </div>
        );
    }
}

export default graphql(AddLyricToSong)(LyricCreate);
