const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('pizzaIMG'));

app.listen(port, () => {
    console.log(`listing on http://localhost:${port}`)
});

let menu = [
    {
        id:0,
        name: "Beneath These Streets",
        price: 9,
        topping: "granola, and licorice",
        quantity: 0,
        image: "streets.PNG"
    },
    {
        id: 1,
        name: "Attack of the 50-Foot Irma",
        price: 10,
        topping: "Chocolate Fudge, Extra Garlic",
        quantity: 0,
        image: "erma.PNG"

    },
    {
        id: 2,
        name: "April Fool",
        price: 8,
        topping: "Marshmallow, Pepperoni",
        quantity: 0,
        image: "april fool.PNG"

    },
    {
        id: 3,
        name: "Green with Jealousy",
        price: 9,
        topping: "Peanut Butter, Clams",
        quantity: 0,
        image: "geen with jelly.PNG"

    },
    {
        id: 4,
        name: "Pizza by the Shred",
        price: 8,
        topping: "Peanut Butter, Avacodo, Extra Pickles",
        quantity: 0,
        image: "shred.PNG"

    },
    {
        id: 5,
        name: "Super Bebop and Mighty Rocksteady",
        price: 9,
        topping: "Marshmallow, Asparagus",
        quantity: 0,
        image: "rocksteady.PNG"


    },
    {
        id: 6,
        name: "Case of the Hot Kimono",
        price: 10,
        topping: "Butterscotch, Onions, Anchovies",
        quantity: 0,
        image: "kimono.PNG"

    },
    {
        id: 7,
        name: "The Making of Metalhead",
        price: 10,
        topping: "Tea, Toast",
        quantity: 0,
        image: "metalhead.PNG"

    }
];

app.get('/pizza', (req, res)=> {
    res.json(menu)
})
app.get( '/pizza/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    menu.map((item) => {

        if (item.id === id) {
            res.status(200).json(menu);
        }
    })
});

app.put('/pizza/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const body = req.body.data.quantity;

    const update = menu.find(item => item.id === id)

    update.quantity = body;
    res.json("updated");
})

