import {StyleSheet, Alert} from 'react-native';

const Confirmation = ({title,Msg,onPress,onPress2}) => {

    Alert.alert(title, Msg, [
      {
        text: 'Cancel',
        onPress: onPress,
        style: 'cancel',
      },
      {text: 'OK', onPress:onPress2 },
    ]);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Confirmation;