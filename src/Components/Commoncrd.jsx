import React from 'react'
import secimg1 from '../assets/images/related-crd-img-1.png'
import secimg2 from '../assets/images/related-crd-img-2.png'
import blackstar from '../assets/images/relativestar.png'
import { Col, Container, Row } from "react-bootstrap";
const offcrd = [{
        imgc: secimg1,
},
{
        imgc: secimg2,
},
{
        imgc: secimg1,
},
{
        imgc: secimg2,
},
{
        imgc: secimg1,
},
{
        imgc: secimg2,
},
{
        imgc: secimg1,
},
{
        imgc: secimg1,
}]
const Commoncrd = () => {
        const crdssec = offcrd.map((offcrd) => (
                <Col lg={3} md={6} className="pb-3">
                        <div className="related-sec-crd overflow-hidden ">
                                <div className="position-relative overflow-hidden ">
                                        <img className="w-100 crd-img" src={offcrd.imgc} alt="" />
                                        <p className="off text-center fs-m-sm fw-light text-whites ff-poppins">-10% OFF</p>
                                        <p className="new text-center fs-m-sm fw-normal text-whites pt-1 ff-poppins">NEW</p>
                                </div>
                                <p className="fs-s-md fw-medium text-grey pt-4 ps-2 ff-poppins ">Quickiins Mens Shoes</p>
                                <div className="d-flex align-items-center position-relative ps-2  ">
                                        <p className="fs-s-md fw-medium text-light-grey pe-1 pb-1 pb-3 ff-poppins ">$90.00</p>
                                        <p className="fs-s-md fw-medium text-dark-orange pb-3 ff-poppins">$70.00</p>
                                        <svg className="shoping-icon justify-content-end " width="49" height="49" viewBox="0 0 49 49"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_776_387)">
                                                        <path
                                                                d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z"
                                                                fill="#28A745" />
                                                </g>
                                                <defs>
                                                        <clipPath id="clip0_776_387">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)" />
                                                        </clipPath>
                                                </defs>
                                        </svg>
                                </div>
                                <img className='ps-2 pb-4' src={blackstar} alt="" />
                        </div>
                </Col>
        ))
        return (
                <div classNameName="pt-2 mt-2 mt-md-4 pt-md-5 pb-3" id="SALE">
                        <Container>
                                <h2 className="fw-medium fs-m-lg text-black pb-4 ff-poppins m-0 ">RELATED PRODUCT</h2>
                                <Row classNameName="pt-4">
                                        {crdssec}
                                </Row>
                                <div class="d-flex align-items-center justify-content-end gap-2 pt-md-5 pt-2 mb-3  ">
                                        <div>
                                                <button class="text-light-black1 fs-x-md fw-semibold no-crd lh-125 ff-poppins">1</button>
                                        </div>
                                        <div>
                                                <button class="text-light-black1 fs-x-md fw-semibold no-crd lh-125 ff-poppins">2</button>
                                        </div>
                                        <div>
                                                <button class="text-light-black1 fs-x-md fw-semibold no-crd lh-125 ff-poppins">3</button>
                                        </div>

                                        <button class="fs-x-sm fw-normal text-grey nextbtn ff-poppins">Next &gt;&gt;</button>

                                </div>
                        </Container>
                </div>
        )
}

export default Commoncrd
