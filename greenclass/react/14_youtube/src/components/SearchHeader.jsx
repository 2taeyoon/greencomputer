import React, { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../img/logo.png"

const SearchHeader = () => {
    const navigate = useNavigate();
    const { keyword } = useParams();
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/videos/${text}`)
    }

    //서치가 있을때만 input 텍스트가 보이게
    useEffect(()=>{
        setText(keyword || '');
    },[keyword]);

    return (
        <header className='flex'>
            <Link to='/' className='flex items-center'>
                <img src={logo} alt="header_logo" className='w-16'/>
                <h1 className='text-2xl'>Animaltube</h1>
            </Link>

            <form onSubmit={handleSubmit} className='flex items-center'>
                <input type="text" placeholder='검색' onChange={(event)=> setText(event.target.value)} className='h-8'/>
                <button>
                    <BsSearch/>
                </button>
            </form>
        </header>
    )
}

export default SearchHeader;