import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

export default function PokemonCard({
    name,
    type,
    hp,
    image,
    moves = [],
    weaknesses = []
}){

    const { borderColor, emoji } = getTypeDetails(type);
    
    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>

                <Text style={styles.hp}>❤️{hp}</Text>

            </View>

            <Image source={image} style={styles.image} accessibilityLabel={name}/>

            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>
            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
            </View>
            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknessesText}>Weaknesses: {weaknesses.join(', ')}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
    }, 
    image: {

        alignSelf: 'center',
        width: "100%",
        height: 200,
        marginBottom: 16,
        resizeMode: 'contain',
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',

        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 8,
    },
    typeEmoji: {
        fontSize: 24,
        marginRight: 8,
    },
    typeText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    movesContainer: {
        marginTop: 10,
    },
    movesText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    weaknessesContainer: {
        marginTop: 10,
    },
    weaknessesText: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
})