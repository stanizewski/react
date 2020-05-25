import React from "react";

const Card = props => {
  return (
    /*{ <img src={props.image} className={"card-img-top"} alt={""} /> } */
    //<header><div id={"header-img"}></div> </header>
    <header>
      <div className={"card"}>
                  
        {<img src={props.image} className={"card-img-top"} alt={""} />}
        <div className={"card-body"}>
           <h4 className={"card-title"}>Vinäventyret - Naturvin</h4>          
                  
          <p className={"card-text"}>
            <h5>Nybörjare på vin</h5>
            VINPROVNINGAR! Vi har trevliga supersommelierer som kan en massa om
            naturvin. Som älskar att dela med sig. Som vill ge dig en smakmässig
            käftsmäll eller ett mjukt uppvaknande. Alltså; öppna dörren till nya
            smakvärldar. Vi vill visa dig hur enkelt, kul och samtidigt
            komplext, innovativ och galen vinvärlden kan vara.                 
          </p>
          <a href="Boka" class="btn-flip" data-back="Nu!" data-front="Boka"></a>
                                
        </div>
        {<img src={props.image} className={"card-img-top"} alt={""} />}
        <div className={"card-body2"}>
           <h4 className={"card-title"}>Vinäventyret - Naturvin</h4>           
                  
          <p className={"card-text"}>
            <h5>Vad är naturligt, vad är orange</h5>
            Orange vin är ett nygammalt inslag i vinvärlden som idag förknippas
            med småskaligt vinmakande och naturvinsrörelsen. Vinet görs av gröna
            druvor men tekniken påminner om rödvinstillverkning. Vill du också
            få en smakupplevelse utöver det vanligt ? Det hjälper vi dig med. 
                             
          </p>
           
          <a href="Boka" class="btn-flip" data-back="Nu!" data-front="Boka"></a>
                 
        </div>
      </div>
    </header>
  );
};

export default Card;
