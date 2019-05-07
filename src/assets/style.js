import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({
  whiteColor: {
    color: '#fff',
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  font28: {
    fontSize: 28
  },
  app: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#eee'
  },
  productView: {
    flex: 1,
    flexDirection: 'column',
    margin: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  productTitle: {
    fontSize: 18,
    marginBottom: 14,
  },
  productSubtitle: {
    fontSize: 14,
    marginBottom: 14,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productPrice: {
    fontSize: 38,
    color: '#555'
  },
  productCountBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  countLabel: {
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countLabelText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  plusBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1fbbca',
  },
  minusBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#555',
  }

});

module.exports = styles;
