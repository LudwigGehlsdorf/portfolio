import Transition from '../../components/transition/transition'
import Navbar from '../../components/nav/navbar'

import './hero.css'

const Hero = () => {
    return (
        <main className='main'>
            <Navbar></Navbar>
            <article>
                <div className='introduction'>
                    <h3 className='pm'>Hello, my name is</h3>
                    <h1 className='introduction-header pm'>LUDWIG GEHLSDORF</h1>
                    <h2 className='pm'>Studying M.Sc.Eng. Computer Science and Engineering</h2>
                    <p className='introduction-paragraph pm'>I'm engineering student at Lunds University doing a masters in computer science. I love diving in to new topics within programming and web development and over the course of 5 years I've broathened my knowledge through these projects.</p>
                </div>
            </article>
        </main>
    )
}

export default Hero