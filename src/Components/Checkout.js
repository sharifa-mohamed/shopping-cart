import React, { useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import "../css/Checkout.css"
import { useStateValue } from '../Context/StateProvider'
import Subtotal from './Subtotal'

const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad'
                    src="https://previews.123rf.com/images/roxanabalint/roxanabalint1601/roxanabalint160100215/50897552-discount-sale-banner-or-label-for-business-promotion-10-percent-off-on-white-background-vector-illus.jpg" />


                <div>
                    <h3>Hello {user?.email}!</h3>
                    <h2 className='checkout__title'>Your Shopping basket</h2>
                    {
                        basket.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />)}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal>

                </Subtotal>

            </div>


        </div>
    )
}

export default Checkout
