const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')


//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//password: Y2tgjpwjLVyzRMGW

//mongoDB config

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bookish-mern-book-store:Y2tgjpwjLVyzRMGW@cluster0.cgyjafl.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //creating a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");

    //insert a book to the db: post method
    app.post("/upload-book", async(req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);

    })

    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error){
    console.log(error);
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})