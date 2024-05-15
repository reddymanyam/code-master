import React from 'react';

// Mock data for the example
const resources = [
  { id: 1, title: 'Introduction to React', description: 'Learn the basics of React, including components, state, and props.', link: 'https://reactjs.org/' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript and learn advanced concepts.', link: 'https://javascript.info/' },
  { id: 3, title: 'CSS for Beginners', description: 'Understand the fundamentals of CSS to style your web pages.', link: 'https://css-tricks.com/' }
];

const Explore = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Explore Coding Resources</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {resources.map((resource) => (
          <li key={resource.id} style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
              Learn More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
