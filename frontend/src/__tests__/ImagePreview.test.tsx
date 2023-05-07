import { render } from '@testing-library/react'
import ReactTestingUtils from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { ImagePreview } from '../components/ImagePreview'

describe('ImagePreview', () => {
  it('renders correctly', () => {
    const setIsValidUrl = jest.fn()
    const url = 'https://http.cat/200'
    const tree = renderer
      .create(<ImagePreview url={url} setIsValidUrl={setIsValidUrl} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with invalid url', () => {
    const setIsValidUrl = jest.fn()
    const url = 'http://invalid.url'

    const { getByAltText } = render(
      <ImagePreview url={url} setIsValidUrl={setIsValidUrl} />
    )

    const image = getByAltText('preview') as HTMLImageElement

    ReactTestingUtils.Simulate.error(image)

    expect(image).toHaveAttribute('src', 'https://http.cat/404')
  })
})
