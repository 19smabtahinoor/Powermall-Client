import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { HiOutlineCheck, HiSelector } from 'react-icons/hi';


const DistrictSelect = ({ selected, setSelected}) => {
    const [districts, setDistricts] = useState([]);

    console.log(selected.division_id)
    useEffect(() => {
        fetch('/district.json')
            .then(res => res.json())
            .then(data => {
                setDistricts(data);
            })
    }, [])

    return (
        <div className="w-full">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className=" focus:ring-2 transition duration-500 relative w-full py-3 px-4 text-left bg-white rounded-md  cursor-default focus:outline-none border border-gray-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <HiSelector
                                className="w-5 h-5 text-gray-500"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                            {districts.map((district, inx) => (
                                <Listbox.Option
                                    key={inx}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={district}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                            >
                                                {district.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                    <HiOutlineCheck className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default DistrictSelect
