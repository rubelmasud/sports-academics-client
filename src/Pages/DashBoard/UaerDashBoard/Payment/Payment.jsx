import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {

    const { id } = useParams();

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center underline my-4">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id} />
            </Elements>
        </div>
    );
};

export default Payment;