import React, { useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';
export default HeaderMultipleIconExample = (props) => {
    const [backBtn, setBackBtn] = useState(props.back);
    const navigation = useNavigation();
    return (

        <Header>
            {
                backBtn == true ?
                    <Left >
                        <Button transparent onPress={() => navigation.goBack()}>
                            <Icon name='chevron-back-outline' type="Ionicons" />

                        </Button>
                    </Left>
                    :
                    <Left >
                        <Button transparent>

                        </Button>
                    </Left>
            }

            <Body>
                <Title>Products</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='add' onPress={() => navigation.navigate("AddProduct")} />
                </Button>
                <Button transparent >
                    <Icon name='refresh' />
                </Button>

            </Right>
        </Header>

    );

}