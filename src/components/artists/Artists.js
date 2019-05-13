import React, { Component } from 'react';
import {httpClient} from '../../services/http/http-client/http-client';

class Artists extends Component {
  componentWillMount = () => {
    const clientId = '2db6ed818c29478f983950c342e37f0c';
    const clientSecret = '2818d384a08d407393985791eccc5897';

    fetch('/api/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + (new Buffer(`${clientId}:${clientSecret}`).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials',
    }).then(res => res.json())
      .then(res => {
        const options = {
          headers: {
            Authorization: 'Bearer ' + res.access_token,
          }
        };
        httpClient.getCall('/artists/0oSGxfWSnnOXhD2fKuz2Gy', options).then(res => {
          console.log(res);
        });
      });
  };

  render = () => <button onClick={this.getArtists}>get artist</button>;
}

export default Artists;