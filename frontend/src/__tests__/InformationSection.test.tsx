import renderer from 'react-test-renderer'
import { InformationSection } from '../components/InformationSection'

describe('InformationSection', () => {
  it('renders correctly', () => {
    const title = 'Information'
    const p1 = 'This is the first paragraph.'
    const p2 = 'This is the second paragraph.'
    const p3 = 'This is the third paragraph.'
    const tree = renderer
      .create(
        <InformationSection
          title={title}
          p1={p1}
          p2={p2}
          p3={p3}
          alignment={'left'}
          breakLine={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
