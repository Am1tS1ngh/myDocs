/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-screen flex justify-center p-5'>
        <section className="page_404 fixed left-1/3 w-full">
	<div className="container w-1/3">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">Look like you're lost</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<Link to="/" className="link_404">Go to Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default NotFound