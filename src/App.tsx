import { useState } from "react";
import { SnackbarProvider } from "notistack";
import { Tabs, Tab, Box } from "@mui/material";
import { SignUpForm, SignUpFormExtended } from "./containers/forms";
import "./App.css";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };
  return (
    <>
      <SnackbarProvider autoHideDuration={3000}>
        <Box sx={{ margin: "20px" }}>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="Sign Up" />
            <Tab label="Extended Sign Up" />
          </Tabs>
        </Box>
        {tabIndex === 0 && <SignUpForm />}
        {tabIndex === 1 && <SignUpFormExtended />}
      </SnackbarProvider>
    </>
  );
}

export default App;
