import React, { useContext, useState } from 'react';
import MailItem from '../component/MailItem';
import MailFilter from '../component/MailFilter';
import Pagination from '../../../global_components/pagination/pagination';
import ReplyPopup from '../component/ReplyPopup';
import MassEmailPopup from '../component/MassEmailPopup';
import { BlogDataContext } from '../../../context/Blog_Context';
import api_url from '../../../utils/utils';

const Mails = () => {

    const {theme,theme2,fontColor,fontStyle,fontWeight} = useContext(BlogDataContext);

    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('date');
    const [search, setSearch] = useState('');
    const [selectedMail, setSelectedMail] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [massEmailOpen, setMassEmailOpen] = useState(false);

    const mails = [
        {
            id: 1,
            senderName: "John Doe",
            senderImage: "https://randomuser.me/api/portraits/men/1.jpg",
            subject: "Meeting Reminder",
            time: "2024-08-25T09:30:00Z",
            content: "Just a reminder about our meeting tomorrow at 10 AM.",
        },
        {
            id: 2,
            senderName: "Jane Smith",
            senderImage: "https://randomuser.me/api/portraits/women/2.jpg",
            subject: "Project Update",
            time: "2024-08-24T14:15:00Z",
            content: "The project is on track. Please review the attached documents.",
        },
        {
            id: 3,
            senderName: "Bob Johnson",
            senderImage: "https://randomuser.me/api/portraits/men/3.jpg",
            subject: "Lunch Plans",
            time: "2024-08-23T11:45:00Z",
            content: "Are you free for lunch tomorrow? Let's discuss the new proposal.",
        },
        {
            id: 4,
            senderName: "Alice Williams",
            senderImage: "https://randomuser.me/api/portraits/women/4.jpg",
            subject: "Invoice #12345",
            time: "2024-08-22T16:00:00Z",
            content: "Please find the attached invoice for your recent purchase.",
        },
        {
            id: 5,
            senderName: "Charlie Brown",
            senderImage: "https://randomuser.me/api/portraits/men/5.jpg",
            subject: "Team Outing",
            time: "2024-08-21T08:30:00Z",
            content: "Looking forward to our team outing this weekend!",
        },
        {
            id: 6,
            senderName: "Emily Davis",
            senderImage: "https://randomuser.me/api/portraits/women/6.jpg",
            subject: "Follow Up",
            time: "2024-08-20T12:00:00Z",
            content: "Just following up on the email I sent last week. Please respond at your earliest convenience.",
        },
        {
            id: 7,
            senderName: "Frank Miller",
            senderImage: "https://randomuser.me/api/portraits/men/7.jpg",
            subject: "Client Feedback",
            time: "2024-08-19T14:45:00Z",
            content: "The client provided feedback on the recent project. Let's discuss how to proceed.",
        },
        {
            id: 8,
            senderName: "Grace Lee",
            senderImage: "https://randomuser.me/api/portraits/women/8.jpg",
            subject: "Vacation Request",
            time: "2024-08-18T09:15:00Z",
            content: "I would like to request time off for vacation from September 1st to 10th.",
        },
        {
            id: 9,
            senderName: "Henry Wilson",
            senderImage: "https://randomuser.me/api/portraits/men/9.jpg",
            subject: "Annual Report",
            time: "2024-08-17T17:30:00Z",
            content: "The annual report has been finalized. Please review and provide your feedback.",
        },
        {
            id: 10,
            senderName: "Isabella Martinez",
            senderImage: "https://randomuser.me/api/portraits/women/10.jpg",
            subject: "Event Invitation",
            time: "2024-08-16T10:00:00Z",
            content: "You're invited to our upcoming event. Please RSVP by Friday.",
        },
        {
            id: 11,
            senderName: "Jack Robinson",
            senderImage: "https://randomuser.me/api/portraits/men/11.jpg",
            subject: "Technical Support",
            time: "2024-08-15T13:30:00Z",
            content: "We're experiencing some technical issues. Could you please look into it?",
        },
        {
            id: 12,
            senderName: "Katherine Clark",
            senderImage: "https://randomuser.me/api/portraits/women/12.jpg",
            subject: "New Hire Introduction",
            time: "2024-08-14T11:45:00Z",
            content: "Please welcome our new team member. They will be joining us next week.",
        },
        {
            id: 13,
            senderName: "Liam Anderson",
            senderImage: "https://randomuser.me/api/portraits/men/13.jpg",
            subject: "Website Redesign",
            time: "2024-08-13T15:00:00Z",
            content: "We're planning to redesign the website. Let's schedule a meeting to discuss the details.",
        },
        {
            id: 14,
            senderName: "Mia Thompson",
            senderImage: "https://randomuser.me/api/portraits/women/14.jpg",
            subject: "Thank You!",
            time: "2024-08-12T09:00:00Z",
            content: "Thank you for your assistance with the project. Your help was greatly appreciated!",
        },
        {
            id: 15,
            senderName: "Noah Garcia",
            senderImage: "https://randomuser.me/api/portraits/men/15.jpg",
            subject: "Weekly Update",
            time: "2024-08-11T12:30:00Z",
            content: "Here's the weekly update on our ongoing projects. Let me know if you have any questions.",
        },
    ];
        

    const handleReply = (mail) => {
        setSelectedMail(mail);
        setModalOpen(true);
    };

    const handleSend = async (content) => {
    
        const mailData = {
            content: content.message,
            subject:selectedMail.subject,
            receiver_user_id:selectedMail.user_id,
            email:selectedMail.email,
        };

        console.log(mailData);
        
    
        try {
            // API endpoint to send mail
            const response = await fetch(`${api_url}/mail/send`, {
                method: 'POST', // Assuming you are sending a POST request
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": localStorage.getItem("token"),
                },
                body: JSON.stringify(mailData),
            });
    
            if (!response.ok) {
                // Handle errors if the request was not successful
                throw new Error('Failed to send mail');
            }
    
            // Parse the response if needed
            const result = await response.json();
    
            // Handle successful mail sending (e.g., show a notification)
            console.log('Mail sent successfully:', result);
    
            // Close the modal
            setModalOpen(false);
        } catch (error) {
            // Handle errors (e.g., show an error message to the user)
            console.error('Error sending mail:', error);
        }
    };
    

    const handleMassEmailSend = (subject, content) => {
        // Implement mass email send functionality here
        setMassEmailOpen(false);
    };

    const filteredMails = mails
        .filter((mail) =>
            mail.subject.toLowerCase().includes(search.toLowerCase()) ||
            mail.senderName.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'date') {
                return sortOrder === 'asc'
                    ? new Date(a.time) - new Date(b.time)
                    : new Date(b.time) - new Date(a.time);
            }
            return 0;
        });

    return (
        <div className={`text-${fontColor}-600 ${fontWeight} ${fontStyle} rounded-lg`}>
            <button 
                onClick={() => setMassEmailOpen(true)}
                className=" px-4 py-2 rounded mb-6"
            
                style={{backgroundColor:theme=='black'?'#1e293b':'#e2e8f0'}}>
                Mass Email
            </button>
            <MailFilter 
                sortBy={sortBy} 
                setSortBy={setSortBy} 
                sortOrder={sortOrder} 
                setSortOrder={setSortOrder} 
                search={search} 
                setSearch={setSearch} 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMails.map((mail) => (
                    <MailItem 
                        key={mail.id} 
                        mail={mail} 
                        onReply={handleReply} 
                    />
                ))}
            </div>
            <Pagination 
                currentPage={1} 
                totalPages={3} 
                onPageChange={(page) => console.log(page)} 
            />
            {modalOpen && (
                <ReplyPopup 
                    mail={selectedMail} 
                    onClose={() => setModalOpen(false)} 
                    onSend={handleSend} 
                />
            )}
            {massEmailOpen && (
                <MassEmailPopup 
                    onClose={() => setMassEmailOpen(false)} 
                    onSend={handleMassEmailSend} 
                />
            )}
        </div>
    );
};

export default Mails;
