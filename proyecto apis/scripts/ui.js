//Creamos una clase encargada de generar los elmentos de la UI.  
class UI{
    constructor(){
        //Recuperamos del DOM el elemento div que mostrará a los usuarios:
        this.profile = document.getElementById('profile');
    }

    //Función para mostrar el perfil:
    showProfile(user){
        //Inyectamos en el DOM una cantidad enferma de HTML incluyendo los atributos que deseamos ingresar:

        this.profile.innerHTML = `
                <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Ver perfil</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Respositorios públicos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Seguidores: ${user.followers}</span>
                        <span class="badge badge-info">Siguiendo: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Sitio web: </strong>${user.blog}</li>
                            <li class="list-group-item"><strong>Ubicación: </strong> ${user.location}</li>
                            <li class="list-group-item"><strong>Fecha de registro: </strong>${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Últimos repositorios</h3>
            <div id="repos"></div>
        `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;

    }

    //Alerta en caso de no encontrar un usuario:
    showAlert(message, className){
        //Limpio alerta:
        this.clearAlert();
        //Creamos un elemento <div> que será insertado:
        const div = document.createElement('div');
        //Le agregamos la clase de la alerta:
        div.className = className;
        //Dentro del div agregamos el texto que se mostrará:
        div.appendChild(document.createTextNode(message));
        //Recuperamos el componente padre del DOM:
        const container = document.querySelector('.searchContainer');
        //Recuperamos la búsqueda:
        const search = document.querySelector('.search');
        //Insertamos la alerta en el DOM:
        container.insertBefore(div, search);
        //Establecemos el tiempo que aparecerá:
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //Una función para remover la alerta del DOM pasado X tiempo.
    clearAlert(){
        //Recuepero la alerta:
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //Limpiamos la UI cuando el usuario borra toda la entrada en el <input> del HTML.
    clearProfile(){
        this.profile.innerHTML = '';
    }

}