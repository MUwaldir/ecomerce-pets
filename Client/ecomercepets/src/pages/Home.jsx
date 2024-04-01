import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoriaProductos from '../components/Home/CategoriaProductos';
import OfertasEspeciales from '../components/Home/OfertasEspeciales';
import ProductoBanners from '../components/Home/ProductoBanners';
import ProductosDestacados from '../components/Home/ProductosDestacados';
import SeccionConsejos from '../components/Home/SeccionConsejos';
import categorias from '../utils/categorias';
const Home = () => {
    const banners =  [
        { image: 'https://images.pexels.com/photos/17767834/pexels-photo-17767834/free-photo-of-un-desorden-creativo-sobre-una-mesa-de-marmol-fotografia-de-jovan-vasiljevic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Título del Banner 1' },
        { image: 'https://images.pexels.com/photos/17892803/pexels-photo-17892803/free-photo-of-sombrero-gorro-perros-mascotas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Título del Banner 2' },
        { image: 'https://images.pexels.com/photos/12314516/pexels-photo-12314516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Título del Banner 3' },
        { image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Título del Banner 4' },

        // Agrega más objetos de banner según sea necesario
      ]
    
      console.log(categorias)
  return (
    <div className='flex-grow'>
     
      <div className=" mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Bienvenido a PetStore</h1>
        <p>Explora nuestra selección de accesorios para mascotas.</p>
        {/* Aquí puedes agregar más contenido */}
        <div className='m-w-screen'>

        <ProductoBanners banners={banners}/>
        </div>
        <CategoriaProductos categorias={categorias}/>
        {/* <ProductosDestacados/>
        <OfertasEspeciales/>
        <SeccionConsejos/> */}
      </div>
      
    </div>
  );
}

export default Home;
