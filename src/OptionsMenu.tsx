import './options-menu.css'

const OptionsMenu = () => {
  const changeModel = (model: string) => {
    const node: any = document.getElementById('shop-in-3d-frame');
    console.log(`sending message: [change-model, ${model}]`)
    return node && node.contentWindow.postMessage({ type: 'change-model', value: model }, '*');
  }

  return (
    <div className="options-menu">
      <ul>
        <li className="menu-option" onClick={() => { changeModel('cylinder') }}>cylinder</li>
        <li className="menu-option" onClick={() => { changeModel('cube') }}>cube</li>
        <li className="menu-option">device 3</li>
        <li className="menu-option">device 4</li>
        <li className="menu-option">device 5</li>
      </ul>
    </div>
  )
}

export default OptionsMenu