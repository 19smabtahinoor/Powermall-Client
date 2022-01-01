import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCash } from 'react-icons/bs';
import { MdDeliveryDining, MdOutlineClose, MdOutlineCheck, MdOutlineLocalShipping, MdOutlineLocationOn, MdOutlineModelTraining } from 'react-icons/md';
import { TiLocationOutline } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddressModal from './AddressModal';

const DeliveryDescription = (props) => {
    const { warenty, delivery } = props;
    const [open, setOpen] = useState(false);
    const { newUser } = useAuth();
    const [info, setInfo] = useState();
    const [pdInfo, setPdInfo] = useState({});
    const { id } = useParams();

    const handleModal = () => {
        setOpen(true);
    };
    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/information')
            .then(res => setInfo(res.data[0]));

        axios.get(`https://electro-comers-server.herokuapp.com/products/${id}`)
            .then(res => setPdInfo(res.data));
    }, []);

    return (
        <div className='bg-gray-50 h-full py-6 px-3'>
            {/* delivery options  */}
            <div>
                <p className='text-gray-600 font-semibold'>Delivery Options</p>
                {/* address  */}
                <div className='flex flex-col space-y-2  py-2 border-t border-gray-300 my-3'>
                    <div className='flex items-center'>
                        <MdOutlineLocationOn className='text-3xl text-gray-600 w-8' />
                        <span className='text-sm text-gray-600 break-all'>{newUser?.address && (newUser?.address)}</span>
                    </div>

                    <div className='flex justify-end'>
                        <span className='text-sm text-primary cursor-pointer' onClick={handleModal}>CHANGE</span>
                    </div>
                </div>
                <AddressModal open={open} setOpen={setOpen} />

                {/* home delivery time  */}
                <div className='flex flex-col items-start space-x-2 gap-y-3 py-2 border-t border-gray-300 my-3'>
                    <div className='text-sm text-gray-600 flex flex-grow gap-x-5'>
                        <MdDeliveryDining className='text-3xl text-gray-600 w-8' />
                        <div>
                            <p>Home Delivery</p>
                            <span>{info?.duration}</span>
                        </div>
                    </div>

                    {
                        pdInfo?.delivery == "Paid Shipping" ? (

                            <div className='flex flex-col gap-y-3'>
                                <div className='flex gap-x-5'>

                                    <TiLocationOutline className='text-xl' />
                                    <h1 className='text-sm text-gra'>Inside Dhaka</h1>
                                    <span className='text-sm text-gray-600 ml-3 font-medium'>&#2547; {info?.insidecost}</span>

                                </div>

                                <div className='flex gap-x-5'>

                                    <TiLocationOutline className='text-xl' />
                                    <h1 className='text-sm text-gra'>Outside Dhaka</h1>
                                    <span className='text-sm text-gray-600 font-medium'>&#2547; {info?.outsidecost}</span>

                                </div>
                            </div>

                        ) : (
                            <div className='flex items-center gap-x-3 text-gray-600'>
                                <MdOutlineLocalShipping className='text-2xl -ml-1' />
                                <h1 className='font-medium'>{pdInfo?.delivery}</h1>
                            </div>
                        )
                    }


                </div>

                {/* payment method  */}
                <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                    <BsCash className='text-2xl text-gray-600 w-8' />
                    <span className='text-sm text-gray-600'>Cash on Delivery Available</span>
                </div>
            </div>

            {/* return and warranty  */}
            <div className='mt-5'>
                <p className='text-gray-600 font-semibold'>Return & Warranty</p>
                {/* return policy  */}
                <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                    <MdOutlineModelTraining className='text-3xl text-gray-600 w-8' />
                    <div className='text-sm text-gray-600 flex flex-col'>
                        <p>{info?.policy} Return</p>
                        <span>Change of mind available</span>
                    </div>
                </div>

                {/* warranty  */}
                {
                    warenty === "Available" ? (

                        <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                            <MdOutlineCheck className='text-2xl text-green-600 w-8' />
                            <span className='text-sm text-gray-600'>
                                <h1>Warranty Available</h1>
                            </span>
                        </div>

                    ) : (

                        <div className='flex items-center space-x-2 py-2 border-t border-gray-300 my-3'>
                            <MdOutlineClose className='text-2xl text-red-600 w-8' />
                            <span className='text-sm text-gray-600'>
                                <h1>Warranty Not Available</h1>
                            </span>
                        </div>

                    )
                }

            </div>

            {/* go to store  */}
            <Link to="/shops">
                <div className='flex justify-center rounded-lg py-3 mt-8 hover:bg-primary transition duration-500 text-primary hover:text-white bg-white cursor-pointer border border-gray-300'>
                    <p>GO TO STORE</p>
                </div>
            </Link>
        </div>
    );
};

export default DeliveryDescription;
