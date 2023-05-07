import renderer from 'react-test-renderer'
import { UIButton } from '../components/ui/UIButton'

describe('UIButton', () => {
  it('renders correctly', () => {
    const text = 'test'
    const tree = renderer.create(<UIButton text={text} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
