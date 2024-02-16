// 1 - var, let e const

var x = 10
var y = 20

if(y > 10){
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 20

if(b > 10){
    let a = 100
    console.log(a)
}

console.log(a)

function logName(){
    const name = 'Murilo'
    console.log(name)
}

const name = "Matheus"

logName()

console.log(name)

// 2 - arrow function
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a=0, b=0) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

// 3 - filter
const users = [
    {
        user: 'user1',
        age: 18
    },
    {
        user: 'user2',
        age: 15
    },
    {
        user: 'user3',
        age: 25
    }
]

const filteredUsers = users.filter((user) => {
    if(user.age >= 18 ){
        console.log(user)
    }
})

// 4- map
const products = [
    {id:1, product: 'Celular' , price: 3999},
    {id:2, product: "Notebook", price: 1900},
    {id:3, product: "Tablet", price: 2000},
    {id:4, product: "Ipad", price: 5000},
    {id:5, product: "Mouse", price: 299}
]

const productPromotion = products.map((product) => {
    if(product.price <= 4000){
        const promotion = product.price * 20 / 100 
        console.log(`Você vai economiza 20% em cada produto: ${product.product} - R$${promotion}`)
    }
   
})

// 6 destructuring
const fruits = ["Maçã", "Laranja", "Mamão"]

const [f1, ...f2] = fruits

console.log(f2)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periférico",
    color: "Cinza"
}

const {name: productName, price, category, color} = productDetails

console.log(`
    Produto: ${productName},
    Preço: ${price},
    Categoria: ${category},
    Cor: ${color}
`)


// 8 - Classe
class Produtc {
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}


const shirt = new Produtc("Camisa gola v", 200)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

// herança
class ProductWithAttributes extends Produtc {
    constructor(name, price, colors ){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 99.99, ["Preto", "Azul","Vermelho"])

console.log(hat)

