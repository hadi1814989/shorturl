import e from "express";

const app = e();
app.use(e.json({ limit :"1mb"}));
app.use(e.urlencoded({limit : "1mb", extended : true}));

app.get("/", (_,res) => {
 return res.send("server is running")
});




export {app};