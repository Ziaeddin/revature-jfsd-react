import { useSelector } from 'react-redux';

const CartSummary = () => {
    const cartItems = useSelector((state) => state.cart.carts);
    const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
    const subtotal = useSelector((state) => state.cart.subtotal);
    const tax = useSelector((state) => state.cart.tax);
    const total = useSelector((state) => state.cart.total);

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title mb-4">Cart Summary</h4>
                
                <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                        <span>Total Items:</span>
                        <strong>{cartItemsCount}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal:</span>
                        <strong>${subtotal.toFixed(2)}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Tax (10%):</span>
                        <strong>${tax.toFixed(2)}</strong>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-3">
                        <h5>Total:</h5>
                        <h5 className="text-success">${total.toFixed(2)}</h5>
                    </div>
                </div>

                <button 
                    className="btn btn-primary w-100 mb-2"
                    disabled={cartItems.length === 0}
                >
                    Proceed to Checkout
                </button>
                <button 
                    className="btn btn-outline-secondary w-100"
                    disabled={cartItems.length === 0}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default CartSummary;
