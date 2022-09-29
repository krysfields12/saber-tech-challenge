const router = require("express").Router();
const { models: { Book } } = require("../db");


//GET /books
router.get("/", async (req, res, next) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch(e) {
        next(e)
    };
});

//GET /books/:id
router.get("/:id", async (req, res, next) => {
    try {
        const book = await Book.findOne({
            where: {
                id: req.params.id
            },
        });
    } catch(e) {
        next(e);
    }
})

//POST /books
router.post("/", async (req, res, next) => {
   try {
       res.status(201).send(await Book.create(req.body));
   } catch(e) {
       next(e);
   }
});

//PUT /books/:id
router.put("/:id", async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.json(await book.update(req.body))
    } catch(e) {
        next(e)
    };
});

//DELETE /books/:id
router.delete("/:id", async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id);
        await book.destroy()
        res.send(book)
    } catch(e) {
        next(e)
    }
})

module.exports = router;