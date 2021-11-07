import {useState} from 'react';
import Values from 'values.js';
import SyngleColor from './components/SyngleColor';
import './App.css';

function App() {

  const [color, setColor] = useState('');
  const [erroe, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = e => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setError(true);
    }
  }

  return (
    <section className="App">
      <div className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} placeholder='#f15025'
            onChange={e => setColor(e.target.value)}
            className={erroe ? 'error' : ''}
          />
          <input type='submit' value='Generate' />
        </form>
      </div>
      <div className='colors'>{
        list.map((color, index) => {
          return <SyngleColor key={index} {...color} index={index}
            hexColor={color.hex} />
        })
      }</div>
    </section>
  );
}

export default App;
