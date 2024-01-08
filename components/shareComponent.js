import React from 'react';
import { Alert, Share, View, Button } from 'react-native';


const ShareComponent = async ({children}) => {
    // console.log(children)
    try {
        const result = await Share.share({
            message:children
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        Alert.alert(error.message);
    }

}

export default ShareComponent;