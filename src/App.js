import logo from './logo.svg';
import './App.css';
import Form from './components';
import Life from './components/life';
import Navbar from './homework/components/navbar';
import Body from './homework/components/body';
import Wrap from './homework/components/wrapper1';
import Head from './homework/components/head';
import Card from './homework/components/card';
import End from './homework/components/end';
import Footer from './homework/components/footer';
import Shop from './homework/components/shop';
import Video from './homework/components/video';
import Main from './homework/components/page';
import Button from './homework/components/button';
function App() {
  return (
    <div onSuspend={<h1>loadni</h1>}>
        {/* <Form/> */}
        {/* <Life/> */}
        <Main />
        {/* <Button/> */}
        
    </div>
  );
}

export default App;
