import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image  } from 'react-native';

function GoalInput(props) {
    const [ goalText, setGoalText ] = useState('');

    function goalInputHandler(text) {
        setGoalText(text);
    };

    function addGoalHandler(){
        props.onAddGoal(goalText);
        setGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='fade' >
            <View style={styles.inputRow}>
                <Image style={styles.image} 
                source={require('../assets/images/goal.png')} />
                <TextInput 
                style={styles.input} 
                placeholder="Digite um objetivo" 
                onChangeText={goalInputHandler}
                value={goalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                        title="+Objetivo" 
                        onPress={addGoalHandler} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button
                        title='Cancelar' 
                        onPress={props.onCancel} 
                        color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputRow: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});