import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../../assets/logo.png';
import tick from '../../../assets/tick-blue.png';

export default function PatientCaring() {
    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container spacing={6} alignItems='center'>
                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            width={1}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} color="primary.main">
                            CONNECTING YOU TO THE BEST RENTALS!
                        </Typography>
                        <Typography variant="h2" mb={1}>
                            Car <Box component='span' color='primary.main'>Rental Booking</Box>
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            Our goal is to deliver an exceptional car rental experience by offering reliable, convenient, and professional service. Let us help you find the perfect ride for your journey.
                        </Typography>
                        <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stay Updated on Rental Offers'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='View Car Details Online'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Manage Your Reservations'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}