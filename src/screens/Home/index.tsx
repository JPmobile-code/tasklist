import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './style';
import { Tarefas } from '../../components/tarefas';

export default function Home() {

    function toqueButtonAdd(){
        console.log('voce clicou no butao +');
    } 
    function handleTarefaRemove(atividadeType:string){
        console.log(`clicou na lixeirinha para eliminar a tarefa: ${atividadeType} da sua lista`);
    }  
    return (
        <View style={styles.container}>
            <Text  style={styles.containerText}>
                To-do
            </Text>
            <Text style={styles.containerTextSub}>
                List
            </Text>
            <StatusBar style="auto" 
            />

            <View style={styles.adicionarTarefa}>
                <TextInput style={styles.textInput} 
                placeholder='Digite sua nova tarefa'
                placeholderTextColor={'#9caaafba'}
                />

                <TouchableOpacity style={styles.button} onPress={toqueButtonAdd}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <Tarefas atividade ='Limpar casa' onRemove={() => handleTarefaRemove ('Limpar casa')}/>
            <Tarefas atividade ='Lavar Carro' onRemove={() => handleTarefaRemove ('Lavar Carro')}/>
            <Tarefas atividade ='Estudar' onRemove={() => handleTarefaRemove ('Estudar')}/> 
            <Tarefas atividade ='Lavar Roupa' onRemove={() => handleTarefaRemove ('Lavar Roupa')}/>
            <Tarefas atividade ='Cuidar do cachorro' onRemove={() => handleTarefaRemove ('Cuidar do cachorro')}/>
            <Tarefas atividade ='Faculdade' onRemove={() => handleTarefaRemove ('Faculdade')}/>
            <Tarefas atividade ='Aula de ingles' onRemove={() => handleTarefaRemove ('Aula de ingles')}/>


            


        </View>

    );
};