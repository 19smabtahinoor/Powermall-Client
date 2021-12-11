import React from 'react';
import { MdCall, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Brand from '../Navbar/Brand';

const MainFooter = () => {

    const about = [
        { id: 1, name: 'About Us', link: '/' },
        { id: 2, name: 'Privacy Policy ', link: '/' },
        { id: 3, name: 'Cookie Policy', link: '/' },
        { id: 4, name: 'Why Shop with Us', link: '/' },
        { id: 5, name: 'Terms & Conditions', link: '/' },
        { id: 6, name: 'Help', link: '/' },
    ]

    const contact = [
        { id: 1, name: 'Contact Us', link: '/' },
        { id: 2, name: 'FAQ', link: '/' },
        { id: 3, name: 'Shipping & Delivery', link: '/' },
        { id: 4, name: 'Return & Refund', link: '/' },
        { id: 5, name: 'Payment Methods', link: '/' },
        { id: 6, name: 'Sitemap', link: '/' },
    ]

    const app = [
        { id: 1, name: 'Download App', link: '/', image:"../../../assets/google.png"},
        { id: 2, name: 'Download Appstore', link: '/', image:"../../../assets/apple.png"},
    ]

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-8">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center lg:place-items-start'>
                {/* about  */}
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl text-gray-700'>About</h1>
                    <ul className='flex flex-col space-y-2'>
                        {about.map(item => (
                            <li key={item.id} className='text-gray-500 text-sm hover:underline'>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact  */}
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl text-gray-700'>Contact</h1>
                    <ul className='flex flex-col space-y-2'>
                        {contact.map(item => (
                            <li key={item.id} className='text-gray-500 text-sm hover:underline'>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* address  */}
                <div className='flex flex-col space-y-4'>
                    <Brand />

                    <div className='flex flex-col space-y-3'>
                        {/* locaiton  */}
                        <div className='flex items-center space-x-2'>
                            <MdLocationOn className='text-gray-500 text-sm' />
                            <span className='text-gray-500 text-sm'>
                                House 10, Road 12 <br />
                                Block F, Niketan, Gulshan 1, <br />
                                Dhaka - 1212, Bangladesh <br />
                            </span>
                        </div>
                        {/* mobile  */}
                        <div className='flex items-center space-x-2'>
                            <MdCall className='text-gray-500 text-sm' />
                            <span className='text-gray-500 text-sm'>
                                +8809666745745
                            </span>
                        </div>
                    </div>
                </div>

                {/* app download  */}
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-xl text-center lg:text-left text-gray-700'>Download Our App</h1>
                    <div className='flex items-center space-x-4'>
                        {app.map(item => (
                            <Link key={item.id} to={item.link}>
                                <img src={item.image} alt={item.name} className='h-12 w-36 object-contain' />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainFooter