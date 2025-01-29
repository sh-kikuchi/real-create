//CSSインポート
import './SnapshotPanel.css';

interface photo {
  title: string;
  detail: string;
  imgPath: string; 
}

//コンポーネント用の関数を用意する
function SnapshotPanel(props: { prmPhoto: photo; indexNum: number}) {
  return (
    <div className="snapshot-panel">
      <h4 className="snapshot-panel-title">{`${props.prmPhoto.title} ${props.indexNum}`}</h4>
      <img src={props.prmPhoto.imgPath} className="snapshot-panel-img" alt="logo" />
      <p className='snapshot-panel-detail'>{props.prmPhoto.detail}</p>
    </div>
  );
}

//外部ファイルで読み込めるようにする
export default SnapshotPanel;
