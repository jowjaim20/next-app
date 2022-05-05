
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const NotFound=()=>{
	const route= useRouter();
	useEffect(()=>{
		setTimeout(()=> 
			route.push('/')
		, 6000);
	},[])
	return(
		<div className="not-found">
			<h1>Page Not Found </h1>
			<p>Go back to <Link href="/"><a>Homepage</a></Link></p>
		</div>
		)
}
export default NotFound;