import { Content, RootLayout, Sidebar } from '@/components'

function App(): JSX.Element {
  return (
    <RootLayout className="">
      <Sidebar className="p-2">Siderbar</Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
    </RootLayout>
  )
}

export default App
