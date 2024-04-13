import { Route, Routes as Router,Navigate } from "react-router-dom";
import {LoginPage,RegisterPage,ForgetPasswordPage} from "./pages/auth"

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Navigate to="/auth/login"/>}/>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forget-password" element={<ForgetPasswordPage />} />
      </Router>
    </div>
  );
}

export default App;
