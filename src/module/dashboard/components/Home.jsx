import React, { useContext, useEffect, useState } from 'react';
import image_ref_c from '../../../assets/img/img7.jpg';
import { BlogDataContext } from '../../../context/Blog_Context';
import api_url from '../../../utils/utils';
const Home = () => {

    const {theme,theme2,fontColor,fontStyle,fontWeight} = useContext(BlogDataContext);

    let [blogItems,setBlogItems] = useState(null);
    let [userItems,setUserItems] = useState(null);
    let [mailItems,setMailItems] = useState(null);
    let [notificationItems,setNotificationItems] = useState(null);
    let [reportItems,setReportItems] = useState(null);

    // const notificationItems = [
    // {
    //     image_ref: "path/to/notification1.jpg",
    //     title: "New Comment on your Post",
    //     dateEntered: "2024-08-24T08:00:00Z",
    // },
    // {
    //     image_ref: "path/to/notification2.jpg",
    //     title: "Your Profile was Viewed",
    //     dateEntered: "2024-08-23T14:15:00Z",
    // },
    // {
    //     image_ref: "path/to/notification3.jpg",
    //     title: "New Friend Request",
    //     dateEntered: "2024-08-22T16:30:00Z",
    // },
    // ];
    const mailItemsCstm = [
    {
        image_ref: "path/to/mail1.jpg",
        title: "Welcome to Our Platform!",
        dateEntered: "2024-08-24T09:00:00Z",
    },
    {
        image_ref: "path/to/mail2.jpg",
        title: "Your Subscription is About to Expire",
        dateEntered: "2024-08-23T13:45:00Z",
    },
    {
        image_ref: "path/to/mail3.jpg",
        title: "New Updates Available",
        dateEntered: "2024-08-21T10:30:00Z",
    },
    ];

    const reportItemsCstm = [
    {
        image_ref: "path/to/report1.jpg",
        title: "Monthly Sales Report",
        dateEntered: "2024-08-20T12:00:00Z",
    },
    {
        image_ref: "path/to/report2.jpg",
        title: "Quarterly Performance Analysis",
        dateEntered: "2024-08-18T08:00:00Z",
    },
    {
        image_ref: "path/to/report3.jpg",
        title: "Year-End Summary",
        dateEntered: "2024-08-15T14:30:00Z",
    },
    ];
    // const blogItems = [
    // {
    //     image_ref: "path/to/blog1.jpg",
    //     title: "Getting Started with React",
    //     dateEntered: "2024-08-24T10:00:00Z",
    // },
    // {
    //     image_ref: "path/to/blog2.jpg",
    //     title: "Understanding JavaScript Closures",
    //     dateEntered: "2024-08-23T15:30:00Z",
    // },
    // {
    //     image_ref: "path/to/blog3.jpg",
    //     title: "A Guide to CSS Flexbox",
    //     dateEntered: "2024-08-22T09:45:00Z",
    // },
    // ];

    // const userItems = [
    // {
    //     image_ref: "path/to/user1.jpg",
    //     title: "Alice Johnson",
    //     dateEntered: "2024-08-24T11:00:00Z",
    // },
    // {
    //     image_ref: "path/to/user2.jpg",
    //     title: "Bob Smith",
    //     dateEntered: "2024-08-23T14:30:00Z",
    // },
    // {
    //     image_ref: "path/to/user3.jpg",
    //     title: "Charlie Brown",
    //     dateEntered: "2024-08-22T16:45:00Z",
    // },
    // ];
    
    const renderCard = (title, items, type) => (
        <div className={` text-${fontColor}-600 ${fontWeight} ${fontStyle} shadow-md rounded-lg p-4`} style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <ul className="list-none">
            {items?.length>0 && items.map((item, index) => (
              <li key={index} className="flex items-center mb-4">
                {type === 4 ? (
                  // User Component
                  <>
                    <img
                      src={image_ref_c}
                      alt={item.userName}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className=''>
                      <p className="text-gray-900 font-semibold">{item.userName}</p>
                      <p className="text-gray-500 text-sm">
                        {formatDate(item.dateEntered)}
                      </p>
                    </div>
                  </>
                ) : (
                  // Blog Component
                  <>
                    <img
                      src={image_ref_c}
                      alt={item.title}
                      className="w-16 h-16 rounded-md mr-4"
                    />
                    <div>
                      <p className={`text-${fontColor}-900 font-semibold`}>{item.title}</p>
                      <p className={`text-${fontColor}-600 text-sm`}>
                        {formatDate(item.dateEntered)}
                      </p>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
          <p
            className={`text-sm text-${fontColor}-600 cursor-pointer hover:underline`}
            onClick={() => {
              console.log("Open ", title);
            }}
          >
            See More
          </p>
        </div>
    );
      
    const formatDate = (date) => {
        const now = new Date();
        const diff = Math.floor((now - new Date(date)) / 1000);
      
        if (diff < 60) return "now";
        if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
        return `${Math.floor(diff / 86400)} days ago`;
    };


    const renderCountCard = (title, count, theme) => (
        <div className={` text-${fontColor}-600 ${fontWeight} ${fontStyle} shadow-md rounded-lg p-4 text-center`} style={{backgroundColor:theme=='black'?'#e2e8f0':'#1e293b'}}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-3xl font-bold">{count}</p>
        </div>
    );

    const getDashData = async () => {
           fetch(`${api_url}/admin/get_dash_data`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": localStorage.getItem("token")
              },
              body: JSON.stringify({}),
          }).then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((result) => {
              console.log(result);
              
              if(result.data.length>0){
                let newBlogItems = result.data[0].blogs.map((item)=>(
                  {
                        image_ref: item.filePaths.images[0],
                        title: item.caption,
                        dateEntered: item.date_created,
                  }
                ))

                // blogData.blogs = newBlogItems;
                // blogData.totalBlogCount = result.data[0].blogs.totalBlogCount;

                setBlogItems(newBlogItems);

                let newUserItems = result.data[1].users.map((item)=>(
                  {
                        image_ref: item.userImage,
                        title: item.username,
                        dateEntered: item.createdAt,
                  }
                ))

                // userData.blogs = newUserItems;
                // userData.totalUserCount = result.data[0].blogs.totalUserCount;
                setUserItems(newUserItems);

                let newNotificationItems = result.data[2].notifications.map((item)=>(
                  {
                        image_ref: '',
                        title: item.subject,
                        dateEntered: item.date_created,
                  }
                ))

                // blogData.blogs = newNotificationItems;
                // blogData.totalNotificationCount = result.data[0].notifications.totalNotificationCount;
                setNotificationItems(newNotificationItems);

                setMailItems(result.data[3]);
                // setReportItems();
            }
          })
          .catch((error) => {
              console.error('There was a problem with the fetch operation:', error);
              alert('Failed to send message. Please try again later.');
          });
      
  
    };

    useEffect(()=>{
      getDashData();
    },[])

    return (
        <div className="p-6">
            {/* Count Section */}
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
                {renderCountCard('Blogs', blogItems?.totalBlogCount||0,'#aabbcc')}
                {renderCountCard('Users', userItems?.totalUserCount||0,'#bbccdd')}
                {renderCountCard('Notifications', notificationItems?.totalNotificationCount||0,'#ddeeff')}
                {renderCountCard('Mails', mailItems?.totalMailCount||3,'#bbccdd')}
                {renderCountCard('Reports', reportItems?.totalReportCount ||3,'#ffaabb')}
            </div>

            {/* Details Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCard('Blogs', blogItems?.blogs,2)}
                {renderCard('Users', userItems?.users,1)}
                {renderCard('Notifications', notificationItems?.notifications,2)}
                {renderCard('Mails', mailItemsCstm,2)}
                {renderCard('Reports', reportItemsCstm,2)}
            </div>
        </div>
    );
};

export default Home;
