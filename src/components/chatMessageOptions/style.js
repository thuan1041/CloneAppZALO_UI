import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: '#009AFA',
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        alignItems: 'center',
        backgroundColor: '#009AFA',
       
    },

    txtInHeader: {
        fontSize: 18,
        color: '#F1FFFF',
        width: '60%',
        height: 30,
        marginLeft: 15,
    },
    
    body: {
        flex: 1,
        backgroundColor: '#F4F5F7',
    },

    pressZaloVideo: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
    },
    avtWrapper:{
        flexDirection: 'column',
        alignItems: 'center',
        height: 70,
        width: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F4F5F7',
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    img_avt:{
        height: 80,
        width: 80,
        borderRadius: 50,
        borderBlockColor:'#009AFA',
        borderWidth: 2,
        alignItems:'center',
    },
    OptionsAbove:{
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pressFindMessage:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },
    encodeEndWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 70,
    },
    txt:{
        fontSize: 18,
        marginLeft: 15,
    },
    imageContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F4F5F7',
        paddingLeft: 15,
        paddingRight: 15,
    },
    img:{
        height: 40,
        width: 40,
    }
})