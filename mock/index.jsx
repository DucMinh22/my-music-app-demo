const songs = [
    {
        id: '001',
        name: 'Shape of you',
        url: require('../assets/images/song4.jpg')
    },
    {
        id: '002',
        name: 'Because I love you',
        url: require('../assets/images/song2.jpg')
    },
    {
        id: '003',
        name: 'Hello',
        url: require('../assets/images/song3.jpg')
    },
    {
        id: '004',
        name: 'Because I love you',
        url: require('../assets/images/duc_logo.jpg')
    },
    {
        id: '005',
        name: 'I need a girl',
        url: require('../assets/images/song5.jpg')
    }
]


const Files = [
  {
      id: 1,
      file: require('../assets/music/NgayDauTien-DucPhuc-7129810.mp3'),
      title: 'Ngày Đầu tiên',
      singer: 'Đức Phúc',
      image: require('../assets/images/ducphuc.jpg')
  },
  {
      id: 2,
      file: require('../assets/music/YeuDuongKhoQuaThiChayVeKhocVoiAnh-ERIK-7128950.mp3'),
      title: 'Chạy Về Khóc Với Anh',
      singer: 'Erik',
      image: require('../assets/images/erik.jpg')
  },
];

const favoriteSongs = [
    {
        id: '001',
        name: 'Peaches ft. Daniel Caesar, Giveon',
        artist: 'Justin Bieber'
    },
    {
        id: '002',
        name: 'Baby',
        artist: 'Justin Bieber'
    },
    {
        id: '003',
        name: 'Boy Friend',
        artist: 'Justin Bieber'
    },
    {
        id: '004',
        name: 'Yummy',
        artist: 'Justin Bieber'
    },
]

export { songs, favoriteSongs, Files };