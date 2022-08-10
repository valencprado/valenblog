import './styles.css';

export default function AuthorBadge(){
    return(
        <div className='author-badge-container'>
            <img src={profileImage} />
            <div>
                <h3>Valentina Prado</h3>
                <p>Dev Full-Stack</p>
            </div>
        </div>
    );
}