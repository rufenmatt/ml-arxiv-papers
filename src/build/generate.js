(function () {

  const arxiv = require('arxiv-api');

  const paper = arxiv
    .search({
      searchQueryParams: [
        {
          include: [{ name: 'Machine Learning' }],
        },
      ],
      start: 0,
      maxResults: 100,
    })
    .then((paper) => {
      console.log(paper);

      const btn = document.getElementById("shuffle-btn");
      const btnRead = document.getElementById("read-btn");

      var i = -1;

      btn.addEventListener("click", function () {
        if (i < paper.length) {
          i += 1;
          document.getElementById("title").textContent = paper[i].title;
          btnRead.setAttribute("href", paper[i].id)
          document.querySelector(".author").textContent = paper[i].authors;
        } else {
          document.getElementById("title").innerHTML = "you went through all for today.";
          btnRead.removeAttribute("href")
          document.querySelector(".author").textContent = "";
        }

      });
    })
    .catch((error) => console.log(error));

})();