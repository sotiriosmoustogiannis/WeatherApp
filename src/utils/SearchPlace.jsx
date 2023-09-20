import * as React from 'react';
import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';



export default function SearchPlace() {
  const [search, setSearch] = useState(true)

  const handleSearch = () => {
    setSearch(!search)
  }

  return (
    <div className="searchPlace">
      {search ?
        <>
          <Button variant="search" onClick={handleSearch}>Search for places</Button>
          <IconButton aria-label="search" sx={{ color: "grey", ml: 30 }}>
            <GpsFixedOutlinedIcon />
          </IconButton> </>
        :
        <><TextField id="outlined-basic" size="small" label="Search" variant="outlined" sx={{ color: "white" }} />
          <Button variant="search">Search!</Button>
          <IconButton aria-label="delete" onClick={handleSearch} >
            <DeleteIcon />
          </IconButton>
        </>
      }
    </div>
  )
}