import './App.css'
import Listing from './components/Listing'
import * as data from './data/etsy.json'

function App() {
  const items: Item[] = data.default.filter(el => el.state === 'active');

  return (
    <>
      <div className='item-list'>
        {items.map(el => 
          <Listing key={el.listing_id} item={el} />
        )}
      </div>
    </>
  )
}

type Item = {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}  

export default App
