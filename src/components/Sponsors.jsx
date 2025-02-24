import React from "react";
import "../styles/Sponsors.css"

//import logos here
const sponsors = [
    {id: 1, name: "Nvidia", logo:"/images/sponsor0.png" },
    {id: 2, name: "Apple", logo:"/images/sponsor1.png" },
    {id: 3, name: "Samsung", logo:"/images/sponsor2.png" },
    {id: 4, name: "Amazon", logo:"/images/sponsor3.png" },
    {id: 5, name: "Google", logo:"/images/sponsor4.png" },
    {id: 6, name: "TSMC", logo:"/images/sponsor5.png" },
];

const Sponsors = () =>{
    return(
        <div className="sponsor-section">
            <h2 className="sponsor-heading">Our Sponsors</h2>
            <div className="sponsor-grid">
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className="sponsor-card">
                        <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                        <p className="sponsor-name"> {sponsor.name} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;