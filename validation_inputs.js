const regex_number = new RegExp("[0-9]");
const regex_text = new RegExp("[A-z]");

function validationText(field){
    if(!field || typeof field  == undefined || field == null || regex_number.test(field)){
        return false;
    }
    else{
        return true;
    }
}

function validationNumber(field){
    if(!field || typeof field == undefined || field == null || regex_text.test(field)){
        return false;
    }
    else {
        return true;
    }
}

function validationLength(field, min, max=undefined){
    if(field.length < min){
        return false;
    }
    else if( !(typeof max == undefined) && field.length > max){
        return false;
    }
    else{
        return true;
    }
}


function validationDate(field,returnAge=false){
    const date = field.split("-");
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    if(date[0] > year){
        return false;
    }
    else if(date[0] == year){
        if (date[1] > month){
            return false;
        }
        else if(date[1] == month){
            if(date[2] > day){
                return false;
            }
        }
        
    }

    if(returnAge){
        return year - date[0]
    }
    return true;
}




module.exports = {
    validationText, validationNumber, validationLength, validationDate
}


