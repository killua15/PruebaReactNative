import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native-elements';
import {
    ApplicationProvider,
    Layout,
    Text,
    Card,
    ListItem,
    List,
    Button,
} from '@ui-kitten/components';

const Footer = (props) => {
    return (
        <View style={[props.style, styles.footerContainer]}>
            <Button style={styles.footerControl} size="small">
                BUY
      </Button>
        </View>
    );
};
const MyCard = (item) => {
    const deparmet = useSelector((state) => state.getDepartmet.data);
    const category = useSelector((state) => state.getCategory.data);

    const CardDeparment = deparmet.find((el) => {
        return el.id === item.item.deparmet;
    });
    const CardCategory = category.find((el) => {
        return el.id === item.item.deparmet;
    });
    console.log(CardCategory);
    return (
        <Layout style={styles.topContainer} level="1">
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 10,
                    marginRight: 10,
                }}>
                <Text category="h6">{item.item.name}</Text>
                <Text> ${item.item.cost}</Text>
            </View>
            <Card style={styles.card}>
                <Image
                    style={{ width: 300, height: 200 }}
                    source={{ uri: item.item.image }}></Image>
            </Card>
            <View
            >
                {
                    CardDeparment !== undefined && CardCategory !== undefined ?
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <Text>Department : {CardDeparment.name}</Text>
                            <Text>Category : {CardCategory.name}</Text>
                        </View>


                        :
                        null
                }

            </View>
            <Footer></Footer>
        </Layout>
    );
};
export default renderItem = ({ item, index }) => {
    return <MyCard item={item}></MyCard>;
};
const styles = StyleSheet.create({
    topContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
    button: {
        margin: 2,
    },
});
