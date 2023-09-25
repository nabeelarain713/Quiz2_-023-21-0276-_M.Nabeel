//Task 1: Write a function that can calculate the average of an array of values (numbers)

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

let arr = [15, 20, 25, 40, 10, 40];
result = average(arr);
console.log(result);

//Task 2. Print values of array using map function along with index as following output (”Value at index 1 is 10”, …)

const myArray = [10, 20, 30, 40, 50];

myArray.map((value, index) => {
  console.log(`Value at index ${index} is ${value}`);
});


// Task 3.  Write an object of person with key values as below and print the values of the object not keys

function displayObject(obj, parentKey = "") {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const currentKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof value === 'object' && !Array.isArray(value)) {
                displayObject(value, currentKey);
            } else {
                console.log(`${currentKey}: ${value}`);
            }
        }
    }
}

let per_obj = {
    name: "Nabeel",
    age: 22,
    country: "Pakistan",
    semester: 5,
    cms: "023-21-0276",
    details: {
        contacts: ["0333-7642342","0315-6367321","0306-2373217"],
        emails: []
    }
}






