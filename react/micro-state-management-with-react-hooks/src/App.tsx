import './App.css'

import { ColorExample } from './components/ColorExample'
import { CounterExample } from './components/CounterExample'
import { CustomHooksAndProviderComponentsExample } from './components/CustomHooksAndProviderComponentsExample'
import { GlobalContextWithMultipleContextsExample } from './components/GlobalContextWithMultipleContextsExample'
import { GlobalCounterContextExample } from './components/GlobalCounterContextExample'
import { FactoryPatternWithCustomHookExample } from './components/FactoryPatternWithCustomHookExample'
import { GlobalStoreExample } from './components/GlobalStoreExample'

function App() {
  return (
    <div className="app">
      <h1>Context Examples</h1>
      <ColorExample />
      <CounterExample />
      <GlobalCounterContextExample />
      <GlobalContextWithMultipleContextsExample />
      <CustomHooksAndProviderComponentsExample />
      <FactoryPatternWithCustomHookExample />
      <GlobalStoreExample />
    </div>
  )
}

export default App
