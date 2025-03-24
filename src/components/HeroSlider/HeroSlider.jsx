import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/home.png';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
    return (
        <Swiper>
            <SwiperSlide>
                <Stack direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center" pt={0}>
                    <Box>
                        <Typography variant='h3' component='h1'>Skip the hassle! Rent Your Car Online</Typography>
                        <Typography variant='h1' component='h1' mb={1}>Car <span style={{ color: '#2AA7FF' }}>Rental</span></Typography>
                        <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                            Book your ride effortlessly with our platform and enjoy a smooth car rental experience.
                        </Typography>
                        <Link to='/search'>
                            <Button variant='contained' size="large" disableElevation>
                                Find Cars
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        component={'img'}
                        src={img}
                        width={{ xs: 1, md: "45%" }}
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    )
}