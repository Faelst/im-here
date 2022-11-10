import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type ParticipantProps = {
    name: string;
    onRemove: (name: string) => void;
};

export function Participant({ name, onRemove }: ParticipantProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.participantName}>{name}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => onRemove(name)}>
                <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
        </View>
    );
}

