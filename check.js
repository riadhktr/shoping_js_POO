class CartItem{
    constructor(title,price, quantity){
        this.title = title;
         this.price = price;
        this.quantity = quantity;
       
    }
    
    updateQuantity(quantity){ 
        this.quantity +=quantity
    }

}

 class Cart{
    constructor(total){
        this.cartItems = [];
        this.total = total;
        

       
    }
    
    addItem(cartItem){
       
        const alreadyExist=mycart.cartItems.find((el)=> el.title === cartItem.title)
        
        
        if(alreadyExist){
            
            return  alreadyExist.quantity += 1
            
        }
          this.cartItems.push(cartItem)
    }
    checkIfItemExists(title){
         return  this.cartItems.filter(item=> item.title === title).length >0 
    }
   removeItem (title){
        mycart.cartItems= [...this.cartItems].filter(item=>item.title !==title )
        this.totalPrice()
        this.showcart()
        // console.log('clicked');
    
    }
    clearCart(){
        mycart.cartItems =[]
        this.showcart()
    }
    showcart(){
        let bag = document.getElementById('shopping');
        

         bag.innerHTML = this.cartItems.map((el)=>{
            return `<div class="card" style="width: 18rem;">
                   <div class="card-body">
                   <h2> ${el.title} X${el.quantity}</h2>
                   <h4>${el.price}</h4>
                  <button style="border:transparent ; background-color:transparent" onclick="mycart.removeItem('${el.title}')"> <i  class="fa-solid fa-trash" ></i></button>
           </div>
           </div>`
         })
         
         
         if(this.cartItems.length>0){

          bag.innerHTML += `
          <div class="card ">
          <div class="card-body">
          
          <h3 style="background-color: blue ; color:white"> <bold>TOTAL :</bold> ${mycart.total} $</h3>
          <button class="btn btn-secondary" onclick="mycart.clearCart()"> clear </button>
          </div>
          </div>`
         }
        
    //    console.log(this.cartItems)
    }
   
    totalPrice(){
        let result = mycart.cartItems.map((item)=>{
            return item.price * item.quantity
        })

           mycart.total =result.reduce((accumulator, currentValue) => accumulator + currentValue,
        0)
    }
   
}



const mycart = new Cart()

let btn = document.getElementsByClassName('addToCart')
let titre = document.getElementsByClassName('titre');
let prix = document.getElementsByClassName('price')
let panier = document.getElementById('panier');


for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click',function(){
        let unite = Number(prix[i].innerText)
        
        let item = new CartItem(titre[i].innerText , unite , 1)
        mycart.addItem(item) 
        mycart.totalPrice()
        mycart.showcart()
        
        
    })
    
}