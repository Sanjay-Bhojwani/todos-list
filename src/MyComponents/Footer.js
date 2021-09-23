import React from 'react'

export const Footer = () => {
    let myStyle = {
        position: "fixed",
   left: "0",
   bottom: "0",
   width: "100%",
   
    }
    return (
        <footer className="bg-dark text-light pt-3" style={myStyle}>
            <p className="text-center   ">
            Copyright &copy; sanjay-todos-list.netlify.app
            </p>
            
        </footer>
    )
}
