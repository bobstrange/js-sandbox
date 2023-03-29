import './App.css'

import { ColorExample } from './components/ColorExample'
import { CounterExample } from './components/CounterExample'
import { CustomHooksAndProviderComponentsExample } from './components/CustomHooksAndProviderComponentsExample'
import { GlobalContextWithMultipleContextsExample } from './components/GlobalContextWithMultipleContextsExample'
import { GlobalCounterContextExample } from './components/GlobalCounterContextExample'

function App() {
  return (
    <div className="app">
      <h1>Context Examples</h1>
      <ColorExample />
      <CounterExample />
      <GlobalCounterContextExample />
      <GlobalContextWithMultipleContextsExample />
      <CustomHooksAndProviderComponentsExample />
    </div>
  )
}

export default App
