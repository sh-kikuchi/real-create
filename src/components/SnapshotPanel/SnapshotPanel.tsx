import './SnapshotPanel.css';

interface photo {
  title: string;
  detail: string;
  imgPath: string; 
}

function SnapshotPanel(props: { photo: photo; indexNum: number}) {
  return (
    <div className="snapshot-panel">
      <h4 className="snapshot-panel-title">{`${props.photo.title} ${props.indexNum}`}</h4>
      <img src={props.photo.imgPath} className="snapshot-panel-img" alt="logo" />
      <p className='snapshot-panel-detail'>{props.photo.detail}</p>
    </div>
  );
}

export default SnapshotPanel;
