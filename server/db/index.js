const Sequelize = require("sequelize");

const dbConnection = new Sequelize(
    "postgres://krysfields12:Ballin12@localhost:5432/ecommerceapp"
);

module.exports = dbConnection;

/*
    Product model
        - name (not null)
        - imageUrl
        - description
        - price
    Department
        - name (not null)
*/

const Book = dbConnection.define("book", {
    title: {
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

const Cart = dbConnection.deifine("cart", {
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
    password: {
        type: Sequelize.STRING,
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
})

