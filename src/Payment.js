import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './css/Payment.css'
import { useStateValue } from './StateProvider'
const Payment = () => {
    const [{ user, basket }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

                {/** delivery */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                    </div>


                </div>
                {/** Review item */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />)}

                    </div>

                </div>
                {/** Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/**Stripe.. */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
