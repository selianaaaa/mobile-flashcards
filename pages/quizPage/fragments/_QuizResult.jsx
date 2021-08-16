import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BaseButton } from '../../../components';

const QuizResult = ({
  deskId,
  correctAmount,
  incorrectAmount,
  handleRestart,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Quiz Result</Text>

      <View style={styles.resultWrapper}>
        <View style={styles.result}>
          <Text style={styles.resultNum}>{correctAmount}</Text>
          <Text style={styles.resultText}>Correct Answers</Text>
        </View>

        <View style={styles.result}>
          <Text style={styles.resultNum}>{incorrectAmount}</Text>
          <Text style={styles.resultText}>Incorrect Answers</Text>
        </View>
      </View>

      <View style={styles.btnsWrapper}>
        <BaseButton
          pressHandler={handleRestart}
          style={styles.btn}
          textStyle={styles.btnText}
        >
          Restart Quiz
        </BaseButton>

        <BaseButton
          pressHandler={() => navigation.navigate('Desk', { deskId: deskId })}
          style={styles.btn}
          textStyle={styles.btnText}
        >
          Back to Desk
        </BaseButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 10,
    backgroundColor: 'white',
    height: 400,
    width: 300,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#0c460a',
  },

  resultWrapper: {
    width: 300,
    alignItems: 'center',
  },

  result: {
    marginTop: 30,
    alignItems: 'center',
  },

  resultNum: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0c460a',
  },
  resultText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e7e1b',
  },

  btnsWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    marginHorizontal: 7,
    width: 125,
    backgroundColor: '#0c460a',
    borderRadius: 25,
  },
  btnText: {
    fontSize: 15,
  },
});

export default QuizResult;