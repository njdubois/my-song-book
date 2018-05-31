import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../style/Nav.css';


export default class Nav extends Component {
  
  buildAlbumLinkList() {
    var rawJson = this.props.trackDetails;
    var albumLinkList = [];

    // Because "this" changes once inside the object forEachs:
    var parent = this;

    Object.keys(rawJson).forEach(function(albumTitle) {
      // console.log(albumTitle);

      var albumJson = rawJson[albumTitle]
      var trackList = albumJson.trackList;

      // console.log(albumJson.trackList);

      var albumTrackLinks = [];
      Object.keys(trackList).forEach(function(trackListKey) {

        var trackData = trackList[trackListKey];
        var trackTitle = trackData.trackTitle;

        // Don't really need this yet.
        var trackPageDetails = trackData.trackPageDetails;

        // console.log(trackPageDetails);

        albumTrackLinks.push(
          <li className="albumListItemTrackListItem" key={albumTitle +"_"+trackTitle}>{trackTitle}</li>
        );
      });

      albumLinkList.push(
        <li className="albumListItem" key={albumTitle} id={albumTitle}>
          <div className="albumListItemTitle" onClick={parent.toggleVisibleTrackList.bind(this, albumTitle)}>{albumTitle}</div>
          <ul className="albumListItemTrackList hidden">
            {albumTrackLinks}
          </ul>
        </li>
      );

    });

    return albumLinkList;
  }

  toggleVisibleTrackList(albumTitle) {
    console.log(albumTitle + " was clicked on!");
  }

  render() {
    
    var albumLiList = this.buildAlbumLinkList();
    
    return (
        <div className="navParent">
            <div className="navMenuContainer">
              <ul className="albumList">{albumLiList}</ul>
            </div>
        </div>
    );
  }
}