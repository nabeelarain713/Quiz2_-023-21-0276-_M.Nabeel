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

const person = {
    name: "John Doe",
    age: 25,
    country: "USA",
    semester: "Fall 2023",
    cms: "123456",
    details: [
      {
        contactNumber: "123-456-7890",
        email: "john.doe@example.com"
      },
      {
        contactNumber: "987-654-3210",
        email: "johndoe@gmail.com"
      },
      {
        contactNumber: "555-123-4567",
        email: "johndoe@hotmail.com"
      }
    ]
  };
  
  // Printing the values of the object (not keys)
  for (const key in person) {
    if (Array.isArray(person[key])) {
      // If the value is an array (inner object)
      for (const innerObj of person[key]) {
        console.log(`Contact Number: ${innerObj.contactNumber}`);
        console.log(`Email: ${innerObj.email}`);
      }
    } else {
      // If the value is not an array (name, age, country, semester, cms)
      console.log(person[key]);
    }
  }
  
  






