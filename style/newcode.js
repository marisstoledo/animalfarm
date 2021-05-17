'use strict'

const form = documnet.getElementsByTagName('FORM')[0];
form.addEventListner('submit', makeNew);

function makeNew(event){
    event.preventDefault();
    const title = event.target.title.vaule;
    const journal = event.target.content.vaule;

    const article = document.createElement('article')
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = title;
    p.textContent = journal;

    article.appendChild(h2);
    article.appendChild(p);

    const main = document.getElementById('main');
    main.appendChild(article);
}