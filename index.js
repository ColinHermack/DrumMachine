class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.displaySoundName = this.displaySoundName.bind(this);
    }

    //Add event listener for key press
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    //Display sound
    displaySoundName(id) {
        let sound = '';

        switch (id){
            case 'Q':
                sound = 'Heater 1';
                break;
            case 'W':
                sound = 'Heater 2';
                break;
            case 'E':
                sound = 'Heater 3';
                break;
            case 'A':
                sound = 'Heater 4';
                break;
            case 'S':
                sound = 'Clap';
                break;
            case 'D':
                sound = 'Open High-Hat';
                break;
            case 'Z':
                sound = 'Kick N\' Hat'
                break;
            case 'X':
                sound = 'Kick';
                break;
            case 'C':
                sound = 'Closed High-Hat'
                break;
            default:
                sound = '';
        }

        this.setState({
            currentSound: sound
        })
    }

    //Handle button press
    handleButtonClick(event) {
        const id = event.target.innerText;
        document.getElementById(id).play();
        this.displaySoundName(event.target.innerText);
    }

    //Handle key press
    handleKeyDown(event) {
        const key = event.key.toUpperCase();
        if (key === 'Q' || 
            key === 'W' || 
            key === 'E' || 
            key === 'A' || 
            key === 'S' ||
            key === 'D' || 
            key === 'Z' || 
            key === 'X' || 
            key === 'C') {
            document.getElementById(key).play();
            this.displaySoundName(key);
            console.log('test');
        }
        
    }


    //Render App
    render() {
        return(
            <div id="main">
                <table>
                    <tr>
                        <td className="drum-pad" id="heater-1">
                            <button type="button" onClick={this.handleButtonClick}>
                                Q
                                <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                            </button>
                        </td>
                        <td className="drum-pad" id="heater-2">
                            <button type="button" onClick={this.handleButtonClick}>
                                <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                                W
                            </button>
                        </td>
                        <td className="drum-pad" id="heater-3">
                            <button type="button" onClick={this.handleButtonClick}>
                                E
                                <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="drum-pad" id="heater-4">
                            <button type="button" onClick={this.handleButtonClick}>
                                A
                                <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                            </button>
                        </td>
                        <td className="drum-pad" id="clap">
                            <button type="button" onClick={this.handleButtonClick}>
                            S
                            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                            </button>
                        </td>
                        <td className="drum-pad" id="open-hh">
                            <button type="button" onClick={this.handleButtonClick}>
                                D
                                <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="drum-pad" id="kick-n-hat">
                            <button type="button" onClick={this.handleButtonClick}>
                                Z
                                <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                            </button>
                        </td>
                        <td className="drum-pad" id="kick">
                            <button type="button" onClick={this.handleButtonClick}>
                                X
                                <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                            </button>
                        </td>
                        <td className="drum-pad" id="closed-hh">
                            <button type="button" onClick={this.handleButtonClick}>
                                C
                                <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                            </button>
                        </td>
                    </tr>
                </table>
                <div id="display">{this.state.currentSound}</div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('drum-machine'));
