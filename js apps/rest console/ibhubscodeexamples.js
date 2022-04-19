// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Resolved!"), 1000);
//   });
  
//   const myFunction = async () => {
//     try {
//       let result = await promise;
//       result = "Got this!";
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   myFunction();
  
/////////////////////////////////////////////////////

// const myPromise = new Promise((resolve, reject) => {
//     console.log("Raise up!!");
//   });
  
//   console.log("Great!! Keep going");

////////////////////////////////////////////////////

// const function1 = () => {
//     console.log("Yes!!");
//   };
  
//   const function2 = () => {
//     setTimeout(() => console.log("This time"), 1000);
//   };
  
//   const function3 = () => {
//     console.log("Made it");
//   };
  
//   function1();
//   function2();
//   function3();
  
/////////////////////////////////////////////////////

// const realUser = "Harry";

// const validateUser = (loggedUser) => {
//   return new Promise((resolve, reject) => {
//     realUser === loggedUser ? resolve("Welcome!") : reject("Invalid User");
//   });
// };

// const myPromise = async () => {
//   try {
//     const result = await validateUser("Hari");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// myPromise();

/////////////////////////////////////////////////////////

// const myPromise = () => {
//     return new Promise((resolve) => {
//       resolve("I have resolved!");
//     });
//   };
  
//   const myAsyncTask = async () => {
//     console.log("Before Promise");
//     await myPromise();
//     console.log("After Promise");
//   };
  
//   myAsyncTask();
  
/////////////////////////////////////////////////////////

// const url = "https://apis.ccbp.in/jokes/random";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonData) => {
//     console.log("Data Loaded");
//   });

// console.log("Data Fetched");

////////////////////////////////////////////////////////

// const myPromise = new Promise((resolve, reject) => {
//     console.log("Blue");
//   });
  
//   console.log("Green");
  
//   myPromise
//     .then(() => {
//       console.log("Orange");
//     });
  
//   console.log("White");
  
/////////////////////////////////////////////////////////

// const myPromise = new Promise((resolve, reject) => {
//     console.log("Raise up!!");
//   });
  
//   console.log("Great!! Keep going");
  
//////////////////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Failed!"), 1000);
//   });
  
//   const myFunction = async () => {
//     try {
//       const result = "Not Again!";
//       result = await promise;
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   myFunction();

/////////////////////////////////////////////////////////
// const promise = new Promise((res, rej)=> {
//     setTimeout(() => {
//         res();
//     }, 1000);
// }).then((res) => console.log("response 1")).catch((err) => console.log(err)).then((res) => console.log("response 2"));

/////////////////////////////////////////////////////////

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 1000);
  });
  
  const myFunction = async () => {
    try {
      let result = await promise;
      result = "Got this!";
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  
  myFunction();
  