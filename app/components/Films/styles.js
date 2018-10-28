
import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const FILM_ICON_WIDTH = 50;
const ITEM_INDENT = 20;

export default EStyleSheet.create({
  $underlayColor: '$border',
  filmIcon: {
    width: FILM_ICON_WIDTH,
    height: FILM_ICON_WIDTH,
  },
  separator: {
    marginLeft: ITEM_INDENT,
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  listItemText: {
    color: '#787878',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  listItem: {
    marginLeft: ITEM_INDENT,
    marginRight: ITEM_INDENT,
    paddingVertical: 10,
  },
});
