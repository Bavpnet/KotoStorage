import renderer from 'react-test-renderer'
import { BackgroundCats } from '../components/BackgroundCats'

describe('BackgroundCats', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BackgroundCats />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
