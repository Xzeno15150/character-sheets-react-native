import { StyleSheet } from "react-native"
import { Text, useTheme } from "react-native-paper";

type UsernameTextProps = {
    username? : string
}

export default function UsernameText(props : UsernameTextProps) {
    const { colors } = useTheme();
    const styles = makeStyles(colors);
    return (
        <Text style={styles.username}>#{props.username ?? "Unknown"}</Text>
    )
}

const makeStyles = (colors : any) => StyleSheet.create({
    username: {
        color: colors.secondary,
        fontStyle: "italic",
    },
})