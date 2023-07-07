class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    //Handle button press
    handleButtonClick(event) {
        const id = event.target.innerText
        document.getElementById(id).play();
    }

    //Render App
    render() {
        return(
            <div id="main">
                <table>
                    <tr>
                        <td className="drum-pad" id="heater-1">
                            <button type="button" onClick={this.handleButtonClick}>Q</button>
                            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                        </td>
                        <td className="drum-pad" id="heater-2">
                            <button type="button" onClick={this.handleButtonClick}>W</button>
                            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                        </td>
                        <td className="drum-pad" id="heater-3">
                            <button type="button" onClick={this.handleButtonClick}>E</button>
                            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                        </td>
                    </tr>
                    <tr>
                        <td className="drum-pad" id="heater-4">
                            <button type="button" onClick={this.handleButtonClick}>A</button>
                            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                        </td>
                        <td className="drum-pad" id="clap">
                            <button type="button" onClick={this.handleButtonClick}>S</button>
                            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                        </td>
                        <td className="drum-pad" id="open-hh">
                            <button type="button" onClick={this.handleButtonClick}>D</button>
                            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                        </td>
                    </tr>
                    <tr>
                        <td className="drum-pad" id="kick-n-hat">
                            <button type="button" onClick={this.handleButtonClick}>Z</button>
                            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                            </td>
                        <td className="drum-pad" id="kick">
                            <button type="button" onClick={this.handleButtonClick}>X</button>
                            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                        </td>
                        <td className="drum-pad" id="closed-hh">
                            <button type="button" onClick={this.handleButtonClick}>C</button>
                            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                        </td>
                    </tr>
                </table>
                <div id="display"></div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('drum-machine'));