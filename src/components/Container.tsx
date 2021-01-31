import React from 'react';
import '../styles/Container.css'
import { SquaresCss } from './SquaresCss';
import { SquaresSass } from './SquaresSass';


interface IContainerState {
    displaySass: boolean;
}

export class Container extends React.Component<{}, IContainerState>
{

    constructor(props: any) {
        super(props);

        this.state = {
            displaySass: false
        }
    }


    public render() {

        return (
            <div className='container'>
                <button className='buttonSwitch' onClick={() => this.setState({ displaySass: !this.state.displaySass })}>Switch to {this.state.displaySass ? "Css" : "Sass"}</button>
                <div className='squaresContainer'>
                    {this.state.displaySass ? <SquaresSass/> : <SquaresCss />}
                </div>
            </div>)
    }

}