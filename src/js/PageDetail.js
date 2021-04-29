require('./routes');
import { key } from './key'

const PageDetail = (argument) => {
  const preparePage = () => {
    
    let id = window.location.hash.substring(1).split("/")[1]
 
    const fetchGame = (url) => {
      let finalURL = url;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
       
          let { name, released, description,background_image, platforms,genres, tags, website} = response;
          console.log(response)

          // render game details
  
          let articleDOM = document.querySelector(".page-detail .article");

          // name 

          articleDOM.querySelector("h1.title").innerHTML = name;

          // image
          document.getElementById("gameimage").innerHTML = `<img id="mainImage" src=${background_image}>`


          // released date 
        
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
        
          // tags 
          tags.forEach(x => articleDOM.querySelector("a.tags").innerHTML += `<br>${x.name}</br>`)
          articleDOM.querySelector("a.tags").setAttribute('href', "#pagelist")
          
          // genres 
          genres.forEach(x => articleDOM.querySelector("a.genres").innerHTML += `<br>${x.name}</br>`)
          articleDOM.querySelector("a.genres").setAttribute('href', "#pagelist")

          // platforms 

          platforms.forEach(x => articleDOM.querySelector("a.platforms").innerHTML += `<br>${x.platform.name}</br>`)
          articleDOM.querySelector("a.platforms").setAttribute('href', "#pagelist")

          // website

          articleDOM.querySelector("a.website").innerHTML = website;
          articleDOM.querySelector("a.website").setAttribute('href', `${website}`)

        });
    };


    fetchGame(`https://api.rawg.io/api/games/${id}?key=${key}`)
  };

  const render = () => {
    pageContent.innerHTML = `
        <section class="page-detail">
          <div class="article">
          <div id="gameimage">
          <img id="mainImage">
          </div>
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <p class="description"></p>
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <a class="genres"></a>
            <a class="tags"></a>
            <a class="platforms"></a>
            <a class="website"></a>
          </div>
        </section>
      `;

    preparePage();
  };

  render();
};


export { PageDetail };


// * Le nom du jeu DONE 
// * Une image principale de présentation DONE 
// * La description du jeu DONE 
// * La date de sortie DONE 
// * Le nom du/des studio(s) de développement (lien(s) interne(s) vers le template PageList)
// * Les tags correspondants au jeu (lien(s) interne(s) vers le template PageList) DONE
// * Le/Les genre(s) du jeu (lien(s) interne(s) vers le template PageList) DONE 
// * Le nom de l'éditeur (lien(s) interne(s) vers le template PageList)
// * Les plateformes disponibles à la sortie du jeu (lien(s) interne(s) vers le template PageList) DONE 
// * Le site Web du jeu (lien externe) DONE 
// * Une vidéo de présentation (Lecteur HTML 5 interne)
// * La moyenne des notes
// * Le nombre de notes
// * Quatre screenshots du jeu
// * Le/Les lien(s) pour acheter le jeu (lien(s) externe(s))
// * Une liste de jeux ressemblants au jeu (lien interne vers un jeu sur PageDetail)
//* Une liste de vidéos YouTube parlant du jeu (Lien externe vers YouTube)
