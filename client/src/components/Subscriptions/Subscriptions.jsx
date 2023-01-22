import React from 'react'
import './Subscriptions.css'


const Subscriptions = () => {

    
    
    

  return (
    <div>
        <div className='subsheading'>
        <p style={{ fontSize:"20px", textAlign:"center"}}>*You have to be subscribed to stackoverflow for posting a question.</p>
        
        <h2>Stack OverFlow Plans Pricing</h2>

        </div>
    <div className="plans">

                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <span class="heading">
                                Free Plan
                            </span>
                        </div>
                        <div class="pricing-plans">
                            <span class="price-value"><span>₹ 0</span></span>
                            <span class="subtitle">/month</span>
                        </div>
                        <div class="pricingContent">
                            <ul>
                                <li> can post only 1 Question / day</li>
                                
                            </ul>
                        </div>

                        <div class="pricingTable-sign-up">
                            <a href="#" class="btn btn-block btn-default">Select</a>
                        </div>
                    
                    </div>

                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <span class="heading">
                               Silver Plan
                            </span>
                        </div>
                        <div class="pricing-plans">
                            <span class="price-value"><span>₹ 100 </span></span>
                            <span class="subtitle">/month</span>
                        </div>
                        <div class="pricingContent">
                            <ul>
                                <li>can post only 5 Questions / day</li>
                            </ul>
                        </div>

                        <div class="pricingTable-sign-up">
                        <a href="/StripePayment" class="btn btn-block btn-default" >buy now</a>
                        </div>
                    
                </div>

                
                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <span class="heading">
                                Gold Plan
                            </span>
                        </div>
                        <div class="pricing-plans">
                            <span class="price-value"><span>₹ 1000</span></span>
                            <span class="subtitle">/month</span>
                        </div>
                        <div class="pricingContent">
                            <ul>
                                <li>can post unlimited Questions / day</li>
                            </ul>
                        </div>

                        <div class="pricingTable-sign-up">
                            <a href="/StripePayment" class="btn btn-block btn-default" >buy now</a>
                        </div>
                    
                </div>
            </div>
</div>
  )
}

export default Subscriptions
