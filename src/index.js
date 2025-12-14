import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let nextId = 1;

const albums = [
    {
        id: nextId++,
        Artist: "Reflections",
        Title: "The Color Clear",
        Genre: "Djent",
    },
    {
        id: nextId++,
        Artist: "Thy Art Is Murder",
        Title: "Hate",
        Genre: "Deathcore",
    },
];

// GET all albums (200)
app.get("/albums", (req, res) => {
    res.status(200).json(albums);
});

// POST new album (201)
app.post("/albums", (req, res) => {
    if (!req.body.Artist || !req.body.Title || !req.body.Genre) {
        return res.status(400).json({ error: "Missing album data" });
    }

    const newAlbum = {
        id: nextId++,
        Artist: req.body.Artist,
        Title: req.body.Title,
        Genre: req.body.Genre,
    };

    albums.push(newAlbum);
    res.status(201).json(newAlbum);
});

// GET album by id (200 / 404)
app.get("/albums/:id", (req, res) => {
    const id = Number(req.params.id);
    const album = albums.find((a) => a.id === id);

    if (!album) {
        return res.status(404).json({ error: "Album not found" });
    }

    res.status(200).json(album);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
