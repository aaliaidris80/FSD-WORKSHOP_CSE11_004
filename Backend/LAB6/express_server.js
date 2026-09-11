import express from "express";
const port=3000;
const app=express();
const userData=[
    {
        id:1,
        name : "abc",
        age :19
    },
    {
        id:2,
       name:"lucerine",
       age:20 
    },
      {
        id:3,
        name : "gggg",
        age :16
      }
];
app.get("/",(req,res)=>{  
    res.status(200).json({
        messege:"data fetched successfully",
    });
});
app.get("/users",(req,res)=>{
    try{
        res.status(200).json({ message: " data receive",userData})
    }
    catch(error){
       console.error("error",error.message);
    }
});
app.get("/users/:id",(req,res){
    try{
        const id=req.params.id;
        const user=userData.find((user)=>user.id==id);
        if(user){
            
        }
    }
}
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});