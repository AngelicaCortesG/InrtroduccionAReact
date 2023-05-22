import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from './Header.jsx';
import Card from './Card.jsx';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header title='Galeria de imágenes con React'></Header>
      <Card img="https://placedog.net/500" titulo="Perrito Hermoso" description="Perrito adorable de casa"></Card>
      <Card img="https://placedog.net/502" titulo="Perrito Precioso" description="Perrito al que le encanta salira pasear"></Card>
      <Card img="https://placedog.net/503" titulo="Perrito Tierno" description="A este perrito le encanta regalonear"></Card>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
