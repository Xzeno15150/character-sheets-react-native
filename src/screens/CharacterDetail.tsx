import {FlatList, Image, StyleSheet, View} from "react-native";
import {ProgressBar, Text} from "react-native-paper";

// @ts-ignore
export default function ({ route }) {
    const { character } = route.params;

    return (
      <View>
          <Image source={require("../../assets/user-default.png")} style={styles.characterImage}/>
          <View style={styles.section}>
              <Text style={styles.title}>Nom</Text>
              <Text style={[styles.text, styles.subsection]}>{character.name}</Text>
          </View>
          <View style={styles.section}>
              <Text style={styles.title}>HP</Text>
              <View style={[styles.subsection, styles.hcontainer]}>
                  <View style={styles.hpBarContainer}>
                      <ProgressBar progress={character.healthPoint.current / character.healthPoint.max} color="#229922"/>
                  </View>
                  <Text>{character.healthPoint.current}/{character.healthPoint.max}</Text>
              </View>
          </View>
          <View style={styles.section}>
              <Text style={styles.title}>Statistics</Text>
              <View style={[styles.listContainer, styles.subsection]}>
                  <Text>Body: {character.stats.body}</Text>
                  <Text>Mind: {character.stats.mind}</Text>
                  <Text>Charisma: {character.stats.charisma}</Text>
              </View>
          </View>
          <View style={styles.section}>
              <Text style={styles.title}>Items</Text>
              <View style={styles.subsection}>
                  <FlatList contentContainerStyle={styles.listContainer} data={character.items}
                            renderItem={({item}) => (<Text>{item.name}</Text>)}
                            keyExtractor={(item : ItemPartial) => item.id.toString()}/>
              </View>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    characterImage: {
        width: "20%",
        height: undefined,
        aspectRatio: 1.1,
        marginLeft: "40%"
    },
    title: {
        fontWeight: "bold"
    },
    hcontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: "5%",
        width: "100%",
    },
    hpBarContainer: {
        width: "80%",
    },
    listContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    text: {
        paddingLeft: "10%"
    },
    section: {
        marginVertical: "3%"
    },
    subsection: {
        marginTop: "2%"
    }
})