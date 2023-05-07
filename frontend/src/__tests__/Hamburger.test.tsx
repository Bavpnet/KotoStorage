import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { Hamburger } from '../components/ui/Hamburger'

describe('Hamburger', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Hamburger isMenuOpen={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('change on click', () => {
    const { getByRole } = render(<Hamburger isMenuOpen={true} />)
    const hamburger = getByRole('button')

    // simulate click
    hamburger.click()

    expect(hamburger).toHaveClass('active')
  })
})
