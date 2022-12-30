import Hd from './component/Hd';
import Work from './component/Work';
function App() { 
  return (
    <div className="App">
   {/* 부트스트랩의 그리드 시스템을 활용해서 빠른 제작구현 */}
      <Hd bgColor='bg-white'></Hd>
      <div id="portfolio" className='pt-5'>
        <h2 className='mt-5 pt-5 text-center'>나의 작품~</h2>
        <Work contentId="react" title="리액트"></Work>
        <Work contentId="ec" title="쇼핑몰"></Work>
      </div>
      
    </div>
  );
}

export default App;
