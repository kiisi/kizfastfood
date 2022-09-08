import React, {useState, useRef, useEffect} from 'react'
import './Navbar.css'
import shopping_cart from '../../Images/shopping-cart.png'


const Navbar = () => {

  useEffect(() => {
    let body = document.body
    let lastScroll = 0;

    window.addEventListener("scroll",()=>{
      let currentScroll = window.pageYOffset

      if (currentScroll <= 0){
          body.classList.remove("scroll-up")
      }
      
      if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
          body.classList.remove("scroll-up")
          body.classList.add("scroll-down")
      }
      if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
          body.classList.remove("scroll-down")
          body.classList.add("scroll-up")
      }
      
      
      lastScroll = currentScroll
    })
  }, [])

  const [click, setClick] = useState(false)
  const mobileNavRef = useRef()
  const mobileNavCloseRef = useRef()
  
  const menuHandler = () =>{
    setClick(!click)
    let mobileNav = mobileNavRef.current
    let mobileNavClose = mobileNavCloseRef.current


    mobileNav.classList.remove("nav-slide-effect-out")
    mobileNav.classList.add("nav-slide-effect-in")
    mobileNav.addEventListener('animationend',()=>{
      mobileNav.style.right = '0';
      mobileNavClose.classList.add('show')
    })

    
    
  }

  const closeHandler = () =>{
    setClick(!click)
    let mobileNav = mobileNavRef.current
    let mobileNavClose = mobileNavCloseRef.current


    mobileNavClose.classList.remove('show')

    mobileNav.classList.remove("nav-slide-effect-in")
    mobileNav.classList.add("nav-slide-effect-out")
    mobileNav.addEventListener('animationend',()=>{
      mobileNav.style.right = '-40rem';
      mobileNavClose.classList.remove('show')

    })


    
  }

  return (
    <>
      <nav className="max-wrapper nav-wrapper">
        <div className="nav">
          <div className="nav-header">
            <h2><span>Fast</span>Food</h2>
          </div>
          <div className="nav-menu">
            <div>Home</div>
            <div>Menu</div>
            <div>Service</div>
            <div>Shop</div>
          </div>
          <div className="nav-util">
            <div className="nav-util-search">
              <span className="material-icons">search</span>
              <input type="text" placeholder="Search" />
            </div>
            <div className="nav-util-cart">
              <img src={shopping_cart} alt="shopping_cart" width="20" height="20" />
              <div className="nav-util-cart-num">2</div>
            </div>
          </div>
          <div className="nav-menu-icon" onClick={menuHandler}>
            <span className="material-icons">menu</span>
          </div>
        </div>
      </nav>
      <nav className="mobile-nav" ref={mobileNavRef}>
        <div className="mobile-nav-close-wrapper">
          <div className="mobile-nav-close" onClick={closeHandler} ref={mobileNavCloseRef}>
            <span className="material-icons">close</span>
          </div>
        </div>
        <div className="mobile-nav-content">
          <div className="nav-header mobile-nav-header">
            <h2><span>Fast</span>Food</h2>
          </div>
          <div className="mobile-nav-util">
            <div className="mobile-nav-util-search">
              <span className="material-icons">search</span>
              <input type="text" placeholder="Search" />
            </div>
            <div className="mobile-nav-util-cart">
              <img src={shopping_cart} alt="shopping_cart" width="20" height="20" />
              <div className="mobile-nav-util-cart-num">2</div>
            </div>
          </div>
          <div className="mobile-nav-menu">
              <div>Home</div>
              <div>Menu</div>
              <div>Service</div>
              <div>Shop</div>
            </div>
        </div>
      </nav>
      <div className="nav-modal"style={{display: click ? 'block' : 'none'}} onClick={closeHandler}></div>
    </>
  )
}

export default Navbar