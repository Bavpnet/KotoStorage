import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Navbar } from '../components/Navbar'

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
