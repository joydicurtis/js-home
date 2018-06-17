(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=4bc6946ea3034157b3263f828fb6a450', false);
	xhr.send();
	if (xhr.status != 200) {
	  // console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
	} 
	else {
		let response = JSON.parse(xhr.responseText);
		let articles = response.articles;
		for (let i=0; i<articles.length; i++) {
			// console.log(articles[i]);
			let newsList=document.querySelector(".newsList");
			let newsItem=document.createElement("div");
			newsItem.classList.add('newsList-item');
			let newsItemTitle=document.createElement("h3");
			newsItemTitle.classList.add('newsList-title');
			let newsItemAuthor=document.createElement("div");
			newsItemAuthor.classList.add('newsList-author');
			let newsItemDate=document.createElement("div");
			newsItemDate.classList.add('newsList-date');
			let newsItemDescription=document.createElement("div");
			newsItemDescription.classList.add('newsList-description');
			let newsItemImg=document.createElement("img");
			newsItemImg.classList.add('newsList-img');
			let newsItemClearfix=document.createElement("div");
			newsItemClearfix.classList.add('clearfix');
			let newsItemLink=document.createElement("a");
			newsItemLink.classList.add('btn');
			newsItemImg.src=articles[i].urlToImage;
			newsItemTitle.innerHTML = articles[i].title;
			newsItemAuthor.innerHTML = articles[i].author;
			newsItemDate.innerHTML = articles[i].publishedAt;
			newsItemDescription.innerHTML = articles[i].description;
			newsItemLink.innerHTML = 'Read more...';
			newsItemLink.href=articles[i].url;
			newsItem.appendChild(newsItemImg);
			newsItem.appendChild(newsItemTitle);
			newsItem.appendChild(newsItemClearfix);
			newsItemClearfix.appendChild(newsItemAuthor);
			newsItemClearfix.appendChild(newsItemDate);
			newsItem.appendChild(newsItemDescription);
			newsItem.appendChild(newsItemLink);
			newsList.appendChild(newsItem);
		}
	}
  });
}());