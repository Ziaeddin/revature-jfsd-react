import {Link} from "react-router-dom";

const Category = ( props ) => {
    const { name, image } = props.data;

    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text">{description}</p> */}
                    <Link to="/products" className="btn btn-primary">Show</Link>
                </div>
            </div>
        </div>

    );
};

export default Category;
