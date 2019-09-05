// VARIABLE ASSIGNMENT
const cards = document.querySelector('.cards');
const usersArray = ['ofega', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];


// DATA REQUEST FOR EACH USER
usersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => {
    cards.appendChild(githubUserCard(response.data));
  })
  .catch(error => {
    console.log(error);
  })
})


// FUNCTIONAL COMPONENT(USER CARD)
function githubUserCard(user) {

  // NEW DOM ELEMENTS CREATED
  const card = document.createElement('div');
  const thumbnail = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileURL = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // SET ATTRIBUTES TO DOM ELEMENTS
  card.classList.add('card');
  thumbnail.setAttribute('src', user.avatar_url);
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  profileURL.setAttribute('href', user.html_url);

  // SET TEXT CONTENT OF DOM ELEMENTS
  name.textContent = user.name;
  location.textContent = user.location;
  profile.textContent = 'Profile: ';
  profileURL.textContent = user.html_url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = !user.bio ? 'Nothing to say :)' : user.bio;

  // NEST ELEMENTS TO FORM COMPONENT
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(profileURL);
  card.appendChild(thumbnail);
  card.appendChild(cardInfo);

  return card;
}
