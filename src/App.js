import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import './App.css';
import Alert from './components/layouts/Alert'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import User from './pages/User';

export default function App() {
    return (
        <GithubProvider>
            <AlertProvider>
            <Router>
        <div className='flex flex-col justify-between h-screen'>
            <Navbar/>

            <main className='container mx-auto px-3 pb-12'>
                <Alert/>
                <Routes>
                    <Route path='/github-find/' element={<Home/>}/>
                    <Route path='/github-find/about' element={<About/>}/>
                    <Route path='/github-find/user/:login' element={<User/>}/>
                    <Route path='/github-find/notfound' element={<NotFound/>}/>
                    <Route path='/github-find/*' element={<NotFound/>}/>
                </Routes>
            </main>

            <Footer/>
        </div>
        </Router>
            </AlertProvider>
        </GithubProvider>
    )
  }
