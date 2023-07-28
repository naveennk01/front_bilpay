import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import IconComp from "./IconComp";
import { Link } from "react-router-dom";

const Bills = () => {
  return ( 
    <>
      <Navbar />
      <IconComp
                heading='Pay Here with Zpay .'
                img1={"https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"}
                img2={'https://assetscdn1.paytm.com/images/catalog/view_item/733300/1626778824903.png'}
                img3={"https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png"}
                img4={"https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png"}
                img5={"https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png"}
                img6={"https://assetscdn1.paytm.com/images/catalog/view_item/733304/1627454209116.png"}
                img7={"https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png"}

                p1='Recharge Prepaid Mobile'
                p2='Pay Rent Payment'
                p3='Pay Electricity Bill'
                p4='Recharge DTH Connection'
                p5='Book Gas Cylinder'
                p6='Pay Credit Bill Card'
                p7='All Payment Services'
                bgColor='#00baf2'
            />
            <IconComp
                heading='Book & Buy on Z pay..'
                img1={"https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png"}
                img2={'https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png'}
                img3={"https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png"}
                img4={"https://assetscdn1.paytm.com/images/catalog/view_item/729997/1626260495975.png"}
                img5={"https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png"}
                img6={"https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png"}
                img7={"https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png"}

                p1='Movie Tickets'
                p2='Flight Tickets'
                p3='Bus Tickets'
                p4='Train Tickets'
                p5='Buy Insurance'
                p6='International Flights'
                p7='Invest In Stocks'
                bgColor='#0f4a8a'
            />
      <Footer />
    </>
  );
};

export default Bills;
