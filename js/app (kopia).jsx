import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component{
    render(){
        return <header>
                    
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Projects</li>
                            <li>Contact</li>
                            </ul>    
                    </nav>
                </header>
    }
}


class AllAbout extends React.Component{
    render(){
        return <article>
                    <div>About Me</div>
                </article>
    }
}


class Skills extends React.Component{
    render(){
        return <section>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>sass</li>
                        <li>js</li>
                        <li>react</li>
                        <li>gulp</li>
                        <li>jquery</li>
                        <li>bootstrap</li>
                        <li>git</li>
                    </ul>                    
                </section>
    }
}


class Projects extends React.Component{
    render(){
        return  <section className="proiects">
                    <div>My projects</div>
                </section>
    }
}


class Footer extends React.Component{
    render(){
        return <footer>
                    <h3>Coontsct</h3>
                </footer>
    }
}


class Main extends React.Component{
    render(){
        return <div>
                    <Header/>
                    <AllAbout/>
                    <Skills/>
                    <Projects/>
                    <Footer/>
               </div>           
    }
}
                        
                        
class App extends React.Component {
  render(){
    return <Main/>
  }
}
        

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
