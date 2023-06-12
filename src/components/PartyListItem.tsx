import { List, useTheme } from "react-native-paper";
import PartyListItemTitle from "./PartyListItemTitle";
import CharacterItem from "./CharacterItem";
import { useState } from "react";
import { Party } from "../model/Party";
import { CharacterPartial } from "../model/CharacterPartial";
import { Image, StyleSheet } from "react-native";

type PartyListItemProps = {
    party : Party
}

export default function PartyListItem (props : PartyListItemProps) {
    const [expanded, setExpanded] = useState(false);
    const { colors } = useTheme();
    const styles = makeStyle(colors);

    const party = props.party;
    return (
        <List.Accordion title={<PartyListItemTitle party={party}/>} 
                        expanded={expanded}
                        onPress={() => setExpanded(!expanded)}
                        style={styles.accordion}
                        >
            {party.characters.map((character : CharacterPartial) => <CharacterItem character={character}/>)}
        </List.Accordion>
    )
}

const makeStyle = (colors : any) => StyleSheet.create({
    accordion: {
        // backgroundColor: colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 2,
        marginLeft: 2,
    }
})