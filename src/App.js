import './App.css';
import {Route, Routes} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BookPage from "./components/BookPage";
import DetailPage from "./components/DetailPage";
import DetailBooks from "./components/DetailBooks";
import Genres from "./components/Genres";
import NewBooks from "./components/NewBooks";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(99)
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path={"/genres"} element={<Genres/>}/>
            <Route path={"/NewBooks"} element={<NewBooks/>} />
            <Route path={"/books"} element={<Books/>}/>
            <Route path={"/aboutUs"} element={<AboutUs/>}/>
            <Route path="/BookPage" element={<BookPage/>} />
            <Route path="/DetailPage/:id" element={<DetailPage count={count} setCount={setCount} price={price} setPrice={setPrice}/>} />
            <Route path={"/DetailBooks/:id"} element={<DetailBooks count={count} setCount={setCount} price={price} setPrice={setPrice}/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
