// src/index.js
import express from "express";

const app = express();

const port = 3000;

app.use(express.static('public'))
app.use(express.json());


app.get("/", (req, res) => {
   res.send('<h1>Hello Express!</h1><p>Your server is working!</p>');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const albums= [
    {Artist: "Reflections", Title: "The Color Clear", Genre:"Djent"},
    {Artist: "The Devil Wears Prada", Title: "With Roots Above and Branches Below", Genre:"Metalcore"},
    {Artist: "Woe Is Me", Title: "Numbers", Genre:"Metalcore"},
    {Artist: "Attack Attack!", Title: "Self Titled", Genre:"Metalcore"},
    {Artist: "Thy Art Is Murder", Title: "Hate", Genre:"Deathcore"},
]

app.get('/albums', (req, res) => {
   
  res.json(albums);
});

app.post('/albums', (req, res)=>{
    // console.log(req.body)
    
    //create new album from user input
    const newAlbum={
        artist: req.artist,
        title: req.title,
        genre: req.title

    }

    //add new game to our list
    albums.push(newAlbum)

    //inform user of success 
    res.status(201);
    res.json(newAlbum);
        
    
})

app.post('/albums', (req, res) => {
  // Route handlers can modify the items array
  items.push(req.body);
  res.status(201).json(req.body);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});