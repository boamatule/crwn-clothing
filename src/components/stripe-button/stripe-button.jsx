import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51Ja15lCinXW9R0Bo2G7PudKJ89qf2PqWIvPtZDmH8LKlcCAmtEeTq4whYcrLBIpYnyBYTcbR3Rym75fBDpUkP9dg00Io7yyJvd';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Lta'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;