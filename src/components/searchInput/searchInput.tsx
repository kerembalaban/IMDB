import React, { useState } from "react"
import { NativeSyntheticEvent, Text, TextInputChangeEventData, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import styles from "./searchInput-styles"

type Props = {
    onFocus(): void,
    onCancel(): void,
    onChange(e: NativeSyntheticEvent<TextInputChangeEventData>): void,
    value: string
};

const SearchBar = ({ onFocus, onCancel, onChange, value }: Props) => {
    const [isFocued, setFocused] = useState<Boolean>(false)

    const handleOnSearchInputFocus = () => {
        setFocused(true)
        onFocus()
    }

    const handleOnCancel = () => {
        setFocused(false)
        onCancel()
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onFocus={handleOnSearchInputFocus}
                returnKeyType='search'
                style={styles.searchInput}
                placeholder={'Search IMDb (At least 5 chars)'}
                onChange={(e) => onChange(e)} />

            {/* Cancel Button */}
            {
                isFocued &&
                <TouchableOpacity onPress={handleOnCancel} style={styles.cancelButton}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            }

        </View>

    )
}

export default SearchBar