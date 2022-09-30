const books = [
    {
      name: 'Eloquent JavaScript',
      author: "Marijn Haverbeke",
      imageUrl:
        'https://books.google.com/books/publisher/content?id=p1v6DwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2--PnwWDCz4HaXI9g-0yr747R1Ig&w=1280',
      description: "A Modern Introduction to Programming",
      genre: 'Information Technology',
      price: 7.99,
    },
    {
      name: 'Head First Python',
      imageUrl:
        'https://books.google.com/books/publisher/content?id=NIqNDQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1ax0Tw2EWljgE4qfiGkQX_shAK7Q&w=1280',
      description: "Grasp python fundamentals, working with the built-in data structurs and functions",
      genre: 'Information Technology',
      price: 8.99,
    },
    {
      name: 'The C# Programming Yellow Book',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/517QmQM852L.jpg',
      description: "Learn to Program in C# from First Principles",
      genre: 'Information Technology',
      price: 8.50,
    }
]
  const users = [
    {
      username: 'Roger Ebert',
      password: 'Roger_pw',
      email: 'bookbuff@email.com',
    },
    {
      username: 'Gene Shalit',
      password: 'Gene_pw',
      email: 'mustache@todayshow.com',
    },
    {
      username: 'Paul Scheer',
      password: 'Paul_pw',
      email: 'tallJohnSheer@hdtgm.com',
    }
]
  
  const bookCarts = [
    {
      quantity: 4,
      cartId: 1,
      bookId: 1,
    },
    {
      quantity: 9,
      cartId: 2,
      bookId: 2,
    },
    {
      quantity: 1,
      cartId: 3,
      bookId: 5,
    }
  ]
  
  const carts = [
    {
      bookCount: 4,
      totalPrice: 3.96,
      shippingPrice: 5.99,
      address: '123 Main St. USA',
      status: 'Placed',
    },
    {
      bookCount: 9,
      totalPrice: 8.91,
      shippingPrice: 5.99,
      address: 'Sesame Street',
      status: 'Open',
    },
    {
      bookCount: 0,
      totalPrice: 0,
      shippingPrice: 0,
      address: '456 Somewhere Lane, New York, New York',
      status: 'Open',
    }
  ]
  
  module.exports = {
    books,
    users,
    carts,
    bookCarts,
  };