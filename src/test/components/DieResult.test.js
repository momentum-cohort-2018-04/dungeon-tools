/* globals it, test, expect */

import React from 'react'
import ReactDOM from 'react-dom'
import DieResult from '../../components/DieResult'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

// Smoke test

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DieResult sides={6} roll={4} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// Snapshot test

test('renders to a snapshot', () => {
  const component = renderer.create(
    <DieResult sides={6} roll={4} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// Enzyme test
test('renders an image and shows the result', () => {
  const wrapper = shallow(<DieResult sides={6} roll={4} />)
  expect(wrapper.find('img')).toHaveLength(1)
  expect(wrapper.text()).toContain('4')
})
