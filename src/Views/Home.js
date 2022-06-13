import axios from 'axios'
import { useState, useContext } from 'react'
import { DataContext} from '../DataProvider'


let Home = () => {


    let getHeroData = async () => {
        let data1 = await axios.get("https://flask-heroes.herokuapp.com/api/heroes")
        return data1.status === 200 ? data1 : null
    }
    let  sample= async (array, size = 5) => {
        array = await loadHeroData()
        const { floor, random } = Math;
        let sampleSet = new Set();
        for (let i = 0; i < size; i++) {
          let index_;
          do { index_ = floor(random() * array.length); }
          while (sampleSet.has(index_));
          sampleSet.add(index_);
        } 
        console.log(sample(heroes, 4));
        return [...sampleSet].map(i => array[i]);

       
      }
      
      


    let loadHeroData = async () => {
        let data = await getHeroData();
        console.log(data);
        setHeroes(data.data)
        console.log(heroes)

    }

    const [heroes, setHeroes] = useState(() => { loadHeroData(); });
    const {cart,setCart} = useContext(DataContext)


    const addHero = hero => {
        let mutableCart = {...cart};
        mutableCart.size++
        mutableCart.total += 1000
        mutableCart.items[hero.id]?
        mutableCart.items[hero.id].quantity++ :
        mutableCart.items[hero.id] = {'obj': hero, 'quantity': 1}
        console.log(mutableCart)
        setCart(mutableCart);

    }


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h1>MARVEL Team Builder</h1>
            </div>
            <div className='row justify-content-center'>
                {typeof heroes === 'object' && heroes ? heroes.map((hero,index) => {
                    return <div key={index} className="card mr-5 mt-3" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src={hero.image} alt="Card image cap" />
                        <div className="card-body">
                            <h2 className="card-title">{hero.name}</h2>
                            <p className="card-text">{hero.description}</p>
                            <h4 className="card-text align-text-center">Price:$1000.00</h4>
                            <button onClick = {()=>{addHero(hero)}} href="#" className="btn btn-primary textalign-center">Add to Team</button>
                        </div>
                    </div>
                })

                    : 'Fetching Heroes'}
            </div>
        </div>


    )
}

export default Home