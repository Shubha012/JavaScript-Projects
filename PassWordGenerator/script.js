const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*";

function generateClicked(){
    const upperCaseChecked = document.getElementById('upper').checked
    const lowerCaseChecked = document.getElementById('lower').checked
    const numberChecked = document.getElementById('nums').checked
    const symbolChecked = document.getElementById('symbol').checked
    
    const len = document.getElementById('Length').value;

    let chars = "";
    let password = "";
    let i = 0;

    if(upperCaseChecked){
        if(i<len){
            password+= upperCase[Math.floor(Math.random() * upperCase.length)];
            i++;  
        }  
        chars += upperCase;
    }

    if(lowerCaseChecked){
        if(i<len){
            password+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
            i++;  }  
    
            chars += lowerCase;
    }
    if(numberChecked){
        if(i<len){
            password+= number[Math.floor(Math.random() * number.length)];
            i++;  
        }  
        chars += number;
    }
    if(symbolChecked){
        if(i<len){
            password+= symbol[Math.floor(Math.random() * symbol.length)];
            i++;  
        }  
        chars += symbol;
    }

    for(; i<len; i++){
        password += chars[Math.floor(Math.random() * chars.length)]
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('output').value = password
}

document.querySelector('button').addEventListener("click", generateClicked)