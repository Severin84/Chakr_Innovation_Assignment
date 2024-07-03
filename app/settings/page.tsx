"use client"
import React, { useState } from 'react'
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import '../../app/tailwind.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { TiFlowMerge } from "react-icons/ti";
import { HiCodeBracket } from "react-icons/hi2";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineFileAdd } from "react-icons/ai";
import ProfilePage from '../subcomponents/ProfilePage';
import Appearance from '../subcomponents/Appearance';


const SettingsPage = () => {
    const [settingComponent,setSettingComponent]=useState<React.ReactNode|null>(<ProfilePage/>);

    const changeComponent=(componenetValue:React.ReactNode)=>{
       setSettingComponent(componenetValue);
    }

  return (
    <div>
        <div style={{display:"flex",height:"85vh",width:"85vw",marginTop:"5rem"}}>
            <div style={{marginLeft:"13rem",width:"20rem",height:"85vh"}}>
                <div style={{marginTop:"2rem",height:"2rem"}}>
                    <span>Settings</span>
                </div>
                <div style={{marginTop:"2rem",display:"flex",flexDirection:"column",height:"10rem"}}>
                    <span style={{fontSize:"0.9rem",color:"#5a5858"}}>User</span>
                    <div style={{display:"flex",flexDirection:"column",marginTop:"1rem"}}>
                        <div style={{display:"flex",width:"8rem",justifyContent:"space-evenly",cursor:"pointer"}} onClick={()=>changeComponent(<ProfilePage/>)}>
                            <FaRegCircleUser style={{marginTop:"0.25rem"}} />
                            <span>Profile</span>
                        </div>
                        <div style={{display:"flex",width:"10.5rem",justifyContent:"space-evenly",cursor:"pointer"}} onClick={()=>changeComponent(<Appearance/>)}>
                        <MdAlternateEmail  style={{marginTop:"0.25rem"}}/>
                        <span>Appearance</span>
                        </div>
                        <div style={{display:"flex",width:"8.8rem",justifyContent:"space-evenly"}}>
                        <MdOutlineSwitchAccount  style={{marginTop:"0.25rem"}} />
                        <span>Account</span>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",marginLeft:"2rem"}}>
                            <div style={{display:"flex",width:"8.8rem",justifyContent:"space-evenly"}}>
                            <MdOutlineMail style={{marginTop:"0.25rem"}}/>
                            <span>Emails</span>
                            </div>
                            <div style={{display:"flex",width:"10.5rem",justifyContent:"space-evenly"}}>
                            <RiCalendarEventLine style={{marginTop:"0.25rem"}}/>
                            <span>Calendars</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:"10rem",display:"flex",flexDirection:"column",marginTop:"2rem"}}>
                    <span style={{fontSize:"0.9rem",color:"#5a5858"}}>Workspace</span>
                    <div style={{display:"flex",flexDirection:"column",marginTop:"1rem"}}>
                        <div style={{display:"flex",width:"8rem",justifyContent:"space-evenly"}}>
                        <IoSettingsOutline style={{marginTop:"0.25rem"}} />
                        <span>General</span>
                        </div>
                        <div style={{display:"flex",width:"8.6rem",justifyContent:"space-evenly"}}>
                        <SlPeople style={{marginTop:"0.25rem"}} />
                        <span>Members</span>
                        </div>
                        <div style={{display:"flex",width:"9.5rem",justifyContent:"space-evenly"}}>
                        <TiFlowMerge style={{marginTop:"0.25rem"}} />
                        <span>Data Model</span>
                        </div>
                        <div style={{display:"flex",width:"9.5rem",justifyContent:"space-evenly"}}>
                        <HiCodeBracket style={{marginTop:"0.25rem"}} />
                        <span>Developers</span>
                        </div>
                        <div style={{display:"flex",width:"9.7rem",justifyContent:"space-evenly"}}>
                        <MdOutlineIntegrationInstructions style={{marginTop:"0.25rem"}}/>
                        <span>Integrations</span>
                        </div>
                    </div>
                </div>
                <div style={{height:"10rem",display:"flex",flexDirection:"column",marginTop:"2rem"}}>
                    <span style={{fontSize:"0.9rem",color:"#5a5858"}}>Other</span>
                    <div style={{display:"flex",flexDirection:"column",marginTop:"1rem"}}>
                        <div style={{display:"flex",width:"8rem",justifyContent:"space-evenly"}}>
                        <IoRocketOutline style={{marginTop:"0.25rem"}} />
                        <span>Releases</span>
                        </div>
                        <div style={{display:"flex",width:"7rem",justifyContent:"space-evenly"}}>
                        <HiOutlineLogout style={{marginTop:"0.25rem"}}/>
                        <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{border:"0.1rem",borderStyle:"solid",borderRadius:"0.5rem",width:"60vw",height:"85vh"}}>
            {
                 settingComponent
            }
            </div>
        </div>
    </div>
  )
}

export default SettingsPage