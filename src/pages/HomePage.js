import React, {useEffect, useState } from "react";
import { Slider } from '../components/Slider';
import './styles.css';

export function HomePage() {
    let [houses, setHouses] = useState([]);

    const getHouses = async (type) => {
        try {
        const response = await fetch('http://localhost:3000/houses?type=' + type, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
        });
        
        const data = await response.json();
        console.log(data)
        setHouses(data);

        } catch (error) {
        console.error('Error:', error);
        }
    }


    useEffect(() => {
        getHouses('Apartment');
    }, []);

    return (
        <main class="main">
            <Slider />
            <section>
                <div className="lista_casas">
                    {houses && houses.map((house) => {
                        return (
                            <>
                                <p>{house.title}</p>
                                <p>{house.type}</p>
                            </>
                        )
                    })}
                </div>
            </section>  
        </main>
    )
}