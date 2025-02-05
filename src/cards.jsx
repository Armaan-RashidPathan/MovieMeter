
import PropTypes from 'prop-types'

function MovieCards(props){
    return(
        <div className='block'>
            <img alt="Image" src={props.img} className='Image' width={200} height={200}></img>
            <p> Name : {props.name}</p>
            <p> Genre : {props.genre}</p>
            <p> Release : {props.year}</p>
        </div>
    );
}

MovieCards.propTypes = {
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
}

MovieCards.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default MovieCards