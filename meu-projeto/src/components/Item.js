import PropTypes from 'prop-types'

function Item({marca , lançamento}){
    return(
        <>
        <li>{marca} - {lançamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.number
}

export default Item