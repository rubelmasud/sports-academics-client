import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom/dist';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {

    const id = useLoaderData()
    console.log('clg', id);

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center underline my-4">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;