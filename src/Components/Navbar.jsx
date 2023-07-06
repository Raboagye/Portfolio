// import React, { useState } from 'react'
// import logo from "../assets/logo.svg"
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai'
// import rich from "../assets/edf.png"
// import { motion } from 'framer-motion'


// const Navbar = ({sideMenu, changeTheme}) => {
//     const [showNav, setShowNav] = useState(false)
//     const [closeIcon, setCloseIcon] = useState(false)
//     const [changeShadow, setChangeShadow] = useState(false)

//     const [activeHome, setActiveHome] = useState(false)
//     const [activeAbout, setActiveAbout] = useState(false)
//     const [activeSkills, setActiveSkills] = useState(false)
//     const [activeProjects, setActiveProjects] = useState(false)
//     const [activeContact, setActiveContact] = useState(false)

//     const HandleHome = () => {
//         setActiveHome(true)
//         setActiveAbout(false)
//         setActiveContact(false)
//         setActiveProjects(false)
//         setActiveSkills(false)
//     }
//     const HandleAbout = () => {
//         setActiveHome(false)
//         setActiveAbout(true)
//         setActiveContact(false)
//         setActiveProjects(false)
//         setActiveSkills(false)
//     }
//     const HandleSkills = () => {
//         setActiveHome(false)
//         setActiveAbout(false)
//         setActiveContact(false)
//         setActiveProjects(false)
//         setActiveSkills(true)
//     }
//     const HandleContact = () => {
//         setActiveHome(false)
//         setActiveAbout(false)
//         setActiveContact(true)
//         setActiveProjects(false)
//         setActiveSkills(false)
//     }
//     const HandleProject = () => {
//         setActiveHome(false)
//         setActiveAbout(false)
//         setActiveContact(false)
//         setActiveProjects(true)
//         setActiveSkills(false)
//     }


//     const handleNav = () => {
//         setShowNav(!showNav)
//         setCloseIcon(!closeIcon)
//     }

//     const handleShadow = () => {
//         setChangeShadow(!changeShadow)
//         changeTheme()
        
//     }
    

//   return (
//     <>
//           <nav className='py-4 ralative flex sticky top-0 bg-gray-700 shadow-md shadow-gray-950 w-full z-[999] px-4 items-center h-[58px] dark:bg-black transition-all duration-500'>
//               <img src={logo} alt="" className='sticky top-0 min-w-[60px] w-[5%] max-h-[36px] object-contain cursor-pointer' />
//               <img src={rich} className='w-[30px] h-[30px] ml-4 object-contain cursor-pointer rounded-full mid:hidden ' alt='avatar' onClick={sideMenu} />
//               <div className='hidden absolute left-[52.5%] transform translate-x-[-50%] gap-[3vw] justify-center items-center lg:flex'>
//                   <motion.div layoutId='active-pill'  className={`${activeHome ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow  border-t-[1px]   rounded-md py-0 px-4 cursor-pointer`} onClick={HandleHome}>
//                       <a className=''>
//                           Home
//                       </a>
//                   </motion.div>
//                   <motion.div layoutId='active-pill' className={`${activeAbout ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px]  rounded-md py-0 px-4 cursor-pointer`} onClick={HandleAbout}>
//                       <a className=''>
//                           About
//                       </a>
//                   </motion.div>
//                   <motion.div layoutId='active-pill' className={`${activeSkills ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`} onClick={HandleSkills}>
//                       <a className=''>
//                           Skills
//                       </a>
//                   </motion.div>
//                   <motion.div layoutId='active-pill' className={`${activeProjects ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`} onClick={HandleProject}>
//                       <a className=''>
//                           Projects
//                       </a>
//                   </motion.div>
//                   <motion.div layoutId='active-pill' className={`${activeContact ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`} onClick={HandleContact}>
//                       <a className=''>
//                           Contact
//                       </a>
//                   </motion.div>

//               </div>

//               <label for='check' className={`max-w-[50px] min-w-[45px] w-[5%] h-5 bg-gray-400 rounded-2xl absolute top-[50%]  translate-y-[-50%] right-16 lg:right-4 ${changeShadow ? 'box-inner-shadow' : "dark-shadow"} cursor-pointer transition-all duration-500`}>
//                   <input type='checkbox' id='check' className='sr-only peer' onClick={handleShadow} />
//                   <span className='w-[1vw] h-[1vw] min-w-[18px] min-h-[18px] bg-black left-[1px] absolute rounded-full mid:box-shadow  top-[50%] translate-y-[-50%] peer-checked:bg-[#009D66] lg:peer-checked:left-[63%] md:peer-checked:left-[62%] transition-all duration-500 peer-checked:left-[57%]'></span>
//               </label>


