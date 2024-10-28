import profilePic from './assets/sitting.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Albi</h2>
            <p className='card-text'>Software Developer and CS undergraduate</p>
        </div>
    );
}

export default Card