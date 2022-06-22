import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useHistory, } from "react-router-dom";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
// import SwiperCore from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import { usePaystackPayment } from "react-paystack";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { toastr } from 'react-redux-toastr';
import Layout from "../../shared/Layout";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import "./Payment.scss";
import ErrorBoundary from "../../shared/ErrorBoundary";
import { formatMoney } from "../../utils/moneyFomat";
import { handleConfirmFlightBooking } from "../../redux/actions/flight";
import { showErrorMessage } from "../../redux/actions/notification";

function Payment(props) {

    // const flightPaymentData = useSelector(state => state.flight.data.flightPaymentData);
    const flightPaymentData = useSelector(state => state.flight.data.flightPaymentData);
    console.log(flightPaymentData, "Selected Filght Details")
    const paymentProps = flightPaymentData;
    const userEmail = flightPaymentData?.travelers[0].contact.emailAddress;
    const userFName = flightPaymentData?.travelers[0].name.firstName;
    const userLName = flightPaymentData?.travelers[0].name.lastName;
    let amount = flightPaymentData.amount;

    console.log(paymentProps, "payment options")

    const [insuranceType, setInsuranceType] = useState([]);


    // initialiaze local state
    const [activeTab, setActiveTab] = useState("online");
    const [serviceName, setServiceName] = useState(null);
    const [loading, setLoading] = useState(false);
    const [paymentType, setPaymentType] = useState(null);

    const childNode = useRef();

    let history = useHistory()
    const printingCharge = 200;
    const newhistory = useHistory();
    const dispatch = useDispatch();


    /**
     * Update filter field for filters search
     * @param {String} val
     * @param {Function} setValue
     */

    // use effect func for savedSlideContentField
    const [currentPath, setCurrentPath] = useState(null);
    const [previousPath, setPreviousPath] = useState(null);
    console.log(process.env, "Process. env file");

    useEffect(() => {
        if (newhistory.location.pathname !== currentPath) {
            setPreviousPath(currentPath);
            setCurrentPath(newhistory.location.pathname);
        }
    }, [newhistory.location.pathname]);


    const getCurrentCard = (e) => {
        const childArray = Array.from(e.target.children);
        console.log(e.target.children);
    };

    const wallets = [
        {
            id: 1,
            name: "Care",
            checked: false,
        },
        {
            id: 2,
            name: "Wallet",
            checked: false,
        },
        {
            id: 3,
            name: "Rewards",
            checked: false,
        },
    ];

    const paymentOptions = [
        {
            id: 1,
            name: "paystack",
        },
        {
            id: 2,
            name: "flutterwave",
        },
    ];
    // Configuration for Paystack

    const paystackConfig = {
        reference: new Date().getTime(),
        email: userEmail,
        amount: parseFloat(amount) * 100,
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    };

    // Configuration for flawterwave
    const flutterwaveConfig = {
        public_key: process.env.REACT_APP_FLUTER_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: parseFloat(amount),
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: userEmail,
            name: `${userFName} " " ${userLName}`,
        },
        // customer: { userObj },
        customizations: {
            title: 'ECONNECT NETPOWER LTD',
            description: `Payment for ${serviceName} Insurance`,
            logo: 'https://temi-woozeee-admin.netlify.app/asset/img/favicon.png',
        },
    };

    const handleFlutterPayment = useFlutterwave(flutterwaveConfig);
    const initializePayment = usePaystackPayment(paystackConfig);

    const makePayment = async (cb1, cb2) => {
        const paySuccess = await cb1();

        if (paySuccess?.status === 'successful') {
            console.warn('paySuccess', paySuccess)
            cb2(paySuccess);
        }
    }

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        // history.push('/travel--form');
    }

    const onSuccess = (reference) => {
        console.log(reference, "paystack");
        if (reference.status === "success") {
            flightPaymentData.offerId = parseInt(flightPaymentData.offerId)
            flightPaymentData.amount = parseFloat(flightPaymentData.amount)
            flightPaymentData.payment.transactionReference = reference.trxref;
            dispatch(handleConfirmFlightBooking(flightPaymentData))
            //     // history.push('/travel-policy-form');
        }
        // else {
        //     history.push(`/insurance`)

        // }
    };

    const callPaymentGateway = async () => {
        if (activeTab === "online") {
            if (!paymentType) {
                dispatch(showErrorMessage("Select a payment type"))
                return;
            }
            if (paymentType === "paystack") {
                initializePayment(onSuccess, onClose,);
            } else if (paymentType === "flutterwave") {
                return handleFlutterPayment({
                    callback: async (response) => {
                        // await response;
                        console.log(response, 'response');
                        if (response.status === 'completed') {
                            flightPaymentData.offerId = parseInt(flightPaymentData.offerId)
                            flightPaymentData.amount = parseFloat(flightPaymentData.amount)
                            flightPaymentData.payment.transactionReference = response.tx_ref;
                            dispatch(handleConfirmFlightBooking(flightPaymentData))
                            // if (paymentProps.userPaymentDetail?.insuranceName === 'Car insurance') {
                            //     history.push('/car-form')
                            // }
                            // if (paymentProps.userPaymentDetail?.insuranceName === 'Travel Insurance') {
                            //     history.push('/travel-policy-form')
                            // }

                            // return response;
                        }
                        // else { history.push(`/insurance`); }
                        // console.warn('response now')

                    },
                    /*  when you close the flutterwave modal, it will take you back to the route which
                      the modal open on
                    */
                    onClose: () => {
                        // console.warn('2nd callback flutter')
                        // history.push(`/utilities`)
                    },

                });
            }
        }
    };


    const printPass = () => {
        history.push(`/print-pass${props.location.search}`);
    };


    console.warn('newhistory', newhistory);

    return (
        <ErrorBoundary>
            <Layout page="Payment">
                <main>
                    <section className="pay-summary">
                        <Container>
                            <Row>
                                <Col md={8}>
                                    <h2 className="w-blue fw-700 pay-title">Payment Method</h2>
                                    <div className="payment-methods mt-3 rounded shadow-sm">
                                        <div className="payment-tabs">
                                            <div
                                                data-pay="transfer"
                                                className={
                                                    activeTab === "online" ? "active-pay-tab" : ""
                                                }
                                                onClick={() => setActiveTab("online")}
                                            >
                                                <span>Pay Online</span>
                                            </div>
                                            <div
                                                data-pay="wallet"
                                                className={
                                                    activeTab === "wallet" ? "active-pay-tab" : ""
                                                }
                                                onClick={() => setActiveTab("wallet")}
                                            >
                                                <span>Account</span>
                                            </div>
                                        </div>
                                        <div className="card-select">
                                            <span className="card-balc">
                                                {/* <small>&#8358;</small> {serviceAmount?.toLocaleString()} */}
                                                <small>&#8358;</small> {formatMoney.format(amount)}
                                                {/* <small>45</small> */}
                                            </span>
                                            {/* 
                                            <Form className="form">
                                                {
                                                    wallets.map((option, index) => {
                                                        return (
                                                            <Form.Group key={index}>
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    label={option.name}
                                                                    checked={checkedWallet === option.name}
                                                                    onChange={(e) => setWallet(option.name)} />
                                                            </Form.Group>
                                                        )
                                                    })
                                                }
                                            </Form> */}



                                            {activeTab === "online" && (
                                                <Form className="form">
                                                    {paymentOptions.map((option, index) => {
                                                        return (
                                                            <Form.Group key={index}>
                                                                <Form.Check
                                                                    type="checkbox"
                                                                    label={option.name}
                                                                    checked={paymentType === option.name}
                                                                    onChange={(e) => setPaymentType(option.name)}
                                                                />
                                                            </Form.Group>
                                                        );
                                                    })}
                                                </Form>
                                            )}
                                        </div>
                                        {/* <button className="add-wallet">
                                            <i className="fas fa-plus"></i>&nbsp;Add Account
                                        </button> */}
                                    </div>
                                    <div className="d-flex justify-content-center py-4">
                                        <div className="px-3">
                                            <button
                                                className="back-btn payment-btn"
                                                onClick={() => dispatch(push("/flightsearch"))}>
                                                Back
                                            </button>
                                        </div>
                                        <div className="">
                                            <button
                                                className="payment-btn proceed-btn"
                                                onClick={callPaymentGateway}>
                                                Confirm payment: &#8358; {formatMoney.format(amount)}
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <h2 className="w-blue fw-700 pay-title">Order Summary</h2>
                                    <div className="summary-wrapper mt-3">
                                        <div className="d-flex justify-content-between border-ash">
                                            <span className="fw-700 sm-font w-light-blue">
                                                Your Order
                                                {/* (1 Item) */}
                                            </span>
                                            <span className="fw-700 sm-font w-light-blue">Price</span>
                                        </div>
                                        <div className="pt-2 border-ash">
                                            <div className="d-flex justify-content-between py-2">
                                                <span className="fw-500 sm-font font-weight-bold">Flight Ticket</span>
                                                <span className="fw-500 sm-font">
                                                    {/* {partPrice?.toLocaleString()} */}
                                                    ₦{formatMoney.format(amount)}
                                                </span>
                                            </div>
                                            {/* <div className="d-flex justify-content-between py-2">
                        <span className="fw-500 sm-font">Printing</span>
                        <span className="fw-500 sm-font">{printingCharge}</span>
                      </div> */}
                                            <div className="d-flex justify-content-between py-2">
                                                <span className="fw-500 sm-font font-weight-bold">Value Added Tax</span>
                                                <span className="fw-500 sm-font">0</span>
                                            </div>
                                            <div className="d-flex justify-content-between py-2">
                                                <span className="fw-500 sm-font font-weight-bold">Sellers Discount</span>
                                                <span className="fw-500 sm-font">0</span>
                                            </div>
                                        </div>
                                        <div className="pt-3 d-flex justify-content-between">
                                            <span className="fw-700 sm-font">Total</span>
                                            <span className="fw-700 sm-font w-red">
                                                {/* ₦ {totalPrice?.toLocaleString()} */}
                                                ₦ {formatMoney.format(amount)}
                                            </span>
                                        </div>
                                        <div className="voucher-wrap">
                                            <span className="xs-font fw-700" style={{ marginRight: "14px" }}>
                                                Got a woozeee voucher / SureGifts voucher? Use it below:
                                            </span>
                                            <div className="voucher-input" style={{ marginRight: "14px" }}>
                                                <div>
                                                    <span id="voucher-field"></span>
                                                    <input
                                                        type="text"
                                                        aria-labelledby="voucher-field"
                                                        placeholder="e.g. XAB485011"
                                                    />
                                                </div>
                                                <button className="btn-action-4">ADD VOUCHER</button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </Layout>
            {/* <OverLayLoader/> */}
        </ErrorBoundary >
    );
}


const mapStateToProps = (state) => {
    return {
        ...state,
    };
};


/* Pay.propTypes = {
  movies: PropTypes.object
}; */
export default Payment;






