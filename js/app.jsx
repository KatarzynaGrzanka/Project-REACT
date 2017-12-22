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
                    <div className="abouteMePresentation">
                        <img src="../image/moje.png"></img>
                        <div className="me">My name is Kasia, I am 26 and I live in Wroclaw. I have been interested in programing since I was a tinager. About a year ago I have decided to study programing. Since then I have been learning web development by myself. On November I started cours in Coders Lab where I have lerned new programing languages and programing libraries. Now I finished the cours and I am ready to find my first job as a Front End Developer.
                        </div>
                    </div>    
                </article>
    }
}


class Skills extends React.Component{
    render(){
        return <section>
                    <div className="first">
                        <img src="../image/csshtml.jpeg"></img>
                        <img src="../image/sass.png"></img>
                        <img src="../image/js.png"></img>
                        <img src="../image/jquery.png"></img>
                    </div>    
                    <div className="second">
                        <img src="../image/react.png"></img>
                        <img src="../image/gulp.png"></img>
                        <img src="../image/git.png"></img>
                        <img src="../image/bootstrap.png"></img>
                    </div>
                </section>
    }
}


class Projects extends React.Component{
    render(){
        return  <section className="projects">
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
    }
}


class Footer extends React.Component{
    render(){
        return <footer>
            <h1>"Najważniejszym aspektem kreatywności jest pozbycie się lęku przed porażką" (E. Land)</h1>
                </footer>
    }
}

class DownLine extends React.Component{
    render(){
        return <div className="icons">
                    <span>Copyright © 2017 Katarzyna Grzanka. All rights reserved.</span>
                    <ul>
                        <li><img src="../image/email.png"></img></li>
                        <li><img src="../image/github.png"></img></li>
                        <li><img src="../image/Linkedin.png"></img></li>   
                    </ul>
        
                </div>
    }
}

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button title='Back to top' className='scroll' 
               onClick={ () => { this.scrollToTop(); }}>
                <span className='arrow-up'></span>
              </button>;
   }
} 


class Main extends React.Component{
    render(){
        return <div>
                    <Header/>
                    <AllAbout/>
                    <Skills/>
                    <Projects/>
                    <ScrollButton/>
                    <Footer/>
                    <DownLine/>
               </div>           
    }
}
                    
                        
class App extends React.Component {
  render(){
    return <Main/>
  }
}

document.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(
	<App/>,	
	document.getElementById("app"))	

})
