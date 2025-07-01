import { useEffect, useState } from "react";
import BangladeshMap from "./BangladeshMap";
import { IoMdSearch } from "react-icons/io";

const Coverage = () => {

    const [searchText, setSearchText] = useState('');
    const [districts, setDistricts] = useState([]);
    const [focusedDistrict, setFocusedDistrict] = useState(null);

    useEffect(() => {
        fetch('warehouses.json')
            .then(res => res.json())
            .then(data => setDistricts(data))
    },[])
    
    const handleSearch = (e) => {
        e.preventDefault();
        const found = districts.find(d => 
            d.district.toLowerCase() === searchText.trim().toLowerCase()
        );
        
        if (found) {
        setFocusedDistrict(found);
    } else {
        setFocusedDistrict(null);
        alert('District not found!');
    }
    };

    return (
        <div className="p-10 bg-base-100 my-10 rounded-xl min-w-sm mx-auto">
            <h2 className="text-3xl font-bold mb-4">
                We are available in 64 districts
            </h2>

            <form onSubmit={handleSearch} className="flex mb-6 w-full">
                <div className="relative w-72">

                    {/* Left Icon */}
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        <IoMdSearch size={20} />
                    </span>

                    {/* Input Without DaisyUI Class */}
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full bg-[#CBD5E14D] pl-10 pr-24 h-12 rounded-full border border-gray-300 focus:outline-none"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    {/* Search Button visually inside input */}
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-1 bg-[#CAEB66] h-10 my-auto rounded-full px-4 flex items-center justify-center text-black font-semibold text-sm hover:bg-[#b5d95a]"
                    >
                        Search
                    </button>
                </div>
            </form>


            <div className="divider"></div>

            <div>
                <h3 className="font-bold mb-4">We deliver almost all over Bangladesh</h3>
                <div className="">
                    <BangladeshMap focusedDistrict={focusedDistrict} searchText={searchText}/>
                </div>
            </div>

        </div>
    );
};

export default Coverage;
