import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({adapter: new Adapter})

describe('Testing ',()=>{
  it('t',()=>{
    console.log("this is the first test");
    
  })
})