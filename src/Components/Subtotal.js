import React from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Context/reducer';
import { useNavigate as useHistory } from 'react-router-dom'

const Subtotal = () => {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();



    return (
        <div className='subtotal'>
            { /*  <CurrencyFormat
                renderText= {(value) => (
                    <>
                        <p>Subtotal (0 items) :
                            <strong>{`${value}`}</strong>
                        </p>

                        <small className='subtotal__gift'>
                            <input type='checkbox' />This order contains a gift</small>
                    </>
               )}

                decimalScale={2}
                value= {getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"LKR"}
            />

                */  }
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items) :
                            <strong>{value}</strong>
                        </p>

                        <small className='subtotal__gift'>
                            <input type='checkbox' />This order contains a gift</small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={" $ "} >
            </CurrencyFormat>

            <button onClick={e => history('/payment')}>Proceed to Checkout</button>
        </div >
    )
}

export default Subtotal
