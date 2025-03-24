import { Box, Grid, Typography } from "@mui/material";
import sedan from "../../assets/sedan.png";
import suv from "../../assets/suv.png";
import convertible from "../../assets/convertible.png";
import truck from "../../assets/truck.png";
import minivan from "../../assets/minivan.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const Services = useMemo(
    () => [
      { img: sedan, title: "Sedan" },
      { img: suv, title: "SUV" },
      { img: convertible, title: "Convertible", active: true },
      { img: truck, title: "Truck" },
      { img: minivan, title: "Minivan" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        Choose Your Rental Car Type
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
