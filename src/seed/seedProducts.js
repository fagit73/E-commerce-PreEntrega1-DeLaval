import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore"

//en caso de que tengan un json


const products = [
  {
    id: "Ro1",
    name: "Set",
    description: "Tops y Calza - Talle S, M, L",
    stock: 10,
    price: 20000,
    image:"/img/SETS1.png",
    category:"set"
  },
  {
    id: "Ro2",
    name: "Set",
    description: "Tops y Calza",
    stock: 10,
    price: 20000,
    image:"/img/SETS2.png",
    category:"set"
  },
  {
    id: "Ro3",
    name: "Set",
    description: "Tops y Calza",
    stock: 10,
    price: 20000,
    image:"/img/SETS3.png",
    category:"set"      
  },
  {
      id: "Ro4",
      name: "Set",
      description: "Tops y Calza",
      stock: 10,
      price: 20000,
      image:"/img/SETS4.png",
      category:"set"
    },
    {
      id: "Ro5",
      name: "Calza",
      description: "Calza Larga",
      stock: 10,
      price: 10000,
      image:"/img/LARGAS1.png",
      category:"calzas"
    },
    {
      id: "Ro6",
      name: "Calza",
      description: "Calza Larga",
      stock: 10,
      price: 10000,
      image:"/img/LARGAS2.png",
      category:"calzas"
      
    },
    {
      id: "Ro7",
      name: "Calza",
      description: "Calza Corta",
      stock: 10,
      price: 8000,
      image:"/img/CORTAS1.png",
      category:"calzas"        
    },
    {
      id: "Ro8",
      name: "Calza",
      description: "Calza Corta",
      stock: 10,
      price: 8000,
      image:"/img/CORTAS2.png",
      category:"calzas"
    },
    {
      id: "Ro9",
      name: "Remera",
      description: "Remera Sport",
      stock: 10,
      price: 10000,
      image:"/img/REME1.png",
      category:"remeras"
    },
    {
      id: "Ro10",
      name: "Remera",
      description: "Remera Sport",
      stock: 10,
      price: 10000,
      image:"/img/REME2.png",
      category:"remeras"
      
    },
    {
      id: "Ro11",
      name: "Remera",
      description: "Remera Sport",
      stock: 10,
      price: 8000,
      image:"/img/REME3.png",
      category:"remeras"        
    },
    {
      id: "Ro12",
      name: "Remera",
      description: "Remera Sport",
      stock: 10,
      price: 8000,
      image:"/img/REME4.png",
      category:"remeras"
    },
    {
      id: "Ro13",
      name: "Medias",
      description: "Media Sport",
      stock: 10,
      price: 5000,
      image:"/img/MEDIAS1.png",
      category:"medias"
    },
    {
      id: "Ro14",
      name: "Medias",
      description: "Media Sport",
      stock: 10,
      price: 5000,
      image:"/img/MEDIAS2.png",
      category:"medias"
      
    },
    {
      id: "Ro15",
      name: "Medias",
      description: "Media Sport",
      stock: 10,
      price: 5000,
      image:"/img/MEDIAS3.png",
      category:"medias"        
    }
  
]

const seedProducts = () => {  
  const productsRef = collection(db, "products")  
  products.map(( { id, ...dataProduct } )=> {
    addDoc(productsRef, dataProduct)
  })

  console.log("productos subidos")
  return
}

seedProducts()