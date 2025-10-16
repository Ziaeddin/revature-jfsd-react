import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const fetchProductDetails = () => {
            axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching product:', error);
                });
        };

    useEffect(() => {
        
        fetchProductDetails();
    }, [id]);

    return (

        <div className="container">
            <div className="card shadow-lg border-0 rounded-4 mx-auto my-5" style={{ maxWidth: "800px" }}>
                <div className="row">

                    <div className="col-md-5 d-flex align-items-center wrapper">
                        <img
                            src={product?.images?.[0] || ''}
                            className="img-fluid rounded-start"
                            alt={product?.title || "Product image"}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-2">{product?.title}</h5>
                            <p className="text-muted mb-1"> {product?.category?.name}</p>
                            <p className="card-text small mb-3">{product?.description}</p>
                            <h4 className="text-success fw-bold mb-3">{"$" + (product?.price ?? "")}</h4>
                            <button className="btn btn-primary w-100">
                                <i className="bi bi-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;
