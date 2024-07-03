"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AiOutlineFileAdd } from "react-icons/ai";


const ProfilePage = () => {
  return (
    <div>
         <div style={{height:"82vh",width:"50vw",marginTop:"1rem",zIndex:"9999"}}>
                <div style={{marginTop:"0.6rem",marginLeft:"1rem"}}>
                <span>Profile</span>
                <div style={{marginTop:"2rem"}}>
                    <span>Picture</span>
                    <div style={{display:"flex",width:"25rem",justifyContent:"space-between"}}>
                       <AiOutlineFileAdd style={{fontSize:"2rem"}} />
                       <Input style={{width:"10rem"}} placeholder='upload' type='file'/>
                       <Button style={{width:"10rem"}} variant='outline'>Remove</Button>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",marginTop:"2rem"}}>
                    <span>Name</span>
                    <span>Your names as it will be displayed</span>
                    <div style={{display:"flex",width:"30rem",justifyContent:"space-between"}}>
                        <div>
                           <label htmlFor='firstname'>First Name</label>
                           <Input type='text' id="firstname" placeholder='Noah'/>
                        </div>
                        <div>
                            <label htmlFor='lastname'>Last Name</label>
                            <Input type='text' id="lastname" placeholder='A'/>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",marginTop:"2rem"}}>
                    <span>Email</span>
                    <span>The email associated to your account</span>
                    <div style={{width:"30rem"}}>
                       <Input type='email' placeholder='Email'/>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",marginTop:"1.5rem"}}>
                    <span>Change Password</span>
                    <span>Receive ans email containing password update link</span>
                    <div style={{marginTop:"0.5rem"}}>
                    <Button style={{width:"10rem"}} variant='outline'>Change Password</Button>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",marginTop:"2rem"}}>
                    <span>Danger Zone</span>
                    <span>Delete account and all the associated data</span>
                    <div style={{marginTop:"1rem"}}>
                    <Button style={{width:"10rem",backgroundColor:"red"}} variant="destructive">Danger Account</Button>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default ProfilePage