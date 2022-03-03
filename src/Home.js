import React from 'react'
import './css/Home.css'
import Product from './Product'
import Carousel from 'react-material-ui-carousel'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <Carousel>
                    <img className='home__image' src="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew.png" alt="banner" />
                    <img className='home__image' src="https://miro.medium.com/max/1018/1*iAu65xDmvpVdBJgps6EDEw.png" alt="banner" />
                    <img className='home__image' src="https://www.enpass.io/wp-content/uploads/2019/12/Shopping-online-blog-dimension.png" alt="banner" />


                </Carousel>



                <div className="home__row">
                    <Product title="Charley and the chocolate factory"
                        id="789"
                        image="https://picture.readfrom.net/img/roald-dahl/charlie_and_the_chocolate_factory.jpg"
                        price={25.99}
                        rating={4} />
                    <Product title="Charley and the chocolate factory"
                        id="987"
                        image="https://picture.readfrom.net/img/roald-dahl/charlie_and_the_chocolate_factory.jpg"
                        price={25.99}
                        rating={4} />
                    <Product title="Charley and the chocolate factory"
                        id="654"
                        image="https://picture.readfrom.net/img/roald-dahl/charlie_and_the_chocolate_factory.jpg"
                        price={25.99}
                        rating={4} />
                </div>

                <div className="home__row">

                    <Product title="Harry Potter"
                        id="123"
                        price={29.99}
                        image="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
                        rating={5} />
                    <Product title="Harry Potter"
                        id="456"
                        price={29.99}
                        image="https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
                        rating={3} />
                </div>
                <div className="home__row">
                    <Product image="https://media.titanbooks.com/catalog/products/MA_ExtinctionKey.jpg"
                        id="321"
                        price={19.99}
                        rating={5}
                        title="Avengers" />

                </div>
            </div>

        </div>
    )
}

export default Home
