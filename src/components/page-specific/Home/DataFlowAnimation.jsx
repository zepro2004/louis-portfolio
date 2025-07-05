export default function DataFlowAnimation() {
  return (
    <div className="data-flow-container">
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-nodes" style={{ display: 'flex' }}>
        <div className="data-node">💻</div>
        <div className="data-node">⚡</div>
        <div className="data-node">🚀</div>
      </div>
    </div>
  );
}
