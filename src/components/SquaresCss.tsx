import React from 'react';
import '../styles/SquaresCss.css'

interface ISquaresCssProps {


}

interface ISquaresCssState {


}

export class SquaresCss extends React.Component<ISquaresCssProps, ISquaresCssState>
{


    public render() {

        return (<div className='squaresContainer'>
            <div className='outer'>
                <div className='inner1'></div>
                <div className='inner2'></div>
                <div className='inner3'></div>
            </div>
        </div>)
    }

}