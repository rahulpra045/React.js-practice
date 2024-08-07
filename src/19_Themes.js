import React, {useState} from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import './styles/19_Themes.css';


const Themes = () => {
    const [isToggle, setIsToggle] = useState(false);
    const changeToggle = () => {
        setIsToggle(!isToggle);
    }
  return (
      <div className={`${isToggle ? 'bg-dark' : 'bg-light'}`}>
          <button type='toggle' onClick={changeToggle} >
              {isToggle ? (
                  <MdDarkMode />
              ) :
                  (
                      <MdOutlineDarkMode />
                  )}
          </button>
    </div>
  )
}

export default Themes