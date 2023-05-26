import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedOut } from '../redux/actions/AuthActions';
import { ParamListBase, Route } from '@react-navigation/native';
import { NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack';

type AppBarProps = {
    route: Route<string, object | undefined>,
    options: NativeStackNavigationOptions,
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>,
    back?: {title : string} | undefined,
}

export default function AppBar(props: AppBarProps) {
    const title = getHeaderTitle(props.options, props.route.name);

    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => dispatch(setLoggedOut());

    return (
        <Appbar.Header>
            {props.back ? <Appbar.BackAction onPress={props.navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {!props.back ? (
                <Menu
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    anchor={
                        <Appbar.Action icon="dots-vertical"
                            onPress={() => setVisible(true)} />
                    }>
                    <Menu.Item onPress={handleLogout} title="Sign out" leadingIcon="logout"/>
                </Menu>
            ) : null}
        </Appbar.Header>
    );
}