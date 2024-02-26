
// import { useState, useEffect } from 'react';
// import backgroundImage from './assets/Blackbackground.jpg';
// import attachmentIcon from './assets/attachment.png'; // Import the attachment icon image
// import searchIcon from './assets/search.png'; // Import the search icon image
// import moreIcon from './assets/more.png'; // Import the more icon image
// import emojiIcon from './assets/emoji.png'; // Import the emoji icon image
// import avatar1 from './assets/avatar1.png';
// import avatar2 from './assets/avatar2.png';
// import avatar3 from './assets/avatar3.png';
// import ReactLogo from './assets/Conversify.svg'; // Import React logo image
// import userIcon from './assets/user.png'; // Import user icon image
// import addContactIcon from './assets/addcontact.png'; // Import add contact icon image
// import addGroupIcon from './assets/add-group.png'; // Import add group icon image
// import './App.css';

// function App() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedContact, setSelectedContact] = useState('');
//   const [selectedAvatar, setSelectedAvatar] = useState('');
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   useEffect(() => {
//     // Simulating longer loading duration
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // Increase loading duration to 5 seconds (5000 milliseconds)

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleContactClick = (contact) => {
//     console.log("Selected contact:", contact);
//     setSelectedContact(contact);
//     // Set the selectedAvatar based on the clicked contact
//     switch (contact) {
//       case "Contact 1":
//         setSelectedAvatar(avatar1);
//         break;
//       case "Contact 2":
//         setSelectedAvatar(avatar2);
//         break;
//       case "Contact 3":
//         setSelectedAvatar(avatar3);
//         break;
//       default:
//         setSelectedAvatar(''); // Set default avatar if no match
//         break;
//     }
//   };

//   const handleAttachmentHover = (isHovering) => {
//     const icon = document.getElementById("attachmentIcon");
//     if (isHovering) {
//       icon.classList.add("animate-bounce");
//     } else {
//       icon.classList.remove("animate-bounce");
//     }
//   };

//   console.log("selectedContact:", selectedContact);
//   console.log("selectedAvatar:", selectedAvatar);

//   return (
//     <div className="flex flex-col h-screen bg-black text-white">
//       {/* Main content */}
//       <div className="flex-grow flex">
//         {/* Contacts sidebar */}
//         <div className="bg-indigo-600 w-1/4 p-4 rounded-lg flex flex-col mr-2 text-white">
//           <div className="flex items-center mb-4">
//             {/* User avatar and options row */}
//             <div className="flex items-center justify-between bg-white rounded-lg p-2">
//               {/* User avatar */}
//               <img src={userIcon} alt="User" className="w-8 h-8 mr-2 rounded-full bg-white" />
//               {/* "Me" text */}
//               <span className="bg-white text-black px-2 py-1 rounded-full font-bold mr-8">Me</span>
//               {/* Container for logos */}
//               <div className="flex items-center bg-white">
//                 {/* Add contact icon */}
//                 <img src={addContactIcon} alt="Add Contact" className="w-5 h-5 mr-4 cursor-pointer" /> {/* Increased margin */}
//                 {/* Add group icon */}
//                 <img src={addGroupIcon} alt="Add Group" className="w-5 h-5 mr-4 cursor-pointer" /> {/* Increased margin */}
//                 {/* More options icon */}
//                 <img src={moreIcon} alt="More" className="w-5 h-5 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center mb-4">
//             <div className="relative rounded-full overflow-hidden bg-white p-1">
//               <img src={searchIcon} alt="Search" className="w-5 h-5" />
//             </div>
//             <input type="text" placeholder="Search or Start new Chat" className="bg-gray-200 border rounded-full p-1 pl-6 ml-2 w-full flex-grow sm:w-48" />
//           </div>
//           <ul>
//             <li className={`flex items-center text-lg mb-2 cursor-pointer font-bold ${selectedContact === "Contact 1" ? 'bg-lightgray' : ''}`} onClick={() => handleContactClick("Contact 1")}>
//               <img src={avatar1} alt="Avatar 1" className="w-8 h-8 mr-2 rounded-full" />
//               <span>Contact 1</span>
//             </li>
//             <hr className="my-2 border-gray-300" />
//             <li className={`flex items-center text-lg mb-2 cursor-pointer font-bold ${selectedContact === "Contact 2" ? 'bg-lightgray' : ''}`} onClick={() => handleContactClick("Contact 2")}>
//               <img src={avatar2} alt="Avatar 2" className="w-8 h-8 mr-2 rounded-full" />
//               <span>Contact 2</span>
//             </li>
//             <hr className="my-2 border-gray-300" />
//             <li className={`flex items-center text-lg mb-2 cursor-pointer font-bold ${selectedContact === "Contact 3" ? 'bg-lightgray' : ''}`} onClick={() => handleContactClick("Contact 3")}>
//               <img src={avatar3} alt="Avatar 3" className="w-8 h-8 mr-2 rounded-full" />
//               <span>Contact 3</span>
//             </li>
//           </ul>
//         </div>

//         {/* Conversify page */}
//         {!selectedContact && !isLoading && (
//           <div className="flex-grow flex justify-center items-center">
//             <div className="text-center">
//               <img src={ReactLogo} alt="React Logo" className="w-32 h-32 mx-auto mb-4" />
//               <h1 className="text-4xl font-bold">
//                 <span className="text-indigo-600">Conversify</span>
//               </h1>
//               <p className="text-lg my-4">Send and receive messages with people close to you</p>
//             </div>
//           </div>
//         )}

//         {/* Loading animation */}
//         {isLoading && (
//           <div className="flex-grow flex justify-center items-center">
//             <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtudDI1eGJ5NGRuYW5kM2tqbHl0Z201emx5Znh3YXFwMTh4MWpxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0U7bWQK9s75PjRKcHz/giphy.gif" alt="Loading Animation" className="w-32 h-32" /> {/* Replace "https://example.com/loading.gif" with your loading GIF URL */}
//           </div>
//         )}

//         {/* Chat window */}
//         {selectedContact && !isLoading && (
//           <div className="flex-grow flex flex-col bg-green-50 w-3/4 p-4 rounded-lg relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <div className="flex-grow bg-lightblue-400 rounded-lg p-4 font-bold text-white" style={{ fontSize: "1.5rem" }}>
//               <span className="bg-white text-indigo-600 px-2 py-1 rounded block w-full">{selectedAvatar && (
//                 <img src={selectedAvatar} alt="Selected Avatar" className="w-8 h-8 mr-2 rounded-full" />
//               )}{selectedContact}</span>
//             </div>

//             {/* Bottom bar with attachment logo, input type box, emoji icon, and send logo */}
//             <div className="bg-indigo-600 p-2 flex items-center justify-between absolute bottom-0 left-0 w-full" style={{ backgroundColor: 'transparent' }}>
//               {showDropdown && (
//                 <div className="absolute top-8 left-2 bg-white shadow-md rounded-md">
//                   <ul>
//                     <li className="py-2 px-4 cursor-pointer" onClick={() => handleOptionClick("File")}>File</li>
//                     <li className="py-2 px-4 cursor-pointer" onClick={() => handleOptionClick("Poll")}>Poll</li>
//                     <li className="py-2 px-4 cursor-pointer" onClick={() => handleOptionClick("GIF")}>GIF</li>
//                   </ul>
//                 </div>
//               )}
//               <img src={emojiIcon} alt="Emoji" className="w-8 h-8 mr-2 cursor-pointer rounded-full" />
//               <img
//                 src={attachmentIcon}
//                 alt="Attachment"
//                 className="w-8 h-8 mr-2 cursor-pointer rounded-full"
//                 id="attachmentIcon"
//                 onMouseEnter={() => handleAttachmentHover(true)}
//                 onMouseLeave={() => handleAttachmentHover(false)}
//                 onClick={toggleDropdown}
//                 style={{ backgroundColor: '#4F46E5' }}
//               />
//               <input type="text" placeholder="Type your message here" className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md flex-grow text-sm" />
//               <button className="bg-indigo-600 p-2 text-white rounded-full ml-2 transition duration-500 ease-in-out transform hover:scale-110">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import backgroundImage from './assets/Blackbackground.jpg';
import attachmentIcon from './assets/attachment.png'; // Import the attachment icon image
import searchIcon from './assets/search.png'; // Import the search icon image
import moreIcon from './assets/more.png'; // Import the more icon image
import emojiIcon from './assets/emoji.png'; // Import the emoji icon image
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import ReactLogo from './assets/Conversify.svg'; // Import React logo image
import userIcon from './assets/user.png'; // Import user icon image
import addContactIcon from './assets/addcontact.png'; // Import add contact icon image
import addGroupIcon from './assets/add-group.png'; // Import add group icon image
import loadingGif from './assets/loading.gif'; // Import loading GIF image
import './App.css';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEmojiDropdown, setShowEmojiDropdown] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulating longer loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Increase loading duration to 5 seconds (5000 milliseconds)

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleEmojiDropdown = () => {
    setShowEmojiDropdown(!showEmojiDropdown);
  };

  const handleContactClick = (contact) => {
    console.log("Selected contact:", contact);
    setSelectedContact(contact);
    // Set the selectedAvatar based on the clicked contact
    switch (contact) {
      case "Contact 1":
        setSelectedAvatar(avatar1);
        break;
      case "Contact 2":
        setSelectedAvatar(avatar2);
        break;
      case "Contact 3":
        setSelectedAvatar(avatar3);
        break;
      default:
        setSelectedAvatar(''); // Set default avatar if no match
        break;
    }
  };

  const handleAttachmentHover = (isHovering) => {
    const icon = document.getElementById("attachmentIcon");
    if (isHovering) {
      icon.classList.add("animate-bounce");
    } else {
      icon.classList.remove("animate-bounce");
    }
  };

  console.log("selectedContact:", selectedContact);
  console.log("selectedAvatar:", selectedAvatar);

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-y-scroll">
      {/* Main content */}
      <div className="flex-grow flex">
        {/* Contacts sidebar */}
        <div className="bg-indigo-600 w-1/4 p-4 rounded-lg flex flex-col mr-2 text-white">
          <div className="flex items-center mb-4">
            {/* User avatar and options row */}
            <div className="flex items-center justify-between bg-white rounded-lg p-2">
              {/* User avatar */}
              <img src={userIcon} alt="User" className="w-8 h-8 mr-2 rounded-full bg-white" />
              {/* "Me" text */}
              <span className="bg-white text-black px-2 py-1 rounded-full font-bold mr-8">Me</span>
              {/* Container for logos */}
              <div className="flex items-center bg-white">
                {/* Add contact icon */}
                <img src={addContactIcon} alt="Add Contact" className="w-5 h-5 mr-4 cursor-pointer" /> {/* Increased margin */}
                {/* Add group icon */}
                <img src={addGroupIcon} alt="Add Group" className="w-5 h-5 mr-4 cursor-pointer" /> {/* Increased margin */}
                {/* More options icon */}
                <img src={moreIcon} alt="More" className="w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="relative rounded-full overflow-hidden bg-white p-1">
              <img src={searchIcon} alt="Search" className="w-5 h-5" />
            </div>
            <input type="text" placeholder="Search or Start new Chat" className="bg-gray-200 border rounded-full p-1 pl-6 ml-2 w-full flex-grow sm:w-48" />
          </div>
          <ul>
            <li className={`flex items-center text-lg mb-2 cursor-pointer font-bold ${selectedContact === "Contact 1" ? 'bg-lightgray' : ''}`} onClick={() => handleContactClick("Contact 1")}>
              <img src={avatar1} alt="Avatar 1" className="w-8 h-8 mr-2 rounded-full" />
              <span>Contact 1</span>
            </li>
            <hr className="my-2 border-gray-300" />
            <li className={`flex items-center text-lg mb-2 cursor-pointer font-bold ${selectedContact === "Contact 2" ? 'bg-lightgray' : ''}`} onClick={() => handleContactClick("Contact 2")}>
              <img src={avatar2} alt="Avatar 2" className="w-8 h-8 mr-2 rounded-full" />
              <span>Contact 2</span>
            </li>
            <hr className="my-2 border-gray-300" />
            <li className={`flex items-center text-lg mb-2 cursor-pointer font-bold ${selectedContact === "Contact 3" ? 'bg-lightgray' : ''}`} onClick={() => handleContactClick("Contact 3")}>
              <img src={avatar3} alt="Avatar 3" className="w-8 h-8 mr-2 rounded-full" />
              <span>Contact 3</span>
            </li>
          </ul>
        </div>

        {/* Conversify page */}
        {!selectedContact && !isLoading && (
          <div className="flex-grow flex justify-center items-center">
            <div className="text-center">
              <img src={ReactLogo} alt="React Logo" className="w-32 h-32 mx-auto mb-4" />
              <h1 className="text-4xl font-bold">
                <span className="text-indigo-600">Conversify</span>
              </h1>
              <p className="text-lg my-4">Send and receive messages with people close to you</p>
            </div>
          </div>
        )}

        {/* Loading animation */}
        {isLoading && (
          <div className="flex-grow flex justify-center items-center">
            <img src={loadingGif} alt="Loading Animation" className="w-32 h-32" /> {/* Replace "https://example.com/loading.gif" with your loading GIF URL */}
          </div>
        )}

        {/* Chat window */}
        {selectedContact && !isLoading && (
          <div className="flex-grow flex flex-col bg-green-50 w-3/4 p-4 rounded-lg relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex-grow bg-lightblue-400 rounded-lg p-4 font-bold text-white" style={{ fontSize: "1.5rem" }}>
              <span className="bg-white text-indigo-600 px-2 py-1 rounded block w-full">{selectedAvatar && (
                <img src={selectedAvatar} alt="Selected Avatar" className="w-8 h-8 mr-2 rounded-full" />
              )}{selectedContact}</span>
            </div>

            {/* Bottom bar with attachment logo, input type box, emoji icon, and send logo */}
            <div className="bg-indigo-600 p-2 flex items-center justify-between absolute bottom-0 left-0 w-full" style={{ backgroundColor: 'transparent' }}>
              {/* Emoji dropdown */}
              {showEmojiDropdown && (
                <div className="absolute bottom-full left-2 bg-white shadow-md rounded-md">
                  <ul className="flex">
                    <li className="py-2 px-4 cursor-pointer">😊</li>
                    <li className="py-2 px-4 cursor-pointer">😂</li>
                    <li className="py-2 px-4 cursor-pointer">😍</li>
                    <li className="py-2 px-4 cursor-pointer">😎</li>
                    <li className="py-2 px-4 cursor-pointer">😉</li>
                    <li className="py-2 px-4 cursor-pointer">🥳</li>
                  </ul>
                </div>
              )}
              {/* Attachment dropdown */}
              {showDropdown && (
                <div className="absolute top-0 left-2 bg-black shadow-md rounded-md">
                  <ul>
                    <li className="py-2 px-4 cursor-pointer text-white">Attach File</li>
                    <li className="py-2 px-4 cursor-pointer text-white">Attach Photo</li>
                    <li className="py-2 px-4 cursor-pointer text-white">Attach Poll</li>
                    <li className="py-2 px-4 cursor-pointer text-white">Attach Contact</li>
                  </ul>
                </div>
              )}
              <img src={emojiIcon} alt="Emoji" className="w-8 h-8 mr-2 cursor-pointer rounded-full" onClick={toggleEmojiDropdown} />
              <img
                src={attachmentIcon}
                alt="Attachment"
                className="w-8 h-8 mr-2 cursor-pointer rounded-full text-indigo-600"
                id="attachmentIcon"
                onMouseEnter={() => handleAttachmentHover(true)}
                onMouseLeave={() => handleAttachmentHover(false)}
                onClick={toggleDropdown}
              />
              <input type="text" placeholder="Type your message here" className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md flex-grow text-sm" />
              <button className="bg-indigo-600 p-2 text-white rounded-full ml-2 transition duration-500 ease-in-out transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.768 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
