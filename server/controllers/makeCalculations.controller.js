const { request } = require("express");
const { lang } = require("moment");
var moment = require('moment');

const makeCalculations = function(){};
const multiplication = function(){};
const weekend = function(){};
const results = function(){};
const extension = function(){};

makeCalculations.result= (req, res) =>
{  
    if(req.body.hasOwnProperty("language")&&req.body.hasOwnProperty("mimetype")&&req.body.hasOwnProperty("count")){
        let countCost;
        let result;
        let add;
        const{count,mimetype,language}=req.body;
        multiplication(language,count)
        {
            if(language==="en")
            {
                extension(mimetype)
                {
                    if(mimetype=="none")
                    {
                        add = (count*0.12)/5;
                        countCost = (count*0.12)+add;
                        result = count/333;
                    }
                    if(mimetype=="docx"||mimetype=="doc"||mimetype=="rtf"||mimetype=="pdf")
                    {
                        countCost = count*0.12;
                        result = count/333;
                    }
                    else
                    {

                    }
                }
               
            }
            if(language === "ru"| language === "ua")
            {
                extension(mimetype)
                {
                    if(mimetype=="none")
                    {
                        add = (count*0.05)/5;
                        countCost = (count*0.05)+add;
                        result = count/333;
                    }
                    if(mimetype=="docx"||mimetype=="doc"||mimetype=="rtf"||mimetype=="pdf")
                    {
                        countCost = count*9;
                        result = count/1333;
                    }
                }
               
            }

        
        }
        weekend()
        {
            if(moment().weekday() == 6||moment().weekday() == 7){
                res.status(200).send({    
                    message:"Weekend"  
                });
                return;
            }
            if(moment().hour() < 1 ||moment().hour() > 23){
                res.status(200).send({    
                    message:"Close"  
                });
                return;
            }
        }
        results()
        {
            res.status(200).send({    
                price:countCost,
                time:result,
                deadline_date: moment().format(`MMMM Do YYYY, ${moment().hour()+result}:mm:ss`),
                deadline:result= Date.now()     
            });
            return;  
        }  
    }
}
module.exports  = makeCalculations;