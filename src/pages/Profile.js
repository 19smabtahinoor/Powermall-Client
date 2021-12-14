import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
    const links = [
        { id: 1, name: "My Account", link: '/profile/account' },
        { id: 2, name: "My Orders", link: '/profile/myOrders' },
        { id: 3, name: "Manage Account", link: '/profile/edit' },
    ]
    return (
        <>
            <main className="max-w-screen-xl mx-auto">
                <section className='mx-6 mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-x-10'>
                    {/* sidebar */}
                    <div className='col-span-1 bg-white h-52 rounded-lg p-4 box-border'>
                        <div className='flex flex-col space-y-3'>
                            {links.map(item => (
                                <NavLink to={`${item.link}`} index className={({ isActive }) => isActive ? 'border-l-4 py-2 px-4 border-primary bg-gray-100' : 'py-2 px-4 hover:bg-gray-100'}>
                                    <span className="text-gray-800">{item.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* infos  */}
                    <div className="col-span-3 bg-white rounded-lg p-4 box-border">
                        <Outlet />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile
