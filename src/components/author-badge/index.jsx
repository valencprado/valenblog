import './styles.css';
import profileImage from '../../assets/img/profile.png'
export default function AuthorBadge(){
    return(
        <div className='author-badge-container'>
            <img src={profileImage} className='author-badge-image'/>
            <div>
                <h3>Valentina Prado</h3>
                <p>Dev Full-Stack</p>
            </div>
        </div>
    );
}