import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { UIAnchor } from '../components/ui/UIAnchor'

describe('UIAnchor', () => {
  it('renders correctly', () => {
    const text = 'test'
    const tree = renderer.create(<UIAnchor text={text} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with href', () => {
    const text = 'test'
    const href = 'https://www.google.com/'
    const { getByRole } = render(<UIAnchor text={text} href={href} />)

    const anchor = getByRole('link')

    expect(anchor).toHaveTextContent(text)
    expect(anchor).toHaveAttribute('href', href)
  })
})
