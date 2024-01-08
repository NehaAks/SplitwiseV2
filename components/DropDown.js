import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS, icons, SIZES } from '../constants';
import { dynamicSize } from '../utils/dimension.style'

const DropDown = ({
    placeholder = '',
    style,
    value = '',
    data,
    onChange,
    color,
    arrowStyle,
    search,
    selectedText,
    disable,
    containerStyle,
    maxHeight = 200,
    renderLeftIcon

}) => {

    return (
        <Dropdown
            style={[styles.dropdown, style]}
            data={data}
            search={search}
            searchPlaceholder="Search"
            labelField="label"
            valueField="value"
            maxHeight={dynamicSize(maxHeight)}
            containerStyle={containerStyle}
            placeholder={placeholder}
            disable={disable}
            placeholderStyle={[styles.placeholderStyle, color]}
            selectedTextStyle={[styles.selectedTextStyle, selectedText]}
            inputSearchStyle={{ color: COLORS.black }}
            iconStyle={[styles.iconStyle, arrowStyle]}
            renderLeftIcon={renderLeftIcon}
            renderRightIcon={() => <Image
                source={icons.dropdown}
                resizeMode='contain'
                style={{
                    width: dynamicSize(10),
                    height: dynamicSize(10),
                    marginRight: dynamicSize(15)
                }} />}
            value={value}

            onChange={item => {
                onChange(item.value)
            }}

        />

    );
};

export default DropDown;

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: COLORS.white,
        borderWidth: 0.7,
        borderColor: COLORS.gray,
        width: '100%',
        height: dynamicSize(45),
        borderRadius: 5,
        alignSelf: 'center',
    },
    icon: {
        marginRight: dynamicSize(20),
        width: dynamicSize(18),
        height: dynamicSize(18),
    },
    item: {
        paddingVertical: dynamicSize(17),
        paddingHorizontal: dynamicSize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textItem: {
        flex: 1,
        fontSize: SIZES.h3,
        marginLeft: dynamicSize(10)
    },
    placeholderStyle: {
        color: COLORS.gray20,
        fontWeight: '400',
        fontSize: SIZES.h4,
        paddingLeft:dynamicSize(10)
    },
    selectedTextStyle: {
        fontWeight: '400',
        fontSize: SIZES.h4,
        paddingLeft: dynamicSize(10),
        color: COLORS.black
    },
    iconStyle: {
        right: dynamicSize(10),
        width: dynamicSize(30),
        tintColor: COLORS.black,
    }
});