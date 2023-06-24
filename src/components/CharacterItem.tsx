import { List, useTheme } from "react-native-paper"
import CharacterItemTitle from "./CharacterItemTitle"
import UsernameText from "./UsernameText"
import { CharacterPartial } from "../model/CharacterPartial"
import { Image, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

type CharacterItemProps = {
    character: CharacterPartial,
    touchable?: boolean
}

export default function CharacterItem(props: CharacterItemProps) {
    const character = props.character;
    const touchable = props.touchable;
    const { colors } = useTheme();
    const styles = makeStyle(colors);
    const navigation = useNavigation();
    return (
        <List.Item
            key={character.id}
            title={<CharacterItemTitle {...props} />}
            description={<UsernameText username={character.user.username} />}
            style={styles.item}
            left={()=> <Image style={styles.image} source={require("../../assets/default-character.png")}/>}
            right={touchable ? props => <List.Icon {...props} icon="chevron-right"/> : undefined}
            onPress={()=>
                // @ts-ignore
                navigation.navigate("CharacterDetail", { character: character})}
            disabled={!touchable}
            />
    )
}

//@ts-ignore
const makeStyle = (colors) => StyleSheet.create({
    item: {
        marginLeft: 10,
        paddingLeft: 5,
        backgroundColor: colors.background,
        borderRadius: 5,
        margin: 5
    },
    image: {
        width: undefined,
        height: undefined,
        aspectRatio: 1,
        paddingLeft: "20%",
        borderColor: colors.primary,
        borderRadius: 90,
        borderWidth: 5,
    }
})