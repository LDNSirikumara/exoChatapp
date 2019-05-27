import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

class Main extends React.Component {
    static navigationOptions = {
        title: 'ආගන්තුකයෝ',
        headerStyle: {
            backgroundColor: '#AEB6BF',
        },
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
    };

    state = {
        name: '',
    };

    onPress = () =>
        this.props.navigation.navigate('Chat', { name: this.state.name });

    onChangeText = name => this.setState({ name });


    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.title}>Enter your name:</Text>
                <TextInput
                    style={styles.nameInput}
                    placeHolder="John Cena"
                    onChangeText={this.onChangeText}
                    value={this.state.name}
                />
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const offset = 24;
const styles = StyleSheet.create({
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
        color: 'white'
    },
    nameInput: {
        height: offset * 2,

        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
    },
    buttonText: {
        marginLeft: offset,
        fontSize: offset,
        color: 'white'
    },
    background: {
        marginTop: 100,
        backgroundColor: '#2C3E50',

    },
});

export default Main;
