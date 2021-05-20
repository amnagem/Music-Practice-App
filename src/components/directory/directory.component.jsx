import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Tracker',
          imageUrl: 'http://collections.nmmusd.org/Violins/Amati3423/3423HAmatiViolinSoundholesBlackLG.jpg',
          id: 1,
          linkUrl: 'tracker'
        },
        {
          title: 'Library',
          imageUrl: 'https://i.pinimg.com/originals/8d/de/f1/8ddef1dea4edd6df117d5e8dffc565f6.jpg',
          id: 2,
          linkUrl: 'library'
        },
        {
          title: 'Graph',
          imageUrl: 'https://necmusic.edu/sites/default/files/styles/small_landscape/public/2017-01/Inline4x1_WoodwindKeysABS_2395.jpg?itok=WLdMZjqb',
          id: 3,
          linkUrl: 'graph'
        },
        {
          title: 'Log',
          imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/old-piano-keys-jim-hughes.jpg',
          id: 4,
          linkUrl: ''

        },
        {
          title: 'Mindfulness',
          imageUrl: 'https://i.pinimg.com/originals/9f/96/d8/9f96d855d5f38a2f746c612f6aa0a884.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
