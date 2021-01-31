import React from 'react';
import styles from '../styles/SquaresSass.module.scss'

interface ISquaresSassProps {


}

interface ISquaresSassState {


}

export class SquaresSass extends React.Component<ISquaresSassProps, ISquaresSassState>
{
    public render() {

        return (<div className={styles.squaresContainer}>
            <div className={styles.outer}>
                <div className={styles.inner1}></div>
                <div className={styles.inner2}></div>
                <div className={styles.inner3}></div>
            </div>
        </div>)
    }

}