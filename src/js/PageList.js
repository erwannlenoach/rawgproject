import { key } from './key'
import dayjs from 'dayjs'


function findGame(){

 // let ps = document.getElementById("ps")
 // if (ps.click){
 //   let inputSearch = document.querySelector('.input-search').value + "&platforms=187"
 //   return inputSearch
 // } 
    
  let inputSearch = document.querySelector('.input-search').value

  PageList(inputSearch)

}

window.findGame = findGame;

function PageList(argument){
  const preparePage = () => {
     
    let now = dayjs().format('YYYY-MM-DD');
    let nextyear = dayjs().add(1, 'year').format('YYYY-MM-DD')
  

    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "&search=" + argument;
      } else {
        finalURL = url +  `&dates=${now},${nextyear}`;
      }

      // finalURL = finalURL + "&platforms=" + argument

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            articles += `
                    <div card="cardGame"=>
                      <h1>${article.name}</h1>
                      <h2>Release date: ${article.released}</h2>
                      <a href = "#pagedetail/${article.slug}">More information</a>
                    </div>
                  `;
     
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
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