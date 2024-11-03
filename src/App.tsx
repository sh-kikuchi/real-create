// import React from 'react';
import logo from './logo.svg';
import './App.css';
import SnapshotPanel from './components/SnapshotPanel/SnapshotPanel';

interface photo {
  title: string;
  detail: string;
  imgPath: string; 
}

const photos:photo[]= [
  {title: 'index-', detail: 'img-detail-01', imgPath: logo},
  {title: 'index-', detail: 'img-detail-02', imgPath: logo},
  {title: 'index-', detail: 'img-detail-03', imgPath: logo},
  {title: 'index-', detail: 'img-detail-04', imgPath: logo},
  {title: 'index-', detail: 'img-detail-05', imgPath: logo},
  {title: 'index-', detail: 'img-detail-06', imgPath: logo},
  {title: 'index-', detail: 'img-detail-07', imgPath: logo},
  {title: 'index-', detail: 'img-detail-08', imgPath: logo},
  {title: 'index-', detail: 'img-detail-09', imgPath: logo},
  {title: 'index-', detail: 'img-detail-10', imgPath: logo},
  {title: 'index-', detail: 'img-detail-11', imgPath: logo}
]


function App() {
  return (
    <div className="app">
      <div className="container">
        <h2>Real Create</h2>
        <div className="flex-area">
          {photos.map((photo, index) => (
            // ▼ 直書きVer
            <div className="card">
              <h4 className="card-title" >{photo.title}{index}</h4>
              <img src={photo.imgPath} className="card-img" alt="logo" />
              <p className='card-detail'>{photo.detail}</p>              
            </div>
            // ▼ コンポーネントVer(再利用)
            // <SnapshotPanel photo={photo} indexNum={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
