import { useState } from "react";

const useCambiarContrasena = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [arePasswordEqual, setArePasswordEqual] = useState(false);
  
    const toggleNewPasswordVisibility = () => {
      setIsNewPasswordVisible(!isNewPasswordVisible);
    };

    return { newPassword, setNewPassword, confirmPassword, setConfirmPassword, isNewPasswordVisible, arePasswordEqual, setArePasswordEqual, toggleNewPasswordVisibility }
}

export default useCambiarContrasena;