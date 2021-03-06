import React from 'react'
import Word from '../Word/Word'
import './Verse.css'


const Verse = (props) => {
  const { animal, index, custom, deleteAnimal } = props;
  
  const classes = ['Verse']
  if(custom) {
    classes.push('Verse-custom')
  }

  return(
    <div className={classes.join(' ')}>
      <span className='song-line'>Old MacDonald had a farm, E-I-E-I-O,</span>
      <span className='song-line'>And on his farm he had a <Word type='species' animal={animal} custom change={props.change} index={index}/>, E-I-E-I-O.</span>
      <span className='song-line'>With a <Word type='sound' animal={animal} custom change={props.change} index={index}/> {animal.sound} here and a {animal.sound} there,</span>
      <span className='song-line'>Here a {animal.sound}, there a  {animal.sound}, ev’rywhere a  {animal.sound}.</span>
      <span className='song-line'>Old MacDonald had a farm, E-I-E-I-O</span>
      {custom ?
        <div className='delete' onClick={deleteAnimal}>
          <svg className='edit-icon' id='delete-icon' viewBox='0 0 22 22'>
            <circle className="circle" cx="11" cy="11" r="10"/>
            <line className="line line-1" x1="6" y1="11" x2="16" y2="11"/>
            <line className="line line-2" x1="6" y1="11" x2="16" y2="11"/>
          </svg>
        </div>
        : null
      }
    </div>
  )
};

export default Verse;