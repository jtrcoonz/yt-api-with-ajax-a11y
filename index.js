const YT_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

$(watchSubmit);

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query')
    const query = queryTarget.val();
    //clear input field
    queryTarget.val("");
    getDataFromApi(query, displayYTSearchData);
  });
}

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: YT_SEARCH_URL,
    data: {
      part: 'snippet',
      key: 'AIzaSyAf46MQZ09xpSNpcxVBWGf1E-EGLBuWgWs',
      q: `${searchTerm}`
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}

function displayYTSearchData(data) {
  //console.log(data);
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function renderResult(result) {
  console.log(result);
  return `
  <div class="search-result">
  <a href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">
    <h3>${result.snippet.title}</h3>
    <img src="${result.snippet.thumbnails.medium.url}" class="yt-thumbnail">
  </a>
  <p>${result.snippet.description}</p>
  </div>
  `;
}
    
    
    
    
    /* by <a class="js-user-name" href="${item.owner.html_url}" target="_blank">${item.owner.login}</a></h2>
      <p>Number of watchers: <span class="js-watchers-count">${item.watchers_count}</span></p>
      <p>Number of open issues: <span class="js-issues-count">${item.open_issues}</span></p>
    </div> 
  `;
} */