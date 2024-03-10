// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';

import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';

//import TravelsPage from './pages/TravelsPage';
import TravelsPage from './pages/TravelsPage.js';

// If your schema requires SHORT data input, then use the TABLE design.
import EditTravelPageTable from './pages/EditTravelPageTable.js';
import AddTravelPageTable from './pages/AddTravelPageTable.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [travel, setTravelToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
          <h1>Veronika<img src="android-chrome-192x192.png" alt="Veronika Kiss" />Kiss </h1>
            <p>Learn about me, my programming projects, and the principles of web development.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages. */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/TopicsPage" element={<TopicsPage />} />
                    <Route path="/GalleryPage" element={<GalleryPage />} />
                    <Route path="/TravelsPage" element={<TravelsPage setTravel={setTravelToEdit}/>} />
                    
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddTravelPageTable />} /> 
                    <Route path="/update" element={<EditTravelPageTable travelToEdit={travel} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p><p>&copy; 2023 Veronika Kiss</p></p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;