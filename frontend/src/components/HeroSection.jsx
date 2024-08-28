import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-[#272727] text-[#ffffff] font-medium'>Find Your Perfect Job with Career<span className='text-[#50D890]'>CONNECT</span></span>
                <h1 className='text-5xl font-bold'>Discover, Apply & <br />Secure Your <span className='text-[#4F98CA]'>Perfect Career
</span></h1>
                <p>Finding your dream job is easier than ever with our platform.Start your journey today and achieve your professional goals.!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-[#d3fcf2]'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#4F98CA]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection