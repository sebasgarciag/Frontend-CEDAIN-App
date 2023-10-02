import { useState } from "react";
import UsuariosAPI from "../../apis/usuariosApi";


const useEditarUsuario = (usuario) => {
    console.log(usuario);
    const [isEditable, setEditable] = useState(false);
    const [nombre, setNombre] = useState(usuario.nombre);
    const [apellidoPaterno, setApellidoPaterno] = useState(usuario.apellido_paterno);
    const [apellidoMaterno, setApellidoMaterno] = useState(usuario.apellido_materno);
    const [email, setEmail] = useState(usuario.email);
    const [editarText, setEditarText] = useState("Editar");
    const [rol, setRol] = useState(usuario.tipo);
    const { updateUsuario } = UsuariosAPI();

    const handleSumbit = async () => {
      //request a backend
      let new_usuario_data = {
        'nombre': nombre,
        'apellido_paterno': apellidoPaterno,
        'apellido_materno': apellidoMaterno,
        'email': email,
        'tipo': rol,
      }

      alert("Enlace clickeado");
      try{
        const response = await updateUsuario(new_usuario_data, usuario.id);
        alert(response.data)
      }
      catch{
        //
      }
      setEditarText("Editar");
      setEditable(!isEditable);
    };
  
    const handleEditable = () => {
      // !isEditable
      if (isEditable) {
        // Qué pasar cuando cancelas
        setEditarText("Editar");
        // volvera tomar los valores de la BDD
      } else {
        // Qué pasar cuando cambias de modo no editar a modo editar
        setEditarText("Cancelar edición");
      }
  
      setEditable(!isEditable);
      // togglear valor del botón editar-cancelar edición
      // prender submit
      // si se cancela edición
      // volver los valores a los que estaban inicialmente
      // apagar submit
    };
   
    return {isEditable, nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno, email, setEmail, editarText, rol, setRol, handleSumbit, handleEditable }
}

export default useEditarUsuario;