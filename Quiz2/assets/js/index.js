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
  
    details: {
      contact1: {
        contactNumber: "123-456-7890",
        email: "john.doe@example.com",
      },
      contact2: {
        contactNumber: "987-654-3210",
        email: "johndoe@gmail.com",
      },
      contact3: {
        contactNumber: "555-555-5555",
        email: "johnd@example.net",
      },
    },
  };
  
  // Print the values of the person object (excluding keys)
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Country: ${person.country}`);
  console.log(`Semester: ${person.semester}`);
  console.log(`CMS: ${person.cms}`);
  
  console.log(`Contact 1 Number: ${person.details.contact1.contactNumber}`);
  console.log(`Contact 1 Email: ${person.details.contact1.email}`);
  
  console.log(`Contact 2 Number: ${person.details.contact2.contactNumber}`);
  console.log(`Contact 2 Email: ${person.details.contact2.email}`);
  
  console.log(`Contact 3 Number: ${person.details.contact3.contactNumber}`);
  console.log(`Contact 3 Email: ${person.details.contact3.email}`);
  






