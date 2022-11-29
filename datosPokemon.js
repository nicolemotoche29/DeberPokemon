const consultarPokemon = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
        //Muestra los pokemones
      pintarPokemon(data,number)
    })

    .catch((error) => {
      console.log(error);
    });
};


const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon,1);
  consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
  //OBTENER EL DIV 1 O 2   
  let item = lista.querySelector(`#pok-${id}`);
  //PINTAR EL POKEMON
  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.other.home.front_default);
  //ASIGNAR EL NOMBRE
  item.getElementsByTagName("h3")[0].innerHTML = data.name;

  item.getElementsByTagName("span")[0].innerHTML = data.base_experience;

  item.getElementsByTagName("span")[1].innerHTML = data.height;
}
