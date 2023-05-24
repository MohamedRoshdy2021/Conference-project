const speakers = [
  {
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    image: 'images/base/speaker_01.png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    image: 'images/base/speaker_02.png',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern,',
  },
  {
    name: 'Ryan Merkley',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    image: 'images/base/speaker_03.png',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
  {
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    image: 'images/base/speaker_04.png',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    image: 'images/base/speaker_05.png',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration ',
  },
  {
    name: 'Lila tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    image: 'images/base/speaker_06.png',
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
