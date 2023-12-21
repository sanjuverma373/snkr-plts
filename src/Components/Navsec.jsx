import React from 'react'
import { Container } from 'react-bootstrap';
import navlogo1 from '../assets/images/nav-uper-logo-img-1.png'

const Navsec = () => {
        function openNav() {
                document.getElementById("navBar").classList.toggle("start-0");
                document.body.classList.toggle("overflow-hidden");
                document.querySelector(".menu").classList.toggle("cross")

        }
        function closeNav() {
                document.getElementById("navBar").classList.remove("start-0");
                document.body.classList.remove("overflow-hidden");
                document.querySelector(".menu").classList.remove("cross")
        }
        const preloader = document.getElementById("preloader");
        setTimeout(() => {
                document.getElementById("preloader").classList.add("d_none")
                document.body.classList.remove("overflow-hidden")

        }, 2000);
        return (
                <div>
                        <div id="preloader" class=" overflow-y-hidden  position-relative loader_bg ">
                                <div class=" bg-black vh-100 d-flex align-items-center justify-content-center  position-fixed  top-0 start-0 w-100 ">
                                        <div class="d-flex align-items-center justify-content-center preloder-img ">
                                                <div class="loading-bar">Loading</div>
                                        </div>
                                </div>
                        </div>
                        <div className='navbg-crd py-lg-4 pb-2 ' >

                                <Container >
                                        <nav >
                                                <div className="d-flex align-items-cneter justify-content-between">
                                                        <div className=' d-flex  align-items-center position-relative '>
                                                                <img className='w_100 d-block d-lg-none mt-2' src={navlogo1} alt="#" />
                                                        </div>
                                                        <div onClick={openNav} className="menu d-block d-lg-none z-5 mt-2">
                                                                <span className="nav-line1"></span>
                                                                <span className="my-2 nav-line2"></span>
                                                                <span className="nav-line3"></span>
                                                        </div>
                                                        <ul id="navBar" className="d-flex align-items-center gap-3 mb-0 mobileView">
                                                                <li><a onClick={closeNav} href="#HOME"
                                                                        className="text-black fs-s-md fw-normal nav-h ff-roboto mb-0 position-relative common-h">HOME</a>
                                                                </li>
                                                                <li><a onClick={closeNav} href="#SNEAKERS"
                                                                        className=" text-black  fs-s-md fw-normal nav-h ff-roboto mb-0 position-relative common-h">SNEAKERS KOPEN
                                                                </a>
                                                                </li>
                                                                <li><a onClick={closeNav} href="#INTERVIEWS"
                                                                        className="text-black fs-s-md fw-normal nav-h ff-roboto mb-0 position-relative common-h">INTERVIEWS</a>
                                                                </li>
                                                                <li><a onClick={closeNav} href="#SALE"
                                                                        className="text-black fs-s-md fw-normal nav-h ff-roboto mb-0 position-relative common-h">SALE
                                                                </a>
                                                                </li>
                                                                <li><a onClick={closeNav} href="#DAG"
                                                                        className="text-black fs-s-md fw-normal nav-h ff-roboto mb-0 position-relative common-h">SNEAKER VAN DE DAG</a>
                                                                </li>
                                                                <li><a onClick={closeNav} href="#FORUM"
                                                                        className="text-black fs-s-md fw-normal nav-h ff-roboto mb-0 position-relative common-h">SNEAKER FORUM
                                                                </a>
                                                                </li>
                                                                <li><a onClick={closeNav} href="#BLOG"
                                                                        className="text-black fs-s-md fw-normal nav-h ff-roboto mb-0 position-relative common-h">BLOG</a>
                                                                </li>

                                                        </ul>
                                                </div>
                                        </nav>

                                </Container>
                        </div>
                </div>
        )
}

export default Navsec
