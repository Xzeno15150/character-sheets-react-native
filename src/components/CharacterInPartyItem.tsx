import { List, useTheme } from "react-native-paper"
import CharacterInPartyItemTitle from "./CharacterInPartyItemTitle"
import UsernameText from "./UsernameText"
import { CharacterPartial } from "../model/CharacterPartial"
import { Image, StyleSheet } from "react-native"

type CharacterInPartyItemProps = {
    character : CharacterPartial,
}

export default function CharacterInPartyItem(props : CharacterInPartyItemProps) {
    const character = props.character;
    const { colors } = useTheme();
    const styles = makeStyle(colors);
    return (
        <List.Item key={character.id} 
                    title={<CharacterInPartyItemTitle {...props}/>}
                    description={<UsernameText username={character.user.username}/>}
                    style={styles.item}
                    left={()=><Image style={styles.image} source={require("../../assets/default-character.png")}/>}/>
    )
}

const  makeStyle = (colors : any) => StyleSheet.create({
    item: {
        marginLeft: 10,
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