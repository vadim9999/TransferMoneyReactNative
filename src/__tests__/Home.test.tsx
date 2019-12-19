
// import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
// import Enzyme, {mount} from 'enzyme'
import Home from '../Home'
import renderer from 'react-test-renderer';
// Enzyme.configure({adapter: new Adapter})
import {render, fireEvent} from 'react-native-testing-library'

describe('Testing ',()=>{

  let wrapper;

  beforeEach(()=>{

    // wrapper = mount(<Home />)
  })

  it('testing button on click', ()=>{
    const {getByText} = render(<Home />)
    // const button = getByText('Далі')

    // fireEvent.press(button)
    // console.log(button);
  })

  it.skip('test renders correctly',()=>{
    
    
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot()
    
    console.log("this is the first test");
    
  })
})