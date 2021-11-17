/* eslint-disable import/no-anonymous-default-export */
const tags = {
    technology: {
        _id: "67rdca3eeb7f6fgeed471198",
        name: "technology",
        color: "primary"
    },
    lifeandlove: {
        _id: "67rdca3eeb7f6fgeed471100",
        name: "lifeandlove",
        color: "secondary"
    },
    success: {
        _id: "67rdca3eeb7f6fgeed4711012",
        name: "essentialism",
        color: "success"
    },
    alcoholic: {
        _id: "67rdca3eeb7f6fgeed471101",
        name: "webdevelopment",
        color: "danger"
    },
    fashion: {
        _id: "67rdca3eeb7f6fgeed471102",
        name: "fashion",
        color: "info"
    },
    lifestyle: {
        _id: "67rdca3eeb7f6fgeed471103",
        name: "lifestyle",
        color: "dark"
    },
    architecture: {
        _id: "67rdca3eeb7f6fgeed471104",
        name: "architecture",
        color: "dark"
    },
    sports: {
        _id: "67rdca3eeb7f6fgeed471105",
        name: "sports",
        color: "dark"
    },
    entertainment: {
        _id: "67rdca3eeb7f6fgeed471106",
        name: "entertainment",
        color: "dark"
    },
    culinaryarts: {
        _id: "67rdca3eeb7f6fgeed471107",
        name: "culinaryarts",
        color: "dark"
    },
    travel: {
        _id: "67rdca3eeb7f6fgeed471108",
        name: "travel",
        color: "dark"
    },
    worldhistory: {
        _id: "67rdca3eeb7f6fgeed471109",
        name: "worldhistory",
        color: "dark"
    },
    aeronautics: {
        _id: "67rdca3eeb7f6fgeed471110",
        name: "aeronautics",
        color: "dark"
    },
    games: {
        _id: "67rdca3eeb7f6fgeed471111",
        name: "games",
        color: "dark"
    },
    minimalism: {
        _id: "67rdca3eeb7f6fgeed471112",
        name: "minimalism",
        color: "dark"
    },
    finearts: {
        _id: "67rdca3eeb7f6fgeed471113",
        name: "finearts",
        color: "dark"
    },
    graphicdesign: {
        _id: "67rdca3eeb7f6fgeed471114",
        name: "graphicdesign",
        color: "dark"
    },
    filmmaking: {
        _id: "67rdca3eeb7f6fgeed471115",
        name: "filmmaking",
        color: "dark"
    },
    bitcoin: {
        _id: "67rdca3eeb7f6fgeed471116",
        name: "bitcoin",
        color: "dark"
    },
    computers: {
        _id: "67rdca3eeb7f6fgeed471117",
        name: "computers",
        color: "dark"
    },
    machinelearning: {
        _id: "67rdca3eeb7f6fgeed471118",
        name: "machinelearning",
        color: "dark"
    }
};
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(tags);
        }, 2000);
    });

export default {
    fetchAll,
    tags
};
