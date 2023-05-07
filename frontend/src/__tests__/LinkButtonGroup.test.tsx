import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { LinkButtonGroup } from '../components/LinkButtonGroup'

describe('LinkButtonGroup', () => {
  it('renders correctly', () => {
    const toggleMenu = jest.fn()
    const tree = renderer
      .create(
        <MemoryRouter>
          <LinkButtonGroup isMenuOpen={false} toggleMenu={toggleMenu} />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
