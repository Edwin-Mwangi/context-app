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
                    <div className="book-list" style={{ background: theme.ui, color: theme.syntax }}>
                        <li>The way of Kings</li>
                        <li>The name of the wind</li>
                    </div>
                );
            }}
            </ThemeContext.Consumer>
        )
    }
}
 
export default Booklist;