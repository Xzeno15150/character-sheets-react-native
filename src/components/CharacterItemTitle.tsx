import { Image, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { mapElementToIconName } from "../utils/ElementIconMapper";
import Icon from 'react-native-paper/src/components/Icon'
import { CharacterPartial } from "../model/CharacterPartial";

type CharacterItemTitleProps = {
    character : CharacterPartial
}

export default function CharacterItemTitle(props : CharacterItemTitleProps) {
    const character = props.character;
    const { colors } = useTheme();
    const styles = makeStyles(colors);
    return (
        <View style={styles.container}>
            <Icon size={30} source={mapElementToIconName(character.element)}/>
            <View style={{...styles.container, alignItems: "baseline"}}>
                <Text style={styles.name}>{character.name}</Text> 
                <Text style={styles.level}>lvl. {character.level}</Text>
            </View>
        </View>
    )
}

const gap = 10;

const makeStyles = (colors: any) => StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: (gap / -2),
        flex:1,
    },
    name: {
        marginHorizontal: (gap / 2),
        fontWeight: "bold",
        fontSize: 20,
    },
    level : {
        color: colors.outline,
        fontStyle: "italic",
    }
})