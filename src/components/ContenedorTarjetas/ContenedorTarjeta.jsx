import "./contenedortarjeta.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Tarjetas from "../Tarjetas/Tarjetas";

const ContenedorTarjeta = () => {
    const [datos, setDatos] = useState([])
    const ts = 2 
    const key = "1d6a35f97baca97621ad5e82cbc3824e";
    const hash = "651354a8d07b31cc99ab1a5af069ba65";
    const categoria = "comics";
    const url = `https://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;
    
    useEffect(() => {
      const solicitud = async() => {
        try{
        const respuesta = await axios.get(url)
        setDatos(respuesta.data.data.results)
        console.log(datos)
    } catch (error){
        console.log("hubo un error", error)
    }
      }
      solicitud()
    }, [url])
    

    return (
    <>
    <main className="contenedor">
    {datos.map((item) => (
        <Tarjetas
        key={item.id}
        ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
        titulo={item.title}
        descripcion={item.description}
        />
        ))}
    </main>
    </>
  )
}

export default ContenedorTarjeta
