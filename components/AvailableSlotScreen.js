import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import parkingService from '../services/parkingService';

const AvailableSlotsScreen = () => {
  const [nbSlots, setNbSlots] = useState(0);
  const [wait, setWait] = useState(7);
  const [message, setMessage] = useState('');

  const getAvailableSlots = async () => {
    parkingService.getState()
      .then(response => {
        state = response.data.state
        setNbSlots(state.slots)
        setNbSlots(state.slots) 
        if(state.has_user_came) {
          if(state.affectation_status !== 'error') {
            if(state.affectation_status === 'affected' && state.user_place > 0) {
              setMessage(`PLACE ${state.user_place} HAS BEEN AFFECTED TO YOU`)
            }
          }
          else {
            setMessage(`AVAILABLE SLOTS : ${state.slots}`)
          }
        } else {
          setMessage(`AVAILABLE SLOTS : ${state.slots}`)
        }
      })

      .catch(error => console.error(error));
  }

  useEffect(() => {
    // Call the API every second
    const intervalId = setInterval(() => {
      getAvailableSlots()
      
      
    }, 2000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  heading: {  
    fontSize: 46,
    color : '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AvailableSlotsScreen;
