import React , {useEffect} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Header({navigation , title}) {

    return (
        <View style={[styles.marginTop_35 , styles.marginHorizontal_15 , styles.directionRowSpace , styles.marginBottom_20]}>

            <View style={[styles.directionRow]}>
                {
                    title === i18n.t('profile') ?
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight:10}}>
                            <Image source={require('../../assets/images/back.png')} style={[styles.icon20 , styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginRight:10}}>
                            <Image source={require('../../assets/images/menu.png')} style={[styles.icon25 , styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                }

                <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{title}</Text>
            </View>

            {
                title !== i18n.t('profile') ?
                    <View style={[styles.directionRow]}>
                        <TouchableOpacity style={{marginRight:10}}>
                            <Image source={require('../../assets/images/notification.png')} style={[styles.icon20]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('profile')}
                                          style={[styles.borderMstarda , styles.Radius_50, styles.icon40 ,{overflow:'hidden'}]}>
                            <Image source={require('../../assets/images/pic_profile.png')} style={[styles.Width_100 , styles.heightFull]} resizeMode={'cover'} />
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }

        </View>
    );
}

export default Header;