//               <div className='absolute right-4 text-white cursor-pointer shadow-lg' onClick={handleNav} >
//                   {
//                       showNav ? <AiOutlineClose className='text-lg lg:hidden' /> : <AiOutlineMenu className='text-lg lg:hidden' />
//                   }
//               </div>
//               {
//                   showNav && (
//                       <div className='absolute w-[20%] min-w-[130px] bg-gray-700 rounded-lg top-[58px] right-0 z-[999] flex flex-col gap-[3px] lg:hidden dark:bg-black transition-all duration-500'  >
//                           <div className=' bg-gray-400 inner-shadow  border-t-[1px] text-center rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer  group' >
//                               <a className='text-gray-400 group-hover:text-white text-center'>
//                                   Home
//                               </a>
//                           </div>
//                           <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
//                               <a className='text-gray-400 group-hover:text-white'>
//                                   About
//                               </a>
//                           </div>
//                           <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
//                               <a className='text-gray-400 group-hover:text-white'>
//                                   Skills
//                               </a>
//                           </div>
//                           <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
//                               <a className='text-gray-400 group-hover:text-white'>
//                                   Projects
//                               </a>
//                           </div>
//                           <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
//                               <a className='text-gray-400 group-hover:text-white'>
//                                   Contact
//                               </a>
//                           </div>


//                       </div>

//                   )
//               }

//           </nav>

//       </>

//   )
// }

// export default Navbar




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import logo from "../assets/logo.svg";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai';
// import rich from "../assets/edf.png";

// const Navbar = ({ sideMenu, changeTheme }) => {
//   const [showNav, setShowNav] = useState(false);
//   const [closeIcon, setCloseIcon] = useState(false);
//   const [changeShadow, setChangeShadow] = useState(false);

//   const [activeHome, setActiveHome] = useState(false);
//   const [activeAbout, setActiveAbout] = useState(false);
//   const [activeSkills, setActiveSkills] = useState(false);
//   const [activeProjects, setActiveProjects] = useState(false);
//   const [activeContact, setActiveContact] = useState(false);

//   const HandleHome = () => {
//     setActiveHome(true);
//     setActiveAbout(false);
//     setActiveContact(false);
//     setActiveProjects(false);
//     setActiveSkills(false);
//   };

//   const HandleAbout = () => {
//     setActiveHome(false);
//     setActiveAbout(true);
//     setActiveContact(false);
//     setActiveProjects(false);
//     setActiveSkills(false);
//   };

//   const HandleSkills = () => {
//     setActiveHome(false);
//     setActiveAbout(false);
//     setActiveContact(false);
//     setActiveProjects(false);
//     setActiveSkills(true);
//   };

//   const HandleContact = () => {
//     setActiveHome(false);
//     setActiveAbout(false);
//     setActiveContact(true);
//     setActiveProjects(false);
//     setActiveSkills(false);
//   };

//   const HandleProject = () => {
//     setActiveHome(false);
//     setActiveAbout(false);
//     setActiveContact(false);
//     setActiveProjects(true);
//     setActiveSkills(false);
//   };

//   const handleNav = () => {
//     setShowNav(!showNav);
//     setCloseIcon(!closeIcon);
//   };

//   const handleShadow = () => {
//     setChangeShadow(!changeShadow);
//     changeTheme();
//   };

//   return (
//     <>
//       <nav className='py-4 ralative flex sticky top-0 bg-gray-700 shadow-md shadow-gray-950 w-full z-[999] px-4 items-center h-[58px] dark:bg-black transition-all duration-500'>
//         <img src={logo} alt="" className='sticky top-0 min-w-[60px] w-[5%] max-h-[36px] object-contain cursor-pointer' />
//         <img src={rich} className='w-[30px] h-[30px] ml-4 object-contain cursor-pointer rounded-full mid:hidden ' alt='avatar' onClick={sideMenu} />
//         <div className='hidden absolute left-[52.5%] transform translate-x-[-50%] gap-[3vw] justify-center items-center lg:flex'>
//           <motion.div
//             className={`${activeHome ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow  border-t-[1px]   rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleHome}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Home
//             </a>
//           </motion.div>
//           <motion.div
//             className={`${activeAbout ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px]  rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleAbout}            whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               About
//             </a>
//           </motion.div>
//           <motion.div
//             className={`${activeSkills ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleSkills}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Skills
//             </a>
//           </motion.div>
//           <motion.div
//             className={`${activeProjects ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleProject}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Projects
//             </a>
//           </motion.div>
//           <motion.div
//             className={`${activeContact ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleContact}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Contact
//             </a>
//           </motion.div>
//         </div>

