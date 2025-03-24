import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/carfaq.png'
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {

    const faqs = [
        {
            question: 'How do I rent a car?',
            answer: 'You can easily rent a car through our website by selecting your desired dates, choosing a vehicle, and completing the booking process with your details and payment.'
        },
        {
            question: 'What documents do I need for car rental?',
            answer: 'You will need a valid driver\'s license, proof of identity, and a credit card for the security deposit. International customers may need additional documentation.'
        },
        {
            question: 'What is included in the rental price?',
            answer: 'Our rental prices typically include basic insurance, maintenance, and 24/7 roadside assistance. Fuel and additional insurance options are available separately.'
        },
        {
            question: 'Can I modify or cancel my reservation?',
            answer: 'Yes, you can modify or cancel your reservation through our website or by contacting our customer service. Please check our cancellation policy for applicable terms.'
        }
    ]

    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems='center' spacing={5}>

                    <Grid item xs={12} md={6}>
                        <Box
                            src={faqBanner}
                            component='img'
                            width={1}
                            height='auto'
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}