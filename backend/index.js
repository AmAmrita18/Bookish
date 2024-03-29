const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

const path = require('path');

//middleware
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// const __dirname = path.resolve();

// Serve static files
// app.use(express.static(path.join(__dirname, 'build')));

// // Handle other routes by serving index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.get("/", (req, res) => {
  res.send("Hello World!");
});

//password: Y2tgjpwjLVyzRMGW

//mongoDB config

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://bookish-mern-book-store:Y2tgjpwjLVyzRMGW@cluster0.cgyjafl.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //creating a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");

    //insert a book to the db: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    //get all books from the database
    // app.get("/all-books", async (req, res) => {
    //   const books = bookCollections.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // });

    //update a book data: patch or update methods
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      // console.log(id);

      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upset: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };

      //update
      const result = await bookCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    //find by category
    app.get("/all-books", async(req, res) => {
      try {
        let query = {};
        
        // Check if there is a search query
        if (req.query.search) {
          const searchRegex = new RegExp(req.query.search, 'i');
          query = {
            $or: [
              { title: { $regex: searchRegex } },
              { author: { $regex: searchRegex } },
              { category: { $regex: searchRegex } }
            ]
          };
        }
    
        const result = await bookCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
      }
    })

    //to get single book data
    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}
run().catch(console.dir);


// app.use(express.static(path.join(__dirname, '/frontend/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// Search for books based on title or author


