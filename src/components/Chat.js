import React, {useEffect, useRef} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, I18nManager ,FlatList} from "react-native";
import {Container, Content, Card, Item, Label, Input, Form, Icon} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import {useSelector} from "react-redux";
import Header from '../Common/Header';

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Chat({navigation}) {

    const flatListRef = useRef();

    const notifications = [
        {id:'0' , sender_id:'0' , body:'نص رساله لنص هيتم تغييره'},
        {id:'1' , sender_id:'1' , body:'تم العثور علي طلب مطابق'},
        {id:'2' , sender_id:'0' , body:'تم العثور علي طلب مطابق'},
        {id:'3' , sender_id:'1' , body:'تم العثور علي طلب مطابق'},
    ];

    useEffect(() => {
        let endIndex = notifications.length - 1;
        setTimeout(() => flatListRef.current.scrollToIndex({animated: true, index: endIndex}),500);
    }, []);


    const getItemLayout = (data, index) => (
        { length: 50, offset: 50 * index, index }
    );

    function Item({ title ,body , time , id , sender_id, index }) {
        if(sender_id == 1){
            return (
                <View style={[styles.chatCard ,styles.marginBottom_10,{ backgroundColor: COLORS.orange, borderTopRightRadius:0 }]}>
                    <Text style={[styles.textRegular , styles.text_black , styles.textSize_13, styles.alignStart ,
                        {flexWrap:'wrap', writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' , flex:1}]}>{body}</Text>
                </View>
            );
        }
        return (
            <View style={[styles.chatCard ,styles.marginBottom_10,{ backgroundColor: COLORS.green, borderBottomLeftRadius:0}]}>
                <Text style={[styles.textRegular , styles.text_White , styles.textSize_13, styles.alignStart ,
                    {flexWrap:'wrap', writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' , flex:1}]}>{body}</Text>
            </View>
        );
    }

    return (
        <Container>
            <Content scrollEnabled={false} contentContainerStyle={[styles.bgFullWidth , styles.bg_green]}>

                <Header navigation={navigation} title={ i18n.t('chat') }/>

                <View style={[styles.bgFullWidth,styles.paddingHorizontal_20 ,styles.bg_White,
                    styles.Width_100, styles.paddingTop_20,
                    {borderTopRightRadius:50 , borderTopLeftRadius:50}]}>

                    <View style={[{height:height - 115}]}>

                        <FlatList
                            data={notifications}
                            ref={flatListRef}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                title={item.title}
                                body={item.body}
                                time={item.time}
                                sender_id={item.sender_id}
                                id={item.id}
                                index={index}
                            />}
                            keyExtractor={item => item.id}
                            getItemLayout={getItemLayout}
                            // onContentSizeChange={()=> flatListRef.scrollToEnd({animated: true})}
                             // extraData={selected}
                        />

                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default Chat;


