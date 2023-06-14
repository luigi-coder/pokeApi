import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import imgJava from './assets/java.svg';
import imgJS from './assets/js.svg';
import imgPython from './assets/python.svg';
import imgPhp from './assets/php.svg';
import imgNode from './assets/nodejs.svg';
import imgSwift from './assets/swift.svg';
import imgCobol from './assets/cobol.svg';
import imgSql from './assets/mysql.svg';
import imgRuby from './assets/ruby.svg';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Carrito from './components/carrito/Carrito'


import './App.css'

const data = [
  {
    title: 'Java',
    descripcion: 'fsdfdsfdsfdssd',
    price: 1500,
    img: imgJava

  },
  {
    title: 'Javascript',
    descripcion: 'fsdfdsfdsfdssd',
    price: 2000,
    img: imgJS
    
  },
  {
    title: 'Python',
    descripcion: 'fsdfdsfdsfdssd',
    price: 2500,
    img: imgPython
    
  },
  {
    title: 'Php',
    descripcion: 'fsdfdsfdsfdssd',
    price: 3000,
    img: imgPhp

  },
  {
    title: 'NodeJS',
    descripcion: 'fsdfdsfdsfdssd',
    price: 3500,
    img: imgNode
    
  },
  {
    title: 'Swift',
    descripcion: 'fsdfdsfdsfdssd',
    price: 4000,
    img: imgSwift
    
  },
  {
    title: 'Cobol',
    descripcion: 'fsdfdsfdsfdssd',
    price: 4500,
    img: imgCobol
  },
  {
    title: 'SQL',
    descripcion: 'fsdfdsfdsfdssd',
    price: 5000,
    img: imgSql
  },
  {
    title: 'Ruby',
    descripcion: 'fsdfdsfdsfdssd',
    price: 5500,
    img: imgRuby
  }
  
]

/* function App() {

  const [carrito, setCarrito] = useState([]);
  const [expandirTitulo, setExpandirTitulo] = useState(false);
  
  function addCarrito(title, descripcion, price, img){
    
    const producto = carrito.find(item => item.title === title);
    if(producto){
      setCarrito(carrito.map(item =>
        item.title === title
        ? {...producto, cantidad: producto.cantidad + 1}
        : item
      ))
    }else{
      setCarrito([
        ...carrito,
        { title, descripcion, price, img, cantidad: 1 }
      ])
    }
  }

  useEffect(() => {
    console.log(carrito)
  }, [carrito])

  return (
    <>
      <Header handleClick={() => setExpandirTitulo(!expandirTitulo)} />
      <h1 className={`title ${expandirTitulo ? 'expanded' : ''}`}>Tienda</h1>
      <div className="container_main">
        <div className="tienda_container">
          {data.map((item, index)=> {
            return (
              <div className='card' key={index}>
                <img src={item.img} alt="img"/>
                <h3>{item.title}</h3>
                <p>{item.descripcion}</p>
                <p> 
                  {item.price}
                  <span
                    style={{
                      fontSize: '1.2rem',
                      color: '#00D8FF',
                      marginLeft: '2px'
                    }}
                  >$</span>
                </p>
                <button 
                onClick={()=>addCarrito(
                  item.title, 
                  item.descripcion, 
                  item.price,
                  item.img)}>
                  Agregar al carrito
                </button>
              </div>
            )
          })}
        </div> 
      </div>
      <Carrito 
        carrito={carrito}
        setCarrito={setCarrito}/>
      <Footer />
    </>
  )
}

export default App */


// EJEMPLO DE CONSUMO DE API CON REACT **********************************************************

/* function App() { 

  const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  const [pokemones, setPokemones] = useState([]);

  function getPokemones() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setPokemones(data.results);
      });
  }

  // Primero el componente, luego la http request
  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <>
      <div className="tienda_container">
        {pokemones.map((pokemon, index) => (
          <div className="card" key={index}>
            <img
              src={`${urlImg}/${index + 1}.png`}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
            <button>
              Comprar Pokemon
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App; */



function App() {
  const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  const [pokemones, setPokemones] = useState([]);

  function getPokemones() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        setPokemones(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <>
      <div className="tienda_container">
        {pokemones.map((pokemon, index) => (
          <div className="card" key={index}>
            <img
              src={`${urlImg}/${index + 1}.png`}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
            <button>
              Comprar Pokemon
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;


