let roman = "";

for (let i = 0; i < arr.length; i++) {

while (num >= arr[i][1]) {

roman += arr[i][0];

num = arr[1][1];

I

}

}

return roman;

// You can test your code by running the above function

// console.log(convertToRoman (36));


