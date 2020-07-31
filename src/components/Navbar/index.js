import React from "react";

import { DivNavbar } from "./styles";

function Navbar() {
  return (
    <DivNavbar>
      <div className='Navebar__logo'>Faceboook</div>
      <div className='Navbar__name'>
        <a
          href='https://github.com/sutthikiat1'
          target='_blank'
          rel='noopener noreferrer'
        >
          @ Sutthikiat Phongsakornmetha
        </a>
      </div>
    </DivNavbar>
  );
}

export default Navbar;
