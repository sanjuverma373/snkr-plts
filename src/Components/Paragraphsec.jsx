import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Paragraphsec = () => {
        const [key, setKey] = useState('home');


        return (
                <div className="py-md-5 py-2" id="INTERVIEWS">

                        <Container>
                                <div className=" pb-4 mb-2">
                                        <Tabs
                                                id="controlled-tab-example"
                                                activeKey={key}
                                                onSelect={(k) => setKey(k)}
                                                className="mb-3"
                                        >
                                                <Tab eventKey="home" title="DESCRIPTION">
                                                        <p className=' fw-normal fs-m-md ff-poppins text-black mx-1240 '>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura </p>
                                                </Tab>
                                                <Tab eventKey="profile" title="ADDITIONAL INFORMATION">
                                                        <p className='fw-normal fs-m-md ff-poppins text-black mx-1240 '>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod.</p>
                                                </Tab>
                                                <Tab eventKey="contact" title="REVIEWS (1)" >
                                                        <p className='fw-normal fs-m-md ff-poppins text-black mx-1240 '>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate</p>
                                                </Tab>
                                        </Tabs>
                                </div>
                        </Container>



                </div>
        )
}

export default Paragraphsec
