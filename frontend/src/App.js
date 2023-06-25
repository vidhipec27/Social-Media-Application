import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "components/homepage";
import { Login } from "components/login";
import ProfilePage from "components/ProfilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;




/*function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [registeredName, setRegisteredName] = useState('');
  const [registeredImage, setRegisteredImage] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleRegisterSuccess = (name, image) => {
    setRegisteredName(name);
    setRegisteredImage(image);
    setCurrentForm("homepage");
  };

  const renderForm = () => {
    if (currentForm === "login") {
      return <Login onFormSwitch={toggleForm} />;
    } else if (currentForm === "register") {
      return <Register onFormSwitch={toggleForm} onRegisterSuccess={handleRegisterSuccess} />;
    } else if (currentForm === "homepage") {
      return <Homepage name={registeredName} image={registeredImage} />;
    }
  };

  return (
    <div className="App">
      {renderForm()}
    </div>
  );
}*/

