const products=[
    product1={
        id:1,
        name:"product 1",
        price:1,
    },
    product2={
        id:2,
        name:"product 2",
        price:2,

    },
    product3={
        id:3,
        name:"product 3",
        price:3,

    },
    product4={
        id:4,
        name:"product 4",
        price:4,

    },

];
for (let i=0;i<products.length;i++){
    console.log("product id : "+products[i].id);
    console.log("product name : "+products[i].name);
    console.log("product price : "+products[i].price);
    console.log("------------------");
}