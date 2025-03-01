import './App.css'
import BannerCardItem from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div className="bannercard-container">
    <div className="bannercard">
      <ul className="bannercard-list">
        {bannerCardsList.map(eachCard => (
          <BannerCardItem bannerDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
