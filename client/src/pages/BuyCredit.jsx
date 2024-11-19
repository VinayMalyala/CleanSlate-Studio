/* eslint-disable no-unused-vars */
import React from 'react'
import {assets, plans} from '../assets/assets';

const BuyCredit = () => {
  return (
    <div className='min-h-[76vh] text-center pt-14 mb-10'>
        <button>Our Plans</button>

        {/* Title */}
        <h1>Choose the plan that&apos;s right for you</h1>

        <div>
          {plans.map((item, index) => (
            <div key={index}>
                <img width={40} src={assets.logo_icon} alt="" />
                <p>{item.id}</p>
                <p>{item.desc}</p>
                <p>
                  <span>${item.price}</span>/ {item.credits} credits
                </p>
                <button>Purchase</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default BuyCredit