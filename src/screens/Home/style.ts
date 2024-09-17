import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#384B70',
        alignItems: 'center',
        paddingTop: 70,
    },
    
    containerText :{
        color: '#FCFAEE',
        fontSize: 40,
        fontWeight: 'bold',
    },

    containerTextSub:{
        color: '#FCFAEE',
        fontSize: 20,
        paddingBottom:10,
        fontWeight: 'bold',
    },

    adicionarTarefa:{
        flexDirection: 'row',
        marginBottom: 100,
    },


    textInput: {
        backgroundColor: '#507687',
        color: '#FCFAEE',
        width: 350,
        height: 50,
        borderRadius: 5,
        paddingLeft: 20,
        fontSize: 18,
        marginRight: 5,


    },

    button:{
        backgroundColor: '#161853',
        width: 50,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },

    textButton:{
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FCFAEE',
    }




});