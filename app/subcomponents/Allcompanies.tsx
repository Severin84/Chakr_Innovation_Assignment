import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "../../components/ui/table"

const Allcompanies = () => {
 
    const data=[
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
        {Name:<div><input type="checkbox"/>Airbnb</div>,DominName:"airbnb.com",AccountOwner:"",CreationDate:"1 Jun 2024-3:30",Employees:"20000",Linkedin:<div>airbnb</div>,Address:"New York",ARR:"",X:"",Opportunities:"",Activites:"",People:<div>Sam will</div>},
    ];

  return (
    <div style={{border:"0.1rem",borderStyle:"solid",borderRadius:"0.5rem"}}>
    <Table>
            <div>
                All Companies 
            </div>
        <div>
        <TableHeader>
            <TableRow style={{display:"flex",justifyContent:"space-between",width:"120rem"}}>
            <TableHead><div><input type='checkbox'/>Name</div></TableHead>
            <TableHead>Domain Name</TableHead>
            <TableHead>Account Owner</TableHead>
            <TableHead>Creation Date</TableHead>
            <TableHead>Employees</TableHead>
            <TableHead>Linkedin</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>ARR</TableHead>
            <TableHead>X</TableHead>
            <TableHead>Opportunities</TableHead>
            <TableHead>Activites</TableHead>
            <TableHead>People</TableHead>
            </TableRow>
        </TableHeader>
      
        <TableBody>
            {
                data.map((value,idx)=>(
                    <TableRow style={{display:"flex",justifyContent:"space-between",width:"120rem"}}>
                    <TableCell>{value.Name}</TableCell>
                    <TableCell>{value.DominName}</TableCell>
                    <TableCell>{value.AccountOwner}</TableCell>
                    <TableCell>{value.CreationDate}</TableCell>
                    <TableCell>{value.Employees}</TableCell>
                    <TableCell>{value.Linkedin}</TableCell>
                    <TableCell>{value.Address}</TableCell>
                    <TableCell>{value.ARR}</TableCell>
                    <TableCell>{value.X}</TableCell>
                    <TableCell>{value.Opportunities}</TableCell>
                    <TableCell>{value.Activites}</TableCell>
                    <TableCell>{value.People}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
        </div>
    </Table>
    </div>
  )
}

export default Allcompanies