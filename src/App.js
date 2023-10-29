// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Error from "./components/error";
import Home from "./components/home";
import Classe from "./components/classe";
import Chat from "./components/chat/Home";
import Room from "./components/chat/Room";
import SignUp from "./components/signup";
import SignIn from "./components/Login";
import { useAuthContext } from "./components/hooks/useAuthContext";
import Courses from "./components/courses/Courses";
import Exams from "./components/courses/Exams";
// import { useEffect } from "react";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <SignIn /> : <Navigate to="/" />}
        />
        <Route path="/classe" element={<Classe />}></Route>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/exams" element={<Exams />} />
        <Route exact path="/courses" element={<Courses />} />
        {/* <Route path="/room/:room_id/:room_name" element={<Room />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
