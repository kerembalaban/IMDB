import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './errorView-styles';

type Props = {
    error: string,
    onPress?(): void
};

const ErrorView = ({ error, onPress }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{error}</Text>
            <TouchableOpacity style={styles.errorButton} onPress={onPress}>
                <Text style={styles.errorButtonTitle}>Try Again</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ErrorView