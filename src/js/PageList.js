import { key } from './key'

function findGame(){
  let inputSearch = document.querySelector('.input-search')
  console.log(inputSearch.value)
}

window.findGame = findGame;

const PageList = (argument = "") => {
  const preparePage = () => {

    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            articles += `
                    <div class="cardGame">
                      <h1>${article.name}</h1>
                      <h2>${article.released}</h2>
                      <h2>${article.id}</h2>
                      <a href = "#pagedetail/${article.id}">${article.id}</a>
                    </div>
                  `;
          });
          document.querySelector(".page-list .articles").innerHTML = articles;
        });
    };
    fetchList(`https://api.rawg.io/api/games?key=${key}`);
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

export { PageList };