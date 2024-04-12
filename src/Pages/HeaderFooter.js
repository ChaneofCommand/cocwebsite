import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const HeaderFooter = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)  
    };
    return ( 
        <>

<Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle} />
      </>
    );
};

export default HeaderFooter
