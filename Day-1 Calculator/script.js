const data = document.getElementById('data');

function display(input){
    data.value += input;
}

function cleardisplay(){
    data.value = '';
}

function calculate(){
    try{
        data.value = eval(data.value);
    } catch(e){
        data.value = 'Syntax error: ';
    }
}