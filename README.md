
# Reactの環境構築

### 1. Node.jsをインストール
- LTS版＝安定版（推奨）
- Current版は最新だけど、多少不安定。

### 2. yarnをインストール
- `npm install --global yarn`
  
- VS CodeでYarnが使えるようにするために・・・(windows)<br>
  windows マーク > "powershell" で検索 > "管理者として実行する"

  ```
  Set-ExecutionPolicy RemoteSigned 
  ```

### 3. creat-react-appのインストール
- `yarn global add create-react-app`

### 4. Reactのアプリ作成(TS Ver)
- プロジェクトディレクトリで下記のコマンドをたたく。
  ```cmd
  yarn create react-app ●●● --template typescript
  ```
  ※●●●は任意のアプリ名

### 5. アプリ起動
- `yarn start`
アプリを開発モードで実行します。
編集を加えるとページが自動でリロードされます。

- `yarn test`
インタラクティブなウォッチモードでテストランナーを起動します。
詳細については、テストの実行のセクションを参照してください。

- `yarn run build`
アプリを本番用に build フォルダにビルドします。


### 6.　ルーティング例
```ts
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SnapshotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

### 参考文献
- [React 開発環境構築](https://qiita.com/rspmharada7645/items/25c496aee87973bcc7a5)
- [windows 端末で yarn が実行できない](https://zenn.dev/nbstsh/scraps/a24621106b5cfd)
