import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function Home() {
    return (
 <div className='bg-blue-500'>
		 <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      <h1 className={styles.title}>Home page</h1>
      <p  className="text-yellow-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed amet reprehenderit hic earum rerum, accusamus.
		</p>
		<p  className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed amet reprehenderit hic earum rerum, accusamus.
		</p>
		<Link href='/ninjas'><a className={`${styles.btn} ${styles.btn__red}`}>See all listing</a></Link>
		
     </div>
    )
}