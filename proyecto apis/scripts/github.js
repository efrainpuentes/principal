/*
    Usamos la Programación Orientada a Objetos para crear una clase llamada 'GitHub'
    que se encargará de lidiar con toda la lógica, tanto de la conexión como de
    las validaciones necesarias en la API. 

*/

class GitHub{

    constructor(){
        /*
            Siempre que creamos un objeto de la clase GitHub se llama al constructor definido en esta clase.
            Por esta misma razón se ponen los datos de conexión en esta parte.
            Cabe señalar que estos datos irían en el backend y no en el frontend, dado que no se hará un hosteo,
            ni en local ni en ningún servidor. 
        */
        this.client_id = 'b60a41f1b63cdb01585b';
        this.client_secret = '06a05bdc93e0c9a36e1214148709427614bdd397';
        //La cantidad de repositoriosa mostrar:
        this.repos_count = 5;
        //El ordenamiento:
        this.repos_sort = 'created: asc';

    }

    /*
        Se crea una función asíncrona que se encargará de recibir los usuarios de la API de GitHub,
        dado que existe un delay en esta conexión, por esa misma razón se define como función async.
    */

    async getUser(user){
        
        /*
            Hacemos un fetch ('recuperar') a la API de GitHub, dado que esta es una acción asíncrona
            utilizamos el await para esperar por la promesa y la almacenamos en profileResponse.
            En el fetch mandamos por URL los tokens de la API para autentificarnos.
        */
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileRespos= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        /*
            Hacemos un parseo de la respuesta a JSON:
        */

        const profileData = await profileResponse.json();
        const profileRepos = await profileRespos.json();

        //Mandamos los parseados a App.js
        return { 
            profile: profileData,
            repos: profileRepos
        }

    }

}