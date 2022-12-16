let string = "Merry Christmas!"
let convertedString = []
console.log(string)



//Loop through input string


 for (k = 0; k<string.length; k++){
    console.log(string.charCodeAt(k));

    convertedString.push(string.charCodeAt([k]));
}



//Loop through converted string and add numbers to charCode


for (let i = 0; i < convertedString.length; i++){
    if (convertedString[i] < 65){
        continue
    }
    else if (convertedString[i] >= 65 && convertedString[i] <= 90){
        convertedString[i] = ((convertedString[i] + 15))
        if(convertedString[i] > 90){
            convertedString[i] = convertedString[i] - 26;

        }
    } else if (convertedString[i] >= 97 && convertedString[i] <= 122){
        convertedString[i] = ((convertedString[i] + 15));
        if(convertedString[i] > 122){
            convertedString[i] = convertedString[i] - 26   
        }
    }
}

console.log(convertedString)

console.log(String.fromCharCode.apply(String, convertedString))





