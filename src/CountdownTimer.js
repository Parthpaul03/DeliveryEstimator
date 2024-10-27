// src/CountdownTimer.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const CountdownTimer = ({ cutoffHour = 17 }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = moment();
      const cutoff = moment().set({ hour: cutoffHour, minute: 0, second: 0 });
      const duration = moment.duration(cutoff.diff(now));

      if (duration.asSeconds() <= 0) {
        setTimeLeft('Cutoff time passed');
      } else {
        setTimeLeft(`${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [cutoffHour]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Time left for same-day delivery:</Text>
      <Text style={styles.timeLeft}>{timeLeft}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 16,
  },
  timeLeft: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default CountdownTimer;
