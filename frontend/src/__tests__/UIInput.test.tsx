import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { UIInput } from '../components/ui/UIInput'

describe('UIInput', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UIInput />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with placeholder', () => {
    const placeholder = 'test'
    const tree = renderer.create(<UIInput placeholder={placeholder} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with value', () => {
    const { getByRole } = render(<UIInput />)
    const input = getByRole('textbox')

    expect(input).toHaveValue('')

    // simulate user typing
    fireEvent.change(input, { target: { value: 'test' } })

    expect(input).toHaveValue('test')

    // simulate user deleting
    fireEvent.change(input, { target: { value: '' } })

    expect(input).toHaveValue('')
  })
})
