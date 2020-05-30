import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import "./checkout.styles.scss"

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className="checkout-page">
        <div class="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Proce</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
        }
        <div className="total"><span>${cartTotal}</span></div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);