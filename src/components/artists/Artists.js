import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArtist} from '../../services/redux/actions/artistActions';

class Artists extends Component {
  constructor(props) {
    super(props);
    this.fetchArtists = this.fetchArtists.bind(this);
  };

  fetchArtists = () => {
    this.props.getArtist();
  };

  render = () => <button onClick={this.fetchArtists}>get artist</button>;
}

export default connect(null, {getArtist})(Artists);
