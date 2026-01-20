
const display = document.getElementById("display");

function appendtoDisplay(value){
        display.value += value;
    }
function cleardisplay(){
        display.value = "";
    }
function calculator(){
     try
    {
        display.value = eval(display.value);
    }
    catch
    {
        display.value = "Error";        
    }  
}
