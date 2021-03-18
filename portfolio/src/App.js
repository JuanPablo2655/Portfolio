import './App.css';

function App() {
  let helloList = ["Hello", "Hola"]
  let birthday = new Date(2002, 4, 10) //May 10th, 2002
  let yearsOld = (Date.now() - birthday) / 31557600000
  return (
    <div>
      <h1>{helloList[Math.floor(Math.random() * helloList.length)]}, I'm Isidro.</h1>
      <p>I'm just an {yearsOld.toString().substring(0, 5)} year old programming.</p>
    </div>
  );
}

export default App;
