import logo from './logo.svg';

export const HelloReact = () => (
  <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
    
    {/* Task 1 */}
    <h1>Hello <span style={{ color: 'blue' }}>React</span></h1>
    {/* Task 4 */}
    <h2 style={{ color: 'blue' }}>This is JSX</h2>
    {/* Task 2 */}
    <img src={logo} alt="React Logo" style={{ width: '200px' }} />
    <hr style={{ borderTop: '2px solid #00d8ff', width: '250px' }} />
    <h3 style={{ fontStyle: 'italic', color: '#333' }}>This is the React logo!</h3>
    <p style={{ color: 'gray', fontSize: '12px' }}>(I don't know why it is here either)</p>
    <p>The library for web and native user interfaces</p>
  </div>
);

// Task 3
export const Navbar = () => (
  <nav style={{ backgroundColor: '#444', padding: '10px', display: 'flex', gap: '15px', alignItems: 'center' }}>
    <button style={{ backgroundColor: '#3CB371', color: 'white', padding: '10px 20px', border: 'none' }}>Home</button>
    <span style={{ color: 'white', cursor: 'pointer' }}>Search</span>
    <span style={{ color: 'white', cursor: 'pointer' }}>Contact</span>
    <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none' }}>Login</button>
  </nav>
);

// Task 5
export const CourseList = () => (
  <div>
    <h2>Course names</h2>
    <ul>
      <li>React</li>
      <li>ReactNative</li>
      <li>NodeJs</li>
    </ul>
  </div>
);