//         <label htmlFor='check' className={`max-w-[50px] min-w-[45px] w-[5%] h-5 bg-gray-400 rounded-2xl absolute top-[50%]  translate-y-[-50%] right-16 lg:right-4 ${changeShadow ? 'box-inner-shadow' : "dark-shadow"} cursor-pointer transition-all duration-500`}>
//           <input type='checkbox' id='check' className='sr-only peer' onClick={handleShadow} />
//           <span className='w-[1vw] h-[1vw] min-w-[18px] min-h-[18px] bg-black left-[1px] absolute rounded-full mid:box-shadow  top-[50%] translate-y-[-50%] peer-checked:bg-[#009D66] lg:peer-checked:left-[63%] md:peer-checked:left-[62%] transition-all duration-500 peer-checked:left-[57%]'></span>
//         </label>

//         <div className='absolute right-4 text-white cursor-pointer shadow-lg' onClick={handleNav}>
//           {showNav ? <AiOutlineClose className='text-lg lg:hidden' /> : <AiOutlineMenu className='text-lg lg:hidden' />}
//         </div>

//         {showNav && (
//           <motion.div
//             className='absolute w-[20%] min-w-[130px] bg-gray-700 rounded-lg top-[58px] right-0 z-[999] flex flex-col gap-[3px] lg:hidden dark:bg-black transition-all duration-500'
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//           >
//             <motion.div
//               className='bg-gray-400 inner-shadow  border-t-[1px] textcenter rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a className='text-gray-400 group-hover:text-white text-center'>
//                 Home
//               </a>
//             </motion.div>
//             <motion.div
//               className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a className='text-gray-400 group-hover:text-white text-center'>
//                 About
//               </a>
//             </motion.div>
//             <motion.div
//               className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a className='text-gray-400 group-hover:text-white text-center'>
//                 Skills
//               </a>
//             </motion.div>
//             <motion.div
//               className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a className='text-gray-400 group-hover:text-white text-center'>
//                 Projects
//               </a>
//             </motion.div>
//             <motion.div
//               className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a className='text-gray-400 group-hover:text-white text-center'>
//                 Contact
//               </a>
//             </motion.div>
//           </motion.div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;


   

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import logo from "../assets/logo.svg";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai';
// import rich from "../assets/edf.png";

// const Navbar = ({ sideMenu, changeTheme }) => {
//   const [showNav, setShowNav] = useState(false);
//   const [closeIcon, setCloseIcon] = useState(false);
//   const [changeShadow, setChangeShadow] = useState(false);

//   const [activeHome, setActiveHome] = useState(false);
//   const [activeAbout, setActiveAbout] = useState(false);
//   const [activeSkills, setActiveSkills] = useState(false);
//   const [activeProjects, setActiveProjects] = useState(false);
//   const [activeContact, setActiveContact] = useState(false);

//   const HandleHome = () => {
//     setActiveHome(true);
//     setActiveAbout(false);
//     setActiveContact(false);
//     setActiveProjects(false);
//     setActiveSkills(false);
//   };

//   const HandleAbout = () => {
//     setActiveHome(false);
//     setActiveAbout(true);
//     setActiveContact(false);
//     setActiveProjects(false);
//     setActiveSkills(false);
//   };

//   const HandleSkills = () => {
//     setActiveHome(false);
//     setActiveAbout(false);
//     setActiveContact(false);
//     setActiveProjects(false);
//     setActiveSkills(true);
//   };

//   const HandleContact = () => {
//     setActiveHome(false);
//     setActiveAbout(false);
//     setActiveContact(true);
//     setActiveProjects(false);
//     setActiveSkills(false);
//   };

//   const HandleProject = () => {
//     setActiveHome(false);
//     setActiveAbout(false);
//     setActiveContact(false);
//     setActiveProjects(true);
//     setActiveSkills(false);
//   };

//   const handleNav = () => {
//     setShowNav(!showNav);
//     setCloseIcon(!closeIcon);
//   };

//   const handleShadow = () => {
//     setChangeShadow(!changeShadow);
//     changeTheme();
//   };

