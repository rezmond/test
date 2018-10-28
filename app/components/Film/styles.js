
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  fieldHeader: {
    fontWeight: 'bold',
  },
  field: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: null,
    flex: 1,
  },
  cardItem: {
    '@media ios': {
      backgroundColor: '#cce5ff',
    },
    '@media android': {
      backgroundColor: '#d4edda',
    },
  },
});
