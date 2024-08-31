import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import Socials from './Socials';

function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section>
                    <form action="https://gmail.us10.list-manage.com/subscribe/post" method="POST">
                        <input type="hidden" name="u" value="2e5a8f8e9d198119f59e976fa" />
                        <input type="hidden" name="id" value="0f8915acdd" />

                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>
                            <MDBCol md='5' start>
                                <MDBInput
                                    contrast
                                    type='email'
                                    name='EMAIL'
                                    placeholder='Email'
                                    className='mb-4'
                                    required
                                />
                            </MDBCol>
                            <MDBCol size="auto">
                                    <button type="submit" className="btn btn-success">Subscribe</button>
                                </MDBCol>
                        </MDBRow>

                        <section className='mb-4'>
                            <p>
                                Be sure to subscribe to our newsletter to stay up to date with the latest Mini AI News!
                            </p>
                        </section>

                        <MDBRow>
                            <MDBCol className='d-flex justify-content-center mb-1'>
                                <div className="mt-1">
                                    <Socials />
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright Mini AI
            </div>
        </MDBFooter>
    );
}

export default Footer;
