import React from 'react'
import mapimg1 from "../assets/images/foot-img-1.png";
import mapimg2 from "../assets/images/foot-img-2.png";
import { Col, Container, Row } from "react-bootstrap";
const crddate = [{
        img: mapimg1,
},
{
        img: mapimg2,
},
{
        img: mapimg1,
},
{
        img: mapimg2,
}]
const Mapsec = () => {
        const crdsec = crddate.map((crddate) => (
                <Col xl={3} lg={4}  className="col-md-6 col-12 mt-3">
                        <div className="card-sec">
                                <div className="img-padding">
                                        <img src={crddate.img} alt="#" className='w-100' />
                                </div>
                                <div className="data-padding">
                                        <div className="d-flex justify-content-between">
                                                <div className="d-flex gap-3 align-items-center">
                                                        <p className="fs-x-sm fw-normal text-black ff-poppins">
                                                                Price:
                                                        </p>
                                                        <p className="fs-m-md fw-semibold text-black ff-poppins">
                                                                €179,99
                                                        </p>
                                                </div>
                                                <div>
                                                        <button className="foot-common-btn fs-s-sm fw-normal text-white ff-poppins">
                                                                Best Price
                                                        </button>
                                                </div>
                                        </div>
                                        <p className="pb-2 fs-x-sm fw-normal text-black ff-poppins m-0 ">
                                                Size:
                                        </p>
                                        <div className="d-flex align-items-center pt-2 justify-content-between">
                                                
                                                        <p className="size-crd text-center mb-2 fs-x-sm fw-medium text-light-black2 ff-poppins cursar-pointer">
                                                                41
                                                        </p>
                                              
                                                        <p className="size-crd text-center mb-2 fs-x-sm fw-medium text-light-black2 ff-poppins cursar-pointer">
                                                                42
                                                        </p>
                                                        <p className="size-crd text-center mb-2 fs-x-sm fw-medium text-light-black2 ff-poppins cursar-pointer">
                                                                43
                                                        </p>
                                                
                                        </div>
                                        <div className="d-flex align-items-center pt-2 justify-content-between mb-1">
                                                
                                                        <p className="size-crd text-center mb-2 fs-x-sm fw-medium text-light-black2 ff-poppins cursar-pointer">
                                                                44
                                                        </p>
                                                        <p className="size-crd text-center mb-2 fs-x-sm fw-medium text-light-black2 ff-poppins cursar-pointer">
                                                                45
                                                        </p>
                                                        <p className="size-crd text-center mb-2 fs-x-sm fw-medium text-light-black2 ff-poppins cursar-pointer">
                                                                46
                                                        </p>
                                                
                                        </div>
                                        <p className="fs-x-sm fw-normal text-khakigreen mb-2 ff-poppins">
                                                View this product as:
                                        </p>
                                        <p className=" pb-4 fs-x-sm fw-semibold text-blue ff-poppins">
                                                Foot Locker NL
                                        </p>
                                </div>
                        </div>
                </Col>
        ))
        return (
                <div className="pt-2 mt-2 mt-md-4 pt-md-5 pb-3" id="SNEAKERS">
                        <Container>
                        <h2 class="m-0 mb-4 fw-medium fs-s-lg text-black ff-poppins">You can buy the Nike Air Max 97 Men's Shoe -
                White here:
            </h2>
                                <Row className="pt-4">
                                        {crdsec}
                                </Row>
                        </Container>
                </div>
        )
}

export default Mapsec
