import './App.css';
import myIamgeinSrc from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title-red">Your name here</h1>
        <br />
        <img src={myIamgeinSrc} alt='lion' />
        <br />
        <img src="/imageInPublic.jpg" alt='fox' />
      </div>
      <br />
      <video src="myVideo.mp4" width="320" height="240" type="video/mp4" controls />
    </div>
  );
}
export default App;
