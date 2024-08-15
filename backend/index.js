
const express = require('express')
var cors = require("cors");
require("./connection");
var ReqModel = require("./models/req");
var UserModel =require("./models/user")
var AddModel =require("./models/add")
var AdminModel =require("./models/admin")

const app = new express()


// midd
app.use(express.json());
app.use(cors());

// api to add
app.post("/addrr", async (req, res) => {
  try {
    await AddModel(req.body).save();
    res.send({ message: "Data added!!" });
  } catch (error) {
    console.log(error);
  }
});

// api to view
app.get("/viewrr", async (req, res) => {
  try {
    var data = await AddModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// to delete an emp
app.delete("/removerr/:id", async (req, res) => {
    try {
       await AddModel.findByIdAndDelete(req.params.id)
       res.send({message:"Deleted successfully!!!"})
    } catch (error) {
        console.log(error)
    }
});


// to update
app.put("/editrr/:id", async (req, res) => {
    try {
      var data = await AddModel.findByIdAndUpdate(req.params.id, req.body);
      res.send({message:'updated successfully',data})
    } catch (error) {
      console.log(error)
    }
  });

  
  


// api to add
app.post("/addr", async (req, res) => {
  try {
    await ReqModel(req.body).save();
    res.send({ message: "Data added!!" });
  } catch (error) {
    console.log(error);
  }
});


// api to view
app.get("/viewr", async (req, res) => {
  try {
    var data = await ReqModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// to delete an emp
app.delete("/remover/:id", async (req, res) => {
    try {
       await ReqModel.findByIdAndDelete(req.params.id)
       res.send({message:"Deleted successfully!!!"})
    } catch (error) {
        console.log(error)
    }
});


// to update
app.put("/editr/:id", async (req, res) => {
    try {
      var data = await ReqModel.findByIdAndUpdate(req.params.id, req.body);
      res.send({message:'updated successfully',data})
    } catch (error) {
      console.log(error)
    }
  });

  
  
  app.post("/reg", async (req, res) => {
    try {
      await UserModel(req.body).save();
      res.send({ message: "Account Created" });
    } catch (error) {
      console.log(error);
    }
  });


// login
app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.findOne({ email, pass });
    if (user) {
      res.send({ success: true, message: "Login successful!" });
    } else {
      res.send({ success: false, message: "Invalid email or password." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred while logging in." });
  }
});
//admin login
app.post("/admin", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const admin = await AdminModel.findOne({ email, pass });
    if (admin) {
      res.send({ success: true, message: "Login successful!" });
    } else {
      res.send({ success: false, message: "Invalid email or password." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An error occurred while logging in." });
  }
});


app.listen(3004, () => {
  
  console.log("port is up");
});
