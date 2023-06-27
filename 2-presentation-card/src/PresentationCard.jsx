import "./PresentationCard.css";
import imagenAvatar from './assets/profile.jpg';

function PresentationCard() {
    let name='Memelas';
    return(
        <div className="presentation-card">
            <img src={imagenAvatar} alt="Avatar" className="avatar" />
            Hola mi nombre es: {name} y estoy aprendiendo React.
        </div>
    );
}

export default PresentationCard;