import React , {useState} from "react";

function Planeteer({planeteerItems}) {
  // Info on what's on the card 
  const{name , pictureUrl,  bio , twitter , fromUSA } = planeteerItems
  const[bioRender , setBioRender] = useState({bio})
  return (
    <li className="cards__item">
      <div className="card">
        <img   
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">
            {
              bioRender ? <p>{bio}</p> : null 
            }
            </p> 
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              { 
              ({fromUSA} == true) ? <p>USA Based</p> : <p>Working Overseas</p>
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
