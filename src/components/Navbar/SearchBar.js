import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate()
    const { register, handleSubmit ,reset} = useForm();
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://electro-comers-server.herokuapp.com/products')
            .then(res => setProducts(res?.data))
    }, [])

    const onSubmit = data => {
        setSearchParams({ search: data?.search })
        navigate(`/shops?search=${data?.search}`)
        reset()
    }


    return (
        <form className="flex items-center space-x-3 p-2 w-96" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text" placeholder="Search products" className="w-full border border-gray-300 bg-gray-100 transition duration-500 focus:outline-none rounded-md py-2.5 px-4"
                {...register("search", { required: true })}
                list="title"  id="brand"
            />
            <datalist id="title">
                {products?.map(item => (
                    <option value={item?.name?.toLowerCase()} />
                ))}
            </datalist>
            {/* <Link to={`/shops?search=${data}`} onClick={() => { */}
                {/* // setSearchParams({ search: data }) */}
            {/* // }}> */}
            <button type="submit">
                <AiOutlineSearch className="cursor-pointer text-xl text-gray-400 w-9 h-9 p-2 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition duration-500 focus:shadow-xl" />
            </button>
            {/* </Link> */}
        </form>
    )
}

export default SearchBar
