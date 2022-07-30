import content from './data.js';

const speakerColumn = document.createElement('div');
speakerColumn.className = 'speaker-column';

const Speakers = (speaker) => {
  const featuredSpeakers = document.createElement('div');
  featuredSpeakers.className = 'featured-speaker';

  const fig = document.createElement('FIGURE');
  fig.className = 'speaker-avatar';
  featuredSpeakers.appendChild(fig);

  const img = document.createElement('img');
  img.setAttribute('src', speaker.pic);
  img.setAttribute('width', 100);
  img.setAttribute('height', 100);
  img.setAttribute('alt', speaker.name);

  fig.appendChild(img);

  const div = document.createElement('div');
  div.className = 'speaker-details';
  featuredSpeakers.append(div);

  const div1 = document.createElement('div');
  div1.className = 'speaker-name';
  div1.innerText = speaker.name;
  div.appendChild(div1);

  const div2 = document.createElement('div');
  div2.className = 'speaker-role';
  div2.innerText = speaker.role;
  div.appendChild(div2);

  const div3 = document.createElement('div');
  div3.className = 'speaker-block-line';
  div.appendChild(div3);

  const div4 = document.createElement('div');
  div4.className = 'speaker-description';
  div4.innerText = speaker.description;
  div.appendChild(div4);

  return featuredSpeakers;
};

content.forEach((speaker) => {
  speakerColumn.appendChild(Speakers(speaker));
});

const section = document.body.querySelector('#speakers-block');
section.appendChild(speakerColumn);
