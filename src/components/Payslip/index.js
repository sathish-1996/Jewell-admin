import React, { useRef } from 'react'

import { jsPDF } from 'jspdf'
// import {html2canvas} from 'html2canvas'
import html2canvas from "html2canvas";
// import { PAY_SLIP_DETAILS } from '../../../services/ApiService';
import toast from 'react-hot-toast';
import image from "../images/popular.jpg"
import "./index.css"
function Payslip(onclick) {
    const [employeePaySlipDetails, setEmployeePaySlipDetails] = React.useState([]);
    const domEl = useRef(null);
    const downloadImage = async () => {
        // const dataUrl = await htmlToImage.toPng(domEl.current);

        // download image
        // const link = document.createElement('a');
        // link.download = 'html-to-img.png';
        // link.href = dataUrl;
        // // link.click();
        html2canvas(domEl.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, "JPEG", 0, 0, width, height);
            pdf.save("download.pdf");
        });

    };

    // const _getAllPaySlip = async () => {

    //     let response;
    //     try {
    //       response = await PAY_SLIP_DETAILS();

    //       if (response) {

    //         setEmployeePaySlipDetails(response);
    //       }
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    //   };

    //   React.useEffect(() => {
    //     _getAllPaySlip();
    //   }, []);

    return (
        <div className='col-8' style={{ display: 'initial' }}>
            <div>
                {/* <button onClick={() => downloadImage()}>Download</button> */}
                <div id="domEl" ref={domEl}>
                    <> <div className='lastNews'>
                        <div className="row">

                            <div className='col-lg-3'>
                                <img src={image} alt='' />
                            </div>
                            <div className='col-lg-9'>
                                {/* <h6 style={{ fontWeight: 'bold' }}>{x.companyName}</h6>
                                    <p style={{ fontWeight: 'bold' }}>{x.address}</p> */}
                            </div>
                        </div>
                        <div className='row' >
                            <div className='col-lg-12'>
                                <h3 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>
                                    TAX INVOICE
                                </h3 >
                            </div>
                        </div>
                        <hr style={{ border: '1px solid black' }} />
                        <div className='row'>
                            <div className='col-lg-5'>
                                <h3 style={{ fontWeight: 'bold' }}>
                                    POPULAR MOTORCYCLE COMPANY
                                </h3 >
                                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    <div >
                                        Uid : 386 (C2C)
                                    </div>
                                    <div >
                                        BH 394163(HONDA)
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-8'>

                            </div>
                        </div>
                        <hr style={{ border: '1px solid black' }} />
                        <div className='row'>



                            <div className='col-lg-3'>

                            </div>

                            <div className='col-lg-7' style={{ border: "1px solid" }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "40px" }}>
                                    <h3 style={{ fontWeight: 'bold' }}>
                                        POPULAR MOTORCYCLE COMPANY
                                    </h3 >
                                    <div>
                                        TAX INVOICE (HONDA)
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "left" }} className='col-lg-9'>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", columnGap: "40px" }}>
                                        <div style={{ marginLeft: "120px" }}>
                                            MANALI EXPRESS WAY IN INJAMBAKKAM
                                        </div>
                                        <div style={{ fontWeight: "bold" }}>
                                            02A
                                        </div>
                                    </div>

                                    <div style={{ marginRight: "120px" }}>
                                        MADHAVARAM  - 600103
                                    </div>
                                    <div style={{ marginRight: "170px" }}>
                                        Phone  - 62069444
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr style={{ border: '1px solid black' }} />
                        <div style={{ margin: "20px" }}>
                            <table style={{ width: "100%" }}>
                                <tr>
                                    <th>S.No</th>
                                    <th>Parts</th>
                                    <th>Amount</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>AirFliter </td>
                                    <td>210</td>
                                    <td>1</td>
                                    <td>210</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Carpetar Kit </td>
                                    <td>686</td>
                                    <td>1</td>
                                    <td>686</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Clucth Roller  </td>
                                    <td>398</td>
                                    <td>1</td>
                                    <td>398</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Clutch Shoe </td>
                                    <td>1880</td>
                                    <td>1</td>
                                    <td>1880</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Camsoft </td>
                                    <td>1356</td>
                                    <td>1</td>
                                    <td>1356</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Valeve </td>
                                    <td>686</td>
                                    <td>1</td>
                                    <td>686</td>
                                </tr>

                                <tr>
                                    <td>7</td>
                                    <td>Bore </td>
                                    <td>3850</td>
                                    <td>1</td>
                                    <td>3850</td>
                                </tr>

                                <tr>
                                    <td>8</td>
                                    <td>Rakker </td>
                                    <td>730</td>
                                    <td>1</td>
                                    <td>730</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Timing Chain </td>
                                    <td>405</td>
                                    <td>1</td>
                                    <td>405</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Timing Pad </td>
                                    <td>280</td>
                                    <td>1</td>
                                    <td>280</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Timing Tensunar </td>
                                    <td>525</td>
                                    <td>1</td>
                                    <td>525</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Head Paking </td>
                                    <td>180+120</td>
                                    <td>1+1</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Head Bolt Net and Coin Waser</td>
                                    <td>56+40+120</td>
                                    <td>1+1+1</td>
                                    <td>216</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Back Break Shoe</td>
                                    <td>286</td>
                                    <td>1</td>
                                    <td>286</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style={{ fontWeight: "bold" }} >Total</td>
                                    <td style={{ fontWeight: "bold" }}>11,808</td>
                                </tr>
                            </table>
                        </div>
                        <hr style={{ border: '1px solid black' }} />
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    <div className='col-lg-5'>
                                        {/* <p style={{ fontWeight: 'bold' }}>Total Deductions</p> */}
                                    </div>
                                    {/* <div className='col-lg-1'><p style={{ fontWeight: 'bold' }}>:</p></div> */}
                                    {/* <div className='col-lg-5'><p style={{ fontWeight: 'bold' }}>{x.totalDection}</p></div> */}
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div >
                                    <p style={{ fontWeight: 'bold' }}>Amount in Words  :  <span style={{ fontWeight: 'normal', marginLeft: "20px" }}>    Eleven Thousand Eight Hundreden Eights Rupees</span></p>
                                </div>
                                {/* <div className='col-lg-5'><p style={{ fontWeight: 'bold' }}>: Eleven Thousand Eight Hundreden Eights Rupees</p></div> */}
                            </div>

                        </div>
                        <hr style={{ border: '1px solid black' }} />


                    </div>
                    </>

                </div>
            </div>
            <button onClick={downloadImage}>submit</button>
        </div>
    )
}

export default Payslip