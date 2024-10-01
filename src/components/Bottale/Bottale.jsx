import './Bottale.css'
import PropTypes from 'prop-types';

const Bottale = ({bottale, handlePurches}) => {
    const {name, price, img} = bottale
    return (
        <div className='bottale-container'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>price: {price}</h3>
            <button onClick={()=>handlePurches(bottale)}>Purches</button>
        </div>
    );
};

Bottale.propTypes = {
    bottale:PropTypes.object.isRequired,
    handlePurches:PropTypes.func.isRequired
}
export default Bottale;