const DogCard = ({name, pictureUrl}) => {
    return (
        <div className='dog-card'>
            <img src={pictureUrl} alt="Good Dog"></img>
            <h2>{name}</h2>
        </div>
    );
};

export default DogCard;
