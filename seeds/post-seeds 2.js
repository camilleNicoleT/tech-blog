const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: null,
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: null,
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: null,
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      text: 'Donec posuere metus vitae ipsum. Donec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsumDonec posuere metus vitae ipsum',
      post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
