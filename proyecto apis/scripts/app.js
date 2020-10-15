//Creamos una instancia de la clase GitHub:
const github = new GitHub;
//Creamos una instancia de UI para la interfaz gráfica:
const ui = new UI;
//Recuperamos del DOM el input a través de su ID:
const searchUser = document.getElementById('searchUser');


//Una vez recuperado el objeto input le agregamos un evento. 
//El evento keyup se activa de forma continua mientras el usuario presiona las teclas.
searchUser.addEventListener('keyup', e => {
    //Recuperamos el texto ingresado por el usuario en el input:
    const userText = e.target.value;

    //Si el input no es vacío creamos una instancia de la clase github,
    //llamamos a la función getUser y manejamos la promesa.
    if(userText !== '' ){
        /*
            Mandamos por parámetro el usuario recuperado del input.
            En el 'then' recuperamos el 'resolve'de la proe
        */
        github.getUser(userText)
        .then(data => {

            if(data === 'Not Found'){

                //Llamamos a una función de UI para mostrar alerta:
                ui.showAlert('¡Usuario no encontrado!', 'alert alert-danger')

            }else{

                //Mostramos al usuario, pasándole a la función el atributo profile del objeto
                //que nos llegó en 'data' a través de la promesa.
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }

        })
    }else{

        //Limpiamos la UI:
        ui.clearProfile();
    }

});