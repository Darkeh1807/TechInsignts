// // let count = 0;

// // function increase() {
// //     count = count + 1;
// //     document.getElementById("num").innerHTML = count
// // }
// // function reset() {
// //     count = 0;
// //     document.getElementById("num").innerHTML = count
// // }
// // function decrease() {
// //     count = count - 1;
// //     document.getElementById("num").innerHTML = count
// // }

// // //  window.alert("Hi there")
// // let val = null
// // console.log(val)

// // let x = "Volvo" + 16;
// // console.log(x)

// // const sen = "I'm going to school"
// // console.log(sen)

// // let z = BigInt("123456789012345678901234567890");


// // console.log(z)

// // const cars = ["Toyota", "Opel", "BMW", "Landcruiser"]
// // console.log(cars[0])


// // let persons = [
// //     {
// //         firstName: "John",
// //         lastName: "Doe",
// //         age: 23,
// //         eyeColor: "blue"
// //     },
// //     {
// //         firstName: "Elijah",
// //         lastName: "Doe",
// //         age: 40,
// //         eyeColor: "red"
// //     },
// //     {
// //         firstName: "Dorcas",
// //         lastName: "Doe",
// //         age: 50,
// //         eyeColor: "violet"
// //     },
// //     {
// //         firstName: "Angel",
// //         lastName: "Doe",
// //         age: 60,
// //         eyeColor: "indigo"
// //     },

// // ]

// // console.log(typeof (persons))


// // const carObj = {
// //     carName: "Toyota",
// //     carModel: "2547395",
// //     togehter: function () {
// //         return this.carName + "" + "" + "has a model number of" + this.carModel
// //     }

// // }

// // console.log(carObj.togehter())



// // function add(x, y) {
// //     let result = x + y;
// //     return result;
// // }
// // function add(x, y) {
// //     let result = x * y;
// //     return result;
// // }




// // console.log(add(4, 5))


// // function factorial(n) {
// //     if (n == 0 || n == 1) {
// //         return 1;
// //     } else {
// //         return n * factorial(n - 1)
// //     }
// // }
// // console.log(factorial(3))

// // const h1 = document.createElement("h1");
// // h1.style.color = "red"
// // h1.classList.add('header');
// // const year = prompt("Enter your birth year ");

// // const pop = "Elijah";

// // function displayAge(userBirthDate) {
// //     const currentYear = new Date().getFullYear();
// //     console.log(currentYear - userBirthDate)
// // }

// // displayAge(2009)


// // function displayGreeting() {
// //     const myDateHour = new Date().getHours();
// //     if (myDateHour < 12) {
// //         document.body.appendChild(h1).innerHTML = `Good morning ${pop}`
// //     } else if (myDateHour >= 12 && myDateHour < 15) {
// //         document.body.appendChild(h1).innerHTML = `Good afternoon ${pop}`
// //     } else {
// //         document.body.appendChild(h1).innerHTML = `Good evening ${pop} `
// //     }
// // }

// // document.addEventListener("DOMContentLoaded", displayGreeting);
// import { AppUrl } from "./constants";



// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then(data => {
//         data.forEach(post => {
//             const card = document.createElement("div");
//             wrapper.appendChild(card);
//             card.classList.add("card");

//             const heading = document.createElement("h3");
//             card.appendChild(heading);
//             heading.classList.add("heading");
//             heading.innerHTML = post.title;


//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });


// const footerTitle = document.createElement('h1');
// footerTitle.classList.add("footerTitle");
// footerTitle.innerHTML = "Footer Title";
// footer.appendChild(footerTitle)

const url = "https://newsapi.org/v2/everything?q=tech&apiKey=c0dd0cfd4aef4f268e422c99d2b912e4";

// const header = document.createElement('header');
// header.id = "page-header";
// document.body.appendChild(header);

// const titleBefore = document.createElement("h1");
// titleBefore.classList.add("title");
// titleBefore.innerHTML = "Title ";
// document.body.appendChild(titleBefore);



const wrapper = document.createElement('div');
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);


async function getPosts() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Get the first 100 posts (0 to 99)
        const posts = data.articles;
        console.log(posts.reverse())

        if (posts != null) {
            posts.forEach((post) => {
                const card = document.createElement("div");
                const imagePath = post.urlToImage;
                card.classList.add("card");
                card.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagePath})`;
                wrapper.appendChild(card);

                const title = document.createElement("h3");
                title.classList.add("postTitle");
                title.innerHTML = post.title;
                card.appendChild(title);

                const postTime = document.createElement("p")
                postTime.classList.add("postTime");
                const time = post.publishedAt;


                postTime.innerHTML = time;
                title.appendChild(postTime)

                const btn = document.createElement("button");
                btn.classList.add('btn')
                btn.innerHTML = "Read more"
                card.appendChild(btn);
            });
        } else {
            console.log("No posts found in the response.");
        }
    } catch (error) {
        console.log(error);
    }
}


getPosts().catch((err) => {
    console.log(err);
});








// // let apartment1 = {
// //     apartmentSize: 50 * 120,
// //     numberOfBedrooms: 3,
// //     price: function () {
// //         return this.apartmentSize * this.numberOfBedrooms;
// //     }
// // }
// // console.log(apartment1.price());

// // let apartment2 = {
// //     apartmentSize: 60 * 120,
// //     numberOfBedrooms: 6,
// //     price: function () {

// //     }
// // }
// // console.log(apartment1.price());

// class Apartment {

//     apartmentSize = 0;
//     noOfBedRooms = 0;

//     constructor(apartmentSize, noOfBedRooms) {
//         this.apartmentSize = apartmentSize,
//             this.noOfBedRooms = noOfBedRooms
//     }
//     price() {
//         return this.apartmentSize * this.noOfBedRooms
//     }
// }


// let apartment1 = new Apartment(50 * 120, 6)
// // console.log(apartment1.price())



// class Post {
//     id = "";
//     userName = "";
//     title = "";
//     image = "";
//     date = new Date;

//     constructor(id, userName, title, image, date) {
//         this.id = id;
//         this.userName = userName;
//         this.title = title;
//         this.image = image;
//         this.date = date
//     }
// }

// let newPost = new Post()

// fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
//     return res.json();
// }).then(data => {
//     data.forEach(post => {
//       const markup = `<li>${post.name}</li>`;
//       document.querySelector('ul').innerHTML = `${markup}`
//     });
// }).catch((error) => {
//     console.log(error);
// })


// // for (let i = 1; i <= 3; i++) {
// //     const card = document.createElement("div");
// //     wrapper.appendChild(card);
// //     card.classList.add("card" + i);
// //     const heading = document.createElement("h1");
// //     card.appendChild(heading);
// //     card.classList.add("heading");
// //     heading.innerHTML = "card" + " " + i;
// // }


// // for (let i = 0; i < data.length; i++) {
// //     const card = document.createElement("div");
// //     wrapper.appendChild(card);
// //     card.classList.add("card");
// //     const heading = document.createElement("h1");
// //     card.appendChild(heading);
// //     card.classList.add("heading");
// //     heading.innerHTML = data[i]["title"];
// //     console.log(data)

// //   }