//   return (
//     <>
//       <nav className='py-4 ralative flex sticky top-0 bg-gray-700 shadow-md shadow-gray-950 w-full z-[999] px-4 items-center h-[58px] dark:bg-black transition-all duration-500'>
//         <motion.img
//           src={logo}
//           alt=""
//           className='sticky top-0 min-w-[60px] w-[5%] max-h-[36px] object-contain cursor-pointer'
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         />
//         <motion.img
//           src={rich}
//           className='w-[30px] h-[30px] ml-4 object-contain cursor-pointer rounded-full mid:hidden '
//           alt='avatar'
//           onClick={sideMenu}
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           whileTap={{ scale: 0.9 }}
//         />
//         <div className='hidden absolute left-[52.5%] transform translate-x-[-50%] gap-[3vw] justify-center items-center lg:flex'>
//           <motion.div
//             className={`${activeHome ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow  border-t-[1px]   rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleHome}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Home
//             </a>
//           </motion.div>
//           <motion.div            className={`${activeAbout ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px]  rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleAbout}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               About
//             </a>
//           </motion.div>
//           <motion.div
//             className={`${activeSkills ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleSkills}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Skills
//             </a>
//           </motion.div>
//           <motion.div
//             className={`${activeProjects ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleProject}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Projects
//             </a>
//           </motion.div>
//           <motion.div
//             className={`${activeContact ? 'border-[#009D66] bg-[#009D66] text-white' : 'bg-gray-400 border-gray-500 text-gray-400'} inner-shadow border-t-[1px] rounded-md py-0 px-4 cursor-pointer`}
//             onClick={HandleContact}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <a className=''>
//               Contact
//             </a>
//           </motion.div>
//         </div>

//         <label htmlFor='check' className={`max-w-[50px] min-w-[45px] w-[5%] h-5 bg-gray-400 rounded-2xl absolute top-[50%]  translate-y-[-50%] right-16 lg:right-4 ${changeShadow ? 'box-inner-shadow' : "dark-shadow"} cursor-pointer transition-all duration-500`}>
//           <input type='checkbox' id='check' className='sr-only peer' onClick={handleShadow} />
//           <motion.span
//             className='w-[1vw] h-[1vw] min-w-[18px] min-h-[18px] bg-black left-[1px] absolute rounded-full mid:box-shadow  top-[50%] translate-y-[-50%] peer-checked:bg-[#009D66] lg:peer-checked:left-[63%] md:peer-checked:left-[62%] transition-all duration-500 peer-checked:left-[57%]'
//             whileTap={{ scale: 0.9 }}
//           ></motion.span>
//         </label>

//         <motion.div
//           className='absolute right-4 text-white cursor-pointer shadow-lg'
//           onClick={handleNav}
//           whileHover={{ rotate: 90 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           {showNav ? <AiOutlineClose className='text-lg lg:hidden' /> : <AiOutlineMenu className='text-lg lg:hidden' />}
//         </motion.div>

//         {showNav && (
//           <motion.div
//             className='absolute w-[20rem] right-0 bg-white top-[58px] mt-2 rounded-md shadow-lg px-4 py-2 z-50'
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//           >
//             <motion.a
//               className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//               href='#home'
//               onClick={() => {
//                 handleNav();
//                 HandleHome();
//               }}
//             >
//               Home
//             </motion.a>
//             <motion.a
//               className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//               href='#about'
//               onClick={() => {
//                 handleNav();
//                 HandleAbout();
//               }}
//             >
//               About
//             </motion.a>
//             <motion.a
//               className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//               href='#skills'
//               onClick={() => {
//                 handleNav();
//                 HandleSkills();
//               }}
//             >
//               Skills
//             </motion.a>
//             <motion.a
//               className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//               href='#projects'
//               onClick={() => {
//                 handleNav();
//                 HandleProject();
//               }}
//             >
//               Projects
//             </motion.a>
//             <motion.a
//               className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//               href='#contact'
//               onClick={() => {
//                 handleNav();
//                 HandleContact();
//               }}
//             >
//               Contact
//             </motion.a>
//           </motion.div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;



import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai'
import rich from "../assets/edf.png"
import { motion } from 'framer-motion'


