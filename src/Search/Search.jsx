import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard/CarCard";
import icon from "../assets/tick.png";
import cta from "../assets/caroffer2.png";
import SearchCar from "../components/SearchCar/SearchCar";
import BookingModal from "../components/BookingModal/BookingModal";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";
import NavBar from "../components/NavBar/NavBar";

export default function Search() {
  const [seachParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));
  const availableSlots = {
    morning: ["9:00 AM", "10:00 AM", "11:00 AM"],
    afternoon: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    evening: ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //API to fetch car based on state and city selection 
  useEffect(() => {
    const getcar = async () => {
      setCars([]);
      setIsLoading(true);
      try {
        const data = await axios.get(
          `https://cardata-lx9k.onrender.com/cars?state=${state}&city=${city}`
        );
        setCars(data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    if (state && city) {
      getcar();
    }
  }, [state, city]);

  useEffect(() => {
    setState(seachParams.get("state"));
    setCity(seachParams.get("city"));
  }, [seachParams]);

  // show booking modal
  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
          pl: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translatey(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <SearchCar />
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          {cars.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h1"
                fontSize={24}
                lineHeight={1.1}
                mb={2}
                fontWeight={500}
              >
                {`${cars.length} cars available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src={icon} height={24} width={24} alt="icon" />
                <Typography color="#787887" lineHeight={1.4}>
                  Book cars with instant confirmation & verified vehicle details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack alignItems="flex-start" direction={{ md: "row" }}>
            <Stack
              mb={{ xs: 4, md: 0 }}
              spacing={3}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {cars.length > 0 &&
                cars.map((car) => (
                  <CarCard
                    key={car["carName"]}
                    details={car}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                ))}

              {isLoading && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Loading...
                </Typography>
              )}

              {!state && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  Please select a state and city
                </Typography>
              )}
            </Stack>

            <img src={cta} width={360} height="auto" alt="banner" />
          </Stack>
        </Container>

        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />

        <AutohideSnackbar
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />
      </Box>
    </>
  );
}
