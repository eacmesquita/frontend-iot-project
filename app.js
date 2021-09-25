const express = require('express');
const {Storage} = require('@google-cloud/storage');

const app = express();
const port = process.env.PORT || 8080;
const bucketName = process.env.BUCKET_NAME;
//const storage = new Storage({projectId: 'healthy-cubist-326609', keyFile: './service_account.json'});
const storage = new Storage();
app.use('/', express.static('dist/angular-client'));
app.get('/cloudimages', async (req,res) => {
    // const [files] = await storage.bucket(bucketName).getFiles();
    // let images = [];
    // files.forEach(async file => {
    //     images.push(file.name);
    //   });
       let images = [{
          name: 'testimage',
          publicUrl: 'https://storage.googleapis.com/eric-bucket-test/438.png'
        }];
    res.status(200).send(images);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});