import renderer from 'react-test-renderer'
import { GalleryGrid } from '../components/GalleryGrid'

describe('GalleryGrid', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GalleryGrid />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
