import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  participantName: {
    flex: 1,
    fontSize: 14,
    color: '#FDFCFE',
    paddingLeft: 15,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#E23E44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFF',
    fontSize: 30,
  },
})

export default styles
