import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components";
import styles from "./styles";

export function Home() {
    const [participantName, setParticipantName] = useState("");
    const [participants, setParticipants] = useState<string[]>([]);

    const handleParticipantAdd = () => {
        if (participantName.trim() === "") {
            Alert.alert("Nome inválido", "Digite um nome para adicionar um participante");
            return;
        }

        if (participants.includes(participantName)) {
            Alert.alert('Participante já adicionado', 'Pedro já está na lista de participantes');
            return;
        }

        setParticipants([...participants, participantName]);
        setParticipantName("");
    };

    const handleParticipantRemove = (name: string) => {
        Alert.alert('Remover participante', `Deseja remover ${name} da lista?`, [{
            text: 'Não',
            style: 'cancel'
        }, {
            text: 'Sim',
            onPress: () => {
                const newList = participants.filter(participant => participant !== name);
                setParticipants(newList);
            }
        }]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome do participante..." placeholderTextColor="#6B6B6D" value={participantName} onChangeText={setParticipantName} />
                <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={handleParticipantAdd}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.participantsTitle}>Participantes</Text>

            <FlatList showsVerticalScrollIndicator={false} data={participants} keyExtractor={item => item} renderItem={({ item }) => <Participant name={item} onRemove={handleParticipantRemove} />} ListEmptyComponent={<Text style={styles.emptyListText}>Ninguém chegou ainda no evento ? {'\n'}Adicione participantes a sua lista...</Text>} />
        </View>
    );
}