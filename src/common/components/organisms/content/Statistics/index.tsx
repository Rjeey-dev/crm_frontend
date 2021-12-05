import React from 'react';
import Span from "atoms/Span";

export default function Statistics(props: any) {
    if (!props.statistics) {
        return '';
    }

    return <div id='statistics'>
        <div className='item'>
            <Span>On me</Span>
            <div className='list'>
                <div className='todo item'>
                    <Span classes='title'>Todo:</Span>
                    <Span classes='value'>{props.statistics.my_tasks[0].number}</Span>
                </div>
                <div className='doing item'>
                    <Span classes='title'>Doing:</Span>
                    <Span classes='value'>{props.statistics.my_tasks[1].number}</Span>
                </div>
                <div className='done item'>
                    <Span classes='title'>Done:</Span>
                    <Span classes='value'>{props.statistics.my_tasks[2].number}</Span>
                </div>
            </div>
        </div>
        <div className='item'>
            <Span>Created by me</Span>
            <div className='list'>
                <div className='todo item'>
                    <Span classes='title'>Todo:</Span>
                    <Span classes='value'>{props.statistics.created_tasks[0].number}</Span>
                </div>
                <div className='doing item'>
                    <Span classes='title'>Doing:</Span>
                    <Span classes='value'>{props.statistics.created_tasks[1].number}</Span>
                </div>
                <div className='done item'>
                    <Span classes='title'>Done:</Span>
                    <Span classes='value'>{props.statistics.created_tasks[2].number}</Span>
                </div>
            </div>
        </div>
    </div>;
}