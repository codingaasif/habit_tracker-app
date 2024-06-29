import { Box, Typography, styled } from "@mui/material";

export const BoxContainer = styled(Box)(({ theme }) => ({
  padding: "15px 0px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  gap: "20px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    width: "100%",
    gap: "0px",
    justifyContent: "center",
    padding: "0px",
  },
}));

export const InnerContainer = styled(Box)({
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  padding: "10px 20px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});

export const LeftContainer = styled(Box)(({ theme }) => ({
  width: "60%",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  padding: "10px 20px",
  borderRadius: "10px",
  height: "80vh",
  background: "#dedaff",
  [theme.breakpoints.down("lg")]: {
    width: "88%",
  },
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  gap: "20px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const WeakdayBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "11px",
  width: "100%",
  overflow: "auto",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-start",
  },
}));

export const WeakDay = styled(Typography)(({ theme }) => ({
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: "10px 20px",
  borderRadius: "10px",
  border: "1px solid green",
  cursor: "pointer",
  background: "#fff",
  width: "90px",
  fontSize: "18px",
  textAlign: "center",
  ":hover": {
    color: "#B22222",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "5px",
    fontSize: "16px",
    textAlign: "center",
  },
}));

export const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  marginTop: "20px",
});

export const InputBox = styled(Box)(({ theme }) => ({
  width: "60%",
  textAlign: "center",
  marginTop: "50px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#fff",
  [theme.breakpoints.down("lg")]: {},
}));
