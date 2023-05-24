const speakers = [
  {
    name: 'Glen Hiemstra',
    title: 'Recognized futurist and successful author preparing people.',
    image: 'images/base/speaker1.JPG',
    description: 'speaker Glen Hiemstra, a recognized futurist, discussed the inevitability and the consequences of the internet, global warming.',
  },
  {
    name: 'Jonathan Foley',
    title: 'Dr.Jonathan is expert in climate solutions and sustainability',
    image: 'images/base/speaker2.JPEG',
    description: 'He is the Executive Director of Project Drawdown and has published extensively in the field. He is communicator and has awards ',
  },
  {
    name: 'Ben Fogle',
    title: 'As a globetrotting adventurer, Ben inspires audiences to live adventurous life',
    image: 'images/base/speaker3.JPG',
    description: 'With experience traveling from Antartica to exotic destinations, he offers listeners a global lens to view the world ',
  },
  {
    name: 'Dr. Roger Harrabin',
    title: 'Roger Harrabin is one of the medias most influential voices on the environment',
    image: 'images/base/speaker4.JPG',
    description: 'energy and climate change. As Energy and Environment Analyst he reported for the BBC for over 30 years',
  },
  {
    name: 'Levison Wood',
    title: 'Levison is a British icon with many hats an explorer photographer autho etc',
    image: 'images/base/speaker5.JPG',
    description: 'A respectable adventurer Levison Wood is a person with the ability to transfer global adventures to leading TV specials',
  },
  {
    name: 'Michael Sheldrick',
    title: 'Executive Director of the Wikimedia Foundation',
    image: 'images/base/speaker6.png',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia.',
  },
];

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-list');
const close = document.querySelector('.close');
const more = document.querySelector('#more-speaker');
const morespeakers = document.querySelector('.more-speakers');
const featuerd = document.querySelector('.featuerd-speakers');

speakers.forEach((param) => {
  const div = document.createElement('div');
  div.classList.add('speaker');
  div.innerHTML = `  <img class="speaker-img" src="${param.image}" alt="featuerd speaker image">
                            <div class="speaker-text">
                                <h3>${param.name}</h3>
                                <p>${param.title}</p>
                                <h5>${param.description}</h5>
                            </div>
                            `;
  featuerd.appendChild(div);
});

more.addEventListener('click', () => {
  morespeakers.classList.toggle('active');
});

close.addEventListener('click', () => {
  nav.classList.toggle('active');
  close.classList.toggle('active');
  burger.classList.toggle('active');
});

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  close.classList.add('active');
});
