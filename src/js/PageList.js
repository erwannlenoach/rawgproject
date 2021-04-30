import { key } from './key'
import dayjs from 'dayjs'
import ps4Logo from '../images/ps4.svg';
import linuxLogo from '../images/linux.svg';
import mobileLogo from '../images/mobile.svg';
import switchLogo from '../images/switch.svg';
import xboxLogo from '../images/xbox.svg';


function findGame(){

 // let ps = document.getElementById("ps")
 // if (ps.click){
 //   let inputSearch = document.querySelector('.input-search').value + "&platforms=187"
 //   return inputSearch
 // } 
    
  let inputSearch = document.querySelector('.input-search').value

  PageList(inputSearch)

}

function getPlatformLogo(platform) {
  let logo = '';
  if (platform.indexOf('playstation') > -1) {
    logo = ps4Logo;
  }

  if (platform.indexOf('linux') > -1) {
    logo = linuxLogo;
  }

  if (platform.indexOf('mobile') > -1) {
    logo = mobileLogo;
  }
  
  if (platform.indexOf('switch') > -1) {
    logo = switchLogo;
  }

  if (platform.indexOf('xbox') > -1) {
    logo = xboxLogo;
  }

  if (logo) {
    return `<img src="./dist/${ logo }" />`;
  }

  return '';
}

function getListPlatformLogo(platforms) {
  if (!platforms) {
    return '';
  }

  return Object.keys(
    platforms
      .map(p => getPlatformLogo(p.platform.slug))
      .reduce((result, img) => {
        result[img] = true;
        return result;
      }, {})
  ).join('');
}

window.findGame = findGame;

function PageList(argument){
  const preparePage = () => {
     
    let now = dayjs().format('YYYY-MM-DD');
    let nextyear = dayjs().add(1, 'year').format('YYYY-MM-DD')
  

    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url //+ '&ordering=-released';
      if (argument) {
        finalURL = finalURL + "&search=" + argument;
      } else {
        finalURL = finalURL +  `&dates=${now},${nextyear}`;
      }

      // finalURL = finalURL + "&platforms=" + argument

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            console.log(article)
            articles += `
                    <div class="cardGame card col-sm-4 col-xs-12" style="width: 18rem; margin: 20px auto; background-color: rgb(25, 25, 25) ">
                      <div class="background-image">
                        <img src="${article.background_image}" class="card-img-top" alt="...">
                        <div class="informations">
                          <div>${ article.released }</div>
                          <div>${ article.rating } / ${ article.rating_top } - ${ article.ratings_count } votes</div>
                          <div>${ article.genres.map(g => g.name).sort().join(' - ') }</div>
                        </div>
                      </div>
                      <h1>${article.name}</h1> 
                      <p class="platforms"></p>
                      <a href = "#pagedetail/${article.slug}">More information</a>
                      <div class="logos">${ getListPlatformLogo(article.platforms) }</div>
                    </div>
                  `;
                  
         // platforms.platform.forEach(x => document.getElementsByClassName("platforms").innerHTML += `<br>${x.name}</br>`))
         

               
     
          });
          document.querySelector(".page-list .articles").innerHTML = `<div class="row">${articles}</div>`;
        });
    };
    fetchList(`https://api.rawg.io/api/games?key=${key}&page_size=27`, argument);
  };

  const render = () => {
    pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">...loading</div>
        </section>
      `;

    preparePage();
  };

  render();
};
function SortList(argument){

}
export { PageList };