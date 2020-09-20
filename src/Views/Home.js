import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import * as eva from '@eva-design/eva';
import { Image } from 'react-native-elements';
import { ProductAction } from '../Redux/actions/actionGetProducts'
import { DepartmentAction } from '../Redux/actions/actionGetDeparmet'
import { CategoriesAction } from '../Redux/actions/actionGetCategory'
import { ApplicationProvider, Layout, Text, ListItem, List, Button } from '@ui-kitten/components';
import Header from '../Components/Header'
import Card from '../Components/Card'

const list = []
//const selectedData = useSelector()
const HomeScreen = (props) => {

    return (
        <Layout style={{ flex: 1, backgroundColor: '#fff' }}>

            <List
                style={styles.container}
                data={props.selectedData.data}
                renderItem={Card}
            />
        </Layout>
    )
}

export default Home = () => {
    const selectedData = useSelector(state => state.getProduct)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ProductAction())
        dispatch(DepartmentAction())
        dispatch(CategoriesAction())

    }, [])


    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Header></Header>
            <HomeScreen selectedData={selectedData} />
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
        margin: 2,
    },
});