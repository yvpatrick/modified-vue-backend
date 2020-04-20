const config = require("../config/auth.config");
const dbconfig = require("../config/db.config");
const db = require("../models");
const APIRecords = db.APIRecords;
var url = "mongodb://127.0.0.1:27017/APISearch";
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
// const xyz="db.APIRecords";

exports.test = (req, res) => {
    res.status(200).send("testing comment");
  };
   
// exports.view = (req, res) => {
//   // res.status(200).send("it works");
//    MongoClient.connect(url, function(err, db) {

//     var cursor = db.collection('APIRecords').find();

//     cursor.each(function(err, doc) {
//         res.send(doc);
//         console.log(doc);

//     });
// }); 
//   };

// exports.view = (req, res)=> {
//     MongoClient.connect(url, function(err, client) {
//        var db=client.db('APISearch');
//         try {
//             assert.equal(null, err);
//             db.collection('APIRecords').find({'_id':"Alchemy Image Link Extraction-1"},function(err, doc) {
//                 assert.equal(null, err);
//                 // res.send(doc)
//                 console.log(doc);
//             })
//         } catch (err) {
//             console.log(err)

//         }
//     })
// }

 exports.view = (req, res)=> {
    MongoClient.connect(url, function(err, client) {
            var db=client.db('APISearch');

        assert.equal(null, err);
        var cursor = db.collection('APIRecords').find({'_id':"XigniteGlobalNews-1"})
        cursor.each(function(err, doc) {
            assert.equal(err, null);
            if (doc != null) {
                console.log(doc);
                res.send(doc);

            } else {
                client.close();
                
            }
        });
    });
  }
  exports.postapi=(req,res)=>{
     MongoClient.connect(url, function(err, client) {
                    var db=client.db('APISearch');
                    apidata={
                      '_id': req.params.id,
                    'CreatedBy': req.params.CreatedBy,
                    'Version' : req.params.Version,
                    'Swagger' :req.params.Swagger,

                    'apiname': req.params.apiname,
                    'dateCreated':new Date(),
                    'Description':req.params.Description,
                    
                    }
                        assert.equal(null, err);
                        db.collection('APIRecords').insertOne(apidata, function(err, result) {
                            
                                assert.equal(err, null);
                                client.close();
                                
                                res.send({ 'message': 'Data added successfully', "registrationCode": apidata});
                            
                        });
                   
                });
  }


  // exports.insert = (req, res) => {
  //   const comment = new Comment({
  //     title: req.body.title,
  //     comment: req.body.comment
  //   });
  
  //   comment.save((err, user) => {
  //     if (err) {
  //       res.status(500).send({ message: err });
  //       return;
  //     }
  //     res.send({ message: "Comment was inserted successfully!" });
  //   });
  // }

  // exports.delete = (req, res) => {
  //   // res.status(200).send("it works");
  //     Comment.findByIdAndRemove({_id: req.body.id},function(err){
  //       if(err) res.json(err);
  //       else res.json('Successfully removed');
  //   });
    
          // res.status(200).send({
          //   id: user._id,
          //   username: user.username,
          //   email: user.email,
          //   roles: authorities,
          //   accessToken: token
          // });
        
    // };

    // exports.update = (req, res) => {
      // res.status(200).send("it works");
      //   Comment.findByIdAndRemove({_id: req.body.id},function(err){
      //     if(err) res.json(err);
      //     else res.json('Successfully removed');
      // });
      //   Comment.findByIdAndUpdate({_id: req.body.id},{comment:req.body.comment},function(err){
      //     if(err) res.json(err);
      //     else res.json('Successfully updated');
      // });
      
            // res.status(200).send({
            //   id: user._id,
            //   username: user.username,
            //   email: user.email,
            //   roles: authorities,
            //   accessToken: token
            // });
          
      // };


  