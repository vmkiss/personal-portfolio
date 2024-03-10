import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'images/chess-variation-draw-board-code.png',
      thumbnail: 'images/chess-variation-draw-board-code.png',
      description: `An excerpt of code from a variation on chess I created for my first portfolio project. The draw_board function renders the board on the screen.`,
      originalHeight: '450px',
    },
    {
        original: 'images/chess-variation-start-position.png',
        thumbnail: 'images/chess-variation-start-position.png',
        description: `A screenshot of the graphical user interface I created for my chess game using Pygame. This picture shows all the board and pieces in their starting positions.`,
        originalHeight: '450px',
    },
    {
        original: 'images/chess-variation-check-knight-code.png',
        thumbnail: 'images/chess-variation-check-knight-code.png',
        description: `Another code excerpt from my chess variation project. The check_knight function is called when the user selects a knight and a destination square. It determines whether the destination square is within the knight's valid range of moves.`,
        originalHeight: '450px',
    },
    {
        original: 'images/chess-variation-select-black-piece.png',
        thumbnail: 'images/chess-variation-select-black-piece.png',
        description: `Another screenshot of my chess game's graphical user interface. When a user selects a piece, that piece is then highlighted with a border (red for white pieces and blue for black pieces) and a message prompting the user to select their destination appears.`,
        originalHeight: '450px',
    },
    {
        original: 'images/veronika-kiss-ninh-binh-portrait.jpg',
        thumbnail: 'images/veronika-kiss-ninh-binh-portrait.jpg',
        description: `A portrait of me after having conquered the many stairs of Lying Dragon Mountain in Ninh Binh, Vietnam.`,
        originalHeight: '450px',
    },
    {
        original: 'images/sapa-rice-terraces.jpg',
        thumbnail: 'images/sapa-rice-terraces.jpg',
        description: `A view of the beautiful rice terraces in Sapa, Vietnam I took while on a trekking tour. The houses and farmland belong to members of the Black Hmong tribe, who are indigenous to northern Vietnam.`,
        originalHeight: '450px',
    },
    {
        original: 'images/veronika-kiss-sapa-mountain-portrait.jpg',
        thumbnail: 'images/veronika-kiss-sapa-mountain-portrait.jpg',
        description: `A heavy fog rolled in as I celebrated reaching the top of this mountain in Sapa. Also, as it turns out, the rain boots my Hmong guide loaned me made pretty good hiking shoes in muddy terrain!`,
        originalHeight: '450px',
    },
    {
        original: 'images/phra-mahathat-naphaphon-phumisiri-temple.jpg',
        thumbnail: 'images/phra-mahathat-naphaphon-phumisiri-temple.jpg',
        description: `Phra Mahathat Napaphon Phumisiri temple was built to honor the Queen of Thailand and is one of the many incredible Buddhist temples that I saw in Chiang Mai, Thailand.`,
        originalHeight: '450px',
    },
    {
        original: 'images/thai-cooking-class-dishes.jpg',
        thumbnail: 'images/thai-cooking-class-dishes.jpg',
        description: `I combined my love of cooking and traveling by learning how to make tom kha soup and pad thai in Chiang Mai.`,
        originalHeight: '450px',
    },
    {
        original: 'images/veronika-kiss-loire-valley-castle-portrait.jpg',
        thumbnail: 'images/veronika-kiss-loire-valley-castle-portrait.jpg',
        description: `During my first degree, I studied abroad in Nantes, France. I greatly improved my French skills and visited many beautiful castles in the Loire Valley, including the one pictured above.`,
        originalHeight: '450px',
    }
]
    

function GalleryPage() {
    return (
        <>
         <h2>Gallery</h2>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;
           