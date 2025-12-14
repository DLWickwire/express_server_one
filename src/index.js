import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const albums = [
    { Artist: "Reflections", Title: "The Color Clear", Genre: "Djent" },
    {
        Artist: "The Devil Wears Prada",
        Title: "With Roots Above and Branches Below",
        Genre: "Metalcore",
    },
    { Artist: "Woe Is Me", Title: "Numbers", Genre: "Metalcore" },
    { Artist: "Attack Attack!", Title: "Self Titled", Genre: "Metalcore" },
    { Artist: "Thy Art Is Murder", Title: "Hate", Genre: "Deathcore" },
];

app.get("/", (req, res) => {
    res.send("<h1>Hello Express!</h1><p>Your server is working!</p>");
});

app.get("/albums", (req, res) => {
    res.json({ total: albums.length, albums });
});

app.post("/albums", (req, res) => {
  const newAlbum = {
    Artist: req.body.Artist,
    Title: req.body.Title,
    Genre: req.body.Genre,
  };

  albums.push(newAlbum);
  res.status(201).json(newAlbum);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
