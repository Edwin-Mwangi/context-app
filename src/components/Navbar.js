import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    //2ways of consuming data---1st way(check Booklist for 2nd way)
    //1st way only used in class components
    //ThemeContext vals gotten from provider which wraps the Navbar(App.js)
    //contextType is react keyword to define where to consume vals...related to context
    static contextType = ThemeContext;

    render() { 
        //logs out shared context vals...check console
        //context is keyword to get vals(related to contextType)
        console.log(this.context)
        const { isLightTheme, dark, light } = this.context;
        //ternary op...with IsLightTheme(Bool) defining themetype
        const theme = isLightTheme? light: dark; 
        return (
            //The 2nd way used to consume another context
            <AuthContext.Consumer>{ (authContext) => {
                const { isAuthenticated, toggleAuth } = authContext;
                console.log(authContext)
                return(
                    //the styles added based on isLightTheme(Bool)
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <div onClick={ toggleAuth}>{ isAuthenticated? 'Log In': 'Logout'}</div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}
            </AuthContext.Consumer> 
        );
    }
}
 
export default Navbar;
