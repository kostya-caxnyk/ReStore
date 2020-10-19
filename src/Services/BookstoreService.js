export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-ready Microservices',
      author: 'Susan J. Fowler',
      price: 34,
      coverImage: 'https://image.ebooks.com/previews/095/095643/095643767/095643767.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          return reject(new Error('hello'));
        }
        return resolve(this.data);
      }, 700);
    });
  }
}
