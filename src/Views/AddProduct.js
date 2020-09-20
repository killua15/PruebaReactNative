import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Input, Select, SelectItem, IndexPath, Button } from '@ui-kitten/components';
import { Picker, Icon } from 'native-base';
import { ProductAction } from '../Redux/actions/actionGetProducts'
import { SetProductAction } from '../Redux/actions/actionSetProduct'
import Header from '../Components/Header'
const Forms = (props) => {
    const deparmet = useSelector((state) => state.getDepartmet.data);
    const product = useSelector((state) => state.getProduct.data);
    const category = useSelector((state) => state.getCategory.data);
    const [productText, setTextProduct] = useState('');
    const [costText, setTextCost] = useState('');
    const [imageText, setTextImage] = useState('');
    //const [cantProduct, setCantProduct] = useState(0);
    const [selectedValueDeparmet, setSelectedValueDeparmet] = useState(0);
    const [selectedValueCategory, setSelectedValueCategory] = useState(0);
    const dispatch = useDispatch();
    const cantProduct = useSelector((state) => console.log(state.getProduct.data[state.getProduct.data.length - 1].id));


    return (
        <Layout style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={styles.text} category='h5'>New Product</Text>
            <Input
                style={{ marginLeft: 10, marginRight: 10 }}
                value={productText}
                label='Product'
                placeholder='Text name of Product'
                onChangeText={nextValue => setTextProduct(nextValue)}
            />
            <Input
                style={{ marginLeft: 10, marginRight: 10 }}
                value={costText}
                label='Costo'
                placeholder='Text Cost of Product'
                onChangeText={nextValue => setTextCost(nextValue)}
            />
            <Input
                style={{ marginLeft: 10, marginRight: 10 }}
                value={imageText}
                label='Image'
                placeholder='Copy URL of Image of Product'
                onChangeText={nextValue => setTextImage(nextValue)}
            />
            <Picker
                style={{
                    marginTop: 10,
                    width: 360

                }}
                mode="dropdown"
                iosIcon={<Icon name="chevron-down-outline" type="Ionicons" />}

                placeholder="Select Departmen"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selectedValueDeparmet}
                onValueChange={(el) => setSelectedValueDeparmet(el)}
            >
                {
                    deparmet.map(el => {
                        return <Picker.Item label={el.name} value={el.id} />
                    })
                }

            </Picker>
            <Picker
                style={{
                    marginTop: 10,
                    width: 360

                }}
                mode="dropdown"
                iosIcon={<Icon name="chevron-down-outline" type="Ionicons" />}

                placeholder="Select Category"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selectedValueCategory}
                onValueChange={(el) => setSelectedValueCategory(el)}
            >
                {
                    category.map(el => {
                        return <Picker.Item label={el.name} value={el.id} />
                    })
                }

            </Picker>

            <Button onPress={() => dispatch(SetProductAction(cantProduct, productText, costText, imageText, selectedValueDeparmet, selectedValueCategory))} style={styles.button}>
                ACTIVE
            </Button>
        </Layout>
    )

}
export default AddProduct = () => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Header back={true}></Header>
            <Forms></Forms>
        </ApplicationProvider>
    )


}

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
        margin: 10,
        marginTop: 10
    },
    text: {

        marginTop: 10,
        textAlign: 'center',
    }
});