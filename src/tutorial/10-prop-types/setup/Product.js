import React from 'react';
import Proptypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  // const url = image && image.url
  return (
    <React.Fragment>
      <article className="product">
        <img src={image.url} alt={name} />
        <h4>{name}</h4>
        <p>${price}</p>
        {/* <img src={url || defaultImage} alt={name || 'default namme'} />
        <h4>{name}</h4>
        <p>${price || 3.99}</p> */}
      </article>
    </React.Fragment>
  );
};

Product.propTypes = {
  image: Proptypes.object.isRequired,
  name: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired
}
Product.defaultProps = {
  name: 'default name',
  image: {
    url: defaultImage
  },
  price: 3.99
}

export default Product;
