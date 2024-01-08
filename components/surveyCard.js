import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Card from '../components/Card'
import { COLORS, icons, images } from "../constants";
import { dynamicSize } from "../utils/dimension.style";

const SurveyCard = ({
    surveyCardStyle,
    cardInnerView,
    categoriesName,
    surveyName,
    no_of_survey,
    categoriesNameStyle,
    surveyNameStyle,
    no_of_surveyStyle,
    out_of_surveyStyle,
    out_of_survey,
    source,
    imageStyle
}) => {
    return (
        <View>
            <TouchableOpacity>
                <Card style={[Styles.cardStyle, surveyCardStyle]}>
                    <View style={[cardInnerView, { width: '60%' }]}>
                        <Text numberOfLines={1} style={[Styles.txtStyle, categoriesNameStyle]}>{categoriesName}</Text>
                        <Text numberOfLines={1} style={[Styles.txtStyle, surveyNameStyle]}>{surveyName}</Text>
                        <Text numberOfLines={1} style={[Styles.txtStyle, no_of_surveyStyle]}>{no_of_survey} / <Text style={[Styles.txtStyle, out_of_surveyStyle]}>{out_of_survey}</Text></Text>
                    </View>
                    <Image resizeMode="contain" source={source} style={[Styles.imgStyle, imageStyle]} />
                </Card>
            </TouchableOpacity>
        </View>
    )
}
export default SurveyCard;

const Styles = StyleSheet.create({
    cardStyle: {
        width: '100%',
        minHeight: dynamicSize(100),
        backgroundColor: COLORS.blue1,
        marginTop: dynamicSize(10),
        paddingHorizontal: dynamicSize(30),
        padding: dynamicSize(10),
        flexDirection: 'row',

    },
    txtStyle: {
        fontSize: dynamicSize(16),
        marginBottom: dynamicSize(5)
    },
    imgStyle: {
        width: dynamicSize(80),
        height: dynamicSize(90),
        position: 'absolute',
        right: dynamicSize(10),
        alignSelf: 'center'
    }
})