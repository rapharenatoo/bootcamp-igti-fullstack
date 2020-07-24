
var inputCurrentFrequecy = document.querySelector('#inputCurrentFrequecy');
var rangeFrequencies = document.querySelector('#rangeFrequencies');
var divPodcast = document.querySelector('#divPodcast');

function start() {
  rangeFrequencies.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(event) {
  var currentFrequency = event.target.value;
  inputCurrentFrequecy.value = currentFrequency;

  findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {
  var foundPodcast = null;
  for (let i = 0; i < realPodcasts.length; i++) {
    var currentPodcast = realPodcasts[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }
  if (foundPodcast) {
    renderPodcast(foundPodcast);
  } else {
    divPodcast.innerHTML = '<p>Nenhum podcast encontrado!</p>';
  }
}

function renderPodcast(podcast) {
  divPodcast.innerHTML = ''; // ZERANDO A DIV

  var img = document.createElement('img');
  img.src = './img/' + podcast.img;

  var title = document.createElement('h2');
  title.textContent = podcast.title;

  var description = document.createElement('p');
  description.textContent = podcast.description;

  divPodcast.appendChild(img);
  divPodcast.appendChild(title);
  divPodcast.appendChild(description);

}

start();