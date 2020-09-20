import React, { useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';
export default HeaderMultipleIconExample = (props) => {
    const [backBtn, setBackBtn] = useState(props.back);
    const navigation = useNavigation();
    return (
        <Input
            value={productText}
            label='Product'
            placeholder='Text name of Product'
            onChangeText={nextValue => setTextProduct(nextValue)}
        />
    );

}





