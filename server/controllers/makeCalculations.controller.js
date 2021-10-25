const { request } = require("express");
var moment = require('moment');


function makeCalculations(res,req){
    

};
function multiplication(count){
    
}
function priceOfEnglish(count){
    countCost = count*0.12;
    result = count/0.095;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0 ;
    s = result-h*3600-m*60 ; 
    return;
}

function englishDiscountedprice(count){
    add = (count*0.12)/5;
    countCost = (count*0.12)+add;
    result = count/0.095;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0
    s = result-h*3600-m*60
    return;
}

function russianDiscountedprice(count){
    add = (count*0.12)/5;
    countCost = (count*0.12)+add;
    result = count/0.095;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0
    s = result-h*3600-m*60
    return;
}

function priceOfRussian(count){
    countCost = count*0.05;
    result = count/0.37027777777;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0 ;
    s = result-h*3600-m*60 ;
    return;
}

function extension(mimetype){



};

function results(){
    
};

makeCalculations.result = (req, res) =>
{  
        const{language,count,mimetype}=req.body;
        const startOfday = 10;
        const endOfday = 19;
        multiplication(language,count)
        {
            if(language==="en")
            {
                extension(mimetype);
                {
                    if(mimetype=="none")
                    {
                        englishDiscountedprice(count);
                    }

                    if(mimetype=="docx"||mimetype=="doc"||mimetype=="rtf"||mimetype=="pdf")
                    {
                        priceOfEnglish(count); 
                    }
                    
                }
               
            }
            if(language === "ru"| language === "ua")
            {
                extension(mimetype)
                {
                    if(mimetype=="none")
                    {
                        russianDiscountedprice(count);
                    }
                    if(mimetype=="docx"||mimetype=="doc"||mimetype=="rtf"||mimetype=="pdf")
                    {
                        priceOfRussian(count)
                    }
                }
               
            }

        
        }
        function weekend()
        {
            if(moment().weekday() == 6){
                res.status(200).send({    
                    price:(Math.ceil(countCost)),
                    time: (Math.ceil(result)),
                    deadline_date:moment().format(`MMMM ${moment().date()+2
                    }  ${(startOfday + h)+" ч. "+(m)+" мин. "}`),
                    deadline:result= Date.now(),
                    Times:(h)+" ч. "+(m)+" мин. " 
                });
                return;
            }
            if(moment().weekday() == 7){
                res.status(200).send({    
                    price:(Math.ceil(countCost)),
                    time: (Math.ceil(result)),
                    deadline_date:moment().format(`MMMM ${moment().date()+1}  ${(startOfday + h)+" ч. "+(m)+" мин. "}`),
                    deadline:result= Date.now(),
                    Times:(h)+" ч. "+(m)+" мин. " 
                });
                return;
            }
        };    
        function close() 
        {
            if(moment().hour() > endOfday){
                
                res.status(200).send({    
                    price:(Math.ceil(countCost)),
                    time: (Math.ceil(result)),
                    deadline:result= Date.now(),
                    deadline_date:moment().format(`MMMM ${moment().date()+1}  ${(startOfday + h)+" ч. "+(m)+" мин. "}`)
                });
                return;
                
            }

        }

        results()
        {
            res.status(200).send({    
                price:(Math.ceil(countCost)),
                time: (h)+" ч. "+(m)+" мин. ",
                deadline_date: moment().format(`MMMM ${moment().date()} , ${moment().hour()+h}:${moment().minute()+m}:ss`),
                deadline:result= Date.now(), 
            });
            return;  
        }   
}
module.exports  = makeCalculations;