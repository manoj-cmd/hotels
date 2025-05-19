const express = require("express");
const router = express.Router();


const MenuItem = require('./../models/MenuItems');

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    console.log(newMenu);
    const response = await newMenu.save();
    console.log("data save");
    res.status(200).json(response);
   } catch (err) {
  console.error("POST /menu error:", err);
  res.status(500).json({ err: "fetch api error", message: err.message });
}
});
router.get('/', async (req, res) => {
        try{
              const mydata = await MenuItem.find()
              console.log("fetch data");
              res.status(200).json(mydata)
        }catch(err){
           console.log("data fetch api error", err);
           res.status(500).json({ err: "fetch data error" })
        } })

        router.get('/:taste', async (req, res) => {
        try{
             const taste = req.params.taste;
             if(taste == "sweet" || taste == "spicy" || taste == "sour") {
                 const response = await MenuItem.find({taste: taste});
                 res.status(200).json(response);
             } else{
                res.status(400).json({error: "taste type invalid", message: err.message})
             }                       
        }catch(err){
           console.log("data failed");
           res.status(500).json({err: "internal error"})
        } 
    })
     router.put('/:id', async (req, res) => {
        try{
            const menuId = req.params.id;
            const menuData = req.body;
            const response = await MenuItem.findByIdAndUpdate(menuId, menuData, {
                new : true,
                runValidators : true
            })
            if(!response){
                    res.status(400).json({error: "Menu iten is not found"})
            }
            console.log("data update")
              res.status(200).json(response)
        }catch(err){
            console.log(err);
            res.status(500).json({err: "Internal server error"})
        }
     })

        module.exports = router
