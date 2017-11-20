import{expect} from 'chai'
import  {jsdom} from 'jsdom'
import  fs from 'fs'

describe('start testing', ()=>{
  it('test suit', ()=>{
    expect(true).to.equals(true);
  })

  it('should have hello node world', (done)=>{
      const index = fs.readFileSync('src/index.html','utf-8');
      jsdom.env(index, function(err, window){
        const h1=window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('hello node world');
        done();
        window.close();
      })

  })
})
