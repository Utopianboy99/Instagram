'use client'
import React from "react";
import { useState } from "react";
import { Modal } from "@mui/material";
import { Button } from "@mui/material"

const Follow = () => {
    const [open, setOpen] = useState(false);

        const opener = (e) =>{
            setOpen(true)
        }

        const closer = (e)=>{
            setOpen(false)
        }


    return ( 
        
        <>

            <Modal
                open={open}
            >
                       <div>
                        
                        </div>              
            </Modal>

        </>
     );
}
 
export default Follow;