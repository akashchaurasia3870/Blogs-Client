import React, { useContext, useState } from 'react'
import dummy_data from '../../../assets/data/data.json';
import img5 from '../../../assets/img/img5.jpg'
import { Link } from 'react-router-dom';
import PopularAuthorCard from '../components/populer_author_card';
import { BlogDataContext } from '../../../context/Blog_Context';
import Filter from '../../../global_components/filter/filter';

function Authors() {

    const { theme,theme2,fontColor,fontStyle,fontWeight } = useContext(BlogDataContext);

    const [layout, setLayout] = useState(true); // true for grid, false for list

    const handleSearch = (searchTerm) => {
        // Handle search logic
        setFilterData(prevState=>({
            ...prevState,
            search:searchTerm
        }))
    };

    const handleSort = (sortOption) => {
        // Handle sort logic
        setFilterData(prevState=>({
            ...prevState,
            option:sortOption
        }))
    };

    const handleLayoutChange = (isGrid) => {
        setLayout(isGrid);
        // Handle layout change logic
    };

    const [filter_data,setFilterData] = useState({
        option:'',
        search:''
    });
  

    let [authorData, setAuthorsData] = useState(dummy_data.dummy_authors);
    return (
        <section className={`min-h-[100vh] authors w-full bg-${theme} p-6 flex flex-col justify-center items-center`}>


                <Filter onSearch={handleSearch}
                onSort={handleSort}
                onLayoutChange={handleLayoutChange} />
          

            {authorData.length > 0 ?

                <div className={` py-2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded-lg`}
                style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}
                >

                    {authorData.map((author) => {
                        {
                            console.log(author);
                        }

                        return (
                            <Link to={`/blogs/users/${author.id}`} className={`author flex flex-row justify-start items-center py-1 rounded-md my-2 mx-2 hover:scale-[1.025] duration-300 ease-in-out`} >
                                <PopularAuthorCard author={author} />
                                
                            </Link>
                        )
                    })}

                </div>
                :
                <div className="authors_container container">
                    <h2>No blogs Present For Author</h2>
                </div>

            }

        </section >
    )
}

export default Authors