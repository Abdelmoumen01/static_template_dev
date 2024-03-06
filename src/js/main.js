function makeArticlesGrid()
{
    // e.event.preventDefault();
    const articles = document.querySelector('#articles');
    articles.classList.remove('column-list');
    articles.classList.add('grid-list');
    
}

function makeArticlesList()
{
    // e.event.preventDefault();
    const articles = document.querySelector('#articles');
    articles.classList.add('column-list');
    articles.classList.remove('grid-list');
    
}



const li = document.querySelectorAll('.pagination ul li');
li.forEach(function(i,a){
    i.addEventListener('click',function(){
        li.forEach(function(item)
        {
            item.classList.remove('active');
            i.classList.add('active');
        });

    });
});
