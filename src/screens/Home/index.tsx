import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from './style';
import { Tarefas } from '../../components/tarefas';
import { useState } from 'react';


export default function Home() {

    const [ atividade, setAtividade] = useState<string[]>([])
    const [atividadeText, setAtividadeText] = useState('')

    function toqueButtonAdd(){
        if (setAtividadeText.includes = '')
        
        setAtividade(prevState => [...prevState, atividadeText]);
        setAtividadeText('');
    } 
    function handleTarefaRemove(){
        console.log('vc clicou em remover')
    }  
    return (
        <View style={styles.container}>
            <Text  style={styles.containerText}>
                To-do
            </Text>
            <Text style={styles.containerTextSub}>
                List
            </Text>

            <View style={styles.adicionarTarefa}>
                <TextInput style={styles.textInput} 
                placeholder='Digite sua nova tarefa'
                placeholderTextColor={'#9caaafba'}
                onChangeText={setAtividadeText}
                value={atividadeText}/>

                <TouchableOpacity style={styles.button} onPress={toqueButtonAdd}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>


            <ScrollView showsVerticalScrollIndicator = {false}>
                {atividade.map((tarefa, index) => (
                    <Tarefas
                        key={index}
                        tarefa={tarefa}
                        onRemove={() => handleTarefaRemove()} 
                    />
                ))}    
            </ScrollView>
            

        </View>

    );
};