"use client"
 
import * as React from "react";
import '../../app/tailwind.css'

 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
import {backgroundChange} from "../store/atoms/ColorChange"
import {useSetRecoilState} from 'recoil'

 
const Appearance = () => {
   
    const setBackgroundColor=useSetRecoilState(backgroundChange);
    
    const [position, setPosition] = React.useState("Light")
    
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"20rem"}}>
    <div style={{width:"5rem"}}>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Appearance</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Light" onClick={()=>{setBackgroundColor({backgroundColor:'#fffefc',color:'#121212'})}}>Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Dark" onClick={()=>{setBackgroundColor({backgroundColor:'#121212',color:'#fffefc'})}}>Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Light Purple" onClick={()=>{setBackgroundColor({backgroundColor:'#8300c4',color:'#fffefc'})}}>Light Purple</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Dark Purple" onClick={()=>{setBackgroundColor({backgroundColor:'#31004a',color:'#fffefc'})}}>Dark Purple</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    </div>
  )
}

export default Appearance