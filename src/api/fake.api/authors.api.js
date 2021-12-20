
const authors = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Джон Дориан",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author1.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author2.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Боб Келсо",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author3.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Рэйчел Грин",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author4.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Шелдон Купер",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author1.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Леонард Хофстедтер",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author2.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Говард Воловиц",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author3.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Никола Тесла",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author4.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Моника Геллер",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author1.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Рататуй",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author2.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        name: "Джоуи Триббиани",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author3.jpeg"),
        contacts: []
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        name: "Брэд Питт",
        about: "Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.",
        authorPhoto: require("../../assets/authors/author4.jpeg"),
        contacts: []
    }
];
if (!localStorage.getItem("authors")) {
    localStorage.setItem("authors", JSON.stringify(authors));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(JSON.parse(localStorage.getItem("authors")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const authors = JSON.parse(localStorage.getItem("authors"));
        const authorIndex = authors.findIndex((u) => u._id === id);
        authors[authorIndex] = { ...authors[authorIndex], ...data };
        localStorage.setItem("authors", JSON.stringify(authors));
        resolve(authors[authorIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(
                JSON.parse(localStorage.getItem("authors")).find(
                    (author) => author._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update,
    authors
};
