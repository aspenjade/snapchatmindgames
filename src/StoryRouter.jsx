import BaliGirlStory from './stories/BaliGirlStory';
import LaNewGirlStory from './stories/LaNewGirlStory';

function StoryRouter({ character }) {
  switch (character.name) {
    case 'la_new_girl':
      return <LaNewGirlStory />;
    case 'travel_babe':
      return <BaliGirlStory />;
    default:
      return <div>Unknown character</div>;
  }
}

export default StoryRouter;
