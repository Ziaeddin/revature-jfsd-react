import CartDetails from '../../components/CartDetails';
import CartSummary from '../../components/CartSummary';
import Navbar from '../../components/Navbar';

const CartPage = () => {
    return (
        <><Navbar />
        <div className="container my-4">
            <h1 className="mb-4">Cart</h1>
            <div className="row">
                <div className="col-md-8">
                    <CartDetails />
                </div>
                <div className="col-md-4">
                    <CartSummary />
                </div>
            </div>  
        </div>
        </>
        
    );
};

export default CartPage;
