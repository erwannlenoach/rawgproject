require('./routes');
import { key } from './key'

const PageDetail = (argument) => {
  const preparePage = () => {

    let slug = window.location.hash.substring(1).split("/")[1]
    console.log(slug)
    const fetchGame = (url) => {
      let finalURL = url;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {

          let { name, released, description, background_image, platforms, genres, tags, website, developers, ratings, ratings_count , stores} = response;
          console.log(response)

          // render game details

          let articleDOM = document.querySelector(".page-detail .article");

          // name 

          articleDOM.querySelector("h1.title").innerHTML = name;

          // image
          document.getElementById("gameimage").innerHTML = `<img id="mainImage" src=${background_image}>`

          // screenshots 
          fetch(`https://api.rawg.io/api/games/${slug}/screenshots?key=528babbc066842ebaf0b202ac5448d6e`)
          .then((data) => data.json())
          .then((data) => { 
        
            let {results} = data;
            console.log(data);
            results = results.slice(0,4)

           results.forEach(x  =>   document.getElementById("screenshots").innerHTML += `<img class="secondaryImages" src=${x.image}>`)
          })

        
          // video

          fetch(`https://api.rawg.io/api/games/${slug}/movies?key=528babbc066842ebaf0b202ac5448d6e`)
          .then((movies) => movies.json())
          .then((movies) =>  {

          let {results} = movies;
         document.getElementById("video").innerHTML = `
         <video width="700" height="300" controls autoplay>
         <source src=${results[0].data.max} type=video/mp4>
         </video>`;
            
          })
           
    
          // released date

          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
          if (released == null) {
            articleDOM.querySelector("p.release-date").innerHTML = "";
          }

          // developers

          developers.forEach(x => articleDOM.querySelector("a.dev").innerHTML += `<br>${x.name}</br>`)
          articleDOM.querySelector("a.dev").setAttribute('href', "#pagelist")


          // tags 
          tags.forEach(x => articleDOM.querySelector("a.tags").innerHTML += `<br>${x.name}</br>`)
          articleDOM.querySelector("a.tags").setAttribute('href', "#pagelist")

          // genres 
          genres.forEach(x => articleDOM.querySelector("a.genres").innerHTML += `<br>${x.name}</br>`)
          articleDOM.querySelector("a.genres").setAttribute('href', "#pagelist")

          // platforms 

          platforms.forEach(x => articleDOM.querySelector("a.platforms").innerHTML += `<br>${x.platform.name}</br>`)
          articleDOM.querySelector("a.platforms").setAttribute('href', "#pagelist")

          // amount of ratings 
          articleDOM.querySelector("p.ratingsamount").innerHTML = `<br>${ratings_count} notes : </br>`;
          // ratings
          ratings.forEach(x => articleDOM.querySelector("a.ratings").innerHTML += `<br>${x.title} : ${x.percent} % </br>`);
         
          // stores
          stores.forEach(x => articleDOM.querySelector("a.stores").innerHTML += `<br>${x.store.name} </br>`)

           stores.forEach(x=> articleDOM.querySelector("a.stores").setAttribute('href', "https://" + x.store.domain)) 
           // domain doit être utilisé en URL relatif
           
           //setAttribute('href', `${x.store.domain}`) )


          // website

          articleDOM.querySelector("a.website").innerHTML = website;
          articleDOM.querySelector("a.website").setAttribute('href', `${website}`)

        });
    };


    fetchGame(`https://api.rawg.io/api/games/${slug}?key=${key}`)
  };

  const render = () => {
    pageContent.innerHTML = `
        <section class="page-detail">
          <div class="article">
          <div id="gameimage">
          <img id="mainImage">
          </div>
          <div id="video">
          </div>
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <p class="description"></p>
            <h1 class="title"></h1>
           
            
            <div id="screenshots">
  
            </div>

            <a class="dev"></a>
            <a class="genres"></a>
            <a class="tags"></a>
            <a class="platforms"></a>
            <p class="ratingsamount"></p>
            <a class="ratings"></a>
            <a class="stores"></a>
            <a class="website"></a>
          </div>
        </section>
      `;

    preparePage();
  };

  render();
};


export { PageDetail };





// TODO: Une vidéo de présentation (Lecteur HTML 5 interne)


// TODO: Quan ya pas de lien (DEV) il faut pas l'afficher :function HIDE avec le if

// TODO: appli version .io + readme.Md  


