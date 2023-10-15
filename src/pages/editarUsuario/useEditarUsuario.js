import { useState } from "react";
import UsuariosAPI from "../../apis/usuariosApi";


const useEditarUsuario = (usuario) => {
    // console.log(usuario);
    const [isEditable, setEditable] = useState(false);
    const [nombre, setNombre] = useState(usuario.nombre);
    const [apellidoPaterno, setApellidoPaterno] = useState(usuario.apellido_paterno);
    const [apellidoMaterno, setApellidoMaterno] = useState(usuario.apellido_materno);
    const [email, setEmail] = useState(usuario.correo);
    const [editarText, setEditarText] = useState("Editar");
    const [rol, setRol] = useState(usuario.tipo);
    const { updateUsuario } = UsuariosAPI();

    const handleSumbit = async () => {
      //request a backend
      let new_usuario_data = {
        'nombre': nombre,
        'apellido_paterno': apellidoPaterno,
        'apellido_materno': apellidoMaterno,
        'correo': email,
        'tipo': rol,
      }

      // alert("Enlace clickeado");
      try{
        await updateUsuario(new_usuario_data, usuario.id_usuario);
        usuario.nombre = nombre
        usuario.apellido_paterno = apellidoPaterno
        usuario.apellido_materno = apellidoMaterno
        usuario.correo = email
        usuario.tipo = rol
        alert('usuario actualizado')
      }
      catch{
        alert('No se pudo actualizar el usuario')
        setNombre(usuario.nombre)
        setApellidoPaterno(usuario.apellido_paterno)
        setApellidoMaterno(usuario.apellido_materno)
        setEmail(usuario.correo)
        setRol(usuario.tipo)
      }
      setEditarText("Editar");
      setEditable(!isEditable);
    };
  
    const handleEditable = () => {
      // !isEditable
      if (isEditable) {
        // Qué pasar cuando cancelas
        setEditarText("Editar");
        setNombre(usuario.nombre)
        setApellidoPaterno(usuario.apellido_paterno)
        setApellidoMaterno(usuario.apellido_materno)
        setEmail(usuario.correo)
        setRol(usuario.tipo)
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