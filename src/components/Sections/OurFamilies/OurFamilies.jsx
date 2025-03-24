import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/eventteam.png' //to be changed

export default function OurFamilies() {
    return (
        <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems='center' spacing={{xs:2,md:10}}>

                    <Grid item xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            RELIABLE CAR RENTAL SERVICES
                        </Typography>
                        <Typography variant="h2">
                            Premium Car Rentals
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            Experience hassle-free car rentals with our extensive fleet of vehicles. From economy cars to luxury vehicles, we provide quality service and competitive rates for all your transportation needs.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            width={1}
                            height='auto'
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}