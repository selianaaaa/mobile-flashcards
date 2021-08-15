import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const DeskCard = ({ desk, handleDeleteClick }) => {
  const navigation = useNavigation();

  const { id, title, questions } = desk;

  const deleteCard = () => {
    Alert.alert('Warning', `Do you really want to delete ${title} deck ?`, [
      {
        text: 'Yes',
        onPress: () => handleDeleteClick(id),
      },
      { text: 'No' },
    ]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Deck', { deskId: id })}
    >
      <View style={styles.card}>
        <TouchableOpacity style={styles.removeBtn} onPress={deleteCard}>
          <Ionicons name="close" size={29} color="#26a522" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardAmount}>{questions.length} cards</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 20,
    backgroundColor: 'white',
    height: 200,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#0c460a',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardAmount: {
    marginTop: 10,
    fontSize: 17,
    color: '#1e7e1b',
  },

  removeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 15,
  },
});

export default DeskCard;