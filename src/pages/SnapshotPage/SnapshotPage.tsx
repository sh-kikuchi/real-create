import vueLogo from '../../assets/images/logo.png';
import '../SnapshotPage/SnapshotPage.css';
import SnapshotPanel from '../../components/SnapshotPanel/SnapshotPanel';

interface photo {
  title: string;
  detail: string;
  imgPath: string; 
}

const photos:photo[]= [
  {title: 'index-', detail: 'img-detail-01', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-02', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-03', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-04', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-05', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-06', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-07', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-08', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-09', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-10', imgPath: vueLogo},
  {title: 'index-', detail: 'img-detail-11', imgPath: vueLogo}
]

function SnapshotPage() {
  return (
    <div className="app">
      <div className="container">
        <h2>Real Create</h2>
        <div className="flex-area">
          {photos.map((photo, index) => (
            <SnapshotPanel prmPhoto = {photo} indexNum={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SnapshotPage;
