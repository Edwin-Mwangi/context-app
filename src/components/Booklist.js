import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
    render() { 
        return(
            //2nd way of consuming data(used in both func&class components)
            //Consumer has func that takes context as arg
            //there are Provider and Consumer tags(ha ha)
            <ThemeContext.Consumer>{ (context) => {
                const { isLightTheme, dark, light } = context;
                const theme = isLightTheme? light: dark;
                return (
                    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                        <ul>
                            <li style={{ background: theme.ui }}>The way of Kings</li>
                            <li style={{ background: theme.ui }}>The name of the wind</li>
                            <li style={{ background: theme.ui }}>There was a Country</li>
                        </ul> 
                    </div>
                );
            }}
            </ThemeContext.Consumer>
        )
    }
}
 
export default Booklist;

