import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigations";

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export const navigate = (name: keyof RootStackParamList, params?: { id: string }) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name,params)
    }
}