import {Link} from "react-router-dom"; 

const Product = ( props ) => {
    const { id,title, slug, price, images } = props.data;

    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={images[0]} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{slug}</p>
                    <p className="card-text">${price}</p>
                    <Link to={`/products/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>

    );
};

export default Product;