import React, { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import CheckBox from "@react-native-community/checkbox";
import FormInput from "../../../components/FormInput";
const UnequalExpense = ({ route }) => {
  const [expense, setExpense] = useState([])
  const [sub, setSub] = useState()
  console.log(sub)
  const GroupInformation = useSelector(state => state.GetGroupInformationReducer?.userData)
  const { amount } = route.params
  const amt = `0.00`
  function handleChangeText(value, index) {
    const newInputValues = [...expense]
    newInputValues[index] = value
    setExpense(newInputValues)
  }
  const sum = expense.reduce((accumulate, currentValue) => {
    const value = parseFloat(currentValue)
    return isNaN(value) ? accumulate : accumulate + value
   
  }, 0)

 
  console.log(sub)
  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
        {
          GroupInformation?.group?.members.map((mem, index) => {
            return (
              <View style={{ height: 60, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', width: '75%', alignItems: 'center' }}>
                  <Image
                    source={{ uri: mem?.picture?.large }}
                    style={{ height: 40, width: 40, borderRadius: 20, }}
                  />
                  <Text style={{ marginLeft: 10 }}>{mem?.first_name + " " + mem?.last_name}</Text>
                </View>
                <View style={{ width: '25%', height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: '500' }}>{`\u20B9`}</Text>
                  <FormInput
                    editable={true}
                    placeholder="0.00"
                    containerStyle={{ width: '90%' }}
                    inputStyle={{ textAlign: 'left', fontSize: 18, fontWeight: '500' }}
                    keyboardType="numeric"
                    autoCompleteType="off"
                    autoCapitalize="none"
                    maxLength={50}
                    value={expense[index]}
                    multiline={false}
                    underlineColorAndroid={'black'}
                    onChange={(value) => handleChangeText(value, index)}
                  />
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <View style={{ height: 70, width: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{`\u20B9`} {sum != null ? sum : `0.00`} of {`\u20B9`} {amount != null && amount != undefined && amount != "" ? amount : amt}</Text>
        <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{`\u20B9`} {amount-sum} left</Text>
      </View>
    </View>
  )
}
export default UnequalExpense;