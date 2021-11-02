const { request } = require("express");
var moment = require('moment');


function makeCalculations(res,req) {
    

};
function multiplication(count) {
    
}
function priceOfEnglish(count) {
    countCost = count*0.12;
    result = count/0.095;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0 ;
    s = result-h*3600-m*60 ; 
    return;
}

function englishDiscountedprice(count) {
    add = (count*0.12)/5;
    countCost = (count*0.12)+add;
    result = count/0.095;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0
    s = result-h*3600-m*60
    return;
}

function russianDiscountedprice(count) {
    add = (count*0.12)/5;
    countCost = (count*0.12)+add;
    result = count/0.095;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0
    s = result-h*3600-m*60
    return;
}

function priceOfRussian(count) {
    countCost = count*0.05;
    result = count/0.37027777777;
    h = result/3600 ^ 0 ;
    m = (result-h*3600)/60 ^ 0 ;
    s = result-h*3600-m*60 ;
    return;
}


function extension(mimetype){

};

function results() {

    CorrDate = moment().add(0,'d').add(h,'hours').add(m,'m').add(s,'s').format('DD-MM-YYYY, HH:mm:ss')
    if(moment.weekdays == 6)
    {
        CorrDate = moment().add()(2,'d').add(h,'hours').add(m,'m').add(s,'s').format('DD-MM-YYYY, HH:mm:ss')
    }
    if(moment.weekdays == 7)
    {
        CorrDate = moment().add(1,'d').add(h,'hours').add(m,'m').add(s,'s').format('DD-MM-YYYY, HH:mm:ss')
    }

};

makeCalculations.result = (req, res) =>
{  
        const{language,count,mimetype}=req.body;
        multiplication(language,count); {
            if(language==="en") {
                extension(mimetype); {
                    if(mimetype=="none") {
                        englishDiscountedprice(count);
                    }
                    if(mimetype=="docx"||mimetype=="doc"||mimetype=="rtf"||mimetype=="pdf") {
                        priceOfEnglish(count); 
                    } 
                } 
            }
            if(language === "ru"| language === "ua") {
                extension(mimetype); {
                    if(mimetype=="none") {
                        russianDiscountedprice(count);
                    }
                    if(mimetype=="docx"||mimetype=="doc"||mimetype=="rtf"||mimetype=="pdf") {
                        priceOfRussian(count)
                    }
                }  
            }

        
        }    

        results()
        {
            res.status(200).send({    
                price:(Math.ceil(countCost)),
                time: (h)+" ч. "+(m)+" мин. ",
                deadline_date:CorrDate,
                deadline_date:CorrData.unix()

            });
            return;  
        }   
}
module.exports  = makeCalculations;