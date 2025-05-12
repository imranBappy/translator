import { StyleSheet } from 'react-native';

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Dark background
        padding: 16,
    },
    text: {
        color: '#ffffff', // Light text for contrast
        fontSize: 16,
    },
    heading: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        backgroundColor: '#333333',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        padding: 10,
        borderRadius: 6,
        borderColor: '#444444',
        borderWidth: 1,
        marginBottom: 12,
    }
});

export default baseStyles;
