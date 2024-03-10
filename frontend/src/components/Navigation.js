import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="../TopicsPage">Topics</Link>
        <Link to="TravelsPage">Travel Log</Link>
        <Link to="GalleryPage">Gallery</Link>
    </nav>
  );
}

export default Navigation;
