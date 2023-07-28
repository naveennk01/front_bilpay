import React from 'react'
import './IconComp.css';
import { Link } from 'react-router-dom';
const IconComp = (props) => {
    return (
        <div className="iconComp" style={{backgroundColor: `${props.bgColor}`}}>
           <Link to={'/bill'}> <h1>{props.heading}</h1></Link>
            <div className='icon-slide'>
                <div>
                    <div><img src={props.img1} alt="" /></div>
                    <p>{props.p1}&nbsp;&gt;</p>
                </div>
                <div>
                    <div><img src={props.img2} alt="" /></div>
                    <p>{props.p2}&nbsp;&gt;</p></div>
                <div>
                    <div><img src={props.img3} alt="" /> </div><p>{props.p3}&nbsp;&gt;</p></div>
                <div>
                    <div><img src={props.img4} alt="" /> </div><p>{props.p4}&nbsp;&gt;</p></div>
                <div>
                    <div><img src={props.img5} alt="" /> </div><p>{props.p5}&nbsp;&gt;</p></div>
                <div>
                    <div><img src={props.img6} alt="" /> </div><p>{props.p6}&nbsp;&gt;</p></div>
                <div>
                    <div><img src={props.img7} alt="" /> </div><p>{props.p7}&nbsp;&gt;</p></div>
            </div>
        </div>
    )
}

export default IconComp