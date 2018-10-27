import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';

import { getStateSlice } from './reducer';

function mapStateToProps(state) {
  const stateSlice = getStateSlice(state);
  return {
    items: stateSlice.list,
  };
}

@connect(mapStateToProps)
class CatsList extends React.PureComponent {
  static propTypes={
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  render() {
    const { items } = this.props;
    return (
      <View>
        <Text>{
          items.map(i => i.url).join('\n')
        }</Text>
      </View>
    );
  }
}

export default CatsList;
