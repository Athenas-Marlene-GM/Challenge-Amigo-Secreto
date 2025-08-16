// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


const agregarAmigo = () =>{
    let nuevoAmigoInput = document.querySelector("#amigo");
    let nuevoAmigo = nuevoAmigoInput.value;

    if(nuevoAmigo){
        amigos.push(nuevoAmigo);
        console.log(amigos);
        nuevoAmigoInput.value = "";
        actualizarLista();
        
    }else{
        alert("Por favor inserte un nombre");
    }


}

const actualizarLista = () =>{
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    let innerHTMLLista = "";
    for (const amigo of amigos) {
        innerHTMLLista = `${innerHTMLLista} <li>${amigo}</li>`;
    }
    listaAmigos.innerHTML = innerHTMLLista;
}

const sortearAmigo = () =>{
    if(amigos.length > 0){
        let amigoSecretoIndice = Math.floor(Math.random() * amigos.length);
        console.log(amigoSecretoIndice);
        let amigoSecreto = document.getElementById("resultado");
        amigoSecreto.innerHTML = `<li>${amigos[amigoSecretoIndice]}</li>`
    }
    else
    {
        alert("Agrega al menos un amigo");
    }

}
