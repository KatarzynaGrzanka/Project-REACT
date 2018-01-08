import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component{
    render(){
        return <header>
                    <nav>
                        <ul>
                            <li><a href="#about">Aboute</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>    
                    </nav>
                </header>
    }
}

class AllAbout extends React.Component{
    render(){
        return <article id="about">
                    <div className="picture"></div>
                    <div className="me">I am a graduate of the JavaScript developer: REACT course at Coders Lab, which prepared me for the position of Junior Frontend Developer. I became interested in programming about a year ago. By learning and creating my first projects, I decided to develop in this direction. In IT I am fascinated by the pace of development and how technology has become an inseparable element of our lives. As a programmer, I want to develop my skills and learn new technologies to be better and better.
                    </div>    
                </article>
    }
}


class Skills extends React.Component{
    render(){
        return <section id="skills">
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
        return  <section id="projects">
                    <div className="minotaur"></div>
                    <div className="chair"></div>
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
        return <div className="icons" id="contact">
                    <span>Copyright © 2017 Katarzyna Grzanka. All rights reserved.</span>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/katarzynagrzanka/" target="_blank"><img src="../image/email.png"></img></a></li>
                        <li><a href="https://github.com/KatarzynaGrzanka/" target="_blank"><img src="../image/github.png"></img></a></li>
                        <li><a href="https://www.linkedin.com/in/katarzynagrzanka/" target="_blank"><img src="../image/Linkedin.png"></img></a></li>   
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
      return <button title='Back to top' className='scroll' onClick={ () => { this.scrollToTop(); }}>&#8679;</button>;
   }
} 


class Main extends React.Component{
    render(){
        return <div>
                    <Header/>
                    <AllAbout/>
                    <Skills/>
                    <ScrollButton/>
                    <Footer/>
                    <Projects/>
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
