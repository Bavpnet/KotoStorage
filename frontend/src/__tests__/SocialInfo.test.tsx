import renderer from 'react-test-renderer'
import { SocialInfo } from '../components/SocialInfo'

describe('SocialInfo', () => {
  it('renders correctly footer', () => {
    const tree = renderer.create(<SocialInfo isFooterInfo={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly navbar', () => {
    const tree = renderer.create(<SocialInfo isFooterInfo={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
