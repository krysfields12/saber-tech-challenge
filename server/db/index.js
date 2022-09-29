const Sequelize = require("sequelize");

const dbConnection = new Sequelize(
    "postgres://krysfields12:Ballin12@localhost:5432/ecommerceapp"
);

/*
    Book model
        - title (not null)
        - author
        - imageUrl
        - description
        - price
        - genre
    Cart
        - book count
        - total price
        - shipping price
        - address
        - status
    User 
        - username
        - email
        - password
*/

const Book = dbConnection.define("book", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { 
            notEmpty: true, //this means the name cannot be an empty string
        },
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue:
            "https://images.app.goo.gl/wGRzZkrFNMqufdAE8"
    },
    description: {
        type: Sequelize.TEXT,
        defaulValue: 'Currently Unavailable',
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    }
}); 

const Cart = dbConnection.define("cart", {
    bookCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    totalPrice: {
        type: Sequelize.FLOAT,
        defaultValue:  0,
    },
    shippingPrice: {
        type: Sequelize.FLOAT,
        defaultValue: 3.99
    },
    address: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: "Open",
        isIn: [["Open", "Place"]],
    
    },
})
const User = dbConnection.define("genre", {
    username: {
        type: Sequelize.STRING,
        unique: true, 
        allowNull: false,
        validate: {
            notEmpty: true, 
        },
    },
    email: {
        type: Sequelize.STRING, 
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
})

const Book_Cart = dbConnection.define("Book_Cart", {
    quantity: {
        type: Sequelize.INTEGER,
        default: 1,
    }
})

// ASSOCIATIONS

User.hasMany(Cart);
Cart.belongsTo(User);

Book.belongsToMany(Cart, { through: "Book_Cart" });
Cart.belongsToMany(Book, { through: "Book_Cart" });

module.exports = {
    dbConnection,
    models: {
        User,
        Cart,
        Book,
        Book_Cart
    },
};

