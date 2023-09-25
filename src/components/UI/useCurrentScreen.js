import { useState } from "react";

const useCurrentScreen = () => {
    const [currentScreen,setCurrentScreen] = useState();
       
    const setScreen = (currentScreen) => {
        setCurrentScreen(currentScreen);
    };

    return{currentScreen, setScreen};
}
export default useCurrentScreen;

