import React, {useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './styles.css';

export function ApartmentPage() {
    let params = useParams();

    useEffect(() => {
        let id = params.id;
        console.log(id);
        //getApartment(params.id);
    
      }, []);

    return (
        <main class="main">
            <section>
                
            </section>  
        </main>
    )
}