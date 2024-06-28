import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

import {
  BoxContainer,
  ButtonContainer,
  InnerContainer,
  InputBox,
  LeftContainer,
  RightContainer,
  WeakDay,
  WeakdayBox,
} from "./HabitStyle";
import { ToastContainer, toast } from "react-toastify";
import { TimePicker } from "@mui/x-date-pickers";

const weak = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Habits = () => {
  const [change, setChange] = useState("");
  const [time, setTime] = useState(dayjs().format("HH:mm"));
  const [weekday, setWeekday] = useState("");
  const [addHabits, setAddHabits] = useState([]);
  const [selectedHours, selectedMinutes] = time.split(":").map(Number);

  const handleOnChange = (e) => {
    setChange(e.target.value);
  };

  const handleAddHabits = () => {
    if (change.trim() !== "" && time !== "" && weekday !== "") {
      // Parse the current time and selected time
      const currentTime = dayjs(time, "HH:mm");
      const selectedTime = dayjs(time, "HH:mm");

      if (selectedTime.isBefore(currentTime, "minute")) {
        toast.error("Please select a current or future time.");
        return;
      }
      setAddHabits((prevHabits) => {
        toast.success("Your habit added successfully");
        const newHabits = [
          ...prevHabits,
          {
            habit: change,
            time: selectedTime.format("HH:mm"),
            weekday,
          },
        ];
        return newHabits;
      });
    }
  };

  const handleCancelHabits = () => {
    setChange("");
    setTime(dayjs());
    setWeekday("");
    setAddHabits([]);
  };

  const handleCancelIcon = (id) => {
    const updateHabits = addHabits.filter((_, index) => index !== id);
    setAddHabits(updateHabits);
  };

  return (
    <BoxContainer>
      <ToastContainer style={{ textAlign: "center" }} />

      <LeftContainer>
        <WeakdayBox>
          {weak.map((day, index) => (
            <WeakDay
              key={index}
              variant="h6"
              component="h2"
              onClick={() => setWeekday(day)}
              sx={{
                cursor: "pointer",
                fontWeight: weekday === day ? "bold" : "normal",
              }}
            >
              {day}
            </WeakDay>
          ))}
        </WeakdayBox>
        <Box sx={{ textAlign: "center", marginTop: "25px" }}>
          <img
            height="150px"
            width="80%"
            style={{ borderRadius: "12px" }}
            src="public/Coding-Ninjas.jpg"
            alt="Habit"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <InputBox>
            <TextField
              sx={{
                width: {
                  xs: "100%", // 0px - 600px
                  sm: "300px", // 600px - 960px
                  md: "400px", // 960px - 1280px
                  lg: "500px", // 1280px - 1920px
                },
              }}
              id="outlined-basic"
              label="Add Habits"
              variant="outlined"
              value={change}
              onChange={handleOnChange}
            />
            <Box sx={{ marginTop: "20px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Time"
                  value={dayjs().hour(selectedHours).minute(selectedMinutes)}
                  onChange={(newTime) => {
                    setTime(newTime.format("HH:mm"));
                  }}
                />
              </LocalizationProvider>
            </Box>
            <ButtonContainer>
              <Button variant="contained" onClick={handleAddHabits}>
                Add
              </Button>
              <Button variant="contained" onClick={handleCancelHabits}>
                Cancel
              </Button>
            </ButtonContainer>
          </InputBox>
        </Box>
      </LeftContainer>

      <RightContainer>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "25px", sm: "30px" },
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Your Habits
          </Typography>

          <Box
            sx={{
              alignItems: { xs: "center", sm: "center" },
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: { xs: "100%", sm: "100%" },
            }}
          >
            {addHabits.map((habits, index) => {
              return (
                <InnerContainer key={index}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: { xs: "12px", sm: "20px" },
                    }}
                  >
                    {`${habits.habit} - ${habits.time} on ${habits.weekday}`}
                  </Typography>
                  <CancelIcon
                    onClick={() => handleCancelIcon(index)}
                    sx={{ cursor: "pointer", color: "red" }}
                  />
                </InnerContainer>
              );
            })}
          </Box>
        </Box>
      </RightContainer>
    </BoxContainer>
  );
};

Habits.propTypes = {
  habit: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  weekday: PropTypes.string.isRequired,
};

export default Habits;
