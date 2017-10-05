import React, { Component } from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component{

    renderContent(){
        return this.props.videos.map( (video) => {
            return (
            <VideoListItem 
                onVideoSelect = { this.props.onVideoSelect }
                key={ video.etag } 
                video={ video } 
            />);
        });
    }    

    render(){
        return(
            <ul className="col-md-4 list-group">
                { this.renderContent() }
            </ul>
        )
    }
}