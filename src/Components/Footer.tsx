import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import Socials from './Socials';

function Footer() {
    return (
        <>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Email' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className=''>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className='d-flex justify-content-center mb-1'>
                <div className="mt-1">
                <Socials/>
                </div>
                </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Be sure to subscribe to our newsletter to stay up to date with the latest Mini AI News!
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright Mini AI
      </div>
    </MDBFooter>
        </>
    );
}

export default Footer;
