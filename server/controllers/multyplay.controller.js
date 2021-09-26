const { request } = require("express");

const multypalay = function(){};

multypalay.result= (req, res) =>
{
    
    if(req.body.hasOwnProperty("language")&&req.body.hasOwnProperty("mimetype")&&req.body.hasOwnProperty("count")){
        const{count}=req.body;
        const{minetype}=req.body;
        const{language}=req.body;
        let countCost = count*0.12;
        let result = count/333;
        let none = countCost/5;
        let nonse = countCost+none;
        if(language==="en"){
            res.status(200).send({    
                price:countCost,
                time:result,
                deadline: result*60*60,
                nodiscount:nonse
            });
            return;       
        }
        else if(language==="ru"){
        let countCost = count*0.05;
        let result = count/1333;
        res.status(200).send({
            price:countCost,
            time:result,
            deadline: result*60*60,
            nodiscount:nonse
        });
        return;
}
else if(language==="ua"){
    let countCost = count*0.05;
    let result = count/1333;
    res.status(200).send({
        price:countCost,
        time:result,
        deadline: result*60*60,  
        nodiscount:nonse
    });
    return;
}
    }
}
module.exports  = multypalay;