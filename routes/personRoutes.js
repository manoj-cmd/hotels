const express = require("express");
const router = express.Router();

const Person = require('./../models/person');

router.post('/', async (req, res) => {

    try{
     const data = req.body // person data

    // create new person useing mogoose model
    const newPerson = new Person(data) ;

    // save data
      const respone = await newPerson.save();
        console.log("data is save")
        res.status(200).json(respone)
    }catch(err){
           console.log("fecth api error", err)
           res.status(500).json({err: "internal server error"})
    }
})
router.get('/:workType', async (req, res)=>{
    try{

        const workType = req.params.workType;
           if(workType == "manager" || workType === "chef" || workType == "waiter"){
              const response = await Person.find({work:workType});
              console.log("request fetch");
              res.status(200).json(response)
           }else{
               res.status(404).json({error: "invalid work type"})
            }

    }catch(err){
        console.log("api error", err);
        res.status(400).json({err: "fetch api", message: err.message})
    }
})

router.get('/', async (req, res) => {
        try{
              const data = await Person.find()
              console.log("fetch data");
              res.status(200).json(data)
        }catch(err){
           console.log("data fetch api error", err);
           res.status(500).json({err: "feych data error"})
        }
    })

    router.put('/:id', async (req, res) => {
          try{
            const personId = req.params.id;
            const updatesData = req.body; 
            const response = await Person.findByIdAndUpdate(personId, updatesData, {
                new : true, // return the update document
                runValidators: true, //run mongoose validaters
            })
            if(!response){
                res.status(400).json({error: "person data not fount"})
            }
            console.log("data update");
            res.status(200).json(response);
          }catch(err){
             console.log(err);
             res.status(500).json({err: "internal server error"})
          }
    })

    router.delete('/:id', async (req, res) => {
        try{
            const perseonDelete = req.params.id;

            const response = await Person.findByIdAndDelete(perseonDelete)

            if(!response){
                res.status(400).json({error : "person not found"})
            }
            console.log("data deleted")
            res.status(200).json({message : "person delete sucessfull"})

        }catch(err){
            console.log("internal server error");
            res.status(500).json({err: "Internal server error"})
        }
    })

    module.exports = router