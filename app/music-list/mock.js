const mockData = [
  {
    singer: 'Taylor Swift',
    title: 'Willow',
    time: '4:13',
    date: '2020-12-11',
  },
  {
    singer: 'The Weeknd',
    title: 'Blinding Lights',
    time: '3:20',
    date: '2019-11-29',
  },
  {
    singer: 'Dua Lipa',
    title: "Don't Start Now",
    time: '3:03',
    date: '2019-11-01',
  },
  {
    singer: 'Harry Styles',
    title: 'Watermelon Sugar',
    time: '2:54',
    date: '2019-12-13',
  },
  {
    singer: 'Gabby Barrett ft. Charlie Puth',
    title: 'I Hope',
    time: '3:30',
    date: '2020-06-19',
  },
  {
    singer: 'Lewis Capaldi',
    title: 'Before You Go',
    time: '4:18',
    date: '2019-11-19',
  },
  {
    singer: 'Post Malone',
    title: 'Circles',
    time: '3:35',
    date: '2019-08-30',
  },
  {
    singer: 'DaBaby ft. Roddy Ricch',
    title: 'Rockstar',
    time: '3:01',
    date: '2020-04-17',
  },
  {
    singer: 'BTS',
    title: 'Dynamite',
    time: '3:19',
    date: '2020-08-21',
  },
  {
    singer: 'Megan Thee Stallion ft. Beyoncé',
    title: 'Savage Remix',
    time: '4:02',
    date: '2020-04-29',
  },
  {
    singer: 'Ariana Grande',
    title: 'Positions',
    time: '2:52',
    date: '2020-10-30',
  },
  {
    singer: 'Justin Bieber ft. Chance The Rapper',
    title: 'Holy',
    time: '3:32',
    date: '2020-09-18',
  },
  {
    singer: 'Miley Cyrus',
    title: 'Midnight Sky',
    time: '3:43',
    date: '2020-08-14',
  },
  {
    singer: 'Chris Brown & Young Thug',
    title: 'Go Crazy',
    time: '2:56',
    date: '2020-05-05',
  },
  {
    singer: 'Drake ft. Lil Durk',
    title: 'Laugh Now Cry Later',
    time: '4:21',
    date: '2020-08-14',
  },
  {
    singer: 'Cardi B ft. Megan Thee Stallion',
    title: 'WAP',
    time: '3:07',
    date: '2020-08-07',
  },
  {
    singer: 'Jack Harlow ft. DaBaby, Tory Lanez & Lil Wayne',
    title: 'Whats Poppin',
    time: '3:48',
    date: '2020-06-24',
  },
  {
    singer: 'Doja Cat ft. Nicki Minaj',
    title: 'Say So',
    time: '3:57',
    date: '2020-04-30',
  },
  {
    singer: 'Ariana Grande & Justin Bieber',
    title: 'Stuck With U',
    time: '3:48',
    date: '2020-05-08',
  },
  {
    singer: 'Billie Eilish',
    title: 'Therefore I Am',
    time: '2:54',
    date: '2020-11-12',
  },
];

export default function generateMockData(length) {
  const data = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * mockData.length);
    const item = { ...mockData[randomIndex] };
    item.date = new Date(2023, 3, Math.floor(Math.random() * 30) + 1)
      .toISOString()
      .slice(0, 10);
    data.push(item);
  }
  return data;
}
