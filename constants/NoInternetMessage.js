import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { dynamicSize } from '../utils/dimension.style';
import Modal from 'react-native-modal'
import { COLORS, FONTS } from './theme';


const NoInternetModal = ({ show }) => {
  return (
    <>
      {
        show && (<View
          style={styles.modal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              No Internet
            </Text>
          </View>
        </View>)
      }
    </>
  )
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: dynamicSize(55)
  },
  modalContainer: {
    backgroundColor: COLORS.red1,
    alignItems: 'center',
  },
  modalText: {
    ...FONTS.body4,
    color: COLORS.white,
    marginTop: dynamicSize(14),
    textAlign: 'center',
    marginBottom: dynamicSize(10),
  },
})
export default NoInternetModal