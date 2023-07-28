import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
    Grid
} from "@mui/material";
import headerImg from '../assets/ab.png'
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?cs=srgb&dl=pexels-pixabay-259751.jpg&fm=jpg'
        },
        {
            alt: 'image2',
            url: 'https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?cs=srgb&dl=pexels-andrea-davis-5411784.jpg&fm=jpg'
        },
        {
            alt: "image3",
            url: 'https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?cs=srgb&dl=pexels-daniel-frank-356809.jpg&fm=jpg'
        },
        {
            alt: "image4",
            url: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?cs=srgb&dl=pexels-get-lost-mike-6267516.jpg&fm=jpg'
        },
        {
            alt: "image5",
            url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg'
        },
    ];
  
    // const renderSlides = imageData.map((image) => (
    // <div key={image.alt}>
    //     <img src={image.url} alt={image.alt} />
    // </div>
    // ));


    // const handleChange = (index) => {
    //     setCurrentIndex(index);
    // }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Enabling Financial Empowerment for All'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Transforming Lives, One Payment at a Time
                </Typography>
                <Paragraph text={
                    'At Zpay, our aim is to empower individuals and businesses\
                     to achieve financial freedom. We strive to provide innovative solutions that simplify financial management, \
                     enhance convenience, and promote economic well-being.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}

            style={{display: "flex", alignItems: "center", justifyContent: "center"}}

            >
                <img src={headerImg} alt="" 
                style={{ 
                    width: "50%",
                }}
                />
            </Grid>
            {/* <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box> */}
        </Stack>
    )
}

export default Gallery