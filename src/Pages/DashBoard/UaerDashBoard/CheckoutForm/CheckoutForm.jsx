import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import useSelectedClass from '../../../../Hooks/useSelectedClass';
import { toast } from 'react-hot-toast';



const CheckoutForm = ({ id }) => {
    const [cardError, setCardError] = useState('')
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [mySelectedClass, setMySelectedClass] = useState({})
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const [selectClass, refetch] = useSelectedClass()
    useEffect(() => {
        {
            const mySelectCl = selectClass.find(selectCl => selectCl._id === id)
            setMySelectedClass(mySelectCl)
        }
    }, [])

    const price = mySelectedClass.Price ? parseFloat(mySelectedClass.Price) : 0;

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    if (clientSecret === '') {
        return <div className='text-xl'>Loading...</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('PaymentMethod', paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
            setCardError(confirmError)
        }
        console.log("paymentIntent", paymentIntent);
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // payment classes info saved to the server
            const paymentInfo = {
                email: user.email,
                TransactionId: paymentIntent.id,
                date: new Date(),
                ClassName: mySelectedClass.NameOfClass,
                Image: mySelectedClass.Image,
                Price: price,
            }
            axiosSecure.post('/payments', paymentInfo)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success('Your payment is successfully done !!')
                        // class remove from selected class
                        fetch(`http://localhost:5000/selectDelete/${id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount) {
                                    refetch()
                                }
                            })
                    }
                })
        }
    }

    return (
        <div className='border w-11/12 mx-auto border-red-300 p-12 shadow-2xl'>
            <p className='text-xl font-semibold mb-4'>Price to be paid : ${price}</p>
            <form onSubmit={handleSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
                />
                <button className="btn btn-sm bg-orange-200 px-8 my-4 shadow-xl" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                <p className='text-red-500'> {cardError}</p>
                {transactionId && <p className='font-semibold'>Transaction Complete & Transaction Id :<small className='text-green-500'> {transactionId}</small></p>}
            </form>
        </div>
    );
};

export default CheckoutForm;