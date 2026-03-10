import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function About(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='https://www.pngkey.com/png/full/263-2630275_yamaha-r15-version-2-0.png'/>

                </div>
                <div className='col'>
                    <div className="modal show" style={{ display:'block',position:'initial',marginTop:'130px'}}>
                              <Modal.Dialog>
        <Modal.Header style={{backgroundColor:'#d2f6fa'}}>
          <Modal.Title>r15v4</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Born of Yamaha’s racing DNA that shaped legends like M1, The R1 and the R-series, the all-new R15 powered with Dual Channel ABS is max powerhouse of 18.6 PS</p> 
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:'#d2f6fa'}}>
          <Button variant="secondary">open</Button>
          <Button variant="primary">buy now</Button>
        </Modal.Footer>
      </Modal.Dialog>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default About