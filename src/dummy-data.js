const dummyData = [
  {
    username: 'philzcoffee',
    thumbnailUrl:
      'data:image/png;base64,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',
    imageUrl:
      'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
    likes: 400,
    timestamp: 'July 17th 2017, 12:42:40 pm',
    comments: [
      {
        username: 'philzcoffee',
        text: "We've got more than just coffees!"
      },
      {
        username: 'biancasaurus',
        text: 'Looks delicious!'
      },
      {
        username: 'martinseludo',
        text: "Can't wait to try it!"
      }
    ]
  },
  {
    username: 'twitch',
    thumbnailUrl:
      'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
    likes: 4307,
    timestamp: 'July 15th 2017, 03:12:09 pm',
    comments: [
      {
        username: 'twitch',
        text: 'Epic Street Fighter action here in Vegas!'
      },
      {
        username: 'michaelmarzetta',
        text: 'Omg that match was crazy'
      },
      {
        username: 'themexican_leprechaun',
        text: 'What a setup'
      },
      {
        username: 'dennis_futbol',
        text: 'It that injustice'
      }
    ]
  }
];

export default dummyData;
