import Navbar from "../../components/Navbar";

const ContactPage = () => {
    return (
        <>
        <Navbar />
        <div className="jumbotron text-center">
            <h1 className="display-4">Contact Us</h1>
            <p className="lead">We would love to hear from you! Please reach out with any questions or feedback.</p>
            
        </div>
        <div className="container">
            <section>
                <h2>Get in Touch</h2>
                <p>If you have any inquiries, please email us at support@eshop.com.</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    </div>
                </form> 
            </section>
        </div>
        </>
    );
};

export default ContactPage;