import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import CheckBox from "@react-native-community/checkbox";
const EqualExpense = ({ route }) => {
  const [isSelected, setIsSelected] = useState()
  const [checkboxArr, setCheckBoxArr] = useState([])
  const [userList, setUserList] = useState(GroupInformation?.group?.members?.length)
  const GroupInformation = useSelector(state => state.GetGroupInformationReducer?.userData)
  const { amount } = route.params
  const money = amount / checkboxArr?.length

useEffect(()=>{
SelectAll()
},[])

  function checkbox(value) {
    if (checkboxArr?.includes(value)) {
      setCheckBoxArr(item => item.filter(item => item !== value))
    }
    else {
      setCheckBoxArr(prev => [value, ...prev])
    }

  }



  function SelectAll() {
    if (checkboxArr?.length != GroupInformation?.group?.members?.length) {
      var arr = []
      for (var i = 0; i < GroupInformation?.group?.members?.length; i++) {
        if (checkboxArr?.includes(GroupInformation?.group?.members[i]?.id)) {
          continue;
        }
        else {
          arr.push(GroupInformation?.group?.members[i]?.id)
        }
      }
      setCheckBoxArr(prev => [...arr, ...prev])
    }
    else {
      setCheckBoxArr([])
    }
  }

  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
        {
          GroupInformation?.group?.members.map(mem => {

            return (
              <TouchableOpacity
                onPress={() => checkbox(mem.id)}
                style={{ height: 60, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', width: '92%', alignItems: 'center' }}>
                  <Image
                    source={{ uri: mem?.picture?.large }}
                    style={{ height: 40, width: 40, borderRadius: 20, }}
                  />
                  <Text style={{ marginLeft: 10 }}>{mem?.first_name + " " + mem?.last_name}</Text>
                </View>
                <CheckBox
                  value={checkboxArr?.includes(mem.id)}
                  onValueChange={() => checkbox(mem.id)}
                />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      <View style={{ height: 70, width: '100%', backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{`\u20B9`}{`${money != '' ? money.toFixed(2) : `0.00`}/person`}</Text>
          <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{`(${checkboxArr?.length} people)`}</Text>
        </View>
        <View style={{ width: '30%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>{'All'}</Text>
          <CheckBox
            value={checkboxArr?.length == GroupInformation?.group?.members?.length}
            onValueChange={() => SelectAll()}
          />
        </View>
      </View>
    </View>
  )
}
export default EqualExpense;