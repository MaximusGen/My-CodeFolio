import './buttonScrollUp.css';
import {useEffect, useState} from 'react'
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import {className} from '../../utils/ButtonScroll'

const ButtonScrollUp = () => {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
      if(window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }

   useEffect(() =>{
        window.addEventListener('scroll', toggleVisibility)

        return () => {
          window.removeEventListener('scroll', toggleVisibility)
        }
    },[])
    

    return(
        <button type="button" onClick={scrollToTop} className={className(isVisible ? 'btn-full' : 'btn-empty')}>
        <BsFillArrowUpSquareFill color='#000' size={30} aria-hidden="true"/>  
        </button>
    )
}

export default ButtonScrollUp;