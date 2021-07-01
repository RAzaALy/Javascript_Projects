const centerDiv = document.getElementById("centerDiv");

//by fetch method:
// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => {
//     //   console.log(response.json());
//       return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// async method:
async function getData() {
  const url = "https://jsonplaceholder.typicode.com/photos?_limit=40";
  const repsone = await fetch(url);
  const data = await repsone.json();
  //   console.log(data[0].url);
  data.map((value) => {
    // console.log(value.url);
    let key = value.id;
    let img = document.createElement("img");
    img.src = `https://picsum.photos/200/400?random=${key}`;
    centerDiv.appendChild(img);
  });
}
getData();
