import React from 'react'
import Word from '../Word/Word'
import './Verse.css'

import Del from '../../img/del'

const Verse = (props) => {
  const { animal, active } = props;

  return(
    <div className='Verse'>
      <span className='song-line'>Old MacDonald had a farm, E-I-E-I-O,</span>
      <span className='song-line'>And on his farm he had a <Word type='species' animal={animal} active={active} change={props.change}/>, E-I-E-I-O.</span>
      <span className='song-line'>With a <Word type='sound' animal={animal} active={active} change={props.change}/> {animal.sound} here and a {animal.sound} there,</span>
      <span className='song-line'>Here a {animal.sound}, there a  {animal.sound}, ev’rywhere a  {animal.sound}.</span>
      <span className='song-line'>Old MacDonald had a farm, E-I-E-I-O</span>
      <div className='delete'>
        <svg id='delShape' viewBox='0 0 22 22'>
          <circle class="circle" cx="11" cy="11" r="10"/>
          <line class="line line-1" x1="6" y1="11" x2="16" y2="11"/>
          <line class="line line-2" x1="6" y1="11" x2="16" y2="11"/>
        </svg>
      </div>
    </div>
  )
};

export default Verse;