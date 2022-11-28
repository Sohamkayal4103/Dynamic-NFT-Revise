require("dotenv").config();
const { Revise } = require("revise-sdk");
const AUTH_TOKEN = process.env.AUTH_TOK;
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {

    // write your code here - this is where the next two snippets of code should be pasted
    const collection = await revise.addCollection({
      name: "StarLord NFT",
      uri: "collection1nft",
    });
  
    // Collection Name : Use any name you want for your collection (this gets shown in the marketplace))
    // Collection_URI  : Use a unique name (no spaces or special characters)
    //                   this will generate a unique link for your collection
    //                   for e.g. if you choose "myuniquecollection"
    //                   your baseURI wil be "myuniquecollection.revise.link"
  
    const nft = await revise.addNFT(
      {
        image:
          "https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/1.jpg",
        name: "Star Lord",
        tokenId: "1",
        description: "This is a test description",
      },
      [{ attack: "80" }, { color: "maroon" }, { stamina: "90" }],
      collection.id
    );
  
    console.log(nft);
}
run()