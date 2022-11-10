import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 15,
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 40,
    },
    eventDate: {
      color: '#6B6B6D',
    },
    input: {
        flex:1,
        height: 55,
        backgroundColor: '#1F1E25',
        borderRadius: 10,
        color: '#FDFCFE',
        padding: 15,
        fontSize: 18,
        marginRight: 15,
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#FFF',
        fontSize: 30,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 37
    },
    participantsTitle: {
      color: '#6B6B6D',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    emptyListText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 20,
    }
  });

  export default styles;
