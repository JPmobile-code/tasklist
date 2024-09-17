import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerTarefa:{
        backgroundColor:'#507687',
        width:'95%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginBottom: 20,
        justifyContent :'space-between'

    },

    tarefaText:{
        fontSize: 16,
        color: '#FCFAEE',
        flex: 1,
        marginLeft: 10,
    },

    button:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,

    },

    buttonTrash:{
        alignItems: 'center',
        justifyContent: 'center', 
        marginRight: 10,

    },

    

});