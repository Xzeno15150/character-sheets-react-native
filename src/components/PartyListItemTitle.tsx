import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import UsernameText from "./UsernameText";
import { Party } from "../model/Party";

type PartyListItemTitleProps = {
    party: Party
};

export default function PartyListItemTitle(props : PartyListItemTitleProps) {
    const party = props.party;
    const styles = makeStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{party.name}</Text>
            <UsernameText username={party.owner.username}/>
        </View>
    );
};

const makeStyles = () => StyleSheet.create({
    container: {
        flex : 0.3,
    },
    name: {
        fontWeight: "bold",
        
    },
});