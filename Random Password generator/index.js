function generatepassword(length,includeLowercase,includeUppercase,includeSymbol,includeNumber){

    const Lowercase = "abcdefghijklmnopqrstuvwxyz";
    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbol = "!@#$%^&*()";
    const number = "0123456789";
    
    
    let password="";
    let allowedChar=" ";

    allowedChar += includeLowercase ? Lowercase: "";
    allowedChar += includeUppercase ? Uppercase: "";
    allowedChar += includeSymbol ? symbol: "";
    allowedChar += includeNumber ? number: "";
    
    if(length <= 0){
        return `(Password length must have atleast one element)`;
    }
    if(allowedChar.length === 0){
        return `(Password length should not be zero)`;
    }
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomIndex];
    }
    return password;
}

const passwordlength = 12;
const includeLowercase= true;
const includeUppercase= true;
const includeSymbol= true;
const includeNumber= true;

const password = generatepassword(passwordlength,includeLowercase,includeUppercase,includeSymbol,includeNumber);

console.log(`Generated Password: ${password}`);