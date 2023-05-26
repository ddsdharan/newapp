import React from 'react';
import Card from '../Components/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './Container.css';


function Container() {
  let myPrices = [
    {
      plan: "FREE",
      price: "₹0/Month",
      features: [
        {
          name: "Single-User",
          isEnabled: true,
        },
        {
          name: "5GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          name: "Free Subdomain",
          isEnabled: false,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        }
      ]
    },
    {
      plan: "PLUS",
      price: "₹1000/Month",
      features: [
        {
          name: "5 Users",
          isEnabled: true,
        },
        {
          name: "50GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        }
      ]
    },
    {
      plan: "PRO",
      price: "₹5000/Month",
      features: [
        {
          name: "Unlimited Users",
          isEnabled: true,
        },
        {
          name: "150GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Unlimited Free Subdomains",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true,
        }
      ]
    }
  ]
  return (
    <>
    <section className="container-fluid">
    <div className='container-lg'>
      <div className="row">
        {
          myPrices.map( (obj) =>{return<Card data={obj}></Card>})
        }
      </div>
    </div>
    </section>
    </>
  )
}

export default Container

