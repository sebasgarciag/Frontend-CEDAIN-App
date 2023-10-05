import { useState } from "react";
import UsuariosAPI from "../../apis/usuariosApi";
import CryptoES from 'crypto-es';

const useCambiarContrasena = (usuario) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);   
  const [arePasswordEqual, setArePasswordEqual] = useState(false);     
  const { updateUsuario } = UsuariosAPI();
  
  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };
  
  const handleSumbit = async () => {
    
    if (newPassword == confirmPassword) {
      setArePasswordEqual(true);
      const hashedPassword = CryptoES.SHA256(newPassword).toString();

      let new_usuario_data = {
        'password': hashedPassword,
      }
      try{
          await updateUsuario(new_usuario_data, usuario.id_usuario);
          alert('contraseña actualizada')
        }
        catch{
          alert('No se pudo actualizar la contraseña')
        }
      }
      else{
        setArePasswordEqual(false);
      }
  };

    return { newPassword, setNewPassword, confirmPassword, setConfirmPassword, isNewPasswordVisible, toggleNewPasswordVisibility, handleSumbit, arePasswordEqual }
}

export default useCambiarContrasena;