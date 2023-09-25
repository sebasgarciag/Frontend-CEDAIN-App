import {useState}  from 'react';

const useListadoUsuarios = () => {
    const [usuarios, setUsuarios] = useState([
        {
            nombreCompleto: "Angel Corrales Sotelo",
            email: "correo.dummy@gmail.com",
            rol: 'Administrador'
        }, 
        {
            nombreCompleto: "Roberto Gómez Bolaños",
            email: "correo.dummy@gmail.com",
            rol: 'Administrador'
        }, 
        {
            nombreCompleto: "José de la Cuarta",
            email: "correo.dummy@gmail.com",
            rol: 'Almacenista'
        }, 
        {
            nombreCompleto: "Ramiro Tajín Tercero",
            email: "correo.dummy@gmail.com",
            rol: 'Almacenista'
        }, 
        {
            nombreCompleto: "Paco Pedro Pérez",
            email: "correo.dummy@gmail.com",
            rol: 'Administrador'
        }, 
        {
            nombreCompleto: "Pedro del Corral",
            email: "correo.dummy@gmail.com",
            rol: 'Almacenista'
        }, 
        {
            nombreCompleto: "Isabel Quinta de León",
            email: "correo.dummy@gmail.com",
            rol: 'Administrador'
        }, 
        {
            nombreCompleto: "Willy Smith Rodriguez",
            email: "correo.dummy@gmail.com",
            rol: 'Almacenista'
        }, 
        {
            nombreCompleto: "Monkey D. Luffy",
            email: "correo.dummy@gmail.com",
            rol: 'Administrador'
        }, 
        {
            nombreCompleto: "Lissandra Gónzales Estrada",
            email: "correo.dummy@gmail.com",
            rol: 'Almacenista'
        }, 
    ]);

   


    return { usuarios }
}

export default useListadoUsuarios;