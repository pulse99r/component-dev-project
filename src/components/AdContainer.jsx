import "./AdContainer.css"
import blackPants01 from "../assets/black-pants01.png"
import blackPants02 from "../assets/black-pants02.png"
const AdContainer = () => {
  return (
    <div className="AdContainer">
      <h3>This is our AdContanier Component</h3>
      <div className="image-container">
        <figure>
          <img className="adContainter__img" src={blackPants01} alt="Libins Men's Dress..."/>
          <figcaption><p>Libins Men's Dress...</p></figcaption>
        </figure>
        <figure>
          <img className="adContainter__img" src={blackPants02} alt="Van Heusen Men's"/>
          <figcaption><p>Van Heusen Men's</p></figcaption>
        </figure>
        <figure>
          <img className="adContainter__img" src={blackPants01} alt="Libins Men's Dress..."/>
          <figcaption><p>Libins Men's Dress...</p></figcaption>
        </figure>
        <figure>
          <img className="adContainter__img" src={blackPants02} alt="Van Heusen Men's"/>
          <figcaption><p>Van Heusen Men's</p></figcaption>
        </figure>
        <figure>
          <img className="adContainter__img" src={blackPants01} alt="Libins Men's Dress..."/>
          <figcaption><p>Libins Men's Dress...</p></figcaption>
        </figure>
        <figure>
          <img className="adContainter__img" src={blackPants02} alt="Van Heusen Men's"/>
          <figcaption><p>Van Heusen Men's</p></figcaption>
        </figure>
        
      </div>

    </div>
  );
}

export default AdContainer;
