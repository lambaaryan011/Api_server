import express from "express";

const port = 3000;

const app = express();
app.use(express.text()); 
const router = express.Router();

app.use('/', router);

let lastNote = ""; // Variable to store the latest note

// Route to create or update the note
router.post("/", (req, res) => {
    try {
        const newNote = req.body.trim();
        if (newNote) {
            lastNote = newNote; // Overwrite 
            return res.status(201).send(`Note updated successfully: "${newNote}"`);
        } else {
            return res.status(400).send("Invalid note. Please provide valid text.");
        }
    } catch (err) {
        return res.status(500).send("An error occurred: " + err.message);
    }
});

// Route to get the last note
router.get("/", (req, res) => {
    try {
        if (!lastNote) {
            return res.status(200).send("No note available.");
        }
        return res.status(200).send(`Last note: "${lastNote}"`);
    } catch (err) {
        return res.status(500).send("An error occurred: " + err.message);
    }
});

app.listen(port, () => {
    console.log("Server running on port", port);
});
