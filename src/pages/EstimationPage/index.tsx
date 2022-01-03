import React, { useContext } from 'react'

import "./styles.scss"
import appContext from 'context/app.context'

const EstimationPage: React.FC = () => {

    const { setStep, selectedProduct } = useContext(appContext);

    console.log(selectedProduct);

    return (
        <div className='estimation__page'>
            <h2 className='estimation__page__heading'>Sell Old {selectedProduct.model}</h2>
            <p className='breadcrum'>Home {'>'} Sell Old Mobile Phone {'>'} Sell Old {selectedProduct.brand} {'>'} {selectedProduct.model}</p>
            <div className="estimation__page__product__details shadow columns-2">
                <div className="img-container w-1/4 justify-center">
                    <img src={selectedProduct.image} alt="" />
                </div>
                <div className="product__specs w-1/2 justify-center">
                <h1 className='estimation__page__heading'>{selectedProduct.model}</h1>
                <h2 className="hint-text">Get Upto</h2>
                <h1 className='estimation__page__price'> &#8377;{selectedProduct.price}</h1>
                <h2 className="hint-text"> <p className='clr__primary'>{selectedProduct.soldCount}+</p>already sold on Cashify</h2>
                <button className='btn btn__primary btn__get__exactvalue my-5' onClick={() => setStep(2)}> Get Exact Value  &#8594;</button>
                </div>
            </div>
        </div>
    )
}

export default EstimationPage
