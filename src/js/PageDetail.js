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

           results.forEach(x  => document.getElementById("screenshots").innerHTML += `<img class="secondaryImages" src=${x.image}>`)
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

          if (developers && developers.length) {
            articleDOM.querySelector(".dev").innerHTML = developers.map(x => `<a href="#pagelist">${x.name}</a>`).join(', ');
          }

          // tags 
          if (tags && tags.length) {
            articleDOM.querySelector(".tags").innerHTML = tags.map(x => `<a href="#pagelist">${x.name}</a>`).join(', ');
          }

          // genres 
          if (genres && genres.length) {
            articleDOM.querySelector(".genres").innerHTML = genres.map(x => `<a href="#pagelist">${x.name}</a>`).join(', ');
          }

          // platforms 
          if (platforms && platforms.length) {
            articleDOM.querySelector(".platforms").innerHTML = platforms.map(x => `<a href="#pagelist">${x.platform.name}</a>`).join(', ');
          }

          // amount of ratings 
          articleDOM.querySelector("p.ratingsamount").innerHTML = `<br>${ratings_count} notes : </br>`;
          // ratings
          if (ratings && ratings.length) {
            articleDOM.querySelector(".ratings").innerHTML = ratings.map(x => `${x.title} : ${x.percent} %`).join(', ');
          }
         
          // stores
          if (stores && stores.length) {
            articleDOM.querySelector(".stores").innerHTML = stores.map(x => `<a href="https://${x.store.domain}">${x.store.name}</a>`).join(', ');
          }
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
            <h1 class="title"></h1>
            <div id="video">
            </div>
          
            <p class="description"></p>
         
           
            
            <div id="screenshots">
  
            </div>
            <p class="release-date">Release date : <span></span></p>
            <div class="row">
              <div class="col-6 mb-3">
                Developers:
                <div class="dev"></div>
              </div>
              <div class="col-6 mb-3">
                Genres:
                <div class="genres"></div>
              </div>
              <div class="col-6 mb-3">
                Tags:
                <div class="tags"></div>
              </div>
              <div class="col-6 mb-3">
                Platforms:
                <div class="platforms"></div>
              </div>
            </div>
            <p class="ratingsamount"></p>
            <div class="ratings"></div>
            <div class="stores"></div>
            <a class="website"></a>
          </div>
        </section>
      `;

    preparePage();
  };

  render();
};


export { PageDetail };







  
