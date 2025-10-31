import { useSelector, useDispatch } from 'react-redux';
import { incrementCartItem, decrementCartItem, removeFromCart } from '../../redux/actions/cart-action';

const CartDetails = () => {
    const cartItems = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();

    const handleIncrement = (productId) => {
        dispatch(incrementCartItem(productId));
    };

    const handleDecrement = (productId) => {
        dispatch(decrementCartItem(productId));
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    if (cartItems.length === 0) {
        return (
            <div className="alert alert-info">
                <h4>Your cart is empty</h4>
                <p>Add some products to get started!</p>
            </div>
        );
    }

    return (
        <div className="cart-details">
            {cartItems.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img 
                                src={item.images && item.images[0]} 
                                className="img-fluid rounded-start" 
                                alt={item.title}
                                style={{ height: '150px', objectFit: 'cover', width: '100%' }}
                            />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text text-muted">{item.slug}</p>
                                        <p className="card-text">
                                            <strong className="text-primary">${item.price}</strong>
                                        </p>
                                    </div>
                                    <button 
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleRemove(item.id)}
                                        title="Remove from cart"
                                    >
                                        <i className="bi bi-trash"></i> Remove
                                    </button>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <button 
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => handleDecrement(item.id)}
                                        disabled={item.qty <= 1}
                                    >
                                        <i className="bi bi-dash"></i>
                                    </button>
                                    <span className="mx-3 fw-bold">Quantity: {item.qty}</span>
                                    <button 
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => handleIncrement(item.id)}
                                    >
                                        <i className="bi bi-plus"></i>
                                    </button>
                                    <span className="ms-auto fw-bold text-success">
                                        Subtotal: ${(item.price * item.qty).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartDetails;
