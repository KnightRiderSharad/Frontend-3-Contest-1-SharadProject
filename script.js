//Accessing the all html div properties-
let mains=document.querySelector("#main");
let content=document.getElementById("apidata");
let img= document.getElementsByTagName("img");


// Fetching data from an API using .then is to make a GET request to the API endpoint.-
fetch('https://dummyjson.com/products').then( (apidata)=> {
console.log(apidata);
return apidata.json();
}).then((actualdata)=>{
    console.log(actualdata);

      //Data shown as UI. Rendering  all of the products in the form of a flexwrap, as shown in the UI.-
      for(let i=0;i<30;i++)
      {
        //const button=document.createElement("btn");
        const alldata=actualdata.products[i];
        for(let i=0;i<1;i++)
        {
        const fetchdata=document.createElement("div");
        fetchdata.innerHTML=

      //A.Product contains information such as [name, id, image, price, rating, discount, and stock].
      //B.Data correctly extracted from API response [Extraction of Data Correctly].
      `<img src=${alldata.images[i]} alt="photo"
      height="400"; 
      width="300"; 
      border="1px solid black";
      box-sizing="border-box";  
      />

      <br>
      
      Title-  ${alldata.category} &nbsp &nbsp &nbsp Brand: ${alldata.brand}
      <br>
      <br>

      Product Id: ${alldata.id}

      <br>
      <br>

      Rating: ${alldata.rating}

      <br>
      <br>

      Price: ${alldata.price}$

      <br>
      <br>

      Discount: ${alldata.discountPercentage}

      <br>
      <br>
      
      Stock: ${alldata.stock}`
      content.append(fetchdata);
    

    //Styling the flexcards as shown in the UI-
    content.style.display="flex";
    content.style.flexWrap="wrap";
    content.style.flexDirection="row";
    content.style.padding="50px";
    content.style.marginleft="70px";
    content.style.justifyContent=" space-evenly";
    content.style.border=" black";
    content.style.textAlign="center";
    content.style.color="dark";
    content.style.fontSize="18px";
    content.style.borderbox="80px";
  }
}
//DataFetch Error
}).catch((error)=>{
    console.log(`the error: ${error}`);
});
