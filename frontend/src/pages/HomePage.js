import React from 'react';
function HomePage() {
    return (
        <>
            <h2> Veronika Kiss</h2>
                <article>
                    <p>I am a post-bacc Computer Science student at Oregon State University. I plan on graduating in Fall 2025 and am currently looking for software internships for Summer 2024. I'm particularly interested in web development and mobile development, but I'm open to exploring other areas of software development as well. I'd like to work at a socially responsible company that cares about making a positive impact on the world and has a strong mentorship program for interns and junior employees.</p>
                </article>
                <p>Below is an overview of the technologies that were used to create this website.</p>
                <ol>
                    <li><strong>HTML (HyperText Markup Language)</strong></li>
                    <p>HTML, is a markup language which uses elements enclosed in tags to define a web page’s structure. Web browsers interpret HTML files and use them to render text, images, multimedia, tables, buttons, forms, and other elements.</p>
                    <li><strong>CSS (Cascading Style Sheets)</strong></li>
                    <p>CSS builds upon the structure defined by HTML to enhance a website’s visual design. CSS can be used to change a website’s font and color scheme, adjust the dimensions, padding, and margin of various elements, and control the layout of elements by applying block, flex, and grid properties.</p>
                    <li><strong>JavaScript</strong></li>
                    <p>JavaScript is a high-level, interpreted programming language used to create interactive website content. JavaScript can be used to add user interactions and form validation, and manipulate content using the DOM (Document Object Model). JavaScript is usually executed by web browsers, but it can also be used for server-side development.</p>
                    <li><strong>MongoDB</strong></li>
                    <p>MongoDB is a non-relational database management system that stores data in BSON (Binary JSON), a document type similar to JSON. It can handle large volumes of data and is ideal for web applications that have dynamic and evolving schemas.</p>
                    <li><strong>Express</strong></li>
                    <p>Express is a framework that provides APIs allowing developers to get, post, and delete data. Express can also be used to define ports and routes for data and pull data from a public folder’s static files to dynamically build a customized response.</p>
                    <li><strong>React</strong></li>
                    <p>React is a JavaScript library which is usually used to builder suer interfaces for single-page web applications with dynamically-updated content. React can be used to make UI components that are reusable, which aids in the management and maintenance of sophisticated user interfaces. React components are updated and rendered using a virtual DOM model.</p>
                    <li><strong>Node</strong></li>
                    <p>Node.js is an open source, cross-platform, JavaScript-based runtime environment that facilitates the creation of networking and server-side web applications. Its capacity to handle asynchronous operations makes it ideally suited for applications that operate in real-time. A variety of Node.js packages and libraries can be accessed through npm (Node Package Manager).</p>
                </ol>

        </>
    );
}

export default HomePage;
            