const Navbar = ({sideMenu, changeTheme}) => {
    const [showNav, setShowNav] = useState(false)
    const [closeIcon, setCloseIcon] = useState(false)
    const [changeShadow, setChangeShadow] = useState(false)

    const [activeHome, setActiveHome] = useState(true)
    const [activeAbout, setActiveAbout] = useState(false)
    const [activeSkills, setActiveSkills] = useState(false)
    const [activeProjects, setActiveProjects] = useState(false)
    const [activeContact, setActiveContact] = useState(false)

    const HandleHome = () => {
        setActiveHome(true)
        setActiveAbout(false)
        setActiveContact(false)
        setActiveProjects(false)
        setActiveSkills(false)
    }
    const HandleAbout = () => {
        setActiveHome(false)
        setActiveAbout(true)
        setActiveContact(false)
        setActiveProjects(false)
        setActiveSkills(false)
    }
    const HandleSkills = () => {
        setActiveHome(false)
        setActiveAbout(false)
        setActiveContact(false)
        setActiveProjects(false)
        setActiveSkills(true)
    }
    const HandleContact = () => {
        setActiveHome(false)
        setActiveAbout(false)
        setActiveContact(true)
        setActiveProjects(false)
        setActiveSkills(false)
    }
    const HandleProject = () => {
        setActiveHome(false)
        setActiveAbout(false)
        setActiveContact(false)
        setActiveProjects(true)
        setActiveSkills(false)
    }


    let easeing = [0.6, -0.05, 0.01, 0.99]

    const stagger = {
        animate: {
            transition: {
                delayChildren: 0.02,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    }

    const fadeInUp = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {
                duration: 0.6, ease: easeing
            }
        },

        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.5,
                ease: easeing
            }
        }

    }

    const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

    const firstName = {
        initial: {
            y: -20
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.04,
                staggerDirection: -1
            }

        }
    }
    const lastName = {
        initial: {
            y: -20
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.04,
                staggerDirection: 1
            }

        }
    }

    const letter = {
        initial: {
            y: 400
        },
        animate: {
            y: 0,
            transition: {duration: 1, ...transition}
        }
    }

    const btnGroup = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.6, ease: easeing}
        },
        animate: {
            y: 0,
            opacity: 1,
            animation: {
                duration: 0.6,
                ease: easeing
            }
        }
    }

    const star = {
        initial: {
            y: 60,
            opacity: 0,
            transition: {duration: 0.8, ease: easeing}
        },
        animate: {
            y: 0,
            opacity: 1,
            animation: {
                duration: 0.6,
                ease: easeing
            }
        }
    }
    const header = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.05, ease: easeing}
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easeing
            }
        }
    }
    const header2 = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.05,}
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        }
    }
    const stagger2 = {
        animate: {
            transition: {
                delayChildren: 0.01,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    }

    const nav = {
        initial: {
            // x: 50,
            // y: 30,
            scale: 0,
            opacity: 0,
            transition: { duration: 0.5}
        },
        animate: {
            // x: 0,
            // y:0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.1,
                
            }

        }
    }




    const handleNav = () => {
        setShowNav(!showNav)
        setCloseIcon(!closeIcon)
    }

    const handleShadow = () => {
        setChangeShadow(!changeShadow)
        changeTheme()
        
    }
    

  return (
    <>
          <motion.nav initial="initial" animate="animate" variants={stagger2} className='py-4 ralative flex sticky top-0 bg-gray-700 shadow-2xl shadow-gray-950 w-full z-[999] px-4 items-center h-[58px] dark:bg-black transition-all dark:shadow-gray-700 dark:shadow-2xl duration-500'>
              <motion.img variants={header2} src={logo} alt="" className='sticky top-0 min-w-[60px] w-[5%] max-h-[36px] object-contain cursor-pointer' />
              <motion.img variants={header2} src={rich} className='w-[30px] h-[30px] ml-4 object-contain cursor-pointer rounded-full mid:hidden ' alt='avatar' onClick={sideMenu} />
              <div  className='hidden absolute left-[52.5%] transform translate-x-[-50%] gap-[3vw] justify-center items-center lg:flex'>
                  <motion.div variants={nav} className={`${activeHome ? 'border-t-[0] text-white' : 'bg-gray-400 border-gray-500 text-gray-400 border-t-[1px] inner-shadow'}    transition-all duration-[0.8]  rounded-md py-0 px-4 cursor-pointer relative`} onClick={HandleHome}>
                      <a className='' href='#home'>
                          Home
                      </a>
                     {activeHome && <motion.div layoutId='underline' transition={{type:'spring', duration:1, bounce:0.25}} className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-sm inner-shadow'}></motion.div>}
                  </motion.div>
                  <motion.div variants={nav} className={`${activeAbout ? 'border-t-[0] text-white' : 'bg-gray-400 border-gray-500 text-gray-400 border-t-[1px] inner-shadow'}    transition-all duration-[0.8]  rounded-md py-0 px-4 cursor-pointer relative`} onClick={HandleAbout}>
                      <a className='' href='#about'>
                          About
                      </a>
                      {activeAbout &&<motion.div layoutId='underline' transition={{type:'spring', duration:1, bounce:0.25}}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-sm inner-shadow '}></motion.div>}
                  </motion.div>
                  <motion.div variants={nav} className={`${activeSkills ? 'border-t-[0] text-white' : 'bg-gray-400 border-gray-500 text-gray-400 border-t-[1px] inner-shadow'}    transition-all duration-[0.8]  rounded-md py-0 px-4 cursor-pointer relative`} onClick={HandleSkills}>
                      <a className='' href='#skills'>
                          Skills
                      </a>
                      {activeSkills &&<motion.div layoutId='underline' transition={{type:'spring', duration:1, bounce:0.25}}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-sm inner-shadow '}></motion.div>}
                  </motion.div>
                  <motion.div variants={nav} className={`${activeProjects ? 'border-t-[0] text-white' : 'bg-gray-400 border-gray-500 text-gray-400 border-t-[1px] inner-shadow'}    transition-all duration-[0.8]  rounded-md py-0 px-4 cursor-pointer relative`} onClick={HandleProject}>
                      <a className='' href='#projects'>
                          Projects
                      </a>
                      {activeProjects &&<motion.div layoutId='underline' transition={{type:'spring', duration:1, bounce:0.25 }}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-sm inner-shadow '}></motion.div>}
                  </motion.div>
                  <motion.div variants={nav} className={`${activeContact ? 'border-t-[0] text-white' : 'bg-gray-400 border-gray-500 text-gray-400 border-t-[1px] inner-shadow'}    transition-all duration-[0.8]  rounded-md py-0 px-4 cursor-pointer relative`} onClick={HandleContact}>
                      <a className='' href='#contact'>
                          Contact
                      </a>
                      {activeContact &&<motion.div layoutId='underline' transition={{type:'spring', duration:1, bounce:0.25 }}  className={'border-t-[2px] border-[#009D66] bg-[#009D66] absolute top-0 left-0 inset-0 z-[-1] rounded-sm inner-shadow '}></motion.div>}
                  </motion.div>

              </div>

              <motion.label variants={header2} for='check' className={`max-w-[50px] min-w-[45px] w-[5%] h-5 bg-gray-400 rounded-2xl absolute top-[35%]  translate-y-[-50%] right-16 lg:right-4 ${changeShadow ? 'box-inner-shadow' : "dark-shadow"} cursor-pointer transition-all duration-500`}>
                  <input type='checkbox' id='check' className='sr-only peer' onClick={handleShadow} />
                  <span className='w-[1vw] h-[1vw] min-w-[18px] min-h-[18px] bg-black left-[1px] absolute rounded-full mid:box-shadow  top-[50%] translate-y-[-50%] peer-checked:bg-[#009D66] lg:peer-checked:left-[63%] md:peer-checked:left-[62%] transition-all duration-500 peer-checked:left-[57%]'></span>
              </motion.label>


              <motion.div className='absolute right-4 text-white cursor-pointer shadow-lg' onClick={handleNav} >
                  {
                      showNav ? <AiOutlineClose className='text-lg lg:hidden' /> : <AiOutlineMenu className='text-lg lg:hidden' />
                  }
              </motion.div>
              {
                  showNav && (
                      <motion.div variants={stagger2} className='absolute w-[20%] min-w-[130px] bg-gray-700 rounded-lg top-[58px] right-0 z-[999] flex flex-col gap-[3px] lg:hidden dark:bg-black transition-all duration-500'  >
                          <motion.div variants={header2} className=' bg-gray-400 inner-shadow  border-t-[1px] text-center rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer  group' >
                              <a className='text-gray-400 group-hover:text-white text-center'>
                                  Home
                              </a>

                          </motion.div>
                          <motion.div variants={header2} className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  About
                              </a>
                          </motion.div>
                          <motion.div variants={header2} className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  Skills
                              </a>
                          </motion.div>
                          <motion.div variants={header2} className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  Projects
                              </a>
                          </motion.div>
                          <motion.div variants={header2} className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  Contact
                              </a>
                          </motion.div>


                      </motion.div>

                  )
              }

          </motion.nav>

      </>

  )
}

export default Navbar

