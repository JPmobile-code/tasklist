

import {Text, View , TouchableOpacity} from 'react-native';
import { styles } from './style';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = {
    atividade: string;
    onRemove: () => void;
}


export function Tarefas ( {atividade , onRemove } : Props ){
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckBoxChange(){
        setIsChecked(!isChecked)
    }

    return(
        <View style={styles.containerTarefa}> 
            <TouchableOpacity style={styles.button} onPress={handleCheckBoxChange} >
                <MaterialIcons name={isChecked ? "check-box" : "check-box-outline-blank" } size={25} color='#161853'/>
            </TouchableOpacity>
    
            <Text style={styles.tarefaText}> 
                {atividade}
            </Text>

            <TouchableOpacity style={styles.buttonTrash}  onPress={ onRemove }>
                <MaterialCommunityIcons name="trash-can-outline" size={25} color= '#821131' />
            </TouchableOpacity>
    
        </View>

    );